/**
 * Static extraction from a Zag.js `connect` function. Each part's `get<Part>Props()`
 * returns one `normalize.<element>({ … })` object literal: its `"data-*"` keys are the
 * part's data attributes, and a `keyMap` object inside it lists the keys it handles.
 * Only literal patterns are read; anything else is left undescribed, never guessed.
 */
import { capitalize } from '../../core/naming'
import { findMatchingClose, splitTopLevel } from '../parser/scan'
import type { DataAttributeSpec } from '../types'

export interface ConnectPart {
  /** `normalize.button(…)` → `button`: what the part renders */
  element: string
  dataAttributes: DataAttributeSpec[]
  /** Keys in the part's `keyMap`, in source order */
  keyboard: string[]
}

/** Body text of `name(…) { … }` (a method in an object literal), or null. */
function methodBody(src: string, name: string): string | null {
  const re = new RegExp(`\\b${name}\\s*\\([^)]*\\)\\s*\\{`)
  const m = re.exec(src)
  if (!m) return null
  const open = m.index + m[0].length - 1
  const close = findMatchingClose(src, open)
  return close === -1 ? null : src.slice(open + 1, close)
}

/** Body text of the object literal that starts at `src[openIdx]`. */
function objectBody(src: string, openIdx: number): string | null {
  const close = findMatchingClose(src, openIdx)
  return close === -1 ? null : src.slice(openIdx + 1, close)
}

const DATA_MEMBER = /^"(data-[a-z0-9-]+)"\s*:\s*([\s\S]+)$/
const TERNARY = /^[\s\S]+\?\s*"([^"]*)"\s*:\s*"([^"]*)"$/
const STRING = /^"([^"]*)"$/
const PROP_REF = /^prop\("([A-Za-z0-9_$]+)"\)$/
const OWN_PROP_REF = /^props\.([A-Za-z0-9_$]+)$/

function describeValue(name: string, expr: string): DataAttributeSpec {
  const value = expr.trim()
  if (/^dataAttr\(/.test(value)) return { name, presence: true }
  const ternary = TERNARY.exec(value)
  if (ternary) return { name, values: [ternary[1], ternary[2]] }
  const literal = STRING.exec(value)
  if (literal) return { name, values: [literal[1]] }
  const rootProp = PROP_REF.exec(value)
  if (rootProp) return { name, reflects: rootProp[1] }
  const ownProp = OWN_PROP_REF.exec(value)
  if (ownProp) return { name, reflects: ownProp[1] }
  return { name }
}

/** Member names of an object literal body: `ArrowDown() {…}` or `Home: fn` */
function memberNames(body: string): string[] {
  return splitTopLevel(body, ',')
    .map((member) => /^(?:"([^"]+)"|([A-Za-z0-9_$]+))\s*[(:]/.exec(member))
    .filter((m): m is RegExpExecArray => m !== null)
    .map((m) => m[1] ?? m[2])
}

/**
 * Reads `get<Part>Props()` for one anatomy part (`itemTrigger` → `getItemTriggerProps`).
 * Returns null when the machine has no such method (e.g. Ark-only parts).
 */
export function extractConnectPart(
  connectSource: string,
  part: string,
): ConnectPart | null {
  const body = methodBody(connectSource, `get${capitalize(part)}Props`)
  if (!body) return null

  const normalize = /\bnormalize\.([A-Za-z]+)\(\s*\{/.exec(body)
  if (!normalize) return null
  const props = objectBody(body, normalize.index + normalize[0].length - 1)
  if (props === null) return null

  const dataAttributes = splitTopLevel(props, ',')
    .map((member) => DATA_MEMBER.exec(member))
    .filter((m): m is RegExpExecArray => m !== null)
    .map(([, name, expr]) => describeValue(name, expr))

  const keyMap = /\bkeyMap\s*=\s*\{/.exec(body)
  const keyMapBody = keyMap
    ? objectBody(body, keyMap.index + keyMap[0].length - 1)
    : null

  return {
    element: normalize[1],
    dataAttributes,
    keyboard: keyMapBody ? memberNames(keyMapBody) : [],
  }
}
