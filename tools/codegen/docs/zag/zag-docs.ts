/**
 * Prose from `@zag-js/docs`: keyboard rows, and data-attribute and CSS-variable
 * descriptions per part. The package is pinned to the installed Zag version (checked in
 * the spec builder), and is never fetched at runtime.
 *
 * It only adds descriptions. Which keys and attributes exist still comes from the Zag
 * source (`./connect`), which is complete where this package is not.
 */
import {
  accessibilityJson,
  apiJson,
  cssVarsJson,
  getDataAttrDoc,
} from '@zag-js/docs'
import docsPackage from '@zag-js/docs/package.json'
import { capitalize, toKebabCase } from '../../core/naming'
import type {
  ContextApiSpec,
  CssVarSpec,
  DataAttributeSpec,
  KeyboardMapping,
} from '../types'
import { normalizeKey } from './keyboard'

export const ZAG_DOCS_VERSION: string = docsPackage.version

type AccessibilityEntry = {
  keyboard?: { keys: string[]; description: string }[]
}
type PartRecord = Record<string, Record<string, string>>

export interface ZagDocs {
  /** One row per key, in the package's order */
  keyboard: KeyboardMapping[]
  /** Descriptions of a part's data attributes, without `data-scope`/`data-part` */
  dataAttributes: (part: string) => Map<string, string>
  cssVars: (part: string) => CssVarSpec[]
  /** The machine's API (what `useX()` returns), in the package's order */
  api: ContextApiSpec['members']
}

/** Zag's sentences sometimes miss the final period; the docs tables expect one. */
export const asSentence = (text: string) =>
  text.trim().replace(/([^.!?])$/, '$1.')

/** Generated text names parts run together ("the nexttrigger"); spell them out. */
export function spellPart(text: string, part: string): string {
  const words = toKebabCase(part).replace(/-/g, ' ')
  if (!words.includes(' ')) return text
  return text.replace(new RegExp(`\\b${part.toLowerCase()}\\b`, 'g'), words)
}

function dataAttrDoc(key: string): PartRecord | null {
  try {
    return getDataAttrDoc(key as Parameters<typeof getDataAttrDoc>[0])
  } catch {
    return null
  }
}

/** `@zag-js/<key>`'s docs, or null when the package doesn't cover that machine. */
export function loadZagDocs(key: string): ZagDocs | null {
  const a11y = (accessibilityJson as Record<string, AccessibilityEntry>)[key]
  const dataAttrs = dataAttrDoc(key)
  const cssVars = (cssVarsJson as Record<string, PartRecord>)[key]
  const api = Object.entries(
    (apiJson as Record<string, { api?: PartRecord }>)[key]?.api ?? {},
  ).map(([name, entry]) => ({
    name,
    type: entry.type,
    description: entry.description ? asSentence(entry.description) : '',
  }))
  if (!a11y && !dataAttrs && !cssVars && api.length === 0) return null

  // A row may list alternatives (`Space`, `Enter`); each gets its own row
  const keyboard = (a11y?.keyboard ?? []).flatMap((row) =>
    row.keys.map((k) => ({
      key: normalizeKey(k),
      description: asSentence(row.description),
    })),
  )

  return {
    api,
    keyboard,
    dataAttributes: (part) => {
      const attrs = dataAttrs?.[capitalize(part)] ?? {}
      return new Map(
        Object.entries(attrs)
          .filter(([name]) => name !== 'data-scope' && name !== 'data-part')
          .map(([name, text]) => [name, spellPart(text, part)]),
      )
    },
    cssVars: (part) =>
      Object.entries(cssVars?.[capitalize(part)] ?? {})
        .filter(([, description]) => description.trim() !== '')
        .map(([name, description]) => ({
          name,
          description: asSentence(spellPart(description, part)),
        })),
  }
}

/** `"open" | "closed"`: the package lists values where it has no prose. */
const VALUE_LIST = /^"[^"]*"(?:\s*\|\s*"[^"]*")*$/

/**
 * Adds the package's descriptions to the attributes read from the Zag source. An
 * attribute only the package knows is added too, so nothing it documents is dropped.
 */
export function describeDataAttributes(
  fromSource: DataAttributeSpec[],
  described: Map<string, string>,
): DataAttributeSpec[] {
  const apply = (attr: DataAttributeSpec): DataAttributeSpec => {
    const text = described.get(attr.name)?.trim()
    if (!text) return attr
    if (VALUE_LIST.test(text)) {
      if (attr.values || attr.presence || attr.reflects) return attr
      return {
        ...attr,
        values: [...text.matchAll(/"([^"]*)"/g)].map((m) => m[1]),
      }
    }
    return { ...attr, description: asSentence(text) }
  }
  const known = new Set(fromSource.map((a) => a.name))
  const extra = [...described.keys()]
    .filter((name) => !known.has(name))
    .map((name) => apply({ name }))
  return [...fromSource.map(apply), ...extra]
}
