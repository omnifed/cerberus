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
   * reserved words). `false` for an Ark component styled without a slot recipe: its
   * parts are wrapped with `cerberus()` (style props, `css`, `asChild`).
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
   *   slot exists for it, so it's wrapped with `cerberus()` (style props, `css`, `asChild`)
   */
  arkMembers?: string[]
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

export type ExportConfig = {
  from: string
  values?: string[]
  types?: string[]
}

export type PartOverride = {
  /** Recipe whose variants this part accepts */
  recipe?: string
  dataScope?: string
  dataPart?: string
}

/** Identity helper that type-checks a config entry. */
export function defineComponent(config: ComponentConfig): ComponentConfig {
  return config
}
