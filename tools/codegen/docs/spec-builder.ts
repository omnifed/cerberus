import { join, relative } from 'node:path'
import { Diagnostics } from '../core/diagnostics'
import { providerSlot, type ComponentEntry } from '../core/manifest'
import { capitalize, partExportKey, toKebabCase } from '../core/naming'
import { REACT_PKG_ROOT } from '../core/paths'
import type { AbstractionConfig } from '../manifest'
import { PandaVariants, variantToProp } from './panda'
import { mergePropLists } from './resolver/prop-utils'
import { TypeResolver, type UnresolvedRef } from './resolver/type-resolver'
import type {
  A11ySpec,
  ComponentDocSpec,
  KeyboardMapping,
  PartSpec,
  PropSpec,
} from './types'
import { extractConnectPart, type ConnectPart } from './zag/connect'
import { checkKeyboardCoverage, mergeKeyboard } from './zag/keyboard'
import { extractMachineDefaults } from './zag/machine'
import {
  describeDataAttributes,
  loadZagDocs,
  ZAG_DOCS_VERSION,
  type ZagDocs,
} from './zag/zag-docs'
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
  const variants = entry.recipe
    ? ctx.variants.variantsFor(entry.recipe, entry.key, ctx.diagnostics)
    : []
  const zag = loadZagFacts(entry, ctx.diagnostics)
  const inputs: PrimitiveInputs = {
    variantProps: variants.map(variantToProp),
    machineDefaults: zag?.defaults ?? new Map(),
    connect: (part) => zag?.part(part) ?? null,
    docs: zag?.docs ?? null,
  }

  const parts: PartSpec[] = [
    ...entry.abstractions.map((abs) => buildAbstraction(entry, abs, ctx)),
    ...entry.primitives.map((part) => buildPrimitive(entry, part, inputs, ctx)),
    ...entry.arkMembers.map((member) =>
      member === 'RootProvider'
        ? buildPrimitive(entry, 'root', inputs, ctx, member)
        : entry.providers.includes(member)
          ? buildPrimitive(entry, providerSlot(member)!, inputs, ctx, member)
          : entry.memberSlots[member]
            ? buildPrimitive(
                entry,
                entry.memberSlots[member],
                inputs,
                ctx,
                member,
              )
            : member.endsWith('Context')
              ? buildContext(entry, member, ctx)
              : buildUnslotted(entry, member, inputs, ctx),
    ),
  ]

  const a11y = buildA11y(entry, zag, ctx.diagnostics)
  return {
    name: entry.name,
    key: entry.key,
    description: entry.description,
    variants,
    parts,
    ...(a11y ? { a11y } : {}),
  }
}

/**
 * Keyboard rows come from `@zag-js/docs` with the config's overrides applied, and must
 * cover every key the Zag machine handles. Without Zag (Cerberus-only components) the
 * config's rows are used as they are. Omitted when there is nothing to say.
 */
function buildA11y(
  entry: ComponentEntry,
  zag: ZagFacts | null,
  diagnostics: Diagnostics,
): A11ySpec | null {
  const config = entry.a11y ?? {}
  const overrides: KeyboardMapping[] = config.keyboard ?? []
  let keyboard = overrides
  if (zag) {
    const fromDocs = zag.docs?.keyboard ?? []
    keyboard = mergeKeyboard(entry.key, fromDocs, overrides, diagnostics)
    checkKeyboardCoverage(
      entry.key,
      keyboard,
      { fromDocs, overrides },
      entry.primitives.map((part) => ({
        exportName: `${entry.name}.${partExportKey(part)}`,
        keys: zag.part(part)?.keyboard ?? [],
        isButton: zag.part(part)?.element === 'button',
      })),
      diagnostics,
    )
  }
  if (keyboard.length === 0 && !config.pattern && !config.notes?.length) {
    return null
  }
  return {
    ...(config.pattern ? { pattern: config.pattern } : {}),
    ...(config.apgUrl ? { apgUrl: config.apgUrl } : {}),
    keyboard,
    ...(config.notes ? { notes: config.notes } : {}),
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
  /** Descriptions from `@zag-js/docs`; null when it doesn't cover the machine */
  docs: ZagDocs | null
}

/** What the Zag.js machine behind an Ark component reveals; null for non-Ark ones. */
function loadZagFacts(
  entry: ComponentEntry,
  diagnostics: Diagnostics,
): ZagFacts | null {
  if (!entry.arkEntry) return null
  const source = loadZagSource(entry.arkKey, entry.arkEntry)
  if (!source?.connect) {
    diagnostics.warn(
      entry.key,
      `No Zag.js connect source found for @zag-js/${entry.arkKey}; data attributes and keys are not documented`,
    )
    return null
  }
  if (source.version !== ZAG_DOCS_VERSION) {
    diagnostics.error(
      entry.key,
      `@zag-js/docs is ${ZAG_DOCS_VERSION} but ${source.packageName} is ${source.version}; pin @zag-js/docs to ${source.version} in tools/codegen/package.json`,
    )
  }
  const connect = source.connect
  const cache = new Map<string, ConnectPart | null>()
  return {
    docs: loadZagDocs(source.packageName.replace('@zag-js/', '')),
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
  docs: ZagDocs | null
}

/** Quote style aside, do two default-value source texts say the same thing? */
const sameDefault = (a: string, b: string) => {
  // Machine sources escape non-ASCII (`"\\u25CB"`); JSDoc writes the character
  const norm = (s: string) =>
    s
      .replace(/'/g, '"')
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex: string) =>
        String.fromCharCode(Number.parseInt(hex, 16)),
      )
  return norm(a) === norm(b)
}

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

/**
 * `data-scope`/`data-part`: a config override, else Zag's anatomy when it has
 * `build()`, else derived from the key and part.
 */
function partAttrs(entry: ComponentEntry, part: string) {
  const override = entry.partOverrides[part]
  const anatomy = entry.anatomy as {
    build?: () => Record<string, { attrs?: Record<string, string> }>
  }
  const attrs =
    typeof anatomy.build === 'function'
      ? anatomy.build()[part]?.attrs
      : undefined
  return {
    dataScope: override?.dataScope ?? attrs?.['data-scope'] ?? entry.key,
    dataPart: override?.dataPart ?? attrs?.['data-part'] ?? toKebabCase(part),
  }
}

/** Props of Ark's `<arkName><member>Props` (or `…BaseProps`), resolved in place. */
function arkPropsFor(
  entry: ComponentEntry,
  member: string,
  subject: string,
  ctx: SpecBuilderContext,
): PropSpec[] {
  const { arkEntry, arkName, arkKey, key } = entry
  if (!arkEntry) return []
  // Ark sometimes names part types with a singular prefix: `Tabs` → `TabListProps`
  const prefixes = [
    arkName,
    ...(arkName.endsWith('s') ? [arkName.slice(0, -1)] : []),
  ]
  const candidates = prefixes.flatMap((prefix) => [
    `${prefix}${member}Props`,
    `${prefix}${member}BaseProps`,
  ])
  const resolved = candidates
    .map((c) => ctx.resolver.lookupExport(arkEntry, c))
    .find((r) => r !== null)
  if (!resolved) {
    ctx.diagnostics.error(
      key,
      `${subject}: none of [${candidates.join(', ')}] exported from @ark-ui/react/${arkKey}`,
    )
    return []
  }
  // Resolve in the declaring file so its own imports (e.g. `@zag-js/*`) are in scope
  const props = ctx.resolver.resolveDecl(resolved)
  reportUnresolved(ctx, key, subject)
  return props
}

/** A render-prop context (`Context`, `ItemContext`): Ark's props, nothing styled. */
function buildContext(
  entry: ComponentEntry,
  member: string,
  ctx: SpecBuilderContext,
): PartSpec {
  const subject = `${entry.name}.${member}`
  const scope =
    member === 'Context'
      ? ''
      : `${toKebabCase(member.replace(/Context$/, ''))} `
  return {
    name: member,
    exportName: subject,
    kind: 'primitive',
    description: `Exposes the ${entry.name} ${scope}state to a render function. Renders no element.`,
    props: arkPropsFor(entry, member, subject, ctx),
  }
}

/** Optional part fields derived from Zag, omitted when empty to keep specs small. */
function zagPartFields(
  part: string,
  info: ConnectPart | null,
  docs: ZagDocs | null,
): Partial<PartSpec> {
  if (!info) return {}
  const dataAttributes = docs
    ? describeDataAttributes(info.dataAttributes, docs.dataAttributes(part))
    : info.dataAttributes
  const cssVars = docs?.cssVars(part) ?? []
  return {
    ...(dataAttributes.length > 0 ? { dataAttributes } : {}),
    ...(info.keyboard.length > 0 ? { keyboard: info.keyboard } : {}),
    ...(cssVars.length > 0 ? { cssVars } : {}),
  }
}

/** An Ark part outside the anatomy (`HiddenInput`): `styled()`-wrapped, no recipe slot. */
function buildUnslotted(
  entry: ComponentEntry,
  member: string,
  { connect, docs }: PrimitiveInputs,
  ctx: SpecBuilderContext,
): PartSpec {
  const subject = `${entry.name}.${member}`
  const part = member[0].toLowerCase() + member.slice(1)
  return {
    name: member,
    exportName: subject,
    kind: 'primitive',
    description: `The ${toKebabCase(part)} primitive part of the ${entry.name} component. It has no recipe slot, so it is unstyled.`,
    ...zagPartFields(part, connect(part), docs),
    props: mergePropLists(
      arkPropsFor(entry, member, subject, ctx),
      PRIMITIVE_PROPS.filter((p) => p.name !== 'unstyled'),
    ),
  }
}

/**
 * One anatomy part. `member` builds an Ark member that stands in for `part` instead:
 * `RootProvider` is a `Root` whose state comes from `useX()`.
 */
function buildPrimitive(
  entry: ComponentEntry,
  part: string,
  { variantProps, machineDefaults, connect, docs }: PrimitiveInputs,
  ctx: SpecBuilderContext,
  member?: string,
): PartSpec {
  const { name, key } = entry
  const { diagnostics } = ctx
  const isRoot = part === 'root'
  const exportKey = member ?? partExportKey(part)
  const subject = `${name}.${exportKey}`
  const arkProps = arkPropsFor(entry, member ?? capitalize(part), subject, ctx)

  // Recipe variants go on Root, where they cascade to every slot. The machine's
  // defaults apply to Root, which is where its props are passed. A part with its own
  // recipe (Cerberus-only) takes that recipe's variants instead.
  const partRecipe = entry.partOverrides[part]?.recipe
  const ownVariants = partRecipe
    ? ctx.variants
        .variantsFor(partRecipe, `${key}.${part}`, diagnostics)
        .map(variantToProp)
    : isRoot || entry.providers.includes(part)
      ? variantProps
      : []
  const ownProps = isRoot
    ? applyMachineDefaults(
        mergePropLists(ownVariants, arkProps),
        machineDefaults,
        subject,
        key,
        diagnostics,
      )
    : mergePropLists(ownVariants, arkProps)

  if (isRoot && entry.rootProvider) {
    // `withRootProvider` renders no element: no data attributes, `asChild` or `css`
    return {
      name: exportKey,
      exportName: subject,
      kind: 'primitive',
      description: `Provides the ${name} context${entry.recipe ? ' and recipe variants' : ''} to its parts${member ? `, from state created with \`use${entry.arkName}()\`` : ''}. Renders no element.`,
      props: ownProps,
    }
  }

  const hook = `use${entry.arkName}${isRoot ? '' : capitalize(part)}()`
  const description = entry.memberSlots[member ?? '']
    ? `The ${toKebabCase(member!)} primitive part of the ${name} component, styled with the \`${part}\` slot.`
    : member
      ? `The ${isRoot ? 'root container' : `${toKebabCase(part)} part`} of the ${name} component, driven by state created with \`${hook}\`.`
      : isRoot
        ? `The root container of the ${name} component.`
        : `The ${toKebabCase(part)} primitive part of the ${name} component.`
  // Without a slot recipe there is nothing for `unstyled` to strip
  const shared = entry.recipe
    ? PRIMITIVE_PROPS
    : PRIMITIVE_PROPS.filter((p) => p.name !== 'unstyled')

  return {
    name: exportKey,
    exportName: subject,
    kind: 'primitive',
    description,
    ...partAttrs(entry, part),
    ...zagPartFields(part, connect(part), docs),
    props: mergePropLists(ownProps, shared),
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
