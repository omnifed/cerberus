import { describe, test, expect } from 'bun:test'
import { successTokens } from '@cerberus-design/panda-preset'

describe('success', () => {
  function formatToken(token: string) {
    return token.toUpperCase()
  }

  test('should have a success property', () => {
    expect(successTokens.success).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      formatToken(
        successTokens.success.border.initial.value._cerberusTheme.base,
      ),
    ).toEqual('#41C16E')
    expect(
      formatToken(
        successTokens.success.border.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#41C16E')
    expect(
      formatToken(
        successTokens.success.border.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#0E8E3B')
  })

  test('should have a bg.initial property', () => {
    expect(
      formatToken(successTokens.success.bg.initial.value._cerberusTheme.base),
    ).toEqual('#0B6B2C')
    expect(
      formatToken(
        successTokens.success.bg.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#0B6B2C')
    expect(
      formatToken(
        successTokens.success.bg.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#D0F0DB')
  })

  test('should have a surface.initial property', () => {
    expect(
      formatToken(
        successTokens.success.surface.initial.value._cerberusTheme.base,
      ),
    ).toEqual('#0B6B2C')
    expect(
      formatToken(
        successTokens.success.surface.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#0B6B2C')
    expect(
      formatToken(
        successTokens.success.surface.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#D0F0DB')
  })

  test('should have a bg.active property', () => {
    expect(
      formatToken(successTokens.success.bg.active.value._cerberusTheme.base),
    ).toEqual('#41C16E')
    expect(
      formatToken(
        successTokens.success.bg.active.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#41C16E')
    expect(
      formatToken(
        successTokens.success.bg.active.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#0E8E3B')
  })

  test('should have a text.initial property', () => {
    expect(
      formatToken(successTokens.success.text.initial.value._cerberusTheme.base),
    ).toEqual('#E8F8ED')
    expect(
      formatToken(
        successTokens.success.text.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#E8F8ED')
    expect(
      formatToken(
        successTokens.success.text.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#04240F')
  })

  test('should have a text.100 property', () => {
    expect(
      formatToken(successTokens.success.text[100].value._cerberusTheme.base),
    ).toEqual('#71D192')
    expect(
      formatToken(
        successTokens.success.text[100].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#71D192')
    expect(
      formatToken(
        successTokens.success.text[100].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#0B6B2C')
  })

  test('should have a text.200 property', () => {
    expect(
      formatToken(successTokens.success.text[200].value._cerberusTheme.base),
    ).toEqual('#12B24A')
    expect(
      formatToken(
        successTokens.success.text[200].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#12B24A')
    expect(
      formatToken(
        successTokens.success.text[200].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#12B24A')
  })

  test('should have a text.inverse property', () => {
    expect(
      formatToken(successTokens.success.text.inverse.value._cerberusTheme.base),
    ).toEqual('#07471E')
    expect(
      formatToken(
        successTokens.success.text.inverse.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#07471E')
    expect(
      formatToken(
        successTokens.success.text.inverse.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#E8F8ED')
  })
})
