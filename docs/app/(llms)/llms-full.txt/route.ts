import { docs, blog } from '#site/content'
import { getExampleCode } from '@/app/components/code-preview/helpers'
import { processMdx } from '@/utils/process-mdx'
import { NextResponse } from 'next/server'
import { readFile, readdir, stat } from 'node:fs/promises'
import { join, resolve } from 'node:path'

// Exclude migrated directories
async function getAllMdxFiles(
  dir: string,
  excludeDirs: string[] = [],
  fileList: string[] = [],
): Promise<string[]> {
  const files = await readdir(dir)

  for (const file of files) {
    const filePath = join(dir, file)
    const fileStat = await stat(filePath)

    if (fileStat.isDirectory()) {
      // Skip directories that have been migrated to Velite
      const isExcluded = excludeDirs.some((excluded) => filePath.includes(excluded))
      if (!isExcluded) {
        await getAllMdxFiles(filePath, excludeDirs, fileList)
      }
    } else if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
      fileList.push(filePath)
    }
  }
  return fileList
}

// Legacy Parser (Kept exactly as you had it for the unmigrated files)
async function processMdxForLlm(rawMdx: string, filePath: string): Promise<string> {
  let processedText = rawMdx

  const sourceMatch = processedText.match(/source:\s*['"]components\/([^'"]+)['"]/)
  const inferredComponent = sourceMatch
    ? sourceMatch[1]
    : filePath
        .split('/')
        .pop()
        ?.replace(/\.mdx?$/, '') || ''

  const previewRegex =
    /<CodePreview[^>]*(?:id="([^"]+)"|\{\.\.\.[A-Za-z0-9_]+\.([^}]+)\})[^>]*\/>/g
  const previews = [...processedText.matchAll(previewRegex)]

  for (const match of previews) {
    const exactId = match[1]
    const spreadProperty = match[2]

    const id =
      exactId ||
      (inferredComponent && spreadProperty
        ? `${inferredComponent}.${spreadProperty}`
        : null)

    if (id) {
      const { rawContent, fallback } = await getExampleCode(id, null, 'components')
      const replacement = fallback
        ? `\n\`\`\`tsx\n// Code not found for demo: ${id}\n\`\`\`\n`
        : `\n\`\`\`tsx\n${rawContent.trim()}\n\`\`\`\n`
      processedText = processedText.replace(match[0], replacement)
    }
  }

  const snippetRegex = /<CodeSnippet\s+snippet=(?:\{?`|"|)(.*?)(?:`\}|"|)\s*\/>/g
  processedText = processedText.replace(snippetRegex, (match, code) => {
    if (code.startsWith('{') && code.endsWith('}')) {
      return `\n\`\`\`tsx\n// Source available in static configuration: ${code}\n\`\`\`\n`
    }
    return `\n\`\`\`tsx\n${code.trim()}\n\`\`\`\n`
  })

  const bashRegex = /<BashTabs\s+code="([^"]+)"\s*\/>/g
  processedText = processedText.replace(bashRegex, (match, code) => {
    return `\n\`\`\`bash\n${code}\n\`\`\`\n`
  })

  processedText = processedText.replace(/^import\s+.*from\s+['"].*['"];?$/gm, '')
  processedText = processedText.replace(
    /<[A-Za-z]+Admonition\s+description=\{?<>([^<]+)<\/>\}?\s*\/>/g,
    '> **Note:** $1',
  )
  processedText = processedText.replace(
    /<[A-Za-z]+Admonition\s+description=["']([^"']+)["']\s*\/>/g,
    '> **Note:** $1',
  )
  processedText = processedText.replace(/<\/?CodePreview[^>]*>/g, '')

  return processedText.trim()
}

export async function GET() {
  try {
    let fullLlmContent =
      '# Cerberus UI Platform Documentation\n\n> Index of all docs: /llms.txt'

    // --- PHASE 1: Process Modern Velite Content (Blog & Migrated Docs) ---
    const allVeliteContent = [...blog, ...docs]

    for (const item of allVeliteContent) {
      const rawContent = (item as any).raw
      const processedContent = await processMdx(rawContent)
      const category =
        (item as any).group === 'release' ? 'Blog' : (item as any).group || 'Blog'

      // Construct the metadata header for RAG context
      const metadataHeader = [
        `\n\n---\n# ${item.title}`,
        `Category: ${category}`,
        item.description ? `\n> ${item.description}\n` : '',
      ].join('\n')

      fullLlmContent += `${metadataHeader}\n${processedContent}\n`
    }

    // --- PHASE 2: Process Legacy MDX Content ---
    const docsDir = resolve(process.cwd(), 'app/docs')
    // Exclude the 'data-grid' folder so we don't process it twice
    const legacyFiles = await getAllMdxFiles(docsDir, [
      'data-grid',
      'get-started',
      'signals',
    ])

    for (const filePath of legacyFiles) {
      const rawContent = await readFile(filePath, 'utf-8')
      const processedContent = await processMdxForLlm(rawContent, filePath)

      const fileName = filePath.split('/').pop()?.replace('.mdx', '') || 'Doc'

      fullLlmContent += `\n\n---\n# ${fileName}\nCategory: Legacy Docs\n\n${processedContent}\n`
    }

    return new NextResponse(fullLlmContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Failed to generate LLM txt:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
