import type { PropSpec } from '../types'

/**
 * Merges `override` onto `base` by name, keeping `base` order and appending new names.
 * An override without a description or default inherits the base one.
 */
export function mergePropLists(
  base: PropSpec[],
  override: PropSpec[],
): PropSpec[] {
  const byName = new Map<string, PropSpec>()
  for (const prop of base) byName.set(prop.name, prop)
  for (const prop of override) {
    const prev = byName.get(prop.name)
    byName.set(prop.name, {
      ...prev,
      ...prop,
      description: prop.description || prev?.description || '',
      defaultValue: prop.defaultValue ?? prev?.defaultValue,
    })
  }
  return Array.from(byName.values())
}

/**
 * Props of `A | B`: listed if any branch has them, required only if every branch does.
 */
export function mergeUnionBranches(branches: PropSpec[][]): PropSpec[] {
  const order: string[] = []
  const byName = new Map<string, PropSpec[]>()
  for (const branch of branches) {
    for (const prop of branch) {
      if (!byName.has(prop.name)) {
        byName.set(prop.name, [])
        order.push(prop.name)
      }
      byName.get(prop.name)!.push(prop)
    }
  }
  return order.map((name) => {
    const variants = byName.get(name)!
    const types = [
      ...new Set(variants.map((v) => v.type).filter((t) => t !== 'never')),
    ]
    return {
      name,
      type: types.join(' | ') || 'never',
      required:
        variants.length === branches.length &&
        variants.every((v) => v.required),
      defaultValue: variants.find((v) => v.defaultValue)?.defaultValue,
      description: variants.find((v) => v.description)?.description ?? '',
    }
  })
}

/** `'a' | "b"` → {a, b} (the key list of `Omit`/`Pick`/`Optional`) */
export function extractStringLiterals(unionExpr: string): Set<string> {
  const keys = new Set<string>()
  const regex = /['"]([^'"]+)['"]/g
  let m: RegExpExecArray | null
  while ((m = regex.exec(unionExpr)) !== null) keys.add(m[1])
  return keys
}
