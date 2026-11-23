import react from '@vitejs/plugin-react'
import { globbySync } from 'globby'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import pkg from './package.json'

const allDependencies = [
  // ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.devDependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
]

export default defineConfig({
  logLevel: 'warn',
  plugins: [
    dts({
      entryRoot: 'src',
      staticImport: true,
      exclude: [],
      afterBuild: () => {
        // `node16`/`nodenext` consumers need explicit extensions on relative
        // specifiers in declaration files: `.js` for `.d.ts`, `.cjs` for `.d.cts`.
        globbySync(['dist/**/*.d.ts', 'dist/**.d.ts']).map((file) => {
          const source = readFileSync(file, 'utf8')
          writeFileSync(file, withExplicitExtensions(source, file, '.js'))
          writeFileSync(
            file.replace(/\.d\.ts$/, '.d.cts'),
            withExplicitExtensions(source, file, '.cjs'),
          )
        })
      },
    }),
    react(),
  ],
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: globbySync(['src/**/index.ts']),
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      logLevel: 'silent',
      external: (id) => {
        // Handle special cases
        if (id === 'react/jsx-runtime' || id.startsWith('styled-system')) {
          return true
        }

        // Handle all package.json dependencies and their subpaths
        return allDependencies.some(
          (dep) => id === dep || id.startsWith(`${dep}/`),
        )
      },
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].cjs',
          banner: (x) => renderBanner(x.fileName),
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].js',
          banner: (x) => renderBanner(x.fileName),
        },
      ],
    },
  },
  resolve: {
    conditions: ['source'],
  },
})

/**
 * Add an explicit extension to the relative specifiers of a declaration file
 * (`from './core'`, `import('./x')`). A specifier that names a directory gets
 * `/index<ext>`; a specifier with no matching `.d.ts` file is left as it is.
 */
const withExplicitExtensions = (
  source: string,
  file: string,
  extension: '.js' | '.cjs',
) =>
  source.replace(
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

const renderBanner = (fileName: string) => {
  const file = path.parse(fileName)

  if (['client'].includes(file.name)) return `'use client';`
  if (isSpecialFile(file)) return ''

  return `'use client';`
}

const isSpecialFile = (file: path.ParsedPath) => ['index'].includes(file.name)
