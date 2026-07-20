import { getExampleCode } from '../components/code-preview/helpers'

export async function processMdxForLlm(
  rawMdx: string,
  filePath: string,
  contextCtx:
    | 'get-started'
    | 'components'
    | 'data-grid'
    | 'signals'
    | 'styling'
    | 'theming' = 'components',
): Promise<string> {
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
      // Passing the context ensures your helper looks in the right directory
      const { rawContent, fallback } = await getExampleCode(id, null, contextCtx)
      const replacement = fallback
        ? `\n\`\`\`tsx\n// Code not found for demo: ${id}\n\`\`\`\n`
        : `\n\`\`\`tsx\n${rawContent.trim()}\n\`\`\`\n`

      processedText = processedText.replace(match[0], replacement)
    }
  }

  const snippetRegex = /<CodeSnippet\s+snippet=(?:\{?`|"|)(.*?)(?:`\}|"|)\s*\/>/gs
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
