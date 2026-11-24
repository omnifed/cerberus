/**
 * Builds the Pagefind search index straight from the docs source content
 * instead of crawling Next's build output.
 *
 * Why: Pagefind's CLI indexes prerendered HTML on disk, and Next keeps moving
 * where (and whether) that HTML is written (e.g. 16.4 moved it from
 * `.next/server/app` into hashed `route-cache` folders). Indexing the Velite
 * output keeps search independent of Next's bundler, and because it runs
 * before `next build`, the index is a normal `public/` asset in every
 * environment (including `next dev`).
 *
 * Inputs:  .velite/docs.json (run `velite` first), generated/api-specs/*.md
 * Output:  public/pagefind/
 */

import { existsSync } from 'node:fs'
import { readFile, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as pagefind from 'pagefind'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkMdx from 'remark-mdx'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { SKIP, visit } from 'unist-util-visit'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DOCS_DATA = path.join(ROOT, '.velite/docs.json')
const API_SPECS_DIR = path.join(ROOT, 'generated/api-specs')
const OUTPUT = path.join(ROOT, 'public/pagefind')

/** JSX attributes whose string values are user-facing copy worth indexing. */
const TEXT_ATTRS = new Set(['title', 'heading', 'description', 'label'])
/** JSX attributes whose string values are code worth indexing. */
const CODE_ATTRS = new Set(['snippet'])

/**
 * `<ComponentApi spec="x" />` renders these h2s with explicit ids. Mirror them
 * so Pagefind sub-results deep-link to the right section.
 * @see components/component-api.tsx
 */
const API_SECTION_IDS = {
  Variants: 'variants-heading',
  Parts: 'api-heading',
  'Context API': 'context-api-heading',
  Accessibility: 'a11y-heading',
}

const mdParser = unified().use(remarkParse).use(remarkGfm)
const mdxParser = unified().use(remarkParse).use(remarkMdx).use(remarkGfm)

const toHtml = unified()
  .use(remarkRehype)
  // Same slugger the live pages use (velite.config.ts), so ids match.
  .use(rehypeSlug)
  .use(rehypeStringify)

async function main() {
  if (!existsSync(DOCS_DATA)) {
    throw new Error(`Missing ${DOCS_DATA}. Run \`velite\` before indexing.`)
  }

  const docs = JSON.parse(await readFile(DOCS_DATA, 'utf8'))
  const apiSpecCache = new Map()

  await rm(OUTPUT, { recursive: true, force: true })
  const { index, errors } = await pagefind.createIndex({})
  if (!index) throw new Error(errors.join('\n'))

  for (const doc of docs) {
    const tree = mdxParser.parse(doc.raw)
    await expandMdx(tree, apiSpecCache)
    const body = toHtml.stringify(await toHtml.run(tree))

    const { errors: fileErrors } = await index.addHTMLFile({
      url: `/docs/${doc.slugAsParams}`,
      content: renderPage(doc, body),
    })
    if (fileErrors.length) {
      throw new Error(`${doc.slugAsParams}: ${fileErrors.join('\n')}`)
    }
  }

  const { errors: writeErrors } = await index.writeFiles({ outputPath: OUTPUT })
  if (writeErrors.length) throw new Error(writeErrors.join('\n'))

  console.log(`Pagefind: indexed ${docs.length} docs -> public/pagefind`)
}

/** Mirrors the `data-pagefind-*` attributes on app/docs/[[...slug]]/page.tsx. */
function renderPage(doc, body) {
  return `<!doctype html><html lang="en"><head><title>${escapeHtml(doc.title)}</title></head><body>
<article data-pagefind-body data-pagefind-meta="category:${escapeHtml(doc.category)}" data-pagefind-filter="section:docs">
<h1 data-pagefind-meta="title">${escapeHtml(doc.title)}</h1>
${doc.description ? `<p>${escapeHtml(doc.description)}</p>` : ''}
${body}
</article>
</body></html>`
}

/**
 * Turns MDX-only nodes into plain Markdown so they survive mdast -> hast:
 * - `<ComponentApi spec>` is replaced with its generated API reference
 * - other JSX keeps its children plus any copy passed through attributes
 * - imports/exports and `{expressions}` are dropped
 */
async function expandMdx(tree, apiSpecCache) {
  const pending = []

  visit(tree, (node, i, parent) => {
    if (!parent || i === undefined) return

    switch (node.type) {
      case 'mdxjsEsm':
      case 'mdxFlowExpression':
      case 'mdxTextExpression':
        parent.children.splice(i, 1)
        return [SKIP, i]

      case 'mdxJsxFlowElement':
      case 'mdxJsxTextElement': {
        if (node.name === 'ComponentApi') {
          const spec = getAttr(node, 'spec')
          const placeholder = { type: 'html', value: '' }
          parent.children.splice(i, 1, placeholder)
          if (spec) {
            pending.push(
              loadApiSpec(spec, apiSpecCache).then((children) => {
                const at = parent.children.indexOf(placeholder)
                parent.children.splice(at, 1, ...children)
              }),
            )
          }
          return [SKIP, i + 1]
        }

        const inline = node.type === 'mdxJsxTextElement'
        const extra = []
        for (const attr of node.attributes ?? []) {
          if (typeof attr.value !== 'string' || !attr.value) continue
          if (TEXT_ATTRS.has(attr.name)) {
            const text = { type: 'text', value: attr.value }
            extra.push(inline ? text : { type: 'paragraph', children: [text] })
          } else if (CODE_ATTRS.has(attr.name)) {
            extra.push(
              inline
                ? { type: 'inlineCode', value: attr.value }
                : { type: 'code', value: attr.value },
            )
          }
        }

        parent.children.splice(i, 1, ...extra, ...node.children)
        // Revisit from the same index so nested JSX gets unwrapped too.
        return [SKIP, i]
      }
    }
  })

  await Promise.all(pending)
}

/** Parses generated/api-specs/<spec>.md into mdast, shaped like the live page. */
async function loadApiSpec(spec, cache) {
  if (!cache.has(spec)) {
    const file = path.join(API_SPECS_DIR, `${spec}.md`)
    if (!existsSync(file)) {
      throw new Error(
        `Missing ${file}. Run \`pnpm generate:docs\` from the repo root.`,
      )
    }
    const md = await readFile(file, 'utf8')
    // The title/intro above the marker duplicates the page header.
    const marker = '<!-- api-reference -->'
    const at = md.indexOf(marker)
    cache.set(spec, at === -1 ? md : md.slice(at + marker.length))
  }

  const tree = mdParser.parse(cache.get(spec))

  visit(tree, 'heading', (node, i, parent) => {
    const label = node.children.map((c) => c.value ?? '').join('')
    const id = API_SECTION_IDS[label]
    if (node.depth === 2 && id) {
      node.data = { hProperties: { id: `${spec}-${id}` } }
      return
    }
    // The live page renders no ids for anything else. Flatten them so
    // rehype-slug doesn't invent anchors (or shift the slug counter for
    // headings that follow).
    parent.children[i] = {
      type: 'paragraph',
      children: [{ type: 'strong', children: node.children }],
    }
  })

  return tree.children
}

function getAttr(node, name) {
  const attr = node.attributes?.find((a) => a.name === name)
  return typeof attr?.value === 'string' ? attr.value : undefined
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

try {
  await main()
} finally {
  await pagefind.close()
}
