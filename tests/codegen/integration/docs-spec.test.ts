import { describe, expect, test } from 'bun:test'
import { existsSync } from 'node:fs'
import { relative } from 'node:path'
import { loadConfigs } from 'codegen/core/configs'
import { loadManifest } from 'codegen/core/manifest'
import {
  DESIGN_SYSTEM_SPEC_PATH,
  REACT_PKG_ROOT,
  REPO_ROOT,
} from 'codegen/core/paths'
import {
  buildComponentDocSpec,
  createSpecBuilderContext,
} from 'codegen/docs/spec-builder'
import type { ComponentDocSpec } from 'codegen/docs/types'
import { ZAG_DOCS_VERSION } from 'codegen/docs/zag/zag-docs'

/**
 * Integration tests against the real installed Ark UI / Zag.js / Panda sources.
 * The snapshot records every part's prop names, so any change to what the generator
 * resolves shows up as a reviewable snapshot diff (`bun test codegen -u` to accept).
 *
 * They need the docs Panda spec (recipe variants). Without it they are skipped with a
 * message, except when `CODEGEN_REQUIRE_SPEC=1` (the generated-docs CI job), where a
 * missing spec fails the run instead of skipping silently.
 */

const SPEC = relative(REPO_ROOT, DESIGN_SYSTEM_SPEC_PATH)
const HAS_SPEC = existsSync(DESIGN_SYSTEM_SPEC_PATH)
if (!HAS_SPEC) {
  const fix = 'run `pnpm --filter docs exec panda codegen --spec`'
  if (process.env.CODEGEN_REQUIRE_SPEC === '1') {
    throw new Error(`${SPEC} is missing and CODEGEN_REQUIRE_SPEC=1; ${fix}.`)
  }
  console.warn(
    `⏭️  Skipping codegen integration tests: ${SPEC} is missing (${fix}).`,
  )
}
const it = test.skipIf(!HAS_SPEC)

/** Version of `@zag-js/<key>` as Ark resolves it */
function zagVersion(key: string): string {
  const ark = Bun.resolveSync('@ark-ui/react/package.json', REACT_PKG_ROOT)
  const pkg = Bun.resolveSync(`@zag-js/${key}/package.json`, ark)
  return (require(pkg) as { version: string }).version
}

const ctx = createSpecBuilderContext()
const { diagnostics } = ctx
const entries = HAS_SPEC
  ? loadManifest(await loadConfigs(), diagnostics, ctx.resolver.modules)
  : []
ctx.entries = entries
const specs = new Map<string, ComponentDocSpec>(
  entries.map((e) => [e.key, buildComponentDocSpec(e, ctx)]),
)

function part(key: string, exportName: string) {
  const found = specs.get(key)?.parts.find((p) => p.exportName === exportName)
  if (!found) throw new Error(`${exportName} not generated`)
  return found
}

it('every expected type resolves (no generator errors)', () => {
  const errors = diagnostics.items.filter((d) => d.severity === 'error')
  expect(errors).toEqual([])
})

describe.skipIf(!HAS_SPEC)('baseline prop counts never regress', () => {
  test.each([
    ['accordion', 'Accordion.Root', 16],
    ['accordion', 'Accordion.Item', 5],
    ['carousel', 'Carousel.Root', 23],
  ])('%s › %s has at least %i props', (key, exportName, min) => {
    expect(part(key, exportName).props.length).toBeGreaterThanOrEqual(min)
  })

  test('recipe-less Cerberus parts document no variants or unstyled', () => {
    expect(specs.get('text')?.variants ?? []).toEqual([])
    const textRoot = part('text', 'Text.Root')
    // Text renders no data attributes, so no selector is documented
    expect(textRoot.dataScope).toBeUndefined()
    expect(textRoot.props.map((p) => p.name)).not.toContain('unstyled')
    expect(
      part('spinner', 'Spinner.Root').props.map((p) => p.name),
    ).not.toContain('unstyled')
  })

  test('abstractions link to the primitive whose props they inherit', () => {
    expect(part('carousel', 'Carousel.El').inherits).toEqual(['Carousel.Root'])
    expect(part('accordion', 'Accordion.ItemGroup').inherits).toEqual([
      'Accordion.Item',
    ])
    // Another component's part is linked to its spec
    expect(part('pagination', 'Pagination.ItemList').inheritsExternal).toEqual([
      { part: 'Group.Root', spec: 'group', docsSlug: 'group' },
    ])
    // An element part outside the Ark anatomy can be inherited from too
    expect(part('field', 'Field.StatusIndicatorWithIcon').inherits).toEqual([
      'Field.StatusIndicator',
    ])
    // A collectionGeneric Root inherits through its private `ComboboxRootStyled`
    expect(part('combobox', 'Combobox.El').inherits).toEqual(['Combobox.Root'])
    // Button.Icon renders no Cerberus primitive, so it accepts no `css`/`unstyled`
    expect(part('buttons', 'Button.Icon').props.map((p) => p.name)).toEqual([
      'children',
      'ref',
    ])
  })

  test('primitives carry data attributes, keys and machine defaults from Zag', () => {
    expect(part('accordion', 'Accordion.Item').dataAttributes).toEqual([
      { name: 'data-state', values: ['open', 'closed'] },
      {
        name: 'data-focus',
        presence: true,
        description: 'Present when focused.',
      },
      {
        name: 'data-disabled',
        presence: true,
        description: 'Present when disabled.',
      },
      {
        name: 'data-orientation',
        reflects: 'orientation',
        description: 'The orientation of the item.',
      },
    ])
    expect(part('accordion', 'Accordion.ItemTrigger').keyboard).toEqual([
      'ArrowDown',
      'ArrowUp',
      'ArrowRight',
      'ArrowLeft',
      'Home',
      'End',
    ])
    const defaultValue = part('accordion', 'Accordion.Root').props.find(
      (p) => p.name === 'defaultValue',
    )
    expect(defaultValue?.defaultValue).toBe('[]')
  })

  test('@zag-js/docs adds keyboard rows, attribute prose and CSS variables', () => {
    expect(ZAG_DOCS_VERSION).toBe(zagVersion('accordion'))
    expect(specs.get('accordion')?.a11y?.keyboard.map((k) => k.key)).toEqual([
      'Space',
      'Enter',
      'Tab',
      'Shift + Tab',
      'ArrowDown',
      'ArrowUp',
      'ArrowRight',
      'ArrowLeft',
      'Home',
      'End',
    ])
    const focus = part('accordion', 'Accordion.Item').dataAttributes?.find(
      (a) => a.name === 'data-focus',
    )
    expect(focus?.description).toBe('Present when focused.')
    expect(
      part('carousel', 'Carousel.Root').cssVars?.map((v) => v.name),
    ).toEqual(['--slides-per-page', '--slide-spacing', '--slide-item-size'])
  })

  test('Accordion.Root resolves Zag props with JSDoc and defaults', () => {
    const props = part('accordion', 'Accordion.Root').props
    const multiple = props.find((p) => p.name === 'multiple')
    expect(multiple?.defaultValue).toBe('false')
    expect(multiple?.description.length).toBeGreaterThan(0)
  })
})

it('every part resolves to the same prop names as last time', () => {
  const summary = Object.fromEntries(
    [...specs.values()].map((spec) => [
      spec.key,
      {
        variants: spec.variants.map((v) => v.name),
        parts: Object.fromEntries(
          spec.parts.map((p) => [p.exportName, p.props.map((x) => x.name)]),
        ),
      },
    ]),
  )
  expect(summary).toMatchSnapshot()
})

it('no props lose their description compared with last time', () => {
  const described = Object.fromEntries(
    [...specs.values()].flatMap((spec) =>
      spec.parts.map((p) => [
        p.exportName,
        p.props.filter((x) => x.description).map((x) => x.name),
      ]),
    ),
  )
  expect(described).toMatchSnapshot()
})
