import { describe, test, expect } from 'bun:test'
import { warningTokens } from '@cerberus-design/panda-preset'

describe('warning', () => {
  function formatToken(token: string) {
    return token.toUpperCase()
  }

  test('should have a warning property', () => {
    expect(warningTokens.warning).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      formatToken(
        warningTokens.warning.border.initial.value._cerberusTheme.base,
      ),
    ).toEqual('#FCF6D1')
    expect(
      formatToken(
        warningTokens.warning.border.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FCF6D1')
    expect(
      formatToken(
        warningTokens.warning.border.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#F4DA49')
  })

  test('should have a surface.initial property', () => {
    expect(
      formatToken(
        warningTokens.warning.surface.initial.value._cerberusTheme.base,
      ),
    ).toEqual('#C1A716')
    expect(
      formatToken(
        warningTokens.warning.surface.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#C1A716')
    expect(
      formatToken(
        warningTokens.warning.surface.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#F7E376')
  })

  test('should have a surface.100 property', () => {
    expect(
      formatToken(
        warningTokens.warning.surface['100'].value._cerberusTheme.base,
      ),
    ).toEqual('#60540B')
    expect(
      formatToken(
        warningTokens.warning.surface['100'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#60540B')
    expect(
      formatToken(
        warningTokens.warning.surface['100'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FCF6D1')
  })

  test('should have a surface.200 property', () => {
    expect(
      formatToken(
        warningTokens.warning.surface['200'].value._cerberusTheme.base,
      ),
    ).toEqual('#F4DA49')
    expect(
      formatToken(
        warningTokens.warning.surface['200'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#F4DA49')
    expect(
      formatToken(
        warningTokens.warning.surface['200'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#F1D11B')
  })

  test('should have a text.initial property', () => {
    expect(
      formatToken(warningTokens.warning.text.initial.value._cerberusTheme.base),
    ).toEqual('#302A05')
    expect(
      formatToken(
        warningTokens.warning.text.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#302A05')
    expect(
      formatToken(
        warningTokens.warning.text.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#302A05')
  })

  test('should have a text.100 property', () => {
    expect(
      formatToken(warningTokens.warning.text[100].value._cerberusTheme.base),
    ).toEqual('#F9EDA4')
    expect(
      formatToken(
        warningTokens.warning.text[100].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#F9EDA4')
    expect(
      formatToken(
        warningTokens.warning.text[100].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#917D10')
  })

  test('should have a text.200 property', () => {
    expect(
      formatToken(warningTokens.warning.text[200].value._cerberusTheme.base),
    ).toEqual('#F1D11B')
    expect(
      formatToken(
        warningTokens.warning.text[200].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#F1D11B')
    expect(
      formatToken(
        warningTokens.warning.text[200].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#C1A716')
  })

  test('should have a text.inverse property', () => {
    expect(
      formatToken(warningTokens.warning.text.inverse.value._cerberusTheme.base),
    ).toEqual('#FCF6D1')
    expect(
      formatToken(
        warningTokens.warning.text.inverse.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FCF6D1')
    expect(
      formatToken(
        warningTokens.warning.text.inverse.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#302A05')
  })
})
