import { describe, expect, test } from 'bun:test'
import { presetAcheronTheme } from '@cerberus-design/preset-acheron-theme'

describe('Acheron Theme config', () => {
  test('should return a valid PandaCSS preset', () => {
    expect(presetAcheronTheme).toBeDefined()
    expect(presetAcheronTheme.name).toBe('@cerberus/preset-acheron-theme')
  })
})
