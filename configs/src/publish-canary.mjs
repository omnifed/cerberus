import { $ } from 'bun'
import { resolve } from 'node:path'
import { npmPackages, jsrPackages } from './versions.mjs'

// Always resolve to the root of the repository
const repoRoot = resolve(import.meta.dir, '..', '..')

console.log('🧪 Publishing NPM Canary Packages in dependent order...')
for (const pkg of npmPackages) {
  await $`cd packages/${pkg} && pnpm build && pnpm publish --tag next --access public --no-git-checks`.cwd(
    repoRoot,
  )
}

console.log('🧪 Publishing JSR Canary Packages...')
for (const pkg of jsrPackages) {
  console.log(`Publishing @cerberus/${pkg}...`)
  await $`cd packages/${pkg} && deno publish --allow-dirty`.cwd(repoRoot)
  await $`sleep 3`.cwd(repoRoot) // JSR network buffer
}

console.log('✅ Canary publish complete!')
