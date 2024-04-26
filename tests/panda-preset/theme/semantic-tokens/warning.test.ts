import { describe, test, expect } from 'bun:test'
import { warningTokens } from '@omni-federal/panda-preset'

describe('warning', () => {
  test('should have a warning property', () => {
    expect(warningTokens.warning).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme.base,
    ).toEqual('#FFED00')
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FFED00')
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FFED00')
  })

  test('should have a surface.initial property', () => {
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme.base,
    ).toEqual('#6B4C00')
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#6B4C00')
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FFEDC0')
  })

  test('should have a text.initial property', () => {
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme.base,
    ).toEqual('#FFF6E0')
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FFF6E0')
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#352600')
  })

  test('should have a text.100 property', () => {
    expect(warningTokens.warning.text[100].value._cerberusTheme.base).toEqual(
      '#FFE4A1',
    )
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._darkMode,
    ).toEqual('#FFE4A1')
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._lightMode,
    ).toEqual('#A17300')
  })

  test('should have a text.200 property', () => {
    expect(warningTokens.warning.text[200].value._cerberusTheme.base).toEqual(
      '#FFD262',
    )
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._darkMode,
    ).toEqual('#FFD262')
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._lightMode,
    ).toEqual('#D69900')
  })
})
