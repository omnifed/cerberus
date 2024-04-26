import { describe, test, expect } from 'bun:test'
import * as DS from '@cerberus/panda-preset'

describe('root', () => {
  test('should export a config', () => {
    expect(DS.cerberusConfig).toBeDefined()
  })

  test('should export a preset', () => {
    expect(DS.nurlPreset).toBeDefined()
  })

  test('should export conditions', () => {
    expect(DS.conditions).toBeDefined()
  })

  test('should export patterns', () => {
    expect(DS.patterns).toBeDefined()
  })

  test('should export utilities', () => {
    expect(DS.utilities).toBeDefined()
  })

  test('should export keyframes', () => {
    expect(DS.keyframes).toBeDefined()
  })

  test('should export textStyles', () => {
    expect(DS.textStyles).toBeDefined()
  })

  test('should export tokens', () => {
    expect(DS.tokens).toBeDefined()
  })

  test('should export neutralTokens', () => {
    expect(DS.neutralTokens).toBeDefined()
  })

  test('should export actionTokens', () => {
    expect(DS.actionTokens).toBeDefined()
  })

  test('should export infoTokens', () => {
    expect(DS.infoTokens).toBeDefined()
  })

  test('should export dangerTokens', () => {
    expect(DS.dangerTokens).toBeDefined()
  })

  test('should export warningTokens', () => {
    expect(DS.warningTokens).toBeDefined()
  })

  test('should export successTokens', () => {
    expect(DS.successTokens).toBeDefined()
  })

  test('should export recipes', () => {
    expect(DS.recipes).toBeDefined()
  })

  test('should export slotRecipes', () => {
    expect(DS.slotRecipes).toBeDefined()
  })

  test('should export helpers', () => {
    expect(DS.getSlotRecipePalettes).toBeDefined()
  })

  test('should export palettes', () => {
    expect(DS.NEUTRAL).toBeDefined()
    expect(DS.ACTION).toBeDefined()
    expect(DS.INFO).toBeDefined()
    expect(DS.SUCCESS).toBeDefined()
    expect(DS.WARNING).toBeDefined()
    expect(DS.DANGER).toBeDefined()
    expect(DS.BRAND).toBeDefined()
  })

  test('should export all palettes', () => {
    expect(DS.action).toBeDefined()
    expect(DS.neutral).toBeDefined()
    expect(DS.info).toBeDefined()
    expect(DS.success).toBeDefined()
    expect(DS.warning).toBeDefined()
    expect(DS.danger).toBeDefined()
    expect(DS.allPalettes).toBeDefined()
  })

  test('should export states', () => {
    expect(DS.focusStates).toBeDefined()
    expect(DS.formStates).toBeDefined()
  })
})
