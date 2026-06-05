import { argv, file, write } from 'bun'
import { resolve } from 'node:path'
import { readdir } from 'node:fs/promises'
import { exit } from 'node:process'
import { parseArgs } from 'util'
import { version } from './versions.mjs'

function _parseFlags(args) {
  return parseArgs({
    args,
    options: {
      next: { type: 'boolean' },
      stable: { type: 'boolean' },
      commit: { type: 'string' },
    },
    strict: true,
    allowPositionals: true,
  })
}

function _getReleaseVersion(values) {
  if (values.next && !values.commit) throw new Error('Missing commit hash')
  if (values.next && values.commit)
    return `${version}-next-${values.commit.slice(0, 7)}`
  if (values.stable) return version
  exit(1)
}

async function bumpVersions() {
  const { values } = _parseFlags(argv)
  const releaseVersion = _getReleaseVersion(values)
  const packagesDir = resolve(import.meta.dir, '..', '..', 'packages')

  console.log('Bumping all workspaces to:', releaseVersion)

  // Dynamically read all folders in the packages/ directory
  const workspaces = await readdir(packagesDir)

  for (const pkg of workspaces) {
    const workspacePath = resolve(packagesDir, pkg)
    const jsrPath = resolve(workspacePath, 'deno.json')
    const pkgPath = resolve(workspacePath, 'package.json')

    // Update deno.json if it exists
    const jsrFile = file(jsrPath)
    if (await jsrFile.exists()) {
      const jsrJson = await jsrFile.json()
      write(jsrPath, JSON.stringify({ ...jsrJson, version: releaseVersion }, null, 2))
      console.log(`✅ Updated JSR version in ${pkg}`)
    }

    // Update package.json if it exists
    const pkgFile = file(pkgPath)
    if (await pkgFile.exists()) {
      const pkgJson = await pkgFile.json()
      write(pkgPath, JSON.stringify({ ...pkgJson, version: releaseVersion }, null, 2))
      console.log(`✅ Updated NPM version in ${pkg}`)
    }
  }
}

bumpVersions()
