import { describe, expect, test } from 'bun:test'
import { recipes, slotRecipes } from '@cerberus/panda-preset'
import * as react from '@cerberus-design/react'

/**
 * Recipe `jsx` lists drive Panda's extraction of (responsive) variant props
 * from consumer JSX. Every entry must name something that
 * `@cerberus-design/react` actually exports: `Button`, or a compound member
 * written as `Button.IconButton`. See the note in
 * packages/panda-preset/src/recipes/index.ts.
 */

const exported = react as Record<string, unknown>

function isExported(name: string): boolean {
  const [head, ...members] = name.split('.')
  let current: unknown = exported[head]
  if (current === undefined) return false
  for (const member of members) {
    if (current === null || !['object', 'function'].includes(typeof current)) {
      return false
    }
    current = (current as Record<string, unknown>)[member]
    if (current === undefined) return false
  }
  return true
}

describe('recipe jsx lists', () => {
  const all = { ...recipes, ...slotRecipes } as Record<
    string,
    { jsx?: unknown[] }
  >

  test('should find recipes with jsx lists', () => {
    const withJsx = Object.values(all).filter((recipe) => recipe.jsx?.length)
    expect(withJsx.length).toBeGreaterThan(0)
  })

  test('should only name string tags exported from @cerberus-design/react', () => {
    const missing: string[] = []
    for (const [key, recipe] of Object.entries(all)) {
      for (const name of recipe.jsx ?? []) {
        if (typeof name !== 'string' || !isExported(name)) {
          missing.push(`${key}: ${String(name)}`)
        }
      }
    }
    expect(missing).toEqual([])
  })

  test('should not repeat a name within one list', () => {
    const dupes = Object.entries(all).filter(
      ([, recipe]) => new Set(recipe.jsx).size !== (recipe.jsx ?? []).length,
    )
    expect(dupes.map(([key]) => key)).toEqual([])
  })
})
