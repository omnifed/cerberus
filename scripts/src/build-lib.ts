/**
 * Shared library build for the published packages (react, data-grid, signals).
 *
 * Emits one output file per source module (like Rollup's `preserveModules`)
 * in both ESM (`.js`) and CJS (`.cjs`), then emits `.d.ts` declarations with
 * tsc (`tsconfig.build.json` in the package) and mirrors them to `.d.cts`.
 *
 * Each package has a small `build.ts` that calls `buildLibrary()`.
 */
import { $, Glob, type BunPlugin } from 'bun'
import { existsSync, statSync } from 'node:fs'
import { copyFile, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

export interface BuildLibraryOptions {
  /** Package directory (use `import.meta.dir`). */
  root: string
  /** Bare package names that stay external, along with their subpaths. */
  externalPackages: string[]
  /** Whether an output file (path relative to `dist`) gets `'use client'`. */
  useClient: (relFile: string) => boolean
  /**
   * Add explicit extensions to relative specifiers in declaration files
   * (`.js` in `.d.ts`, `.cjs` in `.d.cts`) for `node16`/`nodenext` consumers.
   */
  explicitDeclarationExtensions?: boolean
  /** Entries in `dist` to keep between builds (e.g. `panda`). */
  preserve?: string[]
}

const SOURCE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js']
const DIRECTIVE_RE = /^\s*(['"])use client\1;?\s*/

/** Resolve a relative specifier to the source file it points at. */
function resolveSource(fromDir: string, specifier: string): string | null {
  const base = path.resolve(fromDir, specifier)
  if (existsSync(base) && statSync(base).isFile()) return base
  for (const ext of SOURCE_EXTENSIONS) {
    if (existsSync(base + ext)) return base + ext
  }
  for (const ext of SOURCE_EXTENSIONS) {
    const index = path.join(base, `index${ext}`)
    if (existsSync(index)) return index
  }
  return null
}

/**
 * Keep every module as its own output file: relative imports become
 * externals pointing at the sibling output file with the right extension.
 */
function preserveModules(
  ext: '.js' | '.cjs',
  isExternalPackage: (id: string) => boolean,
): BunPlugin {
  return {
    name: 'preserve-modules',
    setup(build) {
      build.onResolve({ filter: /.*/ }, (args) => {
        if (
          args.kind === 'entry-point-build' ||
          args.kind === 'entry-point-run'
        ) {
          return undefined
        }
        if (isExternalPackage(args.path)) {
          return { path: args.path, external: true }
        }
        if (!args.path.startsWith('.')) return undefined

        const importerDir = path.dirname(args.importer)
        const target = resolveSource(importerDir, args.path)
        if (!target) return undefined

        let rel = path
          .relative(importerDir, target)
          .replace(/\.(tsx?|jsx?)$/, ext)
          .split(path.sep)
          .join('/')
        if (!rel.startsWith('.')) rel = `./${rel}`
        return { path: rel, external: true }
      })
    },
  }
}

/**
 * Add an explicit extension to the relative specifiers of a declaration file
 * (`from './core'`, `import('./x')`). A specifier that names a directory gets
 * `/index<ext>`; a specifier with no matching `.d.ts` file is left as it is.
 */
function withExplicitExtensions(
  source: string,
  file: string,
  extension: '.js' | '.cjs',
) {
  return source.replace(
    /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(['"])(\.{1,2}\/[^'"]*)\2/g,
    (match, prefix: string, quote: string, specifier: string) => {
      const target = path.resolve(path.dirname(file), specifier)
      if (existsSync(`${target}.d.ts`)) {
        return `${prefix}${quote}${specifier}${extension}${quote}`
      }
      if (existsSync(path.join(target, 'index.d.ts'))) {
        return `${prefix}${quote}${specifier}/index${extension}${quote}`
      }
      return match
    },
  )
}

export async function buildLibrary(options: BuildLibraryOptions) {
  const { root, externalPackages, useClient, preserve = [] } = options
  const SRC = path.join(root, 'src')
  const OUT = path.join(root, 'dist')

  const isExternalPackage = (id: string) =>
    id === 'react/jsx-runtime' ||
    id.startsWith('styled-system') ||
    externalPackages.some((dep) => id === dep || id.startsWith(`${dep}/`))

  async function applyBanners(files: string[]) {
    await Promise.all(
      files.map(async (file) => {
        const content = await readFile(file, 'utf8')
        const stripped = content.replace(DIRECTIVE_RE, '')
        const next = useClient(path.relative(OUT, file))
          ? `'use client';\n${stripped}`
          : stripped
        if (next !== content) await writeFile(file, next)
      }),
    )
  }

  async function buildJs() {
    const entrypoints = Array.from(
      new Glob('**/*.{ts,tsx}').scanSync({ cwd: SRC, absolute: true }),
    ).filter((f) => !/\.(d|test|spec|stories)\.tsx?$/.test(f))

    const formats = [
      { format: 'esm', ext: '.js' },
      { format: 'cjs', ext: '.cjs' },
    ] as const

    const outputs: string[] = []
    for (const { format, ext } of formats) {
      const result = await Bun.build({
        entrypoints,
        root: SRC,
        outdir: OUT,
        format,
        target: 'browser',
        minify: false,
        splitting: false,
        sourcemap: 'none',
        naming: `[dir]/[name]${ext}`,
        plugins: [preserveModules(ext, isExternalPackage)],
      })
      if (!result.success) {
        for (const log of result.logs) console.error(log)
        throw new Error(`Bun.build (${format}) failed`)
      }
      outputs.push(...result.outputs.map((o) => o.path))
    }
    await applyBanners(outputs)
    return { modules: entrypoints.length, files: outputs.length }
  }

  async function buildTypes() {
    await $`tsc --project tsconfig.build.json`.cwd(root)
    const decls = Array.from(
      new Glob('**/*.d.ts').scanSync({ cwd: OUT, absolute: true }),
    )
    await Promise.all(
      decls.map(async (file) => {
        const cts = file.replace(/\.d\.ts$/, '.d.cts')
        if (!options.explicitDeclarationExtensions) return copyFile(file, cts)
        const source = await readFile(file, 'utf8')
        await writeFile(file, withExplicitExtensions(source, file, '.js'))
        await writeFile(cts, withExplicitExtensions(source, file, '.cjs'))
      }),
    )
    return decls.length
  }

  const start = performance.now()
  if (existsSync(OUT)) {
    for (const entry of new Glob('*').scanSync({
      cwd: OUT,
      onlyFiles: false,
    })) {
      if (!preserve.includes(entry)) {
        await rm(path.join(OUT, entry), { recursive: true, force: true })
      }
    }
  }

  const [js, decls] = await Promise.all([buildJs(), buildTypes()])
  const seconds = ((performance.now() - start) / 1000).toFixed(1)
  console.log(
    `Built ${js.modules} modules -> ${js.files} JS files, ${decls} declaration files in ${seconds}s`,
  )
}
