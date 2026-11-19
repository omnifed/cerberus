import { existsSync, readFileSync } from 'node:fs'
import { relative } from 'node:path'
import type { Diagnostics } from '../core/diagnostics'
import { DESIGN_SYSTEM_SPEC_PATH, REPO_ROOT } from '../core/paths'
import type { PropSpec, VariantSpec } from './types'

interface PandaRecipe {
  variants?: Record<string, { values?: unknown[]; allowsBoolean?: boolean }>
  defaultVariants?: Record<string, unknown>
}

interface PandaSpec {
  recipes?: Record<string, PandaRecipe>
  slotRecipes?: Record<string, PandaRecipe>
}

/**
 * Reads recipe variants from Panda v2's `design-system.json` (parsed once per loader).
 */
export class PandaVariants {
  private spec: PandaSpec | null | undefined

  constructor(private readonly specPath = DESIGN_SYSTEM_SPEC_PATH) {}

  private load(): PandaSpec | null {
    if (this.spec === undefined) {
      this.spec = existsSync(this.specPath)
        ? (JSON.parse(readFileSync(this.specPath, 'utf-8')) as PandaSpec)
        : null
    }
    return this.spec
  }

  /**
   * Variants of the `recipe` recipe (slot recipe first), in Panda's order.
   * `scope` names the component in diagnostics.
   */
  variantsFor(
    recipe: string,
    scope: string,
    diagnostics: Diagnostics,
  ): VariantSpec[] {
    const spec = this.load()
    if (!spec) {
      diagnostics.error(
        scope,
        `Panda design-system spec not found at ${relative(REPO_ROOT, this.specPath)}; run \`pnpm --filter docs exec panda codegen --spec\`.`,
      )
      return []
    }

    const config = spec.slotRecipes?.[recipe] ?? spec.recipes?.[recipe]
    if (!config?.variants) return []
    const defaults = config.defaultVariants ?? {}

    return Object.entries(config.variants).map(([name, variant]) => {
      const values = Array.isArray(variant?.values)
        ? variant.values.map(String)
        : Object.keys(variant ?? {})
      const defaultValue = defaults[name]
      return {
        name,
        values,
        defaultValue:
          defaultValue !== undefined ? `'${String(defaultValue)}'` : undefined,
        ...(variant?.allowsBoolean ? { allowsBoolean: true } : {}),
      }
    })
  }
}

/** A recipe variant documented as a prop on the part that receives it. */
export function variantToProp(variant: VariantSpec): PropSpec {
  return {
    name: variant.name,
    type: [
      ...variant.values.map((val) => `'${val}'`),
      ...(variant.allowsBoolean ? ['boolean'] : []),
    ].join(' | '),
    required: false,
    defaultValue: variant.defaultValue,
    description: `PandaCSS recipe variant for ${variant.name}.`,
  }
}
