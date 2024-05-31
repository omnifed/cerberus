import { argv, file, write, $ } from 'bun'
import { resolve } from 'node:path'
import { exit } from 'node:process'
import { parseArgs } from 'util'
import { version, nextTag, packages } from './versions.mjs'

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

function _getTags(values) {
  if (values.next) {
    return nextTag
  }
  if (values.stable) {
    return 'latest'
  }
  exit(1)
}

function publish() {
  const { values } = _parseFlags(argv)
  const release = _getTags(values)
  const nonJSXPackages = packages.filter((pkg) => !pkg.includes('react'))

  nonJSXPackages.forEach(async (pkg) => {
    const workspacePath = resolve(import.meta.dir, '..', '..', 'packages', pkg)
    const jsrJsonPath = resolve(workspacePath, 'jsr.json')
    const rawFile = file(jsrJsonPath)
    const packageJson = await rawFile.json()
    const json = JSON.stringify(
      { ...packageJson, version: _getReleaseVersion(values) },
      null,
      2,
    )

    // eslint-disable-next-line no-undef
    console.log('Updating version in', jsrJsonPath)
    write(jsrJsonPath, json)

    // eslint-disable-next-line no-undef
    console.log(`Publishing ${pkg} with tag ${release}`)
    await $`cd ${workspacePath} && npx jsr publish --tag ${release}`
  })
}

publish()
