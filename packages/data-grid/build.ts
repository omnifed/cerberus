/**
 * Library build for @cerberus-design/data-grid. Usage: bun run build.ts
 */
import path from 'node:path'
import { buildLibrary } from '../../scripts/src/build-lib.ts'
import pkg from './package.json' with { type: 'json' }

await buildLibrary({
  root: import.meta.dir,
  externalPackages: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ],
  preserve: ['panda'],
  // Every module except the barrels is a client module.
  useClient: (relFile) => path.parse(relFile).name !== 'index',
})
