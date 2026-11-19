/**
 * Builds a component's keyboard table: `@zag-js/docs` rows, with the config's
 * `a11y.keyboard` overriding descriptions or adding keys. The Zag source decides which
 * keys must be there: one the machine handles but nobody describes fails generation.
 */
import type { Diagnostics } from '../../core/diagnostics'
import type { KeyboardMapping } from '../types'

/** Keys the browser handles on its own: focus movement, and activating a `<button>`. */
const ALWAYS_NATIVE = new Set(['Tab', 'Shift + Tab'])
const BUTTON_NATIVE = ['Enter', 'Space']

/** Zag `keyMap` and `@zag-js/docs` names → the names used in the docs tables */
const KEY_ALIASES: Record<string, string> = { ' ': 'Space', Esc: 'Escape' }

export const normalizeKey = (key: string) => KEY_ALIASES[key] ?? key

export interface PartKeyboard {
  exportName: string
  keys: string[]
  /** The part renders a `<button>`, so Enter and Space activate it natively */
  isButton: boolean
}

const sameText = (a: string, b: string) =>
  a.trim().replace(/[.!?]$/, '') === b.trim().replace(/[.!?]$/, '')

/**
 * Applies `overrides` to `fromDocs`. A key in both keeps the package's position and
 * takes the override's description. A new key goes right after the override before it
 * (or last), so a config can slot `ArrowRight` in after `ArrowUp`.
 */
export function mergeKeyboard(
  scope: string,
  fromDocs: KeyboardMapping[],
  overrides: KeyboardMapping[],
  diagnostics: Diagnostics,
): KeyboardMapping[] {
  const rows = [...fromDocs]
  let anchor = -1
  for (const override of overrides) {
    const key = normalizeKey(override.key)
    const at = rows.findIndex((r) => r.key === key)
    if (at === -1) {
      anchor = anchor === -1 ? rows.length : anchor + 1
      rows.splice(anchor, 0, { key, description: override.description })
      continue
    }
    if (sameText(rows[at].description, override.description)) {
      diagnostics.warn(
        scope,
        `a11y.keyboard \`${key}\` repeats the @zag-js/docs description; remove the override`,
      )
    }
    rows[at] = { key, description: override.description }
    anchor = at
  }
  return rows
}

/** Checks the merged table against the keys the Zag machine actually handles. */
export function checkKeyboardCoverage(
  scope: string,
  rows: KeyboardMapping[],
  {
    fromDocs,
    overrides,
  }: { fromDocs: KeyboardMapping[]; overrides: KeyboardMapping[] },
  parts: PartKeyboard[],
  diagnostics: Diagnostics,
): void {
  const handledBy = new Map<string, string[]>()
  for (const part of parts) {
    for (const key of part.keys.map(normalizeKey)) {
      handledBy.set(key, [...(handledBy.get(key) ?? []), part.exportName])
    }
  }
  const nativeKeys = new Set(ALWAYS_NATIVE)
  if (parts.some((p) => p.isButton))
    BUTTON_NATIVE.forEach((k) => nativeKeys.add(k))

  const described = new Set(rows.map((r) => r.key))
  for (const [key, exportNames] of handledBy) {
    if (!described.has(key)) {
      diagnostics.error(
        scope,
        `Zag handles \`${key}\` on ${exportNames.join(', ')}, but neither @zag-js/docs nor a11y.keyboard describes it; add an a11y.keyboard override`,
      )
    }
  }
  const documented = new Set(fromDocs.map((r) => r.key))
  for (const key of overrides.map((o) => normalizeKey(o.key))) {
    if (!handledBy.has(key) && !nativeKeys.has(key) && !documented.has(key)) {
      diagnostics.warn(
        scope,
        `a11y.keyboard overrides \`${key}\`, but no part handles it in Zag and it isn't native`,
      )
    }
  }
}
