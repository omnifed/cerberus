import { describe, test, expect } from 'bun:test'
import { dangerTokens } from '@cerberus-design/panda-preset'

describe('dangerTokens', () => {
  test('should have a danger property', () => {
    expect(dangerTokens.danger).toBeDefined()
  })

  test('should have a bg property', () => {
    expect(dangerTokens.danger.bg).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(dangerTokens.danger.bg.initial.value._cerberusTheme.base).toEqual(
      '#FB362D',
    )
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FB362D')
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FB362D')
  })

  test('should have a bg.hover property', () => {
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme.base).toEqual(
      '#FC5E57',
    )
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme._darkMode).toEqual(
      '#FC5E57',
    )
    expect(
      dangerTokens.danger.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual('#DA1E28')
  })

  test('should have a bg.active property', () => {
    expect(dangerTokens.danger.bg.active.value._cerberusTheme.base).toEqual(
      '#FD8681',
    )
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._darkMode,
    ).toEqual('#FD8681')
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._lightMode,
    ).toEqual('#97201B')
  })

  test('should have a border property', () => {
    expect(dangerTokens.danger.border).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme.base,
    ).toEqual('#DA1E28')
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#DA1E28')
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#DA1E28')
  })

  test('should have a surface property', () => {
    expect(dangerTokens.danger.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme.base,
    ).toEqual('#641612')
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#641612')
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FFEBEA')
  })

  test('should have a text property', () => {
    expect(dangerTokens.danger.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(dangerTokens.danger.text.initial.value._cerberusTheme.base).toEqual(
      '#320B09',
    )
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._darkMode,
    ).toEqual('#320B09')
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#320B09')
  })

  test('should have a text.100 property', () => {
    expect(dangerTokens.danger.text['100'].value._cerberusTheme.base).toEqual(
      '#FDAFAB',
    )
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._darkMode,
    ).toEqual('#FDAFAB')
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._lightMode,
    ).toEqual('#DA1E28')
  })

  test('should have a text.200 property', () => {
    expect(dangerTokens.danger.text['200'].value._cerberusTheme.base).toEqual(
      '#FC5E57',
    )
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._darkMode,
    ).toEqual('#FC5E57')
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._lightMode,
    ).toEqual('#FB362D')
  })

  test('should have a text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse).toBeDefined()
  })

  test('should have a text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse.value._cerberusTheme.base).toEqual(
      '#FFEBEA',
    )
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual('#FFEBEA')
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual('#641612')
  })
})
