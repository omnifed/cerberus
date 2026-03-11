import react from '@vitejs/plugin-react'
import { globbySync } from 'globby'
import { copyFileSync } from 'node:fs'
import path from 'node:path'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import pkg from './package.json'

const allDependencies = [
  ...Object.keys(pkg.dependencies ?? {}),
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
        globbySync(['dist/**/*.d.ts', 'dist/**.d.ts']).map((file) => {
          copyFileSync(file, file.replace(/\.d\.ts$/, '.d.cts'))
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

const renderBanner = (fileName: string) => {
  const file = path.parse(fileName)

  if (['client'].includes(file.name)) return `'use client';`
  if (isSpecialFile(file)) return ''

  return `'use client';`
}

const isSpecialFile = (file: path.ParsedPath) => ['index'].includes(file.name)
