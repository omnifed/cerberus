import { describe, test, expect } from 'bun:test'
import { warningTokens } from '@cerberus-design/panda-preset'

describe('warning', () => {
  test('should have a warning property', () => {
    expect(warningTokens.warning).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme.base,
    ).toEqual('#FCF6D1')
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FCF6D1')
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#F4DA49')
  })

  test('should have a bg.initial property', () => {
    expect(warningTokens.warning.bg.initial.value._cerberusTheme.base).toEqual(
      '#917D10',
    )
    expect(
      warningTokens.warning.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual('#917D10')
    expect(
      warningTokens.warning.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FCF6D1')
  })

  test('should have a surface.initial property', () => {
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme.base,
    ).toEqual('#917D10')
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#917D10')
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FCF6D1')
  })

  test('should have a text.initial property', () => {
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme.base,
    ).toEqual('#FEFBE9')
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FEFBE9')
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#60540B')
  })

  test('should have a text.100 property', () => {
    expect(warningTokens.warning.text[100].value._cerberusTheme.base).toEqual(
      '#F9EDA4',
    )
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._darkMode,
    ).toEqual('#F9EDA4')
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._lightMode,
    ).toEqual('#C1A716')
  })

  test('should have a text.200 property', () => {
    expect(warningTokens.warning.text[200].value._cerberusTheme.base).toEqual(
      '#F1D11B',
    )
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._darkMode,
    ).toEqual('#F1D11B')
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._lightMode,
    ).toEqual('#F1D11B')
  })
})
