import { describe, test, expect } from 'bun:test'
import { successTokens } from '@cerberus-design/panda-preset'

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

  test('should have a bg.initial property', () => {
    expect(successTokens.success.bg.initial.value._cerberusTheme.base).toEqual(
      '#0B6B2C',
    )
    expect(
      successTokens.success.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual('#0B6B2C')
    expect(
      successTokens.success.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual('#D0F0DB')
  })

  test('should have a surface.initial property', () => {
    expect(
      successTokens.success.surface.initial.value._cerberusTheme.base,
    ).toEqual('#0B6B2C')
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#0B6B2C')
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#D0F0DB')
  })

  test('should have a surface.active property', () => {
    expect(
      successTokens.success.surface.active.value._cerberusTheme.base,
    ).toEqual('#41C16E')
    expect(
      successTokens.success.surface.active.value._cerberusTheme._darkMode,
    ).toEqual('#41C16E')
    expect(
      successTokens.success.surface.active.value._cerberusTheme._lightMode,
    ).toEqual('#0E8E3B')
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

  test('should have a text.inverse property', () => {
    expect(
      successTokens.success.text.inverse.value._cerberusTheme.base,
    ).toEqual('#07471E')
    expect(
      successTokens.success.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual('#07471E')
    expect(
      successTokens.success.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual('#0E8E3B')
  })
})
