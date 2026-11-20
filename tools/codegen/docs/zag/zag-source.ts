import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

export interface ZagSource {
  /** e.g. `@zag-js/accordion` */
  packageName: string
  /** Installed version, which `@zag-js/docs` must match */
  version: string
  /** `dist/*.connect.mjs` source, if the package has one */
  connect: string | null
  /** `dist/*.machine.mjs` source, if the package has one */
  machine: string | null
}

function readDistFile(distDir: string, suffix: string): string | null {
  if (!existsSync(distDir)) return null
  const file = readdirSync(distDir).find((f) => f.endsWith(suffix))
  return file ? readFileSync(join(distDir, file), 'utf-8') : null
}

/**
 * Locates the Zag.js machine behind an Ark component. Zag is a dependency of Ark, not
 * of this package, so it is resolved from Ark's declaration file.
 */
export function loadZagSource(key: string, arkEntry: string): ZagSource | null {
  const packageName = `@zag-js/${key}`
  let pkgJson: string
  try {
    pkgJson = Bun.resolveSync(`${packageName}/package.json`, dirname(arkEntry))
  } catch {
    return null
  }
  const distDir = join(dirname(pkgJson), 'dist')
  return {
    packageName,
    version: (JSON.parse(readFileSync(pkgJson, 'utf-8')) as { version: string })
      .version,
    connect: readDistFile(distDir, '.connect.mjs'),
    machine: readDistFile(distDir, '.machine.mjs'),
  }
}
