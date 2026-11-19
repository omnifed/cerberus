export interface JsDoc {
  description: string
  defaultValue?: string
  /** Present when the block has `@deprecated`; its text, possibly empty */
  deprecated?: string
  /** `@see` references */
  see?: string[]
}

/**
 * Parses a JSDoc block: description prose, plus `@default` (or TSDoc's `@defaultValue`),
 * `@deprecated` and `@see`.
 * Lines after a tag continue that tag, so a wrapped `@default` stays out of the
 * description. Other tags are dropped.
 */
export function parseJsDocBlock(rawComment: string): JsDoc {
  const lines = rawComment
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)

  const descLines: string[] = []
  const tags: Array<{ name: string; text: string[] }> = []

  for (const line of lines) {
    const tag = /^@([A-Za-z]+)\s*(.*)$/.exec(line)
    if (tag) tags.push({ name: tag[1], text: tag[2] ? [tag[2]] : [] })
    else if (tags.length > 0) tags[tags.length - 1].text.push(line)
    else descLines.push(line)
  }

  const text = (...names: string[]) =>
    tags
      .filter((t) => names.includes(t.name))
      .map((t) => t.text.join(' ').trim())

  // `@defaultValue` is the TSDoc spelling
  const [defaultValue] = text('default', 'defaultValue')
  // `@deprecated - reason`: drop the separator
  const [deprecated] = text('deprecated').map((t) =>
    t.replace(/^[-–—:]\s*/, ''),
  )
  const see = text('see').filter(Boolean)

  return {
    description: descLines.join(' '),
    ...(defaultValue !== undefined ? { defaultValue } : {}),
    ...(deprecated !== undefined ? { deprecated } : {}),
    ...(see.length > 0 ? { see } : {}),
  }
}
