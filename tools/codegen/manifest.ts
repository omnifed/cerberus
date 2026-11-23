/**
 * Per-component config consumed by every generator (API, docs spec, scaffold).
 * Only write what can't be derived: everything optional below has a derived default.
 */
import type { KeyboardMapping } from './docs/types'

export type { KeyboardMapping }

/** Ark/Zag anatomies expose `.keys()`; Cerberus-only ones may too, or be a plain list. */
export type Anatomy = { keys: () => string[] } | readonly string[]

export type AbstractionConfig = {
  /** Member name on the compound component, e.g. `ItemGroup` → `Accordion.ItemGroup` */
  name: string
  /** File in `src/components/<key>/`, without extension */
  file: string
  description: string
  /** Rendered as the compound component itself, e.g. `<Avatar>` */
  isDefaultExport?: boolean
  /** Public types re-exported from `file` (an explicit API decision, not derived) */
  types?: string[]
}

/**
 * Everything is optional. Keyboard rows come from `@zag-js/docs`; `keyboard` here only
 * overrides a row's description (same key) or adds a key the package doesn't describe.
 * Every key the Zag machine handles must end up described, or generation fails.
 */
export type A11yConfig = {
  /** WAI-ARIA pattern name; set together with `apgUrl` */
  pattern?: string
  apgUrl?: string
  keyboard?: KeyboardMapping[]
  notes?: string[]
}

export type ComponentConfig = {
  /** Kebab-case key: the folder name and the `@ark-ui/react/<key>` subpath */
  key: string
  anatomy: Anatomy
  description: string
  /** Defaults to PascalCase of `key` */
  name?: string
  /**
   * The `@ark-ui/react/<ark>` subpath (and `@zag-js/<ark>` machine) when it differs
   * from `key`, e.g. `radio-group` for the `radio` folder. Defaults to `key`.
   */
  ark?: string
  /**
   * Panda recipe export name. Defaults to camelCase of `key` (`switchRecipe` for
   * reserved words). `false` for a component styled without a recipe (a Cerberus-only
   * one documents no variants or `unstyled`; for an Ark one): its
   * parts are wrapped with Panda's `styled()` (style props, `css`; Ark handles `asChild`).
   */
  recipe?: string | false
  /**
   * Detected: `ark` when `@ark-ui/react/<ark>` resolves, else `cerberus`. Set it only
   * to override detection.
   */
  source?: 'ark' | 'cerberus'
  /**
   * Ark namespace members to expose besides the anatomy parts:
   * - `RootProvider`: styled like `Root`, driven by `useX()` state
   * - `*Context` (`Context`, `ItemContext`): render props, passed through
   * - any other part outside the anatomy (`HiddenInput`, `HiddenSelect`): no recipe
   *   slot exists for it, so it's wrapped with Panda's `styled()` (style props, `css`)
   */
  arkMembers?: string[]
  /**
   * Parts that render outside `Root` and so must provide the slot recipe themselves,
   * e.g. `group` (Checkbox.Group wraps several roots). An `arkMembers` entry named
   * `<Part>Provider` (`GroupProvider`) can be listed too; it provides `<part>`'s slot.
   */
  providers?: string[]
  /**
   * Styles an `arkMembers` part outside the anatomy with an existing slot, e.g.
   * `{ CheckboxItem: 'item' }` for Menu.CheckboxItem. Without it such a member is
   * unstyled.
   */
  memberSlots?: Record<string, string>
  /**
   * Recipe slots outside the Ark anatomy, rendered as plain elements that read the
   * recipe from context, e.g. `{ header: 'div' }` → `Popover.Header` =
   * `withContext(ark.div, 'header')`.
   */
  elementParts?: Record<string, string>
  /**
   * Members whose Ark component is generic over the collection item type
   * (`Combobox.Root`, `RootProvider`…). `withProvider` erases that generic; these get
   * a generic signature back: `<T extends CollectionItem>(props: XRootProps<T>)`.
   */
  collectionGeneric?: string[]
  /**
   * Props a member forwards to its Ark component although Panda would read them as
   * style props, because they share a CSS property's name: `{ Root: ['page'] }`
   * keeps Pagination's controlled `page` from becoming a `page` style.
   */
  forwardProps?: Record<string, string[]>
  /**
   * Props a member passes to its Ark component when the caller doesn't, emitted as
   * the factory's `defaultProps` (`withProvider`, `withRootProvider`, `styled`):
   * `{ Root: { orientation: 'horizontal' } }` makes RadioGroup's Zag machine agree
   * with the recipe's horizontal default. The docs spec documents the value as the
   * prop's default. Panda splits recipe variants off before Ark sees them, so when a
   * variant is also an Ark prop (`orientation`), list it in `forwardProps` too or the
   * caller's value never reaches Ark; the docs spec fails on such a variant.
   */
  defaultProps?: Record<string, Record<string, DefaultPropValue>>
  /** Docs page slug when it isn't the key, e.g. `progress` for CircularProgress */
  docsSlug?: string
  abstractions?: AbstractionConfig[]
  /** Public types re-exported from `primitives.ts` (Cerberus-only components) */
  types?: string[]
  /**
   * Other public exports of the component module: hooks, helpers, collections.
   * `from` is a file in the component folder (`./helpers`) or a package specifier.
   */
  exports?: ExportConfig[]
  /**
   * Docs-only overrides for a part that doesn't follow the anatomy or the component
   * recipe (Cerberus-only components), e.g. `Button.Group`'s own `buttonGroup` recipe.
   */
  parts?: Record<string, PartOverride>
  a11y?: A11yConfig
}

/** A literal a generated `defaultProps` entry can hold */
export type DefaultPropValue = string | number | boolean | null

export type ExportConfig = {
  from: string
  values?: string[]
  types?: string[]
}

export type PartOverride = {
  /** Recipe whose variants this part accepts */
  recipe?: string
  /** `false` for a part that renders no `data-scope`/`data-part` (no selector) */
  dataScope?: string | false
  dataPart?: string
}

/** Identity helper that type-checks a config entry. */
export function defineComponent(config: ComponentConfig): ComponentConfig {
  return config
}
