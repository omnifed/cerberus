import { describe, expect, test } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { emitFiles } from 'codegen/core/emit'

describe('emitFiles owned directories', () => {
  const setup = () => {
    const dir = mkdtempSync(join(tmpdir(), 'codegen-emit-'))
    const file = join(dir, 'thing.md')
    writeFileSync(file, 'current\n')
    writeFileSync(join(dir, 'removed.md'), 'old\n')
    // What tools drop into the directory they run in
    mkdirSync(join(dir, '.claude', '.cc-writes'), { recursive: true })
    writeFileSync(join(dir, '.DS_Store'), '')
    return { dir, files: [{ path: file, content: 'current\n' }] }
  }

  test('check mode reports files it no longer produces, not dot-entries', async () => {
    const { dir, files } = setup()
    const { stale } = await emitFiles(files, { check: true, ownedDirs: [dir] })
    expect(stale).toEqual([join(dir, 'removed.md')])
  })

  test('write mode deletes them and leaves dot-entries alone', async () => {
    const { dir, files } = setup()
    await emitFiles(files, { check: false, ownedDirs: [dir] })
    expect(existsSync(join(dir, 'removed.md'))).toBe(false)
    expect(existsSync(join(dir, '.claude', '.cc-writes'))).toBe(true)
    expect(existsSync(join(dir, '.DS_Store'))).toBe(true)
  })
})
