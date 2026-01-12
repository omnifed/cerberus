import { describe, expect, test } from 'bun:test'
import {
  getThemeName,
  presetCerberusTheme,
} from '@cerberus/preset-cerberus-theme'

describe('Cerberus Theme config', () => {
  test('should return a valid PandaCSS preset', () => {
    expect(presetCerberusTheme).toBeDefined()
    expect(presetCerberusTheme.name).toBe('@cerberus/preset-cerberus-theme')
  })

  test('should return the correct theme name', () => {
    expect(getThemeName()).toBe('cerberus')
  })
})
