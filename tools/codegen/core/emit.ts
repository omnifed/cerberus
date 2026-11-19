import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { OXFMT_BIN, OXFMT_CONFIG, REPO_ROOT } from './paths'

export interface GeneratedFile {
  /** Absolute path */
  path: string
  content: string
}

export interface EmitOptions {
  /** Compare against disk instead of writing; report stale files. */
  check: boolean
  /**
   * Directories fully owned by the generator. Files in them that the generator no
   * longer produces (e.g. a removed component) are deleted, or reported in check mode.
   */
  ownedDirs?: string[]
}

export interface EmitResult {
  stale: string[]
}

const UNFORMATTED = /\.(?:md|txt)$/

/**
 * Formats generated source with the repo's oxfmt config, so output is byte-identical
 * to what the pre-commit formatter would produce and `--check` diffs stay clean.
 */
export function formatSource(path: string, content: string): string {
  // Generated markdown/text is written as-is: oxfmt pads tables to their widest cell,
  // so one changed description would reflow every row. (Also excluded in .oxfmtrc.)
  if (UNFORMATTED.test(path)) return content
  const proc = Bun.spawnSync({
    cmd: [OXFMT_BIN, '-c', OXFMT_CONFIG, `--stdin-filepath=${path}`],
    cwd: REPO_ROOT,
    stdin: new TextEncoder().encode(content),
    stdout: 'pipe',
    stderr: 'pipe',
  })
  if (proc.exitCode !== 0) {
    throw new Error(
      `oxfmt failed for ${relative(REPO_ROOT, path)}:\n${proc.stderr.toString()}`,
    )
  }
  return proc.stdout.toString()
}

export async function emitFiles(
  files: GeneratedFile[],
  { check, ownedDirs = [] }: EmitOptions,
): Promise<EmitResult> {
  const formatted = files.map((f) => ({
    path: f.path,
    content: formatSource(f.path, f.content),
  }))
  const stale: string[] = []

  for (const file of formatted) {
    const current = existsSync(file.path)
      ? readFileSync(file.path, 'utf-8')
      : null
    if (current === file.content) continue

    if (check) {
      stale.push(file.path)
    } else {
      await mkdir(dirname(file.path), { recursive: true })
      await writeFile(file.path, file.content)
    }
  }

  const produced = new Set(formatted.map((f) => f.path))
  for (const dir of ownedDirs) {
    if (!existsSync(dir)) continue
    for (const entry of readdirSync(dir)) {
      const path = join(dir, entry)
      if (produced.has(path)) continue
      if (check) stale.push(path)
      else await rm(path, { recursive: true })
    }
  }

  return { stale: stale.sort() }
}

export function reportStale(stale: string[], regenerateCmd: string): void {
  if (stale.length === 0) return
  console.error('\n❌ Generated files are stale:')
  for (const path of stale) console.error(`   ${relative(REPO_ROOT, path)}`)
  console.error(`\n   Run \`${regenerateCmd}\` and commit the result.`)
}
