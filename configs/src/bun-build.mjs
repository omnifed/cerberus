#!/usr/bin/env bun

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  rmSync,
  renameSync,
} from 'fs'
import { join, dirname, resolve } from 'path'
import { globSync } from 'glob'

/**
 * Bun-based build function that replicates tsup functionality
 * @param {string} projectRoot - The root directory of the project to build
 * @param {object} config - Build configuration object
 */
export async function bunBuild(projectRoot, config) {
  const cwd = resolve(projectRoot)

  // Load package.json to get dependencies
  const pkgPath = join(cwd, 'package.json')
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

  // External dependencies (from config + package.json)
  const external = [
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...(config.external || []),
  ]

  async function getEntryPoints() {
    const files = []
    for (const pattern of config.entryPatterns) {
      const matches = globSync(pattern, {
        cwd,
        ignore: config.ignorePatterns,
        absolute: true,
      })
      files.push(...matches)
    }
    return files
  }

  async function buildModern() {
    console.log('📦 Building modern (ESM)...')

    const entryPoints = await getEntryPoints()

    const result = await Bun.build({
      entrypoints: entryPoints,
      ...config.modern,
      root: cwd,
      outdir: join(cwd, config.modern.outdir),
      external,
      // Key: Don't bundle - preserve individual files like tsup
      packages: 'external',
    })

    if (!result.success) {
      console.error('❌ Modern build failed:', result.logs)
      throw new Error('Modern build failed')
    }

    console.log('✅ Modern build completed')
    return result
  }

  async function buildLegacy() {
    console.log('📦 Building legacy (CJS)...')

    const entryPoints = await getEntryPoints()

    const result = await Bun.build({
      entrypoints: entryPoints,
      ...config.legacy,
      root: cwd,
      outdir: join(cwd, config.legacy.outdir),
      external,
      // Key: Don't bundle - preserve individual files like tsup
      packages: 'external',
    })

    if (!result.success) {
      console.error('❌ Legacy build failed:', result.logs)
      throw new Error('Legacy build failed')
    }

    console.log('✅ Legacy build completed')
    return result
  }

  async function moveFilesToCorrectLocation() {
    console.log('📁 Moving files to match tsup structure...')

    // Move files from src/ subdirectory to root level in both builds
    const modernSrcDir = join(cwd, config.modern.outdir, 'src')
    const legacySrcDir = join(cwd, config.legacy.outdir, 'src')
    const modernOutDir = join(cwd, config.modern.outdir)
    const legacyOutDir = join(cwd, config.legacy.outdir)

    // Function to move files from src/ to root
    function moveFilesFromSrc(srcDir, outDir) {
      if (!existsSync(srcDir)) return

      const files = globSync('**/*', { cwd: srcDir, absolute: false })

      for (const file of files) {
        const srcPath = join(srcDir, file)
        const destPath = join(outDir, file)

        // Skip if it's a directory
        if (!existsSync(srcPath) || !readFileSync) continue

        try {
          // Ensure destination directory exists
          mkdirSync(dirname(destPath), { recursive: true })

          // Move the file
          renameSync(srcPath, destPath)
        } catch {
          // File might be a directory, skip
          continue
        }
      }

      // Remove empty src directory
      try {
        rmSync(srcDir, { recursive: true, force: true })
      } catch {
        // Ignore errors
      }
    }

    moveFilesFromSrc(modernSrcDir, modernOutDir)
    moveFilesFromSrc(legacySrcDir, legacyOutDir)

    console.log('✅ Files moved to correct structure')
  }

  async function generateTypeScriptDeclarations() {
    console.log('📝 Generating TypeScript declarations...')

    const modernOutDir = join(cwd, config.typescript.modernOutDir)
    const legacyOutDir = join(cwd, config.typescript.legacyOutDir)
    const projectPath = join(cwd, config.typescript.project)

    // Generate .d.ts files for modern build
    // Try to find TypeScript in the project or workspace
    const possibleTscPaths = [
      join(cwd, 'node_modules/.bin/tsc'),
      join(cwd, '../../node_modules/.bin/tsc'),
      'pnpx tsc',
    ]

    let tscCommand = 'tsc'
    for (const tscPath of possibleTscPaths) {
      if (tscPath !== 'pnpx tsc' && existsSync(tscPath)) {
        tscCommand = tscPath
        break
      }
    }

    const modernTscResult =
      await Bun.$`${tscCommand} --declaration --emitDeclarationOnly --outDir ${modernOutDir} --project ${projectPath}`
        .cwd(cwd)
        .nothrow()

    if (modernTscResult.exitCode !== 0) {
      console.error('❌ Modern TypeScript declaration generation failed')
      console.error(modernTscResult.stderr.toString())
      throw new Error('TypeScript declaration generation failed')
    } else {
      console.log('✅ Modern TypeScript declarations generated')
    }

    // Move TypeScript declarations from src/ to root level
    const modernSrcTsDir = join(modernOutDir, 'src')
    // const legacySrcTsDir = join(legacyOutDir, 'src')

    if (existsSync(modernSrcTsDir)) {
      const tsFiles = globSync('**/*.d.ts', {
        cwd: modernSrcTsDir,
        absolute: false,
      })
      for (const file of tsFiles) {
        const srcPath = join(modernSrcTsDir, file)
        const destPath = join(modernOutDir, file)
        mkdirSync(dirname(destPath), { recursive: true })
        renameSync(srcPath, destPath)
      }
      // Clean up empty src dir
      try {
        rmSync(modernSrcTsDir, { recursive: true })
      } catch {}
    }

    // Generate .d.cts files for legacy build by copying and renaming .d.ts files
    console.log('📝 Creating legacy TypeScript declarations (.d.cts)...')

    // Copy modern declarations to legacy and rename
    const modernDeclarations = globSync(`${modernOutDir}/**/*.d.ts`)

    for (const modernFile of modernDeclarations) {
      const relativePath = modernFile.replace(`${modernOutDir}/`, '')
      const legacyPath = join(
        legacyOutDir,
        relativePath.replace('.d.ts', '.d.cts'),
      )

      // Ensure directory exists
      mkdirSync(dirname(legacyPath), { recursive: true })

      // Read modern declaration and write as legacy
      const content = readFileSync(modernFile, 'utf-8')
      writeFileSync(legacyPath, content)
    }

    console.log('✅ Legacy TypeScript declarations created')
  }

  async function cleanBuildDir() {
    console.log('🧹 Cleaning build directory...')
    const buildDir = join(cwd, './build')
    if (existsSync(buildDir)) {
      rmSync(buildDir, { recursive: true, force: true })
    }
    mkdirSync(buildDir, { recursive: true })
    console.log('✅ Build directory cleaned')
  }

  // Main build process
  try {
    console.log('🚀 Starting Bun build process...')

    await cleanBuildDir()

    // Build modern and legacy sequentially (parallel causes Bun to crash)
    console.log('📦 Building modern (ESM)...')
    await buildModern()

    console.log('📦 Building legacy (CJS)...')
    await buildLegacy()

    // Move files to match tsup structure
    await moveFilesToCorrectLocation()

    // Generate TypeScript declarations
    await generateTypeScriptDeclarations()

    console.log('🎉 Build completed successfully!')
  } catch (error) {
    console.error('❌ Build failed:', error)
    throw error
  }
}

/**
 * CLI entry point for the build script
 */
export async function main() {
  console.log('🔍 Script started from:', process.cwd())
  console.log('🔍 Arguments:', process.argv)

  let projectRoot = process.argv[2] || process.cwd()

  // If we get a relative path like '.', resolve it from the caller's perspective
  if (projectRoot === '.') {
    projectRoot = process.cwd()
  }

  console.log('🔍 Project root:', projectRoot)

  // Try to load config from the project
  let config
  try {
    const configPath = join(projectRoot, 'bun.build.config.mjs')
    const configModule = await import(configPath)
    config = configModule.default || configModule.config
  } catch {
    console.error('❌ Could not load build configuration from project')
    console.error('Expected: bun.build.config.mjs in project root')
    process.exit(1)
  }

  try {
    await bunBuild(projectRoot, config)
  } catch {
    process.exit(1)
  }
}

// If script is run directly
if (import.meta.main) {
  main()
}
