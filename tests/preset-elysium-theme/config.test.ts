import { describe, expect, test } from 'bun:test'
import { presetElysiumTheme } from '@cerberus/preset-elysium-theme'

describe('Elysium Theme config', () => {
  test('should return a valid PandaCSS preset', () => {
    expect(presetElysiumTheme).toBeDefined()
    expect(presetElysiumTheme.name).toBe('@cerberus/preset-elysium-theme')
  })
})
