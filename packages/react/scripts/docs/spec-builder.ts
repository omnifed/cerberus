import { join, relative } from 'node:path'
import { Diagnostics } from '../core/diagnostics'
import {
  anatomyParts,
  capitalize,
  partExportKey,
  toKebabCase,
} from '../core/naming'
import { COMPONENTS_DIR, REACT_PKG_ROOT } from '../core/paths'
import type { AbstractionConfig, ComponentConfig } from '../manifest'
import { PandaVariants, variantToProp } from './panda'
import { mergePropLists } from './resolver/prop-utils'
import { TypeResolver } from './resolver/type-resolver'
import type { ComponentDocSpec, PartSpec, PropSpec } from './types'

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

/** Props every Cerberus abstraction accepts. */
const ABSTRACTION_PROPS: PropSpec[] = [
  {
    name: 'unstyled',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description:
      'Strips Cerberus PandaCSS recipe classes from this abstraction layer.',
  },
  {
    name: 'css',
    type: 'SystemStyleObject',
    required: false,
    defaultValue: 'undefined',
    description:
      'PandaCSS style object for custom atomic styling. All PandaCSS style props are also accepted.',
  },
]

export interface SpecBuilderContext {
  resolver: TypeResolver
  variants: PandaVariants
  diagnostics: Diagnostics
}

export function createSpecBuilderContext(
  diagnostics = new Diagnostics(),
): SpecBuilderContext {
  return {
    resolver: new TypeResolver(),
    variants: new PandaVariants(),
    diagnostics,
  }
}

/**
 * Builds the doc spec for one component: abstractions first, then one primitive per
 * anatomy part. Every type that should resolve but doesn't is reported.
 */
export function buildComponentDocSpec(
  config: ComponentConfig,
  ctx: SpecBuilderContext = createSpecBuilderContext(),
): ComponentDocSpec {
  const {
    name,
    key,
    description,
    isArkUI = true,
    abstractions = [],
    a11y,
  } = config
  const { resolver, diagnostics } = ctx

  resolver.drainUnresolved()
  const variants = ctx.variants.variantsFor(key, diagnostics)

  const arkEntry = isArkUI
    ? resolver.resolveModule(
        `@ark-ui/react/${key}`,
        join(REACT_PKG_ROOT, 'package.json'),
      )
    : null
  if (isArkUI && !arkEntry) {
    diagnostics.error(
      key,
      `Could not resolve declaration files for @ark-ui/react/${key}`,
    )
  }

  const parts: PartSpec[] = [
    ...abstractions.map((abs) => buildAbstraction(config, abs, ctx)),
    ...anatomyParts(config.anatomy).map((part) =>
      buildPrimitive(config, part, arkEntry, variants.map(variantToProp), ctx),
    ),
  ]

  return { name, key, description: description.trim(), variants, parts, a11y }
}

function buildAbstraction(
  { name, key }: ComponentConfig,
  abs: AbstractionConfig,
  ctx: SpecBuilderContext,
): PartSpec {
  const { resolver, diagnostics } = ctx
  const subject = `${name}.${abs.name}`
  const file = join(COMPONENTS_DIR, key, `${abs.file}.tsx`)
  const candidates = [
    ...(abs.types ?? []),
    `${name}${abs.name}Props`,
    `${name}${abs.name}BaseProps`,
    // The default export renders as `<Avatar>`, so its props are usually `AvatarProps`
    ...(abs.isDefaultExport ? [`${name}Props`] : []),
  ]

  let props: PropSpec[] = []
  const match = candidates.find((c) => resolver.lookupLocal(file, c))
  if (match) {
    props = resolver.resolveExpr(match, file)
    reportUnresolved(ctx, key, subject)
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
    props: mergePropLists(props, ABSTRACTION_PROPS),
  }
}

function buildPrimitive(
  { name, key }: ComponentConfig,
  part: string,
  arkEntry: string | null,
  variantProps: PropSpec[],
  ctx: SpecBuilderContext,
): PartSpec {
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

  // Recipe variants go on Root, where they cascade to every slot
  const ownProps = isRoot ? mergePropLists(variantProps, arkProps) : arkProps

  return {
    name: exportKey,
    exportName: subject,
    kind: 'primitive',
    description: isRoot
      ? `The root container of the ${name} component.`
      : `The ${toKebabCase(part)} primitive part of the ${name} component.`,
    dataScope: key,
    dataPart: toKebabCase(part),
    props: mergePropLists(ownProps, PRIMITIVE_PROPS),
  }
}

/** Reports every reference the resolver gave up on while resolving `subject`. */
function reportUnresolved(
  { resolver, diagnostics }: SpecBuilderContext,
  key: string,
  subject: string,
): void {
  for (const ref of resolver.drainUnresolved()) {
    const where = relative(REACT_PKG_ROOT, ref.file)
    if (ref.reason === 'opaque') {
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
