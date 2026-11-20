import { describe, expect, test } from 'bun:test'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Diagnostics } from 'codegen/core/diagnostics'
import { parseJsDocBlock } from 'codegen/docs/parser/jsdoc'
import { extractConnectPart } from 'codegen/docs/zag/connect'
import { checkKeyboardCoverage, mergeKeyboard } from 'codegen/docs/zag/keyboard'
import { extractMachineDefaults } from 'codegen/docs/zag/machine'
import {
  asSentence,
  describeDataAttributes,
  loadZagDocs,
  spellPart,
} from 'codegen/docs/zag/zag-docs'

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

describe('keyboard table', () => {
  const docs = [
    { key: 'Space', description: 'Expands an trigger.' },
    { key: 'ArrowDown', description: 'Next.' },
    { key: 'Home', description: 'First.' },
  ]

  test('overrides keep the package order; new keys follow the override before them', () => {
    const diagnostics = new Diagnostics()
    const rows = mergeKeyboard(
      'x',
      docs,
      [
        { key: 'Space', description: 'Expands a trigger.' },
        { key: 'ArrowDown', description: 'Next' },
        { key: 'ArrowRight', description: 'Next, horizontally.' },
      ],
      diagnostics,
    )
    expect(rows).toEqual([
      { key: 'Space', description: 'Expands a trigger.' },
      { key: 'ArrowDown', description: 'Next' },
      { key: 'ArrowRight', description: 'Next, horizontally.' },
      { key: 'Home', description: 'First.' },
    ])
    expect(diagnostics.items.map((d) => d.message)).toEqual([
      'a11y.keyboard `ArrowDown` repeats the @zag-js/docs description; remove the override',
    ])
  })

  test('a new key with no override before it goes last', () => {
    const rows = mergeKeyboard(
      'x',
      docs,
      [{ key: 'End', description: 'Last.' }],
      new Diagnostics(),
    )
    expect(rows.map((r) => r.key)).toEqual([
      'Space',
      'ArrowDown',
      'Home',
      'End',
    ])
  })

  test('fails on undescribed Zag keys, warns on overrides nobody handles', () => {
    const diagnostics = new Diagnostics()
    const overrides = [
      { key: 'Enter', description: 'native on buttons' },
      { key: 'PageUp', description: 'stale' },
    ]
    checkKeyboardCoverage(
      'x',
      [...docs, ...overrides],
      {
        fromDocs: [...docs, { key: 'A-Z', description: 'typeahead' }],
        overrides: [...overrides, { key: 'A-Z', description: 'Typeahead.' }],
      },
      [
        {
          exportName: 'X.Trigger',
          keys: ['ArrowDown', ' ', 'End'],
          isButton: true,
        },
      ],
      diagnostics,
    )
    expect(diagnostics.items.map((d) => [d.severity, d.message])).toEqual([
      [
        'error',
        'Zag handles `End` on X.Trigger, but neither @zag-js/docs nor a11y.keyboard describes it; add an a11y.keyboard override',
      ],
      [
        'warning',
        "a11y.keyboard overrides `PageUp`, but no part handles it in Zag and it isn't native",
      ],
    ])
  })
})

describe('@zag-js/docs', () => {
  test('rows listing alternatives become one row per key, as sentences', () => {
    const switchDocs = loadZagDocs('switch')
    const keys = switchDocs?.keyboard.map((r) => r.key)
    expect(keys).toContain('Space')
    expect(keys).toContain('Enter')
    expect(
      switchDocs?.keyboard.every((r) => /[.!?]$/.test(r.description)),
    ).toBe(true)
  })

  test('machines it does not cover load as null', () => {
    expect(loadZagDocs('not-a-machine')).toBeNull()
  })

  test('adds prose, parses value lists, keeps attributes only it knows', () => {
    const described = new Map([
      ['data-state', '"open" | "closed"'],
      ['data-focus', 'Present when focused'],
      ['data-kind', '"a" | "b"'],
      ['data-empty', ''],
      ['data-extra', 'Only in the docs'],
    ])
    expect(
      describeDataAttributes(
        [
          { name: 'data-state', values: ['open', 'closed'] },
          { name: 'data-focus', presence: true },
          { name: 'data-kind' },
          { name: 'data-empty' },
        ],
        described,
      ),
    ).toEqual([
      { name: 'data-state', values: ['open', 'closed'] },
      {
        name: 'data-focus',
        presence: true,
        description: 'Present when focused.',
      },
      { name: 'data-kind', values: ['a', 'b'] },
      { name: 'data-empty' },
      { name: 'data-extra', description: 'Only in the docs.' },
    ])
  })

  test('text helpers', () => {
    expect(asSentence(' Moves focus ')).toBe('Moves focus.')
    expect(asSentence('Done?')).toBe('Done?')
    expect(spellPart('The orientation of the nexttrigger', 'nextTrigger')).toBe(
      'The orientation of the next trigger',
    )
    expect(spellPart('The orientation of the item', 'item')).toBe(
      'The orientation of the item',
    )
  })
})
