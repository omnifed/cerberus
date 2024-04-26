import { describe, test, expect } from 'bun:test'
import { successTokens } from '@cerberus/panda-preset'

describe('success', () => {
  test('should have a success property', () => {
    expect(successTokens.success).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      successTokens.success.border.initial.value._cerberusTheme.base,
    ).toEqual('#47B44B')
    expect(
      successTokens.success.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#47B44B')
    expect(
      successTokens.success.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#02BB71')
  })

  test('should have a surface.initial property', () => {
    expect(
      successTokens.success.surface.initial.value._cerberusTheme.base,
    ).toEqual('#014B2D')
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#014B2D')
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#A1FED9')
  })

  test('should have a text.initial property', () => {
    expect(
      successTokens.success.text.initial.value._cerberusTheme.base,
    ).toEqual('#D0FFEC')
    expect(
      successTokens.success.text.initial.value._cerberusTheme._darkMode,
    ).toEqual('#D0FFEC')
    expect(
      successTokens.success.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#002517')
  })

  test('should have a text.100 property', () => {
    expect(successTokens.success.text[100].value._cerberusTheme.base).toEqual(
      '#43FDB4',
    )
    expect(
      successTokens.success.text[100].value._cerberusTheme._darkMode,
    ).toEqual('#43FDB4')
    expect(
      successTokens.success.text[100].value._cerberusTheme._lightMode,
    ).toEqual('#017044')
  })

  test('should have a text.200 property', () => {
    expect(successTokens.success.text[200].value._cerberusTheme.base).toEqual(
      '#02BB71',
    )
    expect(
      successTokens.success.text[200].value._cerberusTheme._darkMode,
    ).toEqual('#02BB71')
    expect(
      successTokens.success.text[200].value._cerberusTheme._lightMode,
    ).toEqual('#01955B')
  })
})
