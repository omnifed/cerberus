/**
 * Parses a JSDoc block into description prose and an optional `@default` value.
 * Other tags are dropped for now.
 */
export function parseJsDocBlock(rawComment: string): {
  description: string
  defaultValue?: string
} {
  const lines = rawComment
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)

  let defaultValue: string | undefined
  const descLines: string[] = []

  for (const line of lines) {
    if (line.startsWith('@default')) {
      defaultValue = line.replace(/^@default\s+/, '').trim()
    } else if (!line.startsWith('@')) {
      descLines.push(line)
    }
  }

  return { description: descLines.join(' '), defaultValue }
}
