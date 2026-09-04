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
  const exampleRegex = /<Example\s+path=["']([^"']+)["']\s+demo=["']([^"']+)["']\s*\/>/g
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

  if (exampleMatches.length === 0) {
    return processedMdx
  }

  // Fetch all physical files concurrently to keep the route extremely fast
  const replacementPromises = exampleMatches.map(async (match) => {
    const [fullTag, path, demo] = match

    try {
      // Re-use your exact file resolution logic from the Example component
      const filePath = resolve(process.cwd(), `examples/${path}/${demo}.demo.tsx`)
      let fileContent = await readFile(filePath, 'utf-8')

      // Clean up internal monorepo imports for the LLM
      fileContent = fileContent.replaceAll('@cerberus-design', '@cerberus/react')

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
