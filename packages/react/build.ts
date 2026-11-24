/**
 * Library build for @cerberus-design/react. Usage: bun run build.ts
 */
import path from 'node:path'
import { buildLibrary } from '../../scripts/src/build-lib.ts'
import pkg from './package.json' with { type: 'json' }

// Components are client modules; barrels and a few server-safe helpers are not.
const CLIENT_ONLY = [
  'portal',
  'frame',
  'client-only',
  'focus-trap',
  'download-trigger',
]
const SPECIAL_FILES = [
  'index',
  'primitives',
  'parts',
  'factory',
  'primitive-factory',
  'defineIcons',
]

await buildLibrary({
  root: import.meta.dir,
  externalPackages: [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.devDependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ],
  preserve: ['panda'],
  useClient: (relFile) => {
    const file = path.parse(relFile)
    if (CLIENT_ONLY.includes(file.name)) return true
    const isBarrelComponent =
      file.dir.endsWith(file.name) &&
      !['presence', 'environment', 'locale'].includes(file.dir)
    return !(isBarrelComponent || SPECIAL_FILES.includes(file.name))
  },
})
