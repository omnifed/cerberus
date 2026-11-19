import { join, relative } from 'node:path'
import { Diagnostics } from '../core/diagnostics'
import type { ComponentEntry } from '../core/manifest'
import { capitalize, partExportKey, toKebabCase } from '../core/naming'
import { REACT_PKG_ROOT } from '../core/paths'
import type { AbstractionConfig } from '../manifest'
import { PandaVariants, variantToProp } from './panda'
import { mergePropLists } from './resolver/prop-utils'
import { TypeResolver, type UnresolvedRef } from './resolver/type-resolver'
import type { ComponentDocSpec, PartSpec, PropSpec } from './types'
import { extractConnectPart, type ConnectPart } from './zag/connect'
import { checkKeyboardDrift } from './zag/keyboard'
import { extractMachineDefaults } from './zag/machine'
import { loadZagSource } from './zag/zag-source'

/** Props every Cerberus primitive accepts on top of its Ark/Zag props. */
const PRIMITIVE_PROPS: PropSpec[] = [
  {
    name: 'asChild',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description:
      'Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node.',
  },
  {
    name: 'unstyled',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description:
      'Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes.',
  },
  {
    name: 'css',
    type: 'SystemStyleObject',
    required: false,
    defaultValue: 'undefined',
    description:
      'PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted.',
  },
]

export interface SpecBuilderContext {
  resolver: TypeResolver
  variants: PandaVariants
  diagnostics: Diagnostics
}

export function createSpecBuilderContext(
  diagnostics = new Diagnostics(),
  resolver = new TypeResolver(),
): SpecBuilderContext {
  return { resolver, variants: new PandaVariants(), diagnostics }
}

/**
 * Builds the doc spec for one component: abstractions first, then one primitive per
 * anatomy part. Every type that should resolve but doesn't is reported.
 */
export function buildComponentDocSpec(
  entry: ComponentEntry,
  ctx: SpecBuilderContext = createSpecBuilderContext(),
): ComponentDocSpec {
  ctx.resolver.drainUnresolved()
  const variants = ctx.variants.variantsFor(
    entry.recipe,
    entry.key,
    ctx.diagnostics,
  )
  const zag = loadZagFacts(entry, ctx.diagnostics)
  const inputs: PrimitiveInputs = {
    variantProps: variants.map(variantToProp),
    machineDefaults: zag?.defaults ?? new Map(),
    connect: (part) => zag?.part(part) ?? null,
  }

  const parts: PartSpec[] = [
    ...entry.abstractions.map((abs) => buildAbstraction(entry, abs, ctx)),
    ...entry.primitives.map((part) => buildPrimitive(entry, part, inputs, ctx)),
  ]

  if (zag && entry.a11y) {
    checkKeyboardDrift(
      entry.key,
      entry.a11y.keyboard,
      entry.primitives.map((part) => ({
        exportName: `${entry.name}.${partExportKey(part)}`,
        keys: zag.part(part)?.keyboard ?? [],
        isButton: zag.part(part)?.element === 'button',
      })),
      ctx.diagnostics,
    )
  }

  return {
    name: entry.name,
    key: entry.key,
    description: entry.description,
    variants,
    parts,
    ...(entry.a11y ? { a11y: entry.a11y } : {}),
  }
}

/**
 * An abstraction documents its own props. Props it inherits from one of this
 * component's primitives (`ComponentProps<typeof AccordionItem>`) are recorded in
 * `inherits` instead of being copied, so `unstyled`/`css`/variants appear exactly where
 * they are accepted.
 */
function buildAbstraction(
  entry: ComponentEntry,
  abs: AbstractionConfig,
  ctx: SpecBuilderContext,
): PartSpec {
  const { name, key } = entry
  const { resolver, diagnostics } = ctx
  const subject = `${name}.${abs.name}`
  const file = join(entry.dir, `${abs.file}.tsx`)
  const candidates = [
    ...(abs.types ?? []),
    `${name}${abs.name}Props`,
    `${name}${abs.name}BaseProps`,
    // The default export renders as `<Avatar>`, so its props are usually `AvatarProps`
    ...(abs.isDefaultExport ? [`${name}Props`] : []),
  ]

  const primitiveByIdentifier = new Map(
    entry.primitives.map((part) => [
      `${name}${capitalize(part)}`,
      `${name}.${partExportKey(part)}`,
    ]),
  )

  let props: PropSpec[] = []
  const inherits = new Set<string>()
  const match = candidates.find((c) => resolver.lookupLocal(file, c))
  if (match) {
    props = resolver.resolveExpr(match, file)
    reportUnresolved(ctx, key, subject, (ref) => {
      const target = /typeof\s+([A-Za-z0-9_$]+)/.exec(ref.expr)?.[1]
      const inherited = target && primitiveByIdentifier.get(target)
      if (!inherited) return false
      inherits.add(inherited)
      return true
    })
  } else {
    diagnostics.error(
      key,
      `${subject}: none of [${candidates.join(', ')}] found in ${relative(REACT_PKG_ROOT, file)}`,
    )
  }

  return {
    name: abs.name,
    exportName: subject,
    kind: 'abstraction',
    description: abs.description,
    ...(inherits.size > 0 ? { inherits: [...inherits] } : {}),
    props,
  }
}

interface ZagFacts {
  defaults: Map<string, string>
  part: (part: string) => ConnectPart | null
}

/** What the Zag.js machine behind an Ark component reveals; null for non-Ark ones. */
function loadZagFacts(
  entry: ComponentEntry,
  diagnostics: Diagnostics,
): ZagFacts | null {
  if (!entry.arkEntry) return null
  const source = loadZagSource(entry.key, entry.arkEntry)
  if (!source?.connect) {
    diagnostics.warn(
      entry.key,
      `No Zag.js connect source found for @zag-js/${entry.key}; data attributes and keys are not documented`,
    )
    return null
  }
  const connect = source.connect
  const cache = new Map<string, ConnectPart | null>()
  return {
    defaults: source.machine
      ? extractMachineDefaults(source.machine)
      : new Map(),
    part: (part) => {
      if (!cache.has(part)) cache.set(part, extractConnectPart(connect, part))
      return cache.get(part)!
    },
  }
}

interface PrimitiveInputs {
  variantProps: PropSpec[]
  machineDefaults: Map<string, string>
  connect: (part: string) => ConnectPart | null
}

/** Quote style aside, do two default-value source texts say the same thing? */
const sameDefault = (a: string, b: string) =>
  a.replace(/'/g, '"') === b.replace(/'/g, '"')

/** Fills Root props that lack a JSDoc `@default` from the machine's defaults. */
function applyMachineDefaults(
  props: PropSpec[],
  defaults: Map<string, string>,
  subject: string,
  key: string,
  diagnostics: Diagnostics,
): PropSpec[] {
  return props.map((prop) => {
    const machine = defaults.get(prop.name)
    if (machine === undefined) return prop
    if (prop.defaultValue === undefined)
      return { ...prop, defaultValue: machine }
    if (!sameDefault(prop.defaultValue, machine)) {
      diagnostics.warn(
        key,
        `${subject}.${prop.name}: JSDoc says @default ${prop.defaultValue} but the Zag machine defaults to ${machine}`,
      )
    }
    return prop
  })
}

/** `data-scope`/`data-part` from Zag's anatomy when it has `build()`, else derived. */
function partAttrs(entry: ComponentEntry, part: string) {
  const anatomy = entry.anatomy as {
    build?: () => Record<string, { attrs?: Record<string, string> }>
  }
  const attrs =
    typeof anatomy.build === 'function'
      ? anatomy.build()[part]?.attrs
      : undefined
  return {
    dataScope: attrs?.['data-scope'] ?? entry.key,
    dataPart: attrs?.['data-part'] ?? toKebabCase(part),
  }
}

/** Optional part fields derived from Zag, omitted when empty to keep specs small. */
function zagPartFields(info: ConnectPart | null): Partial<PartSpec> {
  if (!info) return {}
  return {
    ...(info.dataAttributes.length > 0
      ? { dataAttributes: info.dataAttributes }
      : {}),
    ...(info.keyboard.length > 0 ? { keyboard: info.keyboard } : {}),
  }
}

function buildPrimitive(
  entry: ComponentEntry,
  part: string,
  { variantProps, machineDefaults, connect }: PrimitiveInputs,
  ctx: SpecBuilderContext,
): PartSpec {
  const { name, key, arkEntry } = entry
  const { resolver, diagnostics } = ctx
  const isRoot = part === 'root'
  const exportKey = partExportKey(part)
  const subject = `${name}.${exportKey}`
  const partPascal = `${name}${capitalize(part)}`

  let arkProps: PropSpec[] = []
  if (arkEntry) {
    const candidates = [`${partPascal}Props`, `${partPascal}BaseProps`]
    const resolved = candidates
      .map((c) => resolver.lookupExport(arkEntry, c))
      .find((r) => r !== null)
    if (resolved) {
      // Resolve in the declaring file so its own imports (e.g. `@zag-js/*`) are in scope
      arkProps = resolver.resolveDecl(resolved)
      reportUnresolved(ctx, key, subject)
    } else {
      diagnostics.error(
        key,
        `${subject}: none of [${candidates.join(', ')}] exported from @ark-ui/react/${key}`,
      )
    }
  }

  // Recipe variants go on Root, where they cascade to every slot. The machine's
  // defaults apply to Root, which is where its props are passed.
  const ownProps = isRoot
    ? applyMachineDefaults(
        mergePropLists(variantProps, arkProps),
        machineDefaults,
        subject,
        key,
        diagnostics,
      )
    : arkProps

  if (isRoot && entry.rootProvider) {
    // `withRootProvider` renders no element: no data attributes, `asChild` or `css`
    return {
      name: exportKey,
      exportName: subject,
      kind: 'primitive',
      description: `Provides the ${name} context and recipe variants to its parts. Renders no element.`,
      props: ownProps,
    }
  }

  return {
    name: exportKey,
    exportName: subject,
    kind: 'primitive',
    description: isRoot
      ? `The root container of the ${name} component.`
      : `The ${toKebabCase(part)} primitive part of the ${name} component.`,
    ...partAttrs(entry, part),
    ...zagPartFields(connect(part)),
    props: mergePropLists(ownProps, PRIMITIVE_PROPS),
  }
}

/**
 * Reports every reference the resolver gave up on while resolving `subject`.
 * `handleOpaque` may claim an opaque reference (return `true`) so it isn't reported.
 */
function reportUnresolved(
  { resolver, diagnostics }: SpecBuilderContext,
  key: string,
  subject: string,
  handleOpaque: (ref: UnresolvedRef) => boolean = () => false,
): void {
  for (const ref of resolver.drainUnresolved()) {
    const where = relative(REACT_PKG_ROOT, ref.file)
    if (ref.reason === 'opaque') {
      if (handleOpaque(ref)) continue
      diagnostics.warn(
        key,
        `${subject}: inherited props from \`${ref.expr}\` (${where}) are not expanded`,
      )
    } else {
      diagnostics.error(
        key,
        `${subject}: could not resolve \`${ref.expr}\` (${ref.reason}) from ${where}`,
      )
    }
  }
}
