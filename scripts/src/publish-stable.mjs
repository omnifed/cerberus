import { resolve } from 'node:path'
import { injectDenoImports } from './inject-deno-imports.mjs'
import { jsrPackages } from './versions.mjs'

const repoRoot = resolve(import.meta.dir, '..', '..')

console.log('🔄 Injecting Pnpm catalogs into Deno import maps...')
await injectDenoImports(jsrPackages, repoRoot).catch((err) => {
  console.error('Failed to inject Deno imports:', err)
  process.exit(1)
})
