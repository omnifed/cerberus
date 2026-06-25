import { $ } from 'bun'
import { resolve } from 'node:path'
import { npmPackages, jsrPackages } from './versions.mjs'

// Always resolve to the root of the repository
const repoRoot = resolve(import.meta.dir, '..', '..')

console.log('🧪 Publishing NPM Stable Packages in dependant order...')
for (const pkg of npmPackages) {
  console.log(`Publishing @cerberus-design/${pkg}...`)
  await $`cd packages/${pkg} && pnpm publish --tag next --access public --no-git-checks`.cwd(
    repoRoot,
  )
}

console.log('🧪 Publishing JSR Canary Packages in dependant order...')
for (const pkg of jsrPackages) {
  console.log(`Publishing @cerberus/${pkg}...`)
  await $`cd packages/${pkg} && deno publish --allow-dirty`.cwd(repoRoot)
  await $`sleep 3`.cwd(repoRoot) // JSR network buffer
}

console.log('✅ Stable publish complete!')
