import { file, write } from 'bun'
import { join } from 'node:path'
import { parse } from 'yaml'

export async function injectDenoImports(jsrPackages, repoRoot) {
  // 1. Read and parse pnpm-workspace.yaml
  const workspaceFile = file(join(repoRoot, 'pnpm-workspace.yaml'))
  const workspaceText = await workspaceFile.text()
  const workspace = parse(workspaceText)

  const namedCatalogs = workspace.catalogs || {}
  const defaultCatalog = workspace.catalog || {}

  for (const pkg of jsrPackages) {
    const pkgDirPath = join(repoRoot, 'packages', pkg)

    const pkgJsonFile = file(join(pkgDirPath, 'package.json'))
    const denoJsonFile = file(join(pkgDirPath, 'deno.json'))

    if (!(await pkgJsonFile.exists()) || !(await denoJsonFile.exists())) {
      console.warn(`⏭️  Skipping ${pkg}: Missing package.json or deno.json`)
      continue
    }

    const pkgJson = await pkgJsonFile.json()
    const denoJson = await denoJsonFile.json()

    denoJson.imports = denoJson.imports || {}
    let modified = false

    // Order matters
    const allDeps = {
      ...(pkgJson.peerDependencies || {}),
      ...(pkgJson.devDependencies || {}),
      ...(pkgJson.dependencies || {}),
    }

    for (const [depName, versionStr] of Object.entries(allDeps)) {
      if (versionStr.startsWith('catalog:')) {
        const catalogName = versionStr.split(':')[1]
        const resolvedVersion = catalogName
          ? namedCatalogs[catalogName]?.[depName]
          : defaultCatalog[depName]

        if (resolvedVersion) {
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

    if (modified) {
      await write(denoJsonFile, JSON.stringify(denoJson, null, 2) + '\n')
    }
  }
}
