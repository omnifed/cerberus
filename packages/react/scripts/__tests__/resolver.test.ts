import { beforeEach, describe, expect, test } from 'bun:test'
import { join } from 'node:path'
import {
  drainUnresolved,
  lookupExport,
  parseInterfaceBody,
  parseJsDocBlock,
  resetResolverState,
  resolveExportProps,
  resolvePropsFromExpr,
  splitTopLevel,
  type PropSpec,
} from '../generate-docs-spec'

const FIXTURES = join(import.meta.dir, 'fixtures')
const ARK = join(FIXTURES, 'ark', 'index.d.ts')
const ARK_ROOT = join(FIXTURES, 'ark', 'accordion-root.d.ts')
const CERBERUS = join(FIXTURES, 'cerberus.tsx')

const names = (props: PropSpec[]) => props.map((p) => p.name)
const byName = (props: PropSpec[], name: string) =>
  props.find((p) => p.name === name)

function resolveExport(entry: string, name: string): PropSpec[] {
  const props = resolveExportProps(entry, name)
  if (!props) throw new Error(`${name} not exported from ${entry}`)
  return props
}

beforeEach(() => {
  resetResolverState()
})

describe('scanning primitives', () => {
  test('splitTopLevel ignores delimiters nested in generics, objects and strings', () => {
    expect(splitTopLevel(`A<B, C>, { a: 1, b: 2 }, 'x,y', D`, ',')).toEqual([
      'A<B, C>',
      '{ a: 1, b: 2 }',
      `'x,y'`,
      'D',
    ])
  })

  test('splitTopLevel ignores apostrophes inside comments', () => {
    expect(splitTopLevel(`A /* don't */ & B`, '&')).toEqual([
      "A /* don't */",
      'B',
    ])
  })

  test('parseJsDocBlock reads description and @default', () => {
    expect(
      parseJsDocBlock(`/**
       * First line.
       * Second line.
       * @default "vertical"
       * @see somewhere
       */`),
    ).toEqual({
      description: 'First line. Second line.',
      defaultValue: '"vertical"',
    })
  })

  test('parseInterfaceBody strips `| undefined` from optional props only', () => {
    const props = parseInterfaceBody(`
      a?: string | undefined
      b: string | undefined
    `)
    expect(props.map((p) => [p.name, p.type, p.required])).toEqual([
      ['a', 'string', false],
      ['b', 'string | undefined', true],
    ])
  })
})

describe('apostrophes in JSDoc', () => {
  test('do not swallow the props that follow', () => {
    const props = resolveExport(join(FIXTURES, 'zag', 'index.d.ts'), 'Props')
    expect(names(props)).toEqual(['value', 'multiple', 'id'])
    expect(byName(props, 'value')).toMatchObject({
      description:
        "The value of the expanded items. Don't mutate it; it's owned by the machine.",
      defaultValue: '[]',
    })
  })
})

describe('module resolution', () => {
  test('namespaced imports resolve against the imported module', () => {
    const props = resolveExport(ARK, 'UseAccordionProps')
    expect(names(props)).toEqual(['value', 'multiple', 'id'])
  })

  test('same-named types in unrelated modules never collide', () => {
    expect(names(resolveExport(ARK, 'UseAccordionProps'))).not.toContain(
      'wrong',
    )
    expect(names(resolvePropsFromExpr('Unrelated', ARK_ROOT))).toEqual([
      'wrong',
    ])
  })

  test('`export { A as B } from` follows the alias to the right file', () => {
    const found = lookupExport(ARK, 'ItemProps')
    expect(found?.file).toBe(join(FIXTURES, 'ark', 'accordion-item.d.ts'))
  })

  test('a local alias that shadows an imported name does not resolve to itself', () => {
    const props = resolveExport(ARK, 'AccordionItemBaseProps')
    expect(names(props)).toEqual(['value', 'disabled', 'asChild'])
  })

  test('`export *` and aliased re-exports inside a package entry', () => {
    const zagEntry = join(FIXTURES, 'zag', 'index.d.ts')
    expect(names(resolveExport(zagEntry, 'ItemState'))).toEqual([
      'value',
      'disabled',
    ])
  })

  test('HTML attribute bags are skipped on purpose and not reported', () => {
    const props = resolveExport(ARK, 'AccordionItemProps')
    expect(names(props)).toEqual(['value', 'disabled', 'asChild'])
    expect(drainUnresolved()).toEqual([])
  })
})

describe('utility types', () => {
  test('Omit, Optional and Assign compose', () => {
    const props = resolveExport(ARK, 'AccordionRootProps')
    expect(names(props)).toEqual([
      'value',
      'multiple',
      'id',
      'lazyMount',
      'asChild',
    ])
    // `Optional<…, 'id'>` turns the required zag `id` optional
    expect(byName(props, 'id')?.required).toBe(false)
    // JSDoc survives the trip through every wrapper
    expect(byName(props, 'asChild')?.defaultValue).toBe('false')
  })

  test('Pick, Partial and Required', () => {
    expect(names(resolvePropsFromExpr('Picked', ARK_ROOT))).toEqual([
      'multiple',
      'id',
    ])
    const all = resolvePropsFromExpr('AllRequired', ARK_ROOT)
    expect(all.every((p) => p.required)).toBe(true)
  })

  test("indexed access like `ns.Schema['props']`", () => {
    const props = resolvePropsFromExpr('FromSchema', ARK_ROOT)
    expect(names(props)).toEqual(['value', 'multiple', 'id', 'dir'])
    expect(byName(props, 'dir')?.type).toBe(`'ltr' | 'rtl'`)
  })
})

describe('unions', () => {
  test('a prop is required only when every branch requires it', () => {
    const props = resolvePropsFromExpr('UnionProps', CERBERUS)
    expect(names(props)).toEqual([
      'value',
      'disabled',
      'asChild',
      'src',
      'alt',
      'fallback',
    ])
    expect(props.filter((p) => p.required).map((p) => p.name)).toEqual([
      'value',
    ])
    expect(drainUnresolved()).toEqual([])
  })
})

describe('unresolved references are reported, not silently dropped', () => {
  test('missing type', () => {
    expect(resolvePropsFromExpr('Broken', CERBERUS)).toEqual([])
    expect(drainUnresolved()).toEqual([
      { expr: 'MissingType', file: CERBERUS, reason: 'not-found' },
    ])
  })

  test('unsupported expression', () => {
    resolvePropsFromExpr('WithMapped', CERBERUS)
    expect(drainUnresolved().map((r) => r.reason)).toEqual(['unsupported'])
  })

  test('`ComponentProps<typeof X>` is reported as opaque', () => {
    const props = resolvePropsFromExpr('ItemGroupProps', CERBERUS)
    expect(names(props)).toEqual(['heading', 'indicatorPosition'])
    expect(drainUnresolved()).toEqual([
      {
        expr: 'ComponentProps<typeof AccordionItem>',
        file: CERBERUS,
        reason: 'opaque',
      },
    ])
  })
})

describe('known gaps (fixed by the Phase 2 tokenizer)', () => {
  test.failing('interface heritage containing an object literal', () => {
    const props = resolvePropsFromExpr('HeritageWithObject', ARK_ROOT)
    expect(names(props)).toEqual(['value', 'multiple', 'id', 'lazyMount'])
  })

  test.failing('multi-line union types keep their type text', () => {
    const props = resolvePropsFromExpr('ItemGroupProps', CERBERUS)
    expect(byName(props, 'indicatorPosition')?.type).toBe(`'start' | 'end'`)
  })
})
