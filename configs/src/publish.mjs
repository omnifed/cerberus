import { argv, file, write } from 'bun'
import { resolve } from 'node:path'
import { exit } from 'node:process'
import { parseArgs } from 'util'
import { version, nextTag, packages } from './versions.mjs'

// 1. get flags from command line using Bun
// 2. update version in each package.json to match version
// 3. run npm publish --tag ${flag.release} for each package

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
    },
    strict: true,
    allowPositionals: true,
  })
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

  packages.forEach(async (pkg) => {
    const path = resolve(
      import.meta.dir,
      '..',
      '..',
      'packages',
      pkg,
      'package.json',
    )
    const rawFile = file(path)
    const packageJson = await rawFile.json()
    const json = JSON.stringify({ ...packageJson, version })

    // eslint-disable-next-line no-undef
    console.log('Updating version in', path)
    write(path, json)

    // eslint-disable-next-line no-undef
    console.log(`Publishing ${pkg} with tag ${release}`)
    //     exec(`pnpm publish --tag ${release}`, {
    //       cwd: `packages
    // /${pkg}`,
    //     })
  })
}

publish()
