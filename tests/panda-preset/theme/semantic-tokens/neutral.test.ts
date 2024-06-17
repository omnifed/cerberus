import { describe, test, expect } from 'bun:test'
import { neutralTokens } from '@cerberus-design/panda-preset'

describe('neutral', () => {
  test('should have a neutral property', () => {
    expect(neutralTokens.neutral).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(neutralTokens.neutral.bg.initial.value._cerberusTheme.base).toEqual(
      '#130024',
    )
    expect(
      neutralTokens.neutral.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual('#130024')
    expect(
      neutralTokens.neutral.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FCFBFE')
  })

  test('should have a bg.active property', () => {
    expect(neutralTokens.neutral.bg.active.value._cerberusTheme.base).toEqual(
      '#2D2D55',
    )
    expect(
      neutralTokens.neutral.bg.active.value._cerberusTheme._darkMode,
    ).toEqual('#2D2D55')
    expect(
      neutralTokens.neutral.bg.active.value._cerberusTheme._lightMode,
    ).toEqual('#D1DFEF')
  })

  test('should have a bg.hover property', () => {
    expect(neutralTokens.neutral.bg.hover.value._cerberusTheme.base).toEqual(
      '#404376',
    )
    expect(
      neutralTokens.neutral.bg.hover.value._cerberusTheme._darkMode,
    ).toEqual('#404376')
    expect(
      neutralTokens.neutral.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual('#DAE3EE')
  })

  test('should have a border.initial property', () => {
    expect(
      neutralTokens.neutral.border.initial.value._cerberusTheme.base,
    ).toEqual('#291D47')
    expect(
      neutralTokens.neutral.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#291D47')
    expect(
      neutralTokens.neutral.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#E4E3E9')
  })

  test('should have a border.100 property', () => {
    expect(neutralTokens.neutral.border[100].value._cerberusTheme.base).toEqual(
      '#302451',
    )
    expect(
      neutralTokens.neutral.border[100].value._cerberusTheme._darkMode,
    ).toEqual('#302451')
    expect(
      neutralTokens.neutral.border[100].value._cerberusTheme._lightMode,
    ).toEqual('#BCBACA')
  })

  test('should have a border.200 property', () => {
    expect(neutralTokens.neutral.border[200].value._cerberusTheme.base).toEqual(
      '#39006D',
    )
    expect(
      neutralTokens.neutral.border[200].value._cerberusTheme._darkMode,
    ).toEqual('#39006D')
    expect(
      neutralTokens.neutral.border[200].value._cerberusTheme._lightMode,
    ).toEqual('#DFCCF0')
  })

  test('should have a surface.initial property', () => {
    expect(
      neutralTokens.neutral.surface.initial.value._cerberusTheme.base,
    ).toEqual('#160126')
    expect(
      neutralTokens.neutral.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#160126')
    expect(
      neutralTokens.neutral.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#FCFBFE')
  })

  test('should have a surface.100 property', () => {
    expect(
      neutralTokens.neutral.surface[100].value._cerberusTheme.base,
    ).toEqual('#21143B')
    expect(
      neutralTokens.neutral.surface[100].value._cerberusTheme._darkMode,
    ).toEqual('#21143B')
    expect(
      neutralTokens.neutral.surface[100].value._cerberusTheme._lightMode,
    ).toEqual('#ffffff')
  })

  test('should have a surface.200 property', () => {
    expect(
      neutralTokens.neutral.surface[200].value._cerberusTheme.base,
    ).toEqual('#291D47')
    expect(
      neutralTokens.neutral.surface[200].value._cerberusTheme._darkMode,
    ).toEqual('#291D47')
    expect(
      neutralTokens.neutral.surface[200].value._cerberusTheme._lightMode,
    ).toEqual('#E4E3E9')
  })

  test('should have a surface.300 property', () => {
    expect(
      neutralTokens.neutral.surface[300].value._cerberusTheme.base,
    ).toEqual('#302451')
    expect(
      neutralTokens.neutral.surface[300].value._cerberusTheme._darkMode,
    ).toEqual('#302451')
    expect(
      neutralTokens.neutral.surface[300].value._cerberusTheme._lightMode,
    ).toEqual('#BCBACA')
  })

  test('should have a surface.inverse property', () => {
    expect(
      neutralTokens.neutral.surface.inverse.value._cerberusTheme.base,
    ).toEqual('#F3F2F4')
    expect(
      neutralTokens.neutral.surface.inverse.value._cerberusTheme._darkMode,
    ).toEqual('#F3F2F4')
    expect(
      neutralTokens.neutral.surface.inverse.value._cerberusTheme._lightMode,
    ).toEqual('#21143B')
  })

  test('should have a text.initial property', () => {
    expect(
      neutralTokens.neutral.text.initial.value._cerberusTheme.base,
    ).toEqual('#FCFBFE')
    expect(
      neutralTokens.neutral.text.initial.value._cerberusTheme._darkMode,
    ).toEqual('#FCFBFE')
    expect(
      neutralTokens.neutral.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#21143B')
  })

  test('should have a text.100 property', () => {
    expect(neutralTokens.neutral.text[100].value._cerberusTheme.base).toEqual(
      '#BCBACA',
    )
    expect(
      neutralTokens.neutral.text[100].value._cerberusTheme._darkMode,
    ).toEqual('#BCBACA')
    expect(
      neutralTokens.neutral.text[100].value._cerberusTheme._lightMode,
    ).toEqual('#696584')
  })

  test('should have a text.200 property', () => {
    expect(neutralTokens.neutral.text[200].value._cerberusTheme.base).toEqual(
      '#E4E3E9',
    )
    expect(
      neutralTokens.neutral.text[200].value._cerberusTheme._darkMode,
    ).toEqual('#E4E3E9')
    expect(
      neutralTokens.neutral.text[200].value._cerberusTheme._lightMode,
    ).toEqual('#362A58')
  })

  test('should have a text.300 property', () => {
    expect(neutralTokens.neutral.text[300].value._cerberusTheme.base).toEqual(
      '#FFFFFF',
    )
    expect(
      neutralTokens.neutral.text[300].value._cerberusTheme._darkMode,
    ).toEqual('#FFFFFF')
    expect(
      neutralTokens.neutral.text[300].value._cerberusTheme._lightMode,
    ).toEqual('#130024')
  })

  test('should have a text.inverse property', () => {
    expect(
      neutralTokens.neutral.text.inverse.value._cerberusTheme.base,
    ).toEqual('#130F25')
    expect(
      neutralTokens.neutral.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual('#130F25')
    expect(
      neutralTokens.neutral.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual('#FFFFFF')
  })
})
