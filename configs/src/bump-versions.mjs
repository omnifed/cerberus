import { argv, file, write } from 'bun'
import { resolve } from 'node:path'
import { exit } from 'node:process'
import { parseArgs } from 'util'
import { version, packages } from './versions.mjs'

function _parseFlags(args) {
  return parseArgs({
    args,
    options: {
      next: {
        type: 'boolean',
      },
      stable: {
        type: 'boolean',
      },
      commit: {
        type: 'string',
      },
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

function bumpVersions() {
  const { values } = _parseFlags(argv)

  packages.forEach(async (pkg) => {
    const workspacePath = resolve(import.meta.dir, '..', '..', 'packages', pkg)
    const packageJsonPath = resolve(workspacePath, 'package.json')
    const jsrPath = resolve(workspacePath, 'jsr.json')

    // prep JSR update
    const jsrJson = await file(jsrPath).json()
    const jsr = JSON.stringify(
      { ...jsrJson, version: _getReleaseVersion(values) },
      null,
      2,
    )

    // prep package.json update
    const rawFile = file(packageJsonPath)
    const packageJson = await rawFile.json()
    const json = JSON.stringify(
      { ...packageJson, version: _getReleaseVersion(values) },
      null,
      2,
    )

    console.log('Updating version in', packageJsonPath)
    write(packageJsonPath, json)

    console.log('Updating version in', jsrPath)
    write(jsrPath, jsr)
  })
}

bumpVersions()
