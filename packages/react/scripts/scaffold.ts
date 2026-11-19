/**
 * Scaffolds a new component from its name, then runs the generators.
 *
 *   bun scripts/scaffold.ts DatePicker            create files
 *   bun scripts/scaffold.ts DatePicker --dry-run  list what would be created
 *
 * Writes the config entry (the only thing the generators need) plus one-time starter
 * files: abstraction, Panda recipe (registered in the preset), tests, docs page and
 * demo. Existing files are never overwritten. Generated files (primitives, api, index,
 * doc spec) come from the generators, so they always match the manifest.
 */
import { existsSync, readFileSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { listConfigKeys, loadConfigs } from './core/configs'
import { Diagnostics } from './core/diagnostics'
import { emitFiles, formatSource, type GeneratedFile } from './core/emit'
import { loadManifest, resolveArkEntry } from './core/manifest'
import {
  anatomyParts,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toRecipeName,
} from './core/naming'
import {
  COMPONENTS_DIR,
  CONFIGS_DIR,
  DOCS_CONTENT_DIR,
  DOCS_EXAMPLES_DIR,
  PANDA_PRESET_RECIPES_DIR,
  REPO_ROOT,
  TESTS_DIR,
} from './core/paths'
import { generateComponentAPI } from './generate-api'
import { generateDocSpecs } from './generate-docs-spec'
import * as t from './scaffold/templates'

export interface ScaffoldPlan {
  names: t.ScaffoldNames
  /** Created only when missing */
  files: GeneratedFile[]
  /** In-place edits to existing files; `apply` returns `null` when already done */
  edits: Array<{ path: string; apply: (source: string) => string | null }>
}

const RECIPES_INDEX = join(PANDA_PRESET_RECIPES_DIR, 'index.ts')
const PRESET_ANATOMY = join(PANDA_PRESET_RECIPES_DIR, 'shared', 'anatomy.ts')

/** Loads the anatomy object a new config will import, to derive its parts. */
async function loadAnatomy(
  source: 'ark' | 'cerberus',
  camel: string,
): Promise<{ keys: () => string[] } | null> {
  const mod =
    source === 'ark'
      ? await import('@ark-ui/react/anatomy')
      : await import('@cerberus/panda-preset')
  return (mod as Record<string, unknown>)[`${camel}Anatomy`] as {
    keys: () => string[]
  } | null
}

export async function planScaffold(input: string): Promise<ScaffoldPlan> {
  const key = toKebabCase(toPascalCase(input))
  const name = toPascalCase(key)
  const camel = toCamelCase(key)
  const recipe = toRecipeName(key)

  if (listConfigKeys().includes(key)) {
    throw new Error(`A config for '${key}' already exists in scripts/configs.`)
  }
  const componentDir = join(COMPONENTS_DIR, key)
  if (existsSync(componentDir)) {
    throw new Error(
      `${relative(REPO_ROOT, componentDir)} already exists. The scaffold only creates new ` +
        `components; to migrate an existing one, add scripts/configs/${key}.ts by hand ` +
        `(see configs/accordion.ts) and run generate:api.`,
    )
  }

  const source = resolveArkEntry(key) ? 'ark' : 'cerberus'
  if (
    source === 'cerberus' &&
    !new RegExp(`export const ${camel}Anatomy\\b`).test(
      readFileSync(PRESET_ANATOMY, 'utf-8'),
    )
  ) {
    throw new Error(
      `@ark-ui/react/${key} doesn't exist, so '${name}' is a Cerberus-only component. ` +
        `Add \`${camel}Anatomy\` to ${relative(REPO_ROOT, PRESET_ANATOMY)} first.`,
    )
  }

  const anatomy = await loadAnatomy(source, camel)
  if (!anatomy) throw new Error(`Could not load ${camel}Anatomy`)
  const anatomyKeys = anatomyParts(anatomy)
  const rootProvider = source === 'ark' && !anatomyKeys.includes('root')
  const names: t.ScaffoldNames = {
    key,
    name,
    camel,
    recipe,
    source,
    parts: rootProvider ? ['root', ...anatomyKeys] : anatomyKeys,
    rootProvider,
  }

  // A recipe may already exist for a component that has no React API yet
  const recipeRegistered = new RegExp(
    `import \\{ ${recipe} \\} from './slots/`,
  ).test(readFileSync(RECIPES_INDEX, 'utf-8'))

  const files: GeneratedFile[] = [
    { path: join(CONFIGS_DIR, `${key}.ts`), content: t.configTemplate(names) },
    {
      path: join(componentDir, `${key}.tsx`),
      content: t.abstractionTemplate(names),
    },
    ...(recipeRegistered
      ? []
      : [
          {
            path: join(PANDA_PRESET_RECIPES_DIR, 'slots', `${recipe}.ts`),
            content: t.recipeTemplate(names),
          },
          {
            path: join(
              TESTS_DIR,
              'panda-preset',
              'recipes',
              'slots',
              `${recipe}.test.ts`,
            ),
            content: t.recipeTestTemplate(names),
          },
        ]),
    {
      path: join(TESTS_DIR, 'react', 'components', `${key}.test.tsx`),
      content: t.componentTestTemplate(names),
    },
    {
      path: join(DOCS_CONTENT_DIR, `${key}.mdx`),
      content: t.docsPageTemplate(names),
    },
    {
      path: join(DOCS_EXAMPLES_DIR, key, 'index.tsx'),
      content: t.demosIndexTemplate(),
    },
    {
      path: join(DOCS_EXAMPLES_DIR, key, 'basic.demo.tsx'),
      content: t.basicDemoTemplate(names),
    },
  ]

  const edits: ScaffoldPlan['edits'] = recipeRegistered
    ? []
    : [{ path: RECIPES_INDEX, apply: (src) => registerSlotRecipe(src, recipe) }]

  return { names, files, edits }
}

/** Adds the recipe's import and its `slotRecipes` entry; `null` if already there. */
export function registerSlotRecipe(
  source: string,
  recipe: string,
): string | null {
  if (new RegExp(`import \\{ ${recipe} \\} from './slots/`).test(source))
    return null
  const importLine = `import { ${recipe} } from './slots/${recipe}'`

  const lines = source.split('\n')
  const lastSlotImport = lines.findLastIndex((l) =>
    l.includes(`from './slots/`),
  )
  if (lastSlotImport === -1) throw new Error('No slot recipe imports found')
  lines.splice(lastSlotImport + 1, 0, importLine)

  const withImport = lines.join('\n')
  const blockStart = withImport.indexOf('export const slotRecipes = {')
  if (blockStart === -1)
    throw new Error('`export const slotRecipes = {` not found')
  const blockEnd = withImport.indexOf('\n}', blockStart)
  return `${withImport.slice(0, blockEnd)}\n  ${recipe},${withImport.slice(blockEnd)}`
}

async function applyPlan(plan: ScaffoldPlan): Promise<string[]> {
  const report: string[] = []
  for (const file of plan.files) {
    const rel = relative(REPO_ROOT, file.path)
    if (existsSync(file.path)) {
      report.push(`  skipped  ${rel} (exists)`)
      continue
    }
    await mkdir(dirname(file.path), { recursive: true })
    await writeFile(file.path, formatSource(file.path, file.content))
    report.push(`  created  ${rel}`)
  }
  for (const edit of plan.edits) {
    const rel = relative(REPO_ROOT, edit.path)
    const next = edit.apply(readFileSync(edit.path, 'utf-8'))
    if (next === null) {
      report.push(`  skipped  ${rel} (already registered)`)
      continue
    }
    await writeFile(edit.path, formatSource(edit.path, next))
    report.push(`  updated  ${rel}`)
  }
  return report
}

/** Runs the generators; the new config file is picked up like any other. */
async function generateFor(plan: ScaffoldPlan): Promise<Diagnostics> {
  const configs = await loadConfigs()
  const diagnostics = new Diagnostics()
  const entry = loadManifest(configs, diagnostics).find(
    (e) => e.key === plan.names.key,
  )
  if (!entry) throw new Error(`configs/${plan.names.key}.ts was not loaded`)

  // API files first: the new abstraction's doc spec resolves its generated primitives
  await emitFiles(generateComponentAPI(entry), { check: false })
  const docs = generateDocSpecs(configs)
  diagnostics.items.push(...docs.diagnostics.items)
  await emitFiles(docs.files, { check: false })
  return diagnostics
}

async function main(): Promise<number> {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const input = args.find((a) => !a.startsWith('--'))
  if (!input) {
    console.error('Usage: bun scripts/scaffold.ts <ComponentName> [--dry-run]')
    return 1
  }

  const plan = await planScaffold(input)
  const { key, name, source } = plan.names
  console.log(
    `🧱 ${name} (${key}, ${source === 'ark' ? 'Ark UI' : 'Cerberus-only'})`,
  )

  if (dryRun) {
    for (const f of plan.files)
      console.log(`  would create  ${relative(REPO_ROOT, f.path)}`)
    for (const e of plan.edits)
      console.log(`  would update  ${relative(REPO_ROOT, e.path)}`)
    return 0
  }

  for (const line of await applyPlan(plan)) console.log(line)
  const diagnostics = await generateFor(plan)
  diagnostics.print()

  console.log(`
Next steps:
  1. pnpm --filter docs exec panda codegen --spec   (so recipe variants are documented)
  2. Fill in the TODOs: config description and a11y, abstraction, docs page, demo
  3. pnpm --filter @cerberus-design/react generate:check
`)
  return diagnostics.errorCount > 0 ? 1 : 0
}

if (import.meta.main) {
  main().then(
    (code) => process.exit(code),
    (err) => {
      console.error(`❌ ${err instanceof Error ? err.message : err}`)
      process.exit(1)
    },
  )
}
