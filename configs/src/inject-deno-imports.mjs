import { file, write } from 'bun'
import { parse } from 'yaml'
import path from 'path'
import { jsrPackages } from './versions.mjs'

const repoRoot = process.cwd()

export async function run() {
  console.log('🔄 Injecting Pnpm catalogs into Deno import maps...')

  // 1. Read and parse pnpm-workspace.yaml
  const workspaceFile = file(path.join(repoRoot, 'pnpm-workspace.yaml'))
  const workspaceText = await workspaceFile.text()
  const workspace = parse(workspaceText)

  // Handle both named catalogs and the default catalog
  const namedCatalogs = workspace.catalogs || {}
  const defaultCatalog = workspace.catalog || {}

  for (const pkg of jsrPackages) {
    const pkgDirPath = path.join(repoRoot, 'packages', pkg)

    // 2. Load package.json and deno.json
    const pkgJsonFile = file(path.join(pkgDirPath, 'package.json'))
    const denoJsonFile = file(path.join(pkgDirPath, 'deno.json'))

    if (!(await pkgJsonFile.exists()) || !(await denoJsonFile.exists())) {
      console.warn(`⏭️  Skipping ${pkg}: Missing package.json or deno.json`)
      continue
    }

    const pkgJson = await pkgJsonFile.json()
    const denoJson = await denoJsonFile.json()

    denoJson.imports = denoJson.imports || {}
    let modified = false

    // 3. Aggregate all dependencies to check for catalogs
    const allDeps = {
      ...(pkgJson.dependencies || {}),
      ...(pkgJson.devDependencies || {}),
      ...(pkgJson.peerDependencies || {}),
    }

    // 4. Map catalog protocols to actual versions
    for (const [depName, versionStr] of Object.entries(allDeps)) {
      if (versionStr.startsWith('catalog:')) {
        // Extract the catalog name (e.g., "catalog:pandacss" -> "pandacss").
        // If it's just "catalog:", it uses the default catalog.
        const catalogName = versionStr.split(':')[1]
        const resolvedVersion = catalogName
          ? namedCatalogs[catalogName]?.[depName]
          : defaultCatalog[depName]

        if (resolvedVersion) {
          // If the version is already an npm:/jsr: specifier, use it. Otherwise, prefix with npm:
          const importSpecifier =
            resolvedVersion.startsWith('npm:') || resolvedVersion.startsWith('jsr:')
              ? resolvedVersion
              : `npm:${depName}@${resolvedVersion}`

          denoJson.imports[depName] = importSpecifier
          modified = true
          console.log(`   ✅ [${pkg}] Mapped ${depName} -> ${importSpecifier}`)
        } else {
          console.warn(`   ⚠️  [${pkg}] Could not find ${depName} in catalog!`)
        }
      }
    }

    // 5. Save the updated deno.json
    if (modified) {
      await write(denoJsonFile, JSON.stringify(denoJson, null, 2) + '\n')
    }
  }

  console.log('🚀 Import injection complete!')
}
