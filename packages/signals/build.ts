/**
 * Library build for @cerberus-design/signals. Usage: bun run build.ts
 */
import path from 'node:path'
import { buildLibrary } from '../../scripts/src/build-lib.ts'
import pkg from './package.json' with { type: 'json' }

await buildLibrary({
  root: import.meta.dir,
  // Runtime dependencies (if any) are bundled; only dev/peer deps stay external.
  externalPackages: [
    ...Object.keys(pkg.devDependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ],
  // `node16`/`nodenext` consumers need explicit extensions in declarations.
  explicitDeclarationExtensions: true,
  // Every module except the barrels is a client module.
  useClient: (relFile) => path.parse(relFile).name !== 'index',
})
