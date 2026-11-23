import { existsSync } from 'node:fs'
import { join, relative } from 'node:path'
import { ModuleGraph } from '../docs/resolver/module-graph'
import type {
  A11yConfig,
  AbstractionConfig,
  Anatomy,
  ComponentConfig,
  DefaultPropValue,
  ExportConfig,
  PartOverride,
} from '../manifest'
import { Diagnostics } from './diagnostics'
import { anatomyParts, toPascalCase, toRecipeName } from './naming'
import { COMPONENTS_DIR, REACT_PKG_ROOT } from './paths'

/** A component config with every derived field filled in. */
export interface ComponentEntry {
  key: string
  name: string
  /** Panda recipe export name; null for an Ark component without a slot recipe */
  recipe: string | null
  source: 'ark' | 'cerberus'
  /** `@ark-ui/react/<arkKey>` and `@zag-js/<arkKey>` */
  arkKey: string
  /** Ark's namespace and type prefix, e.g. `RadioGroup` */
  arkName: string
  /** Declaration file of `@ark-ui/react/<arkKey>`, when `source` is `ark` */
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
  /** Extra Ark namespace members (`RootProvider`, `Context`…) */
  arkMembers: string[]
  /** Parts and `*Provider` members that provide the slot recipe outside `Root` */
  providers: string[]
  /** `arkMembers` styled with an anatomy slot */
  memberSlots: Record<string, string>
  /** Recipe slots outside the anatomy, rendered as `ark.<element>` */
  elementParts: Record<string, string>
  /** Members (`Root`, `RootProvider`…) given back Ark's collection item generic */
  collectionGeneric: string[]
  /** Members' props forwarded to Ark despite sharing a CSS property's name */
  forwardProps: Record<string, string[]>
  /** Members' props passed to Ark unless the caller sets them */
  defaultProps: Record<string, Record<string, DefaultPropValue>>
  docsSlug: string
  description: string
  abstractions: AbstractionConfig[]
  types: string[]
  exports: ExportConfig[]
  partOverrides: Record<string, PartOverride>
  a11y?: A11yConfig
  /** `src/components/<key>` */
  dir: string
}

/** An object key in generated source: bare when it's an identifier, else quoted */
export const propertyKey = (key: string) =>
  /^[A-Za-z_$][\w$]*$/.test(key) ? key : defaultPropSource(key)

/** Source text of a `defaultProps` value, e.g. `'horizontal'` */
export const defaultPropSource = (value: DefaultPropValue) =>
  typeof value === 'string'
    ? `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
    : String(value)

const KEY = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/

/** `GroupProvider` → `group`; null for anything that isn't a `<Part>Provider` member. */
export function providerSlot(name: string): string | null {
  const m = /^([A-Z][A-Za-z]*)Provider$/.exec(name)
  if (!m || m[1] === 'Root') return null
  return m[1][0].toLowerCase() + m[1].slice(1)
}
/** A PascalCase member of an Ark namespace, e.g. `HiddenInput` */
const ARK_MEMBER = /^[A-Z][A-Za-z]*$/
/** v1 files the generated `primitives.ts`/`api.ts` replace */
const V1_FILES = ['primitives.tsx', 'parts.ts', 'parts.tsx']
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

    const arkKey = config.ark ?? key
    if (config.ark !== undefined && !KEY.test(config.ark)) {
      diagnostics.error(key, `ark must be kebab-case`)
    }
    const arkEntry = resolveArkEntry(arkKey, modules)
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
        `Could not resolve declaration files for @ark-ui/react/${arkKey}`,
      )
    }
    if (config.ark !== undefined && source !== 'ark') {
      diagnostics.error(key, `ark is set, but this is not an Ark component`)
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

    const arkMembers = config.arkMembers ?? []
    for (const member of arkMembers) {
      if (source !== 'ark' || !ARK_MEMBER.test(member)) {
        diagnostics.error(
          key,
          `arkMembers: \`${member}\` must be a PascalCase member of the Ark namespace (Ark components only)`,
        )
      } else if (parts.some((part) => toPascalCase(part) === member)) {
        diagnostics.error(
          key,
          `arkMembers: \`${member}\` is already an anatomy part`,
        )
      }
    }

    const providers = config.providers ?? []
    for (const provider of providers) {
      const slot = providerSlot(provider)
      const isPart = parts.includes(provider) && provider !== 'root'
      const isMember =
        arkMembers.includes(provider) && slot !== null && parts.includes(slot)
      if (!isPart && !isMember) {
        diagnostics.error(
          key,
          `providers: \`${provider}\` must be a non-root anatomy part, or an arkMembers \`<Part>Provider\` whose part is in the anatomy`,
        )
      }
      if (config.recipe === false) {
        diagnostics.error(key, `providers needs a slot recipe; recipe is false`)
      }
    }

    const memberSlots = config.memberSlots ?? {}
    for (const [member, slot] of Object.entries(memberSlots)) {
      if (!arkMembers.includes(member)) {
        diagnostics.error(key, `memberSlots.${member}: not in arkMembers`)
      }
      if (!parts.includes(slot)) {
        diagnostics.error(
          key,
          `memberSlots.${member}: \`${slot}\` is not an anatomy part`,
        )
      }
      if (config.recipe === false) {
        diagnostics.error(
          key,
          `memberSlots needs a slot recipe; recipe is false`,
        )
      }
    }

    const elementParts = config.elementParts ?? {}
    for (const [slot, element] of Object.entries(elementParts)) {
      if (parts.includes(slot)) {
        diagnostics.error(key, `elementParts.${slot}: already an anatomy part`)
      }
      if (!/^[a-z][a-z0-9]*$/.test(element)) {
        diagnostics.error(
          key,
          `elementParts.${slot}: \`${element}\` is not an element name`,
        )
      }
      if (source !== 'ark' || config.recipe === false) {
        diagnostics.error(
          key,
          `elementParts is for Ark components with a slot recipe`,
        )
      }
    }

    const collectionGeneric = config.collectionGeneric ?? []
    const memberNames = [
      ...parts.map(toPascalCase),
      ...(config.arkMembers ?? []),
    ]
    for (const member of collectionGeneric) {
      if (source !== 'ark' || !memberNames.includes(member)) {
        diagnostics.error(
          key,
          `collectionGeneric: \`${member}\` is not an Ark part or arkMembers entry`,
        )
      }
    }

    const forwardProps = config.forwardProps ?? {}
    for (const [member, props] of Object.entries(forwardProps)) {
      if (source !== 'ark' || !memberNames.includes(member)) {
        diagnostics.error(
          key,
          `forwardProps: \`${member}\` is not an Ark part or arkMembers entry`,
        )
      }
      if (member.endsWith('Context')) {
        diagnostics.error(
          key,
          `forwardProps: \`${member}\` is a render prop and is not styled`,
        )
      }
      if (props.length === 0) {
        diagnostics.error(key, `forwardProps.${member} lists no props`)
      }
    }

    const defaultProps = config.defaultProps ?? {}
    for (const [member, props] of Object.entries(defaultProps)) {
      if (source !== 'ark' || !memberNames.includes(member)) {
        diagnostics.error(
          key,
          `defaultProps: \`${member}\` is not an Ark part or arkMembers entry`,
        )
      }
      if (member.endsWith('Context')) {
        diagnostics.error(
          key,
          `defaultProps: \`${member}\` is a render prop and is not styled`,
        )
      }
      if (Object.keys(props).length === 0) {
        diagnostics.error(key, `defaultProps.${member} sets no props`)
      }
    }

    const exports = config.exports ?? []
    for (const { from, values = [], types = [] } of exports) {
      if (values.length + types.length === 0) {
        diagnostics.error(key, `exports from '${from}' lists nothing`)
      }
      if (
        from.startsWith('.') &&
        !['.ts', '.tsx'].some((ext) => existsSync(join(dir, `${from}${ext}`)))
      ) {
        diagnostics.error(
          key,
          `exports: ${relative(REACT_PKG_ROOT, join(dir, from))}.ts(x) does not exist`,
        )
      }
    }

    const partOverrides = config.parts ?? {}
    for (const [part, override] of Object.entries(partOverrides)) {
      const isPart = parts.includes(part)
      const isMember = part in elementParts || arkMembers.includes(part)
      if (!isPart && !isMember) {
        diagnostics.error(
          key,
          `parts.${part}: not an anatomy part, elementParts slot or arkMembers entry`,
        )
      } else if (
        !isPart &&
        (override.recipe !== undefined ||
          override.dataScope !== undefined ||
          override.dataPart !== undefined)
      ) {
        diagnostics.error(
          key,
          `parts.${part}: only \`description\` applies outside the anatomy`,
        )
      }
      if (override.description !== undefined && !override.description.trim()) {
        diagnostics.error(key, `parts.${part}.description is empty`)
      }
      if (override.recipe && source === 'ark') {
        diagnostics.error(
          key,
          `parts.${part}.recipe: per-part recipes are only supported for Cerberus-only components`,
        )
      }
    }

    // A v1 file left next to the generated ones is either shadowed (`./primitives`
    // resolves to the generated `.ts`) or dead code that still compiles: both mislead
    if (source === 'ark') {
      for (const file of V1_FILES.filter((f) => existsSync(join(dir, f)))) {
        diagnostics.error(
          key,
          `${relative(REACT_PKG_ROOT, join(dir, file))} is a v1 file; move what's still needed into an abstraction and delete it`,
        )
      }
    } else if (
      existsSync(join(dir, 'primitives.ts')) &&
      existsSync(join(dir, 'primitives.tsx'))
    ) {
      diagnostics.error(
        key,
        `Both primitives.ts and primitives.tsx exist; \`./primitives\` is ambiguous`,
      )
    }

    const rootProvider = source === 'ark' && !parts.includes('root')

    return {
      key,
      name: config.name ?? toPascalCase(key),
      recipe:
        config.recipe === false ? null : (config.recipe ?? toRecipeName(key)),
      source,
      arkKey,
      arkName: toPascalCase(arkKey),
      arkEntry: source === 'ark' ? arkEntry : null,
      arkMembers,
      providers,
      memberSlots,
      elementParts,
      collectionGeneric,
      forwardProps,
      defaultProps,
      docsSlug: config.docsSlug ?? key,
      anatomy: config.anatomy,
      parts,
      rootProvider,
      primitives: rootProvider ? ['root', ...parts] : parts,
      description: config.description.trim(),
      abstractions,
      types: config.types ?? [],
      exports,
      partOverrides,
      a11y: config.a11y,
      dir,
    }
  })
}
