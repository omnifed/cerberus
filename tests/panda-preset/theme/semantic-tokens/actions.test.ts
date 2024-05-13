import { describe, test, expect } from 'bun:test'
import { actionTokens } from '@cerberus-design/panda-preset'

describe('actionTokens', () => {
  test('should have a action key', () => {
    expect(actionTokens.action).toBeDefined()
  })

  test('should have a action.bg key', () => {
    expect(actionTokens.action.bg).toBeDefined()
  })

  test('should have a action.bg.initial key', () => {
    expect(actionTokens.action.bg.initial).toBeDefined()
    expect(actionTokens.action.bg.initial.value._cerberusTheme.base).toBe(
      '#7F33C4',
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._darkMode).toBe(
      '#7F33C4',
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._lightMode).toBe(
      '#5F00B5',
    )
  })

  test('should have a action.bg.hover key', () => {
    expect(actionTokens.action.bg.hover).toBeDefined()
    expect(actionTokens.action.bg.hover.value._cerberusTheme.base).toBe(
      '#5F00B5',
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._darkMode).toBe(
      '#5F00B5',
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._lightMode).toBe(
      '#7F33C4',
    )
  })

  test('should have a action.bg.active key', () => {
    expect(actionTokens.action.bg.active).toBeDefined()
    expect(actionTokens.action.bg.active.value._cerberusTheme.base).toBe(
      '#4C0091',
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._darkMode).toBe(
      '#4C0091',
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._lightMode).toBe(
      '#9F66D3',
    )
  })

  test('should have a action.bg.100 key', () => {
    expect(actionTokens.action.bg[100]).toBeDefined()
  })

  test('should have a action.bg.100.initial key', () => {
    expect(actionTokens.action.bg[100].initial).toBeDefined()
    expect(actionTokens.action.bg[100].initial.value._cerberusTheme.base).toBe(
      '#21143B',
    )
    expect(
      actionTokens.action.bg[100].initial.value._cerberusTheme._darkMode,
    ).toBe('#21143B')
    expect(
      actionTokens.action.bg[100].initial.value._cerberusTheme._lightMode,
    ).toBe('#FFFFFF')
  })

  test('should have a action.bg.100.hover key', () => {
    expect(actionTokens.action.bg[100].hover).toBeDefined()
    expect(actionTokens.action.bg[100].hover.value._cerberusTheme.base).toBe(
      '#291D47',
    )
    expect(
      actionTokens.action.bg[100].hover.value._cerberusTheme._darkMode,
    ).toBe('#291D47')
    expect(
      actionTokens.action.bg[100].hover.value._cerberusTheme._lightMode,
    ).toBe('#F3F2F4')
  })

  test('should have a action.bg.100.active key', () => {
    expect(actionTokens.action.bg[100].active).toBeDefined()
    expect(actionTokens.action.bg[100].active.value._cerberusTheme.base).toBe(
      '#24186A',
    )
    expect(
      actionTokens.action.bg[100].active.value._cerberusTheme._darkMode,
    ).toBe('#24186A')
    expect(
      actionTokens.action.bg[100].active.value._cerberusTheme._lightMode,
    ).toBe('#D1DFEF')
  })

  test('should have a action.border.initial key', () => {
    expect(actionTokens.action.border.initial).toBeDefined()
    expect(actionTokens.action.border.initial.value._cerberusTheme.base).toBe(
      '#291D47',
    )
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._darkMode,
    ).toBe('#291D47')
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._lightMode,
    ).toBe('#E4E3E9')
  })

  test('should have a action.border.100 key', () => {
    expect(actionTokens.action.border[100]).toBeDefined()
    expect(actionTokens.action.border[100].value._cerberusTheme.base).toBe(
      '#4E476D',
    )
    expect(actionTokens.action.border[100].value._cerberusTheme._darkMode).toBe(
      '#4E476D',
    )
    expect(
      actionTokens.action.border[100].value._cerberusTheme._lightMode,
    ).toBe('#696584')
  })

  test('should have a action.border.focus key', () => {
    expect(actionTokens.action.border.focus).toBeDefined()
    expect(actionTokens.action.border.focus.value._cerberusTheme.base).toBe(
      '#BB93E1',
    )
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._darkMode,
    ).toBe('#BB93E1')
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._lightMode,
    ).toBe('#4C0091')
  })

  test('should have a action.navigation.initial key', () => {
    expect(actionTokens.action.navigation.initial).toBeDefined()
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme.base,
    ).toBe('#9F66D3')
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._darkMode,
    ).toBe('#9F66D3')
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._lightMode,
    ).toBe('#5F00B5')
  })

  test('should have a action.navigation.hover key', () => {
    expect(actionTokens.action.navigation.hover).toBeDefined()
    expect(actionTokens.action.navigation.hover.value._cerberusTheme.base).toBe(
      '#BB93E1',
    )
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._darkMode,
    ).toBe('#BB93E1')
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._lightMode,
    ).toBe('#4C0091')
  })

  test('should have a action.navigation.visited key', () => {
    expect(actionTokens.action.navigation.visited).toBeDefined()
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme.base,
    ).toBe('#DFCCF0')
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._darkMode,
    ).toBe('#DFCCF0')
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._lightMode,
    ).toBe('#5F00B5')
  })

  test('should have a action.navigation.alternate.initial key', () => {
    expect(actionTokens.action.navigation.alternate.initial).toBeDefined()
    expect(
      actionTokens.action.navigation.alternate.initial.value._cerberusTheme
        .base,
    ).toBe('#41E3E0')
    expect(
      actionTokens.action.navigation.alternate.initial.value._cerberusTheme
        ._darkMode,
    ).toBe('#41E3E0')
    expect(
      actionTokens.action.navigation.alternate.initial.value._cerberusTheme
        ._lightMode,
    ).toBe('#3B8180')
  })

  test('should have a action.navigation.alternate.hover key', () => {
    expect(actionTokens.action.navigation.alternate.hover).toBeDefined()
    expect(
      actionTokens.action.navigation.alternate.hover.value._cerberusTheme.base,
    ).toBe('#72E9E7')
    expect(
      actionTokens.action.navigation.alternate.hover.value._cerberusTheme
        ._darkMode,
    ).toBe('#72E9E7')
    expect(
      actionTokens.action.navigation.alternate.hover.value._cerberusTheme
        ._lightMode,
    ).toBe('#1F5B5A')
  })

  test('should have a action.navigation.alternate.visited key', () => {
    expect(actionTokens.action.navigation.alternate.visited).toBeDefined()
    expect(
      actionTokens.action.navigation.alternate.visited.value._cerberusTheme
        .base,
    ).toBe('#72E9E7')
    expect(
      actionTokens.action.navigation.alternate.visited.value._cerberusTheme
        ._darkMode,
    ).toBe('#72E9E7')
    expect(
      actionTokens.action.navigation.alternate.visited.value._cerberusTheme
        ._lightMode,
    ).toBe('#1F5B5A')
  })

  test('should have a action.text key', () => {
    expect(actionTokens.action.text).toBeDefined()
  })

  test('should have a action.text.initial key', () => {
    expect(actionTokens.action.text.initial).toBeDefined()
    expect(actionTokens.action.text.initial.value._cerberusTheme.base).toBe(
      '#FCFBFE',
    )
    expect(
      actionTokens.action.text.initial.value._cerberusTheme._darkMode,
    ).toBe('#FCFBFE')
    expect(
      actionTokens.action.text.initial.value._cerberusTheme._lightMode,
    ).toBe('#FCFBFE')
  })

  test('should have a action.text.100 key', () => {
    expect(actionTokens.action.text['100']).toBeDefined()
    expect(actionTokens.action.text['100'].value._cerberusTheme.base).toBe(
      '#7F33C4',
    )
    expect(actionTokens.action.text['100'].value._cerberusTheme._darkMode).toBe(
      '#7F33C4',
    )
    expect(
      actionTokens.action.text['100'].value._cerberusTheme._lightMode,
    ).toBe('#39006D')
  })

  test('should have a action.text.200 key', () => {
    expect(actionTokens.action.text['200']).toBeDefined()
    expect(actionTokens.action.text['200'].value._cerberusTheme.base).toBe(
      '#BB93E1',
    )
    expect(actionTokens.action.text['200'].value._cerberusTheme._darkMode).toBe(
      '#BB93E1',
    )
    expect(
      actionTokens.action.text['200'].value._cerberusTheme._lightMode,
    ).toBe('#5F00B5')
  })

  test('should have a action.text.inverse key', () => {
    expect(actionTokens.action.text.inverse).toBeDefined()
    expect(actionTokens.action.text.inverse.value._cerberusTheme.base).toBe(
      '#130024',
    )
    expect(
      actionTokens.action.text.inverse.value._cerberusTheme._darkMode,
    ).toBe('#130024')
    expect(
      actionTokens.action.text.inverse.value._cerberusTheme._lightMode,
    ).toBe('#130024')
  })

  test('should have a action.text.alternate key', () => {
    expect(actionTokens.action.text.alternate).toBeDefined()
    expect(actionTokens.action.text.alternate.value._cerberusTheme.base).toBe(
      '#41E3E0',
    )
    expect(
      actionTokens.action.text.alternate.value._cerberusTheme._darkMode,
    ).toBe('#41E3E0')
    expect(
      actionTokens.action.text.alternate.value._cerberusTheme._lightMode,
    ).toBe('#3B8180')
  })
})
