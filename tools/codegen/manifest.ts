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
  /** Panda recipe export name. Defaults to camelCase of `key` (`switchRecipe` for reserved words) */
  recipe?: string
  /**
   * Detected: `ark` when `@ark-ui/react/<key>` resolves, else `cerberus`. Set it only
   * to override detection.
   */
  source?: 'ark' | 'cerberus'
  abstractions?: AbstractionConfig[]
  /** Public types re-exported from `primitives.ts` (Cerberus-only components) */
  types?: string[]
  a11y?: A11yConfig
}

/** Identity helper that type-checks a config entry. */
export function defineComponent(config: ComponentConfig): ComponentConfig {
  return config
}
