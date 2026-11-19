import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

/**
 * Transforms raw MDX content for use in LLM routes.
 * @param rawMdx
 * @returns
 */
export async function processMdx(rawMdx: string): Promise<string> {
  let processedMdx = rawMdx

  // 1. Process <BashTabs code="..." />
  // Converts it to a standard markdown bash block
  const bashRegex = /<BashTabs\s+code=["']([^"']+)["']\s*\/>/g
  processedMdx = processedMdx.replace(bashRegex, (match, code) => {
    return `\n\`\`\`bash\n${code}\n\`\`\`\n`
  })

  // 2. Process <Example path="..." demo="..." />
  const exampleRegex =
    /<Example\s+path=["']([^"']+)["']\s+demo=["']([^"']+)["']\s*\/>/g
  const exampleMatches = [...processedMdx.matchAll(exampleRegex)]

  // 3. Process <CodeSnippets snippet="..." />
  const snippetRegex =
    /<CodeSnippet[\s\S]*?snippet=\{?([`"'])([\s\S]*?)\1\}?[\s\S]*?\/>/g
  processedMdx = processedMdx.replace(
    snippetRegex,
    (match, quoteType, snippetContent) => {
      // Defaulting to typescript, but you can omit it if the language is unknown
      return `\n\`\`\`typescript\n${snippetContent.trim()}\n\`\`\`\n`
    },
  )

  // 4. Process <NoteAdmonition description="..." />
  const noteRegex = /<NoteAdmonition\s+description=["']([^"']+)["']\s*\/>/g
  processedMdx = processedMdx.replace(noteRegex, (match, description) => {
    return `\n> **Note:** ${description}\n`
  })

  // (Optional) Admonitions that wrap children instead of using a prop:
  // <Note>Some text</Note>
  const wrappedNoteRegex = /<NoteAdmonition>([\s\S]*?)<\/NoteAdmonition>/g
  processedMdx = processedMdx.replace(wrappedNoteRegex, (match, content) => {
    // Add a blockquote arrow to every line of the content
    const blockquoted = content
      .trim()
      .split('\n')
      .map((line: string) => `> ${line}`)
      .join('\n')
    return `\n> **Note:**\n${blockquoted}\n`
  })

  // 5. Process <ComponentApi spec="..." />
  // Replaced by the generated API digest (docs/generated/api-specs/<spec>.md)
  processedMdx = await inlineComponentApi(processedMdx)

  if (exampleMatches.length === 0) {
    return processedMdx
  }

  // Fetch all physical files concurrently to keep the route extremely fast
  const replacementPromises = exampleMatches.map(async (match) => {
    const [fullTag, path, demo] = match

    try {
      // Re-use your exact file resolution logic from the Example component
      const filePath = resolve(
        process.cwd(),
        `examples/${path}/${demo}.demo.tsx`,
      )
      let fileContent = await readFile(filePath, 'utf-8')

      // Clean up internal monorepo imports for the LLM
      fileContent = fileContent.replaceAll(
        '@cerberus-design',
        '@cerberus/react',
      )

      // Format as a standard TypeScript React code block
      const replacement = `\n\`\`\`tsx\n// ${path}/${demo}.demo.tsx\n${fileContent}\n\`\`\`\n`
      return { fullTag, replacement }
    } catch (error) {
      console.error(`LLM Parser: Failed to load example ${path}/${demo}`, error)
      return {
        fullTag,
        replacement: `\n> *Example code for ${path}/${demo} is missing or could not be loaded.*\n`,
      }
    }
  })

  const replacements = await Promise.all(replacementPromises)

  // 3. Inject the resolved file contents back into the markdown string
  for (const { fullTag, replacement } of replacements) {
    processedMdx = processedMdx.replace(fullTag, replacement)
  }

  return processedMdx
}

/** Must match `DIGEST_API_MARKER` in tools/codegen/docs/digest.ts */
const DIGEST_API_MARKER = '<!-- api-reference -->'

/**
 * Swaps each `<ComponentApi spec="key" />` for the API section of its generated
 * markdown digest, one heading level down so it nests under the page's `## API`.
 */
async function inlineComponentApi(mdx: string): Promise<string> {
  const apiRegex = /<ComponentApi\s+spec=["']([^"']+)["']\s*\/>/g
  const matches = [...mdx.matchAll(apiRegex)]
  if (matches.length === 0) return mdx

  const replacements = await Promise.all(
    matches.map(async ([fullTag, spec]) => {
      try {
        const filePath = resolve(
          process.cwd(),
          `generated/api-specs/${spec}.md`,
        )
        const digest = await readFile(filePath, 'utf-8')
        const markerAt = digest.indexOf(DIGEST_API_MARKER)
        const api =
          markerAt === -1
            ? digest
            : digest.slice(markerAt + DIGEST_API_MARKER.length)
        const nested = api.trim().replace(/^(#{1,5}) /gm, '#$1 ')
        return { fullTag, replacement: `\n${nested}\n` }
      } catch (error) {
        console.error(`LLM Parser: Failed to load API digest ${spec}`, error)
        return {
          fullTag,
          replacement: `\n> *API reference for ${spec} is missing. Run \`pnpm generate:docs\`.*\n`,
        }
      }
    }),
  )

  let result = mdx
  for (const { fullTag, replacement } of replacements) {
    result = result.replace(fullTag, replacement)
  }
  return result
}
