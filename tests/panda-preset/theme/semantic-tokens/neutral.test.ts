import { describe, test, expect } from 'bun:test'
import { neutralTokens } from '@cerberus-design/panda-preset'

describe('neutral', () => {
  function formatToken(token: string) {
    return token.toUpperCase()
  }

  test('should have a neutral property', () => {
    expect(neutralTokens.neutral).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(
      formatToken(neutralTokens.neutral.bg.initial.value._cerberusTheme.base),
    ).toEqual('#130024')
    expect(
      formatToken(
        neutralTokens.neutral.bg.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#130024')
    expect(
      formatToken(
        neutralTokens.neutral.bg.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FCFBFE')
  })

  test('should have a bg.100 property', () => {
    expect(
      formatToken(neutralTokens.neutral.bg['100'].value._cerberusTheme.base),
    ).toEqual('#291D47')
    expect(
      formatToken(
        neutralTokens.neutral.bg['100'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#291D47')
    expect(
      formatToken(
        neutralTokens.neutral.bg['100'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#E4E3E9')
  })

  test('should have a bg.200 property', () => {
    expect(
      formatToken(neutralTokens.neutral.bg['200'].value._cerberusTheme.base),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.bg['200'].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.bg['200'].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#BCBACA')
  })

  test('should have a border.initial property', () => {
    expect(
      formatToken(
        neutralTokens.neutral.border.initial.value._cerberusTheme.base,
      ),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.border.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.border.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#E4E3E9')
  })

  test('should have a border.100 property', () => {
    expect(
      formatToken(neutralTokens.neutral.border[100].value._cerberusTheme.base),
    ).toEqual('#291D47')
    expect(
      formatToken(
        neutralTokens.neutral.border[100].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#291D47')
    expect(
      formatToken(
        neutralTokens.neutral.border[100].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#E4E3E9')
  })

  test('should have a border.200 property', () => {
    expect(
      formatToken(neutralTokens.neutral.border[200].value._cerberusTheme.base),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.border[200].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.border[200].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#BCBACA')
  })

  test('should have a surface.initial property', () => {
    expect(
      formatToken(
        neutralTokens.neutral.surface.initial.value._cerberusTheme.base,
      ),
    ).toEqual('#160126')
    expect(
      formatToken(
        neutralTokens.neutral.surface.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#160126')
    expect(
      formatToken(
        neutralTokens.neutral.surface.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FCFBFE')
  })

  test('should have a surface.100 property', () => {
    expect(
      formatToken(neutralTokens.neutral.surface[100].value._cerberusTheme.base),
    ).toEqual('#21143B')
    expect(
      formatToken(
        neutralTokens.neutral.surface[100].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#21143B')
    expect(
      formatToken(
        neutralTokens.neutral.surface[100].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FFFFFF')
  })

  test('should have a surface.200 property', () => {
    expect(
      formatToken(neutralTokens.neutral.surface[200].value._cerberusTheme.base),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.surface[200].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.surface[200].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#BCBACA')
  })

  test('should have a surface.300 property', () => {
    expect(
      formatToken(neutralTokens.neutral.surface[300].value._cerberusTheme.base),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.surface[300].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#302451')
    expect(
      formatToken(
        neutralTokens.neutral.surface[300].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#BCBACA')
  })

  test('should have a surface.inverse property', () => {
    expect(
      formatToken(
        neutralTokens.neutral.surface.inverse.value._cerberusTheme.base,
      ),
    ).toEqual('#F3F2F4')
    expect(
      formatToken(
        neutralTokens.neutral.surface.inverse.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#F3F2F4')
    expect(
      formatToken(
        neutralTokens.neutral.surface.inverse.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#21143B')
  })

  test('should have a text.initial property', () => {
    expect(
      formatToken(neutralTokens.neutral.text.initial.value._cerberusTheme.base),
    ).toEqual('#FCFBFE')
    expect(
      formatToken(
        neutralTokens.neutral.text.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FCFBFE')
    expect(
      formatToken(
        neutralTokens.neutral.text.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#21143B')
  })

  test('should have a text.100 property', () => {
    expect(
      formatToken(neutralTokens.neutral.text[100].value._cerberusTheme.base),
    ).toEqual('#BCBACA')
    expect(
      formatToken(
        neutralTokens.neutral.text[100].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#BCBACA')
    expect(
      formatToken(
        neutralTokens.neutral.text[100].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#696584')
  })

  test('should have a text.200 property', () => {
    expect(
      formatToken(neutralTokens.neutral.text[200].value._cerberusTheme.base),
    ).toEqual('#E4E3E9')
    expect(
      formatToken(
        neutralTokens.neutral.text[200].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#E4E3E9')
    expect(
      formatToken(
        neutralTokens.neutral.text[200].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#362A58')
  })

  test('should have a text.300 property', () => {
    expect(
      formatToken(neutralTokens.neutral.text[300].value._cerberusTheme.base),
    ).toEqual('#FFFFFF')
    expect(
      formatToken(
        neutralTokens.neutral.text[300].value._cerberusTheme._darkMode,
      ),
    ).toEqual('#FFFFFF')
    expect(
      formatToken(
        neutralTokens.neutral.text[300].value._cerberusTheme._lightMode,
      ),
    ).toEqual('#130024')
  })

  test('should have a text.inverse property', () => {
    expect(
      formatToken(neutralTokens.neutral.text.inverse.value._cerberusTheme.base),
    ).toEqual('#160126')
    expect(
      formatToken(
        neutralTokens.neutral.text.inverse.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#160126')
    expect(
      formatToken(
        neutralTokens.neutral.text.inverse.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#FFFFFF')
  })
})
