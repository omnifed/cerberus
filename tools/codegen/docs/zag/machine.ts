/**
 * Reads prop defaults from a Zag.js machine's `props({ props }) { return { … } }`.
 * Only literal values are taken (`"vertical"`, `0`, `false`, `[]`); computed ones such
 * as `loop: !!props.autoplay` are skipped rather than misreported.
 */
import { findMatchingClose, splitTopLevel } from '../parser/scan'

const LITERAL =
  /^(?:"[^"]*"|'[^']*'|-?\d+(?:\.\d+)?|true|false|null|\[\s*\]|\{\s*\})$/

export function extractMachineDefaults(
  machineSource: string,
): Map<string, string> {
  const defaults = new Map<string, string>()
  const method = /\bprops\s*\(\s*\{[^)]*\}\s*\)\s*\{/.exec(machineSource)
  if (!method) return defaults

  const open = method.index + method[0].length - 1
  const close = findMatchingClose(machineSource, open)
  if (close === -1) return defaults
  const body = machineSource.slice(open + 1, close)

  const ret = /\breturn\s*\{/.exec(body)
  if (!ret) return defaults
  const objOpen = ret.index + ret[0].length - 1
  const objClose = findMatchingClose(body, objOpen)
  if (objClose === -1) return defaults

  for (const member of splitTopLevel(body.slice(objOpen + 1, objClose), ',')) {
    const m = /^([A-Za-z0-9_$]+)\s*:\s*([\s\S]+)$/.exec(member)
    if (m && LITERAL.test(m[2].trim())) defaults.set(m[1], m[2].trim())
  }
  return defaults
}
