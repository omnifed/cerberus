/**
 * Checks the hand-written `a11y.keyboard` table against the keys Zag.js handles.
 * Descriptions stay hand-written; this only catches keys that drift out of sync.
 */
import type { Diagnostics } from '../../core/diagnostics'
import type { KeyboardMapping } from '../types'

/** Keys the browser handles on its own: focus movement, and activating a `<button>`. */
const ALWAYS_NATIVE = new Set(['Tab', 'Shift + Tab'])
const BUTTON_NATIVE = ['Enter', 'Space']

/** Zag `keyMap` names → the names used in the docs tables */
const KEY_ALIASES: Record<string, string> = { ' ': 'Space', Esc: 'Escape' }

export const normalizeKey = (key: string) => KEY_ALIASES[key] ?? key

export interface PartKeyboard {
  exportName: string
  keys: string[]
  /** The part renders a `<button>`, so Enter and Space activate it natively */
  isButton: boolean
}

export function checkKeyboardDrift(
  scope: string,
  documented: KeyboardMapping[],
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

  const documentedKeys = new Set(documented.map((k) => k.key))

  for (const [key, exportNames] of handledBy) {
    if (!documentedKeys.has(key)) {
      diagnostics.warn(
        scope,
        `a11y.keyboard is missing \`${key}\`, which Zag handles on ${exportNames.join(', ')}`,
      )
    }
  }
  for (const key of documentedKeys) {
    if (!handledBy.has(key) && !nativeKeys.has(key)) {
      diagnostics.warn(
        scope,
        `a11y.keyboard documents \`${key}\`, but no part handles it in Zag and it isn't native`,
      )
    }
  }
}
