import { getExampleCode } from '@/app/components/code-preview/helpers'
import { NextResponse } from 'next/server'
import { readFile, readdir, stat } from 'node:fs/promises'
import { join, resolve } from 'node:path'

async function getAllMdxFiles(dir: string, fileList: string[] = []): Promise<string[]> {
  const files = await readdir(dir)

  for (const file of files) {
    const filePath = join(dir, file)
    const fileStat = await stat(filePath)

    if (fileStat.isDirectory()) {
      await getAllMdxFiles(filePath, fileList)
    } else if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
      fileList.push(filePath)
    }
  }
  return fileList
}

async function processMdxForLlm(rawMdx: string, filePath: string): Promise<string> {
  let processedText = rawMdx

  // Extract the component name from the frontmatter 'source' line to construct IDs
  // e.g., source: 'components/accordion' -> 'accordion'
  const sourceMatch = processedText.match(/source:\s*['"]components\/([^'"]+)['"]/)
  const inferredComponent = sourceMatch
    ? sourceMatch[1]
    : filePath
        .split('/')
        .pop()
        ?.replace(/\.mdx?$/, '') || ''

  // FIX 2: Resolve both id="button.basic" AND {...DEMOS.basic}
  // Match group 1 = exact ID (if passed as string)
  // Match group 2 = the property spread (e.g. "basic" from DEMOS.basic)
  const previewRegex =
    /<CodePreview[^>]*(?:id="([^"]+)"|\{\.\.\.[A-Za-z0-9_]+\.([^}]+)\})[^>]*\/>/g
  const previews = [...processedText.matchAll(previewRegex)]

  for (const match of previews) {
    const exactId = match[1]
    const spreadProperty = match[2]

    // Construct the ID for your helper (e.g. accordion.basic)
    const id =
      exactId ||
      (inferredComponent && spreadProperty
        ? `${inferredComponent}.${spreadProperty}`
        : null)

    if (id) {
      // Fetch the raw code from your helper
      const { rawContent, fallback } = await getExampleCode(id, null, 'components')

      const replacement = fallback
        ? `\n\`\`\`tsx\n// Code not found for demo: ${id}\n\`\`\`\n`
        : `\n\`\`\`tsx\n${rawContent.trim()}\n\`\`\`\n`

      processedText = processedText.replace(match[0], replacement)
    }
  }

  // Resolve <CodeSnippet /> string literals
  const snippetRegex = /<CodeSnippet\s+snippet=(?:\{?`|"|)(.*?)(?:`\}|"|)\s*\/>/gs
  processedText = processedText.replace(snippetRegex, (match, code) => {
    // If a JS variable was passed (like {DEMOS.meta}), note it for the LLM
    // since regex cannot evaluate imported module variables.
    if (code.startsWith('{') && code.endsWith('}')) {
      return `\n\`\`\`tsx\n// Source available in static configuration: ${code}\n\`\`\`\n`
    }
    return `\n\`\`\`tsx\n${code.trim()}\n\`\`\`\n`
  })

  // Resolve <BashTabs />
  const bashRegex = /<BashTabs\s+code="([^"]+)"\s*\/>/g
  processedText = processedText.replace(bashRegex, (match, code) => {
    return `\n\`\`\`bash\n${code}\n\`\`\`\n`
  })

  // Clean up React/MDX imports safely without touching frontmatter
  // Uses multi-line match (^ and $) to only remove exact import lines
  processedText = processedText.replace(/^import\s+.*from\s+['"].*['"];?$/gm, '')

  // Convert Admonitions (Note, Warning, etc) to standard Markdown blockquotes
  processedText = processedText.replace(
    /<[A-Za-z]+Admonition\s+description=\{?<>([^<]+)<\/>\}?\s*\/>/g,
    '> **Note:** $1',
  )
  processedText = processedText.replace(
    /<[A-Za-z]+Admonition\s+description=["']([^"']+)["']\s*\/>/g,
    '> **Note:** $1',
  )

  // Strip empty/leftover wrapper tags
  processedText = processedText.replace(/<\/?CodePreview[^>]*>/g, '')

  return processedText.trim()
}

export async function GET() {
  try {
    const docsDir = resolve(process.cwd(), 'app/docs')
    const files = await getAllMdxFiles(docsDir)

    let fullLlmContent =
      '# Cerberus UI Platform Documentation\n\n> Index of all docs: /llms.txt'

    for (const filePath of files) {
      const rawContent = await readFile(filePath, 'utf-8')
      const processedContent = await processMdxForLlm(rawContent, filePath)

      // Extract a title from the file path or let the markdown dictate it
      const fileName = filePath.split('/').pop()?.replace('.mdx', '') || 'Doc'

      fullLlmContent += `\n\n---\n## ${fileName}\n\n${processedContent}\n`
    }

    return new NextResponse(fullLlmContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        // Optional: Cache this route aggressively if docs don't change often
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Failed to generate LLM txt:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
