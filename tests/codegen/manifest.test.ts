import { describe, expect, test } from 'bun:test'
import { listConfigKeys, loadConfigs } from 'codegen/core/configs'
import { Diagnostics } from 'codegen/core/diagnostics'
import { loadManifest } from 'codegen/core/manifest'
import {
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toRecipeName,
} from 'codegen/core/naming'
import { ComponentDocSpecSchema } from 'codegen/docs/schema'
import { defineComponent } from 'codegen/manifest'
import { planScaffold, registerSlotRecipe } from 'codegen/scaffold'

describe('naming', () => {
  test.each([
    ['date-picker', 'DatePicker', 'datePicker', 'datePicker'],
    ['DatePicker', 'DatePicker', 'datePicker', 'datePicker'],
    ['switch', 'Switch', 'switch', 'switchRecipe'],
    ['hover-card', 'HoverCard', 'hoverCard', 'hoverCard'],
  ])('%s → %s / %s / recipe %s', (input, pascal, camel, recipe) => {
    expect(toPascalCase(input)).toBe(pascal)
    expect(toCamelCase(input)).toBe(camel)
    expect(toRecipeName(input)).toBe(recipe)
  })

  test('kebab round-trips through PascalCase', () => {
    expect(toKebabCase(toPascalCase('date picker'))).toBe('date-picker')
  })
})

describe('configs', () => {
  test('every file in configs/ loads, keyed by file name', async () => {
    const configs = await loadConfigs()
    expect(configs.map((c) => c.key)).toEqual(listConfigKeys())
  })
})

describe('loadManifest', () => {
  const anatomy = (keys: string[]) => ({ keys: () => keys })

  test('derives name, recipe and source', () => {
    const diagnostics = new Diagnostics()
    const [accordion, admonition] = loadManifest(
      [
        defineComponent({
          key: 'accordion',
          anatomy: anatomy(['root', 'item']),
          description: ' x ',
        }),
        defineComponent({
          key: 'admonition',
          anatomy: anatomy(['root']),
          description: 'x',
        }),
      ],
      diagnostics,
    )
    expect(accordion).toMatchObject({
      name: 'Accordion',
      recipe: 'accordion',
      source: 'ark',
      rootProvider: false,
      description: 'x',
    })
    expect(accordion.arkEntry).toEndWith('.d.ts')
    expect(admonition).toMatchObject({ source: 'cerberus', arkEntry: null })
    expect(diagnostics.items).toEqual([])
  })

  test('Ark anatomies without a root part get a root provider', () => {
    const [entry] = loadManifest(
      [
        defineComponent({
          key: 'hover-card',
          anatomy: anatomy(['trigger', 'content']),
          description: 'x',
        }),
      ],
      new Diagnostics(),
    )
    expect(entry.rootProvider).toBe(true)
    expect(entry.primitives).toEqual(['root', 'trigger', 'content'])
  })

  test('reports bad keys, duplicates and missing abstraction files', () => {
    const diagnostics = new Diagnostics()
    const base = { anatomy: anatomy(['root']), description: 'x' }
    loadManifest(
      [
        defineComponent({ ...base, key: 'Bad_Key' }),
        defineComponent({
          ...base,
          key: 'accordion',
          abstractions: [{ name: 'Nope', file: 'nope', description: 'x' }],
        }),
        defineComponent({ ...base, key: 'accordion' }),
      ],
      diagnostics,
    )
    const messages = diagnostics.items.map((d) => d.message).join('\n')
    expect(messages).toContain('Key must be kebab-case')
    expect(messages).toContain('Duplicate component key')
    expect(messages).toContain('nope.tsx does not exist')
  })
})

describe('spec schema', () => {
  const valid = {
    name: 'X',
    key: 'x',
    description: '',
    variants: [],
    parts: [
      {
        name: 'Root',
        exportName: 'X.Root',
        kind: 'primitive',
        description: '',
        props: [],
      },
    ],
  }

  test('accepts a minimal spec', () => {
    expect(ComponentDocSpecSchema.safeParse(valid).success).toBe(true)
  })

  test('rejects unknown fields and dangling inherits', () => {
    expect(
      ComponentDocSpecSchema.safeParse({ ...valid, extra: true }).success,
    ).toBe(false)
    const dangling = {
      ...valid,
      parts: [{ ...valid.parts[0], inherits: ['X.Missing'] }],
    }
    expect(ComponentDocSpecSchema.safeParse(dangling).success).toBe(false)
  })
})

describe('scaffold', () => {
  test('plans a new Ark component without writing anything', async () => {
    const plan = await planScaffold('HoverCard')
    expect(plan.names).toMatchObject({
      key: 'hover-card',
      name: 'HoverCard',
      recipe: 'hoverCard',
      source: 'ark',
      rootProvider: true,
    })
    expect(plan.names.parts[0]).toBe('root')
    const config = plan.files.find((f) =>
      f.path.endsWith('configs/hover-card.ts'),
    )
    expect(config?.content).toContain('export const hoverCardConfig')
    expect(config?.content).toContain("from '@ark-ui/react/anatomy'")
  })

  test('refuses existing components and configs', async () => {
    await expect(planScaffold('accordion')).rejects.toThrow('already exists')
    await expect(planScaffold('DatePicker')).rejects.toThrow('already exists')
  })

  test('refuses a Cerberus-only component without an anatomy', async () => {
    await expect(planScaffold('FancyThing')).rejects.toThrow(
      'fancyThingAnatomy',
    )
  })

  test('registerSlotRecipe adds the import and entry once', () => {
    const source = `import { accordion } from './slots/accordion'

export const slotRecipes = {
  accordion,
}
`
    const once = registerSlotRecipe(source, 'hoverCard')!
    expect(once).toContain(`import { hoverCard } from './slots/hoverCard'`)
    expect(once).toContain(`  accordion,\n  hoverCard,\n}`)
    expect(registerSlotRecipe(once, 'hoverCard')).toBeNull()
  })
})
