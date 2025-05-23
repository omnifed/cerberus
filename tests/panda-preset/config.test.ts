import { describe, expect, test } from 'bun:test'
import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus-design/panda-preset'

describe('createCerberusConfig', () => {
  test('should return a valid PandaCSS config', () => {
    const config = createCerberusConfig({
      clean: true,
      exclude: [],
    })

    expect(config).toBeDefined()
    expect(config.clean).toBe(true)
    expect(config.exclude).toEqual([])
  })
})

describe('createCerberusPreset', () => {
  test('should return a valid PandaCSS preset', () => {
    const preset = createCerberusPreset({
      displayFont: 'Poppins, sans-serif',
      sansFont: 'Poppins, sans-serif',
      monoFont: 'Recursive, monospace',
    })

    expect(preset).toBeDefined()
    expect(preset.name).toBe('cerberus')
  })
})
