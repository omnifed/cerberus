import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Diagnostics } from 'codegen/core/diagnostics'
import { parseJsDocBlock } from 'codegen/docs/parser/jsdoc'
import { extractConnectPart } from 'codegen/docs/zag/connect'
import { checkKeyboardDrift } from 'codegen/docs/zag/keyboard'
import { extractMachineDefaults } from 'codegen/docs/zag/machine'

const SOURCE = readFileSync(
  join(import.meta.dir, 'fixtures', 'zag-thing.mjs'),
  'utf-8',
)

describe('connect extraction', () => {
  test('classifies data attribute values', () => {
    expect(extractConnectPart(SOURCE, 'trigger')).toEqual({
      element: 'button',
      dataAttributes: [
        { name: 'data-state', values: ['open', 'closed'] },
        { name: 'data-disabled', presence: true },
        { name: 'data-index', reflects: 'index' },
        { name: 'data-kind', values: ['toggle'] },
        { name: 'data-ownedby' },
      ],
      keyboard: ['ArrowDown', ' ', 'Home'],
    })
  })

  test('root attributes that mirror a Root prop', () => {
    expect(extractConnectPart(SOURCE, 'root')?.dataAttributes).toEqual([
      { name: 'data-orientation', reflects: 'orientation' },
    ])
  })

  test('parts without a props getter yield nothing', () => {
    expect(extractConnectPart(SOURCE, 'indicator')).toBeNull()
  })
})

test('machine defaults keep literals and skip computed values', () => {
  expect(Object.fromEntries(extractMachineDefaults(SOURCE))).toEqual({
    orientation: '"vertical"',
    count: '3',
    defaultValue: '[]',
  })
})

describe('JSDoc tags', () => {
  test('@deprecated, @see and a wrapped @default stay out of the description', () => {
    expect(
      parseJsDocBlock(`/**
       * Main text.
       * @default "a" |
       *   "b"
       * @deprecated - Use \`other\` instead.
       * @see https://example.com
       * @example
       * <Thing />
       */`),
    ).toEqual({
      description: 'Main text.',
      defaultValue: '"a" | "b"',
      deprecated: 'Use `other` instead.',
      see: ['https://example.com'],
    })
  })

  test('TSDoc @defaultValue', () => {
    expect(
      parseJsDocBlock(`/** x\n * @defaultValue 'center' */`).defaultValue,
    ).toBe("'center'")
  })
})

describe('keyboard drift', () => {
  const parts = [
    { exportName: 'X.Trigger', keys: ['ArrowDown', ' '], isButton: true },
  ]

  test('flags undocumented Zag keys and documented keys nobody handles', () => {
    const diagnostics = new Diagnostics()
    checkKeyboardDrift(
      'x',
      [
        { key: 'ArrowDown', description: 'd' },
        { key: 'Enter', description: 'native on buttons' },
        { key: 'Tab', description: 'native' },
        { key: 'PageUp', description: 'stale' },
      ],
      parts,
      diagnostics,
    )
    expect(diagnostics.items.map((d) => d.message)).toEqual([
      'a11y.keyboard is missing `Space`, which Zag handles on X.Trigger',
      "a11y.keyboard documents `PageUp`, but no part handles it in Zag and it isn't native",
    ])
  })
})
