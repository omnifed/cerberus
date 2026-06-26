import { $ } from 'bun'
import { resolve } from 'node:path'
import { npmPackages, jsrPackages } from './versions.mjs'

// Always resolve to the root of the repository
const repoRoot = resolve(import.meta.dir, '..', '..')

console.log('🧪 Publishing NPM Stable Packages in dependent order...')
for (const pkg of npmPackages) {
  console.log(`Publishing @cerberus-design/${pkg}...`)
  // This allows Panda CSS to resolve correctly and prevents PNPM v11 workspace errors
  await $`pnpm --filter "@cerberus-design/${pkg}" run build && pnpm --filter "@cerberus-design/${pkg}" publish --tag latest --access public --no-git-checks`.cwd(
    repoRoot,
  )
}

console.log('🧪 Publishing JSR Stable Packages in dependent order...')
for (const pkg of jsrPackages) {
  console.log(`Publishing @cerberus/${pkg}...`)
  // Deno does not use the pnpm workspace protocol, so cd-ing here is perfectly fine
  await $`cd packages/${pkg} && deno publish --allow-dirty`.cwd(repoRoot)
  await $`sleep 3`.cwd(repoRoot) // JSR network buffer
}

console.log('✅ Stable publish complete!')
