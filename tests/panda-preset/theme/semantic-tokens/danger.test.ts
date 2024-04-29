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
      '#FF0000',
    )
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FF0000')
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FF0000')
  })

  test('should have a bg.hover property', () => {
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme.base).toEqual(
      '#8B0038',
    )
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme._darkMode).toEqual(
      '#8B0038',
    )
    expect(
      dangerTokens.danger.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual('#8B0038')
  })

  test('should have a bg.active property', () => {
    expect(dangerTokens.danger.bg.active.value._cerberusTheme.base).toEqual(
      '#5C0026',
    )
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._darkMode,
    ).toEqual('#5C0026')
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._lightMode,
    ).toEqual('#5C0026')
  })

  test('should have a border property', () => {
    expect(dangerTokens.danger.border).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme.base,
    ).toEqual('#FF0000')
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FF0000')
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FF0000')
  })

  test('should have a surface property', () => {
    expect(dangerTokens.danger.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme.base,
    ).toEqual('#5C0026')
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#5C0026')
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FFD0E3')
  })

  test('should have a text property', () => {
    expect(dangerTokens.danger.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(dangerTokens.danger.text.initial.value._cerberusTheme.base).toEqual(
      '#FFF0F6',
    )
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FFF0F6')
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#5C0026')
  })

  test('should have a text.100 property', () => {
    expect(dangerTokens.danger.text['100'].value._cerberusTheme.base).toEqual(
      '#FFA2C8',
    )
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._darkMode,
    ).toEqual('#FFA2C8')
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._lightMode,
    ).toEqual('#B9004B')
  })

  test('should have a text.200 property', () => {
    expect(dangerTokens.danger.text['200'].value._cerberusTheme.base).toEqual(
      '#FF73AC',
    )
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._darkMode,
    ).toEqual('#FF73AC')
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._lightMode,
    ).toEqual('#E7005E')
  })

  test('should have a text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse).toBeDefined()
  })

  test('should have a text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse.value._cerberusTheme.base).toEqual(
      '#FFF0F6',
    )
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual('#FFF0F6')
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual('#F4F7FA')
  })
})
