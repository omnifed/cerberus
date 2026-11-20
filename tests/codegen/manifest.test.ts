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
import { generateComponentAPI } from 'codegen/generate-api'
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

  test('`ark` decouples the folder key from the Ark/Zag key', () => {
    const diagnostics = new Diagnostics()
    const [radio] = loadManifest(
      [
        defineComponent({
          key: 'radio',
          ark: 'radio-group',
          anatomy: anatomy(['root', 'item']),
          description: 'x',
        }),
      ],
      diagnostics,
    )
    expect(radio).toMatchObject({
      key: 'radio',
      name: 'Radio',
      arkKey: 'radio-group',
      arkName: 'RadioGroup',
      source: 'ark',
    })
    expect(radio.arkEntry).toEndWith('.d.ts')
    expect(diagnostics.items).toEqual([])
  })

  test('rejects members, exports, overrides and recipe: false it cannot honor', () => {
    const diagnostics = new Diagnostics()
    const base = { anatomy: anatomy(['root', 'group']), description: 'x' }
    loadManifest(
      [
        defineComponent({ ...base, key: 'admonition', recipe: false }),
        defineComponent({
          ...base,
          key: 'accordion',
          arkMembers: ['Context', 'item-group', 'Root'],
          exports: [
            { from: './nope', values: ['x'] },
            { from: '@ark-ui/react' },
          ],
          parts: { group: { recipe: 'buttonGroup' }, nope: {} },
          providers: ['root', 'HiddenInput'],
        }),
      ],
      diagnostics,
    )
    expect(diagnostics.items.map((d) => d.message)).toEqual([
      'recipe: false is only for Ark components; Cerberus-only ones write their own primitives',
      'arkMembers: `item-group` must be a PascalCase member of the Ark namespace (Ark components only)',
      'arkMembers: `Root` is already an anatomy part',
      'providers: `root` must be a non-root anatomy part, or an arkMembers `<Part>Provider` whose part is in the anatomy',
      'providers: `HiddenInput` must be a non-root anatomy part, or an arkMembers `<Part>Provider` whose part is in the anatomy',
      'exports: src/components/accordion/nope.ts(x) does not exist',
      "exports from '@ark-ui/react' lists nothing",
      'parts.group.recipe: per-part recipes are only supported for Cerberus-only components',
      'parts.nope: not an anatomy part',
    ])
  })
})

describe('generated API', () => {
  const generate = (config: Parameters<typeof defineComponent>[0]) => {
    const [entry] = loadManifest([defineComponent(config)], new Diagnostics())
    const files = generateComponentAPI(entry)
    const file = (name: string) =>
      files.find((f) => f.path.endsWith(`/${name}`))?.content ?? ''
    return { primitives: file('primitives.ts'), api: file('api.ts') }
  }

  test('recipe-less Ark parts are wrapped with styled(); members and exports are added', () => {
    const { primitives, api } = generate({
      key: 'radio',
      ark: 'radio-group',
      recipe: false,
      anatomy: { keys: () => ['root', 'item'] },
      arkMembers: ['RootProvider', 'Context', 'ItemContext', 'ItemHiddenInput'],
      exports: [
        { from: './helpers', values: ['useThing'], types: ['Thing'] },
        { from: '@ark-ui/react/radio-group', values: ['useRadioGroup'] },
      ],
      description: 'x',
    })
    expect(primitives).toContain(
      "import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'",
    )
    expect(primitives).not.toContain('createSlotRecipeContext')
    expect(primitives).toContain(
      'export const RadioRoot = styled(ArkRadioGroup.Root)',
    )
    expect(primitives).toContain(
      'export const RadioItem = styled(ArkRadioGroup.Item)',
    )
    expect(primitives).toContain(
      'export const RadioRootProvider = styled(ArkRadioGroup.RootProvider)',
    )
    expect(primitives).toContain(
      'export const RadioContext = ArkRadioGroup.Context',
    )
    expect(primitives).toContain(
      'export const RadioItemContext = ArkRadioGroup.ItemContext',
    )
    expect(api).toContain('  RootProvider: RadioRootProvider,')
    expect(api).toContain('  ItemContext: RadioItemContext,')
    expect(api).toContain("export { useThing } from './helpers'")
    expect(api).toContain("export type { Thing } from './helpers'")
    expect(api).toContain(
      "export { useRadioGroup } from '@ark-ui/react/radio-group'",
    )
  })

  test('a slot-recipe RootProvider provides the recipe like Root', () => {
    const { primitives } = generate({
      key: 'collapsible',
      anatomy: { keys: () => ['root', 'trigger'] },
      arkMembers: ['RootProvider'],
      description: 'x',
    })
    expect(primitives).toContain(
      "export const CollapsibleRootProvider = withProvider(ArkCollapsible.RootProvider, 'root')",
    )
    expect(primitives).not.toContain('styled(')
  })

  test('providers render outside Root and provide the slot recipe themselves', () => {
    const { primitives } = generate({
      key: 'checkbox',
      anatomy: { keys: () => ['root', 'label', 'group'] },
      arkMembers: ['GroupProvider', 'HiddenInput'],
      providers: ['group', 'GroupProvider'],
      description: 'x',
    })
    expect(primitives).toContain(
      "export const CheckboxGroup = withProvider(ArkCheckbox.Group, 'group')",
    )
    expect(primitives).toContain(
      "withProvider(ArkCheckbox.GroupProvider, 'group')",
    )
    expect(primitives).toContain(
      "export const CheckboxLabel = withContext(ArkCheckbox.Label, 'label')",
    )
    expect(primitives).toContain('styled(ArkCheckbox.HiddenInput)')
  })

  test('memberSlots styles an Ark member outside the anatomy with an existing slot', () => {
    const { primitives, api } = generate({
      key: 'menu',
      anatomy: { keys: () => ['trigger', 'item', 'itemGroup'] },
      arkMembers: ['CheckboxItem', 'RadioItemGroup'],
      memberSlots: { CheckboxItem: 'item', RadioItemGroup: 'itemGroup' },
      description: 'x',
    })
    expect(primitives).toContain(
      "export const MenuCheckboxItem = withContext(ArkMenu.CheckboxItem, 'item')",
    )
    expect(primitives).toContain(
      "withContext(ArkMenu.RadioItemGroup, 'itemGroup')",
    )
    expect(primitives).not.toContain('styled(')
    expect(api).toContain('  CheckboxItem: MenuCheckboxItem,')
  })

  test('elementParts render recipe slots outside the anatomy from context', () => {
    const { primitives, api } = generate({
      key: 'popover',
      anatomy: { keys: () => ['trigger', 'content'] },
      elementParts: { header: 'div' },
      description: 'x',
    })
    expect(primitives).toContain("import { ark } from '@ark-ui/react/factory'")
    expect(primitives).toContain(
      "withContext(ark.div, 'header', { defaultProps: { 'data-scope': 'popover', 'data-part': 'header' } })",
    )
    expect(api).toContain('  Header: PopoverHeader,')
  })

  test('collectionGeneric restores the collection item generic on Root and RootProvider', () => {
    const { primitives, api } = generate({
      key: 'combobox',
      anatomy: { keys: () => ['root', 'input'] },
      arkMembers: ['RootProvider'],
      collectionGeneric: ['Root', 'RootProvider'],
      docsSlug: 'select-and-combobox',
      description: 'x',
    })
    expect(primitives).toContain(
      'type ComboboxRootBaseProps as ArkComboboxRootBaseProps',
    )
    expect(primitives).toContain(
      "import type { CollectionItem } from '@ark-ui/react/collection'",
    )
    expect(primitives).toContain(
      "const ComboboxRootStyled = withProvider(ArkCombobox.Root, 'root')",
    )
    expect(primitives).toContain(
      'export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Omit<ComponentProps<typeof ComboboxRootStyled>, keyof ArkComboboxRootBaseProps<CollectionItem>> & ArkComboboxRootBaseProps<T>',
    )
    expect(primitives).toContain(
      'export const ComboboxRoot = ComboboxRootStyled as unknown as <T extends CollectionItem>(props: ComboboxRootProps<T>) => ReactElement',
    )
    expect(primitives).toContain('ComboboxRootProviderStyled')
    expect(primitives).not.toContain('ComboboxInputStyled')
    expect(api).toContain('docs/components/select-and-combobox')
  })

  test('forwardProps keeps CSS-named props on the Ark part', () => {
    const recipeless = generate({
      key: 'pagination',
      anatomy: { keys: () => ['root', 'item'] },
      recipe: false,
      arkMembers: ['RootProvider'],
      forwardProps: { Root: ['page'] },
      description: 'x',
    })
    expect(recipeless.primitives).toContain(
      "export const PaginationRoot = styled(ArkPagination.Root, {}, { forwardProps: ['page'] })",
    )
    expect(recipeless.primitives).toContain(
      'export const PaginationItem = styled(ArkPagination.Item)\n',
    )
    expect(recipeless.primitives).toContain(
      'export const PaginationRootProvider = styled(ArkPagination.RootProvider)\n',
    )

    const slotted = generate({
      key: 'pagination',
      anatomy: { keys: () => ['root', 'item'] },
      forwardProps: { Root: ['page'], Item: ['order'] },
      description: 'x',
    })
    expect(slotted.primitives).toContain(
      "withProvider(ArkPagination.Root, 'root', { forwardProps: ['page'] })",
    )
    expect(slotted.primitives).toContain(
      "withContext(ArkPagination.Item, 'item', { forwardProps: ['order'] })",
    )
  })

  test('forwardProps only names styled Ark members', () => {
    const diagnostics = new Diagnostics()
    loadManifest(
      [
        defineComponent({
          key: 'pagination',
          anatomy: { keys: () => ['root'] },
          arkMembers: ['Context'],
          forwardProps: { Trigger: ['page'], Context: ['page'], Root: [] },
          description: 'x',
        }),
      ],
      diagnostics,
    )
    const messages = diagnostics.items.map((d) => d.message)
    expect(messages).toContain(
      'forwardProps: `Trigger` is not an Ark part or arkMembers entry',
    )
    expect(messages).toContain(
      'forwardProps: `Context` is a render prop and is not styled',
    )
    expect(messages).toContain('forwardProps.Root lists no props')
  })

  test('a slotted component imports styled only for parts outside the anatomy', () => {
    const { primitives } = generate({
      key: 'switch',
      anatomy: { keys: () => ['root', 'thumb'] },
      arkMembers: ['HiddenInput'],
      description: 'x',
    })
    const imports = primitives.split('\n').filter((l) => l.startsWith('import'))
    expect(imports).toEqual([
      "import { Switch as ArkSwitch } from '@ark-ui/react/switch'",
      "import { type ComponentProps, createSlotRecipeContext, styled } from 'styled-system/jsx'",
      "import { switchRecipe } from 'styled-system/recipes'",
    ])
    expect(primitives).toContain(
      'export const SwitchHiddenInput = styled(ArkSwitch.HiddenInput)',
    )
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
