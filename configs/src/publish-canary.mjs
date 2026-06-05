import { $ } from 'bun'
import { jsrPackages } from './versions.mjs'

console.log('🧪 Publishing NPM Canary Packages in dependant order...')
await $`cd packages/react && pnpm build && pnpm publish --tag next --access public --no-git-checks`
await $`cd packages/signals && pnpm build && pnpm publish --tag next --access public --no-git-checks`
await $`cd packages/data-grid && pnpm build && pnpm publish --tag next --access public --no-git-checks`

console.log('🧪 Publishing JSR Canary Packages in dependant order...')
for (const pkg of jsrPackages) {
  console.log(`Publishing @cerberus/${pkg}...`)
  await $`cd packages/${pkg} && deno publish --allow-dirty`
  await $`sleep 3` // JSR network buffer
}

console.log('✅ Canary publish complete!')
