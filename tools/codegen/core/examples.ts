import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ComponentEntry } from './manifest'

const IDENTIFIER = '[A-Za-z_$][\\w$]*'

/**
 * The code of the first fenced block after `@example` in the JSDoc directly above
 * `export function <identifier>` / `export const <identifier>`, with the comment's
 * `*` gutter removed. An alias (`export const ButtonIconButton = IconButton`) is
 * followed to the declaration it names. Null when there is no such example.
 */
export function jsdocExample(
  source: string,
  identifier: string,
  depth = 0,
): string | null {
  const declaration = new RegExp(
    `/\\*\\*((?:(?!\\*/)[\\s\\S])*)\\*/\\s*export\\s+(?:default\\s+)?(?:function|const)\\s+${identifier}\\b`,
  ).exec(source)
  if (declaration) {
    const [, ...afterTag] = declaration[1].split('@example')
    if (afterTag.length === 0) return null
    const text = afterTag[0]
      .split('\n')
      .map((line) => line.replace(/^\s*\*\s?/, ''))
      .join('\n')
    const code = /```[\w-]*\n([\s\S]*?)```/.exec(text)?.[1].trimEnd()
    return code || null
  }
  const alias = new RegExp(
    `export\\s+const\\s+${identifier}\\s*=\\s*(${IDENTIFIER})\\s*(?:\\n|;|$)`,
  ).exec(source)
  return alias && depth < 2 ? jsdocExample(source, alias[1], depth + 1) : null
}

/**
 * The `@example` of the generated JSDoc: the config's `example`, else the one written
 * on the abstraction rendered as `<Name>`, else on the first other abstraction that
 * has one, else a bare `<Name />`. Never derived by nesting members, which can't tell
 * a child (`RadioGroup.Radio`) from a sibling (`Tag.Closable`).
 */
export function componentExample(entry: ComponentEntry): string {
  if (entry.example) return entry.example
  const ordered = [
    ...entry.abstractions.filter((abs) => abs.isDefaultExport),
    ...entry.abstractions.filter((abs) => !abs.isDefaultExport),
  ]
  const sources = new Map<string, string>()
  for (const abs of ordered) {
    const file = join(entry.dir, `${abs.file}.tsx`)
    if (!sources.has(file)) {
      sources.set(file, existsSync(file) ? readFileSync(file, 'utf8') : '')
    }
    const found = jsdocExample(sources.get(file)!, `${entry.name}${abs.name}`)
    if (found) return found
  }
  return `<${entry.name} />`
}
