import { describe, test, expect } from 'bun:test'
import { actionTokens } from '@omni-federal/panda-preset'

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
      '#9797FF',
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._darkMode).toBe(
      '#9797FF',
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._lightMode).toBe(
      '#0000FF',
    )
  })

  test('should have a action.bg.hover key', () => {
    expect(actionTokens.action.bg.hover).toBeDefined()
    expect(actionTokens.action.bg.hover.value._cerberusTheme.base).toBe(
      '#3C28B1',
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._darkMode).toBe(
      '#3C28B1',
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._lightMode).toBe(
      '#30208D',
    )
  })

  test('should have a action.bg.active key', () => {
    expect(actionTokens.action.bg.active).toBeDefined()
    expect(actionTokens.action.bg.active.value._cerberusTheme.base).toBe(
      '#30208D',
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._darkMode).toBe(
      '#30208D',
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._lightMode).toBe(
      '#24186A',
    )
  })

  test('should have a action.bg.100 key', () => {
    expect(actionTokens.action.bg[100]).toBeDefined()
  })

  test('should have a action.bg.100.initial key', () => {
    expect(actionTokens.action.bg[100].initial).toBeDefined()
    expect(actionTokens.action.bg[100].initial.value._cerberusTheme.base).toBe(
      '#2A2753',
    )
    expect(
      actionTokens.action.bg[100].initial.value._cerberusTheme._darkMode,
    ).toBe('#2A2753')
    expect(
      actionTokens.action.bg[100].initial.value._cerberusTheme._lightMode,
    ).toBe('#E5E8EB')
  })

  test('should have a action.bg.100.hover key', () => {
    expect(actionTokens.action.bg[100].hover).toBeDefined()
    expect(actionTokens.action.bg[100].hover.value._cerberusTheme.base).toBe(
      '#343063',
    )
    expect(
      actionTokens.action.bg[100].hover.value._cerberusTheme._darkMode,
    ).toBe('#343063')
    expect(
      actionTokens.action.bg[100].hover.value._cerberusTheme._lightMode,
    ).toBe('#F4F5F6')
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
      '#6855D9',
    )
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._darkMode,
    ).toBe('#6855D9')
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._lightMode,
    ).toBe('#0969DA')
  })

  test('should have a action.border.focus key', () => {
    expect(actionTokens.action.border.focus).toBeDefined()
    expect(actionTokens.action.border.focus.value._cerberusTheme.base).toBe(
      '#3895FF',
    )
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._darkMode,
    ).toBe('#3895FF')
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._lightMode,
    ).toBe('#3895FF')
  })

  test('should have a action.navigation.initial key', () => {
    expect(actionTokens.action.navigation.initial).toBeDefined()
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme.base,
    ).toBe('#3895FF')
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._darkMode,
    ).toBe('#3895FF')
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._lightMode,
    ).toBe('#0969DA')
  })

  test('should have a action.navigation.hover key', () => {
    expect(actionTokens.action.navigation.hover).toBeDefined()
    expect(actionTokens.action.navigation.hover.value._cerberusTheme.base).toBe(
      '#3895FF',
    )
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._darkMode,
    ).toBe('#3895FF')
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._lightMode,
    ).toBe('#0969DA')
  })

  test('should have a action.navigation.visited key', () => {
    expect(actionTokens.action.navigation.visited).toBeDefined()
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme.base,
    ).toBe('#B17DD4')
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._darkMode,
    ).toBe('#B17DD4')
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._lightMode,
    ).toBe('#8C40BF')
  })

  test('should have a action.text key', () => {
    expect(actionTokens.action.text).toBeDefined()
  })

  test('should have a action.text.initial key', () => {
    expect(actionTokens.action.text.initial).toBeDefined()
    expect(actionTokens.action.text.initial.value._cerberusTheme.base).toBe(
      '#101025',
    )
    expect(
      actionTokens.action.text.initial.value._cerberusTheme._darkMode,
    ).toBe('#101025')
    expect(
      actionTokens.action.text.initial.value._cerberusTheme._lightMode,
    ).toBe('#F4F7FA')
  })

  test('should have a action.text.100 key', () => {
    expect(actionTokens.action.text['100']).toBeDefined()
    expect(actionTokens.action.text['100'].value._cerberusTheme.base).toBe(
      '#A499E8',
    )
    expect(actionTokens.action.text['100'].value._cerberusTheme._darkMode).toBe(
      '#A499E8',
    )
    expect(
      actionTokens.action.text['100'].value._cerberusTheme._lightMode,
    ).toBe('#24186A')
  })

  test('should have a action.text.200 key', () => {
    expect(actionTokens.action.text['200']).toBeDefined()
    expect(actionTokens.action.text['200'].value._cerberusTheme.base).toBe(
      '#8677E0',
    )
    expect(actionTokens.action.text['200'].value._cerberusTheme._darkMode).toBe(
      '#8677E0',
    )
    expect(
      actionTokens.action.text['200'].value._cerberusTheme._lightMode,
    ).toBe('#3C28B1')
  })

  test('should have a action.text.inverse key', () => {
    expect(actionTokens.action.text.inverse).toBeDefined()
    expect(actionTokens.action.text.inverse.value._cerberusTheme.base).toBe(
      '#E1DDF7',
    )
    expect(
      actionTokens.action.text.inverse.value._cerberusTheme._darkMode,
    ).toBe('#E1DDF7')
    expect(
      actionTokens.action.text.inverse.value._cerberusTheme._lightMode,
    ).toBe('#1A2737')
  })
})
