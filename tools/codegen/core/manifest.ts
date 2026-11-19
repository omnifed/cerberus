import { existsSync } from 'node:fs'
import { join, relative } from 'node:path'
import { ModuleGraph } from '../docs/resolver/module-graph'
import type {
  A11yConfig,
  AbstractionConfig,
  Anatomy,
  ComponentConfig,
} from '../manifest'
import { Diagnostics } from './diagnostics'
import { anatomyParts, toPascalCase, toRecipeName } from './naming'
import { COMPONENTS_DIR, REACT_PKG_ROOT } from './paths'

/** A component config with every derived field filled in. */
export interface ComponentEntry {
  key: string
  name: string
  recipe: string
  source: 'ark' | 'cerberus'
  /** Declaration file of `@ark-ui/react/<key>`, when `source` is `ark` */
  arkEntry: string | null
  anatomy: Anatomy
  /** Anatomy parts, de-duplicated, in order */
  parts: string[]
  /**
   * Ark components whose anatomy has no `root` part (Dialog, Popover, HoverCard…) have a
   * `Root` that only provides context and renders no element.
   */
  rootProvider: boolean
  /** Members generated as primitives: `parts`, plus `root` first for root providers */
  primitives: string[]
  description: string
  abstractions: AbstractionConfig[]
  types: string[]
  a11y?: A11yConfig
  /** `src/components/<key>` */
  dir: string
}

const KEY = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/
const ANCHOR = join(REACT_PKG_ROOT, 'package.json')

export function resolveArkEntry(
  key: string,
  modules = new ModuleGraph(),
): string | null {
  return modules.resolveModule(`@ark-ui/react/${key}`, ANCHOR)
}

/**
 * Normalizes and checks every config. Problems are reported to `diagnostics`; entries
 * are still returned so a run can report everything at once.
 */
export function loadManifest(
  configs: ComponentConfig[],
  diagnostics: Diagnostics,
  modules = new ModuleGraph(),
): ComponentEntry[] {
  const seen = new Set<string>()

  return configs.map((config) => {
    const { key } = config
    if (!KEY.test(key)) diagnostics.error(key, `Key must be kebab-case`)
    if (seen.has(key)) diagnostics.error(key, `Duplicate component key`)
    seen.add(key)

    const arkEntry = resolveArkEntry(key, modules)
    const detected = arkEntry ? 'ark' : 'cerberus'
    const source = config.source ?? detected
    if (config.source && config.source !== detected) {
      diagnostics.warn(
        key,
        `source is set to '${config.source}' but detection says '${detected}'`,
      )
    }
    if (source === 'ark' && !arkEntry) {
      diagnostics.error(
        key,
        `Could not resolve declaration files for @ark-ui/react/${key}`,
      )
    }

    const parts = anatomyParts(config.anatomy)
    if (parts.length === 0) diagnostics.error(key, 'Anatomy has no parts')

    const dir = join(COMPONENTS_DIR, key)
    const abstractions = config.abstractions ?? []
    for (const abs of abstractions) {
      const file = join(dir, `${abs.file}.tsx`)
      if (!existsSync(file)) {
        diagnostics.error(
          key,
          `Abstraction ${abs.name}: ${relative(REACT_PKG_ROOT, file)} does not exist`,
        )
      }
    }

    const rootProvider = source === 'ark' && !parts.includes('root')

    return {
      key,
      name: config.name ?? toPascalCase(key),
      recipe: config.recipe ?? toRecipeName(key),
      source,
      arkEntry: source === 'ark' ? arkEntry : null,
      anatomy: config.anatomy,
      parts,
      rootProvider,
      primitives: rootProvider ? ['root', ...parts] : parts,
      description: config.description.trim(),
      abstractions,
      types: config.types ?? [],
      a11y: config.a11y,
      dir,
    }
  })
}
