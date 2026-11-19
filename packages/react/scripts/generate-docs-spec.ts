/**
 * Generates a `ComponentDocSpec` JSON per component, plus an `index.ts` barrel, into
 * `docs/generated/api-specs`. `docs/components/component-api.tsx` renders them.
 *
 *   bun scripts/generate-docs-spec.ts           write the specs
 *   bun scripts/generate-docs-spec.ts --check   fail if they are stale (CI)
 *
 * The pieces live in `./docs`: parser → resolver → panda/spec-builder → writers.
 */
import { z } from 'zod'
import { loadConfigs } from './core/configs'
import { Diagnostics } from './core/diagnostics'
import { emitFiles, reportStale, type GeneratedFile } from './core/emit'
import { loadManifest } from './core/manifest'
import { DOCS_SPEC_OUT_DIR } from './core/paths'
import { ComponentDocSpecSchema } from './docs/schema'
import {
  buildComponentDocSpec,
  createSpecBuilderContext,
} from './docs/spec-builder'
import { barrelFile, schemaFile, specJsonFile } from './docs/writers'
import type { ComponentConfig } from './manifest'

export type {
  ComponentDocSpec,
  PartSpec,
  PropSpec,
  VariantSpec,
} from './docs/types'

/**
 * Builds every spec in memory and returns the files to emit plus the diagnostics; the
 * caller decides whether to write or check.
 */
export function generateDocSpecs(configs: ComponentConfig[]): {
  files: GeneratedFile[]
  diagnostics: Diagnostics
} {
  const ctx = createSpecBuilderContext()
  const entries = loadManifest(configs, ctx.diagnostics, ctx.resolver.modules)
  const specs = entries.map((entry) => buildComponentDocSpec(entry, ctx))

  for (const spec of specs) {
    const result = ComponentDocSpecSchema.safeParse(spec)
    if (!result.success) {
      ctx.diagnostics.error(
        spec.key,
        `Spec does not match the schema:\n${z.prettifyError(result.error)}`,
      )
    }
  }

  for (const spec of specs) {
    const summary = spec.parts
      .map((p) => `${p.exportName}(${p.props.length})`)
      .join(', ')
    console.log(`📄 ${spec.name}: ${summary}`)
  }

  return {
    files: [
      ...specs.map(specJsonFile),
      barrelFile(specs.map((s) => s.key)),
      schemaFile(),
    ],
    diagnostics: ctx.diagnostics,
  }
}

async function main(): Promise<number> {
  const check = process.argv.includes('--check')
  const { files, diagnostics } = generateDocSpecs(await loadConfigs())
  diagnostics.print()

  const { stale } = await emitFiles(files, {
    check,
    ownedDirs: [DOCS_SPEC_OUT_DIR],
  })
  reportStale(stale, 'pnpm --filter @cerberus-design/react generate:docs')

  if (diagnostics.errorCount > 0) {
    console.error(
      `\n❌ ${diagnostics.errorCount} error(s) while generating doc specs.`,
    )
    return 1
  }
  if (stale.length > 0) return 1

  console.log(
    check
      ? '\n✅ Doc specs are up to date.'
      : '\n🎉 All component doc specs generated!',
  )
  return 0
}

if (import.meta.main) {
  main().then(
    (code) => process.exit(code),
    (err) => {
      console.error(err)
      process.exit(1)
    },
  )
}
