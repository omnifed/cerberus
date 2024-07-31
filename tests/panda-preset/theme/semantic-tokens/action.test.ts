import { describe, test, expect } from 'bun:test'
import { actionTokens } from '@cerberus-design/panda-preset'

describe('actionTokens', () => {
  function formatToken(token: string) {
    return token.toUpperCase()
  }

  test('should have a action key', () => {
    expect(actionTokens.action).toBeDefined()
  })

  test('should have a action.bg key', () => {
    expect(actionTokens.action.bg).toBeDefined()
  })

  test('should have a action.bg.initial key', () => {
    expect(actionTokens.action.bg.initial).toBeDefined()
    expect(
      formatToken(actionTokens.action.bg.initial.value._cerberusTheme.base),
    ).toBe('#5F00B5')
    expect(
      formatToken(
        actionTokens.action.bg.initial.value._cerberusTheme._darkMode,
      ),
    ).toBe('#5F00B5')
    expect(
      formatToken(
        actionTokens.action.bg.initial.value._cerberusTheme._lightMode,
      ),
    ).toBe('#5F00B5')
  })

  test('should have a action.bg.hover key', () => {
    expect(actionTokens.action.bg.hover).toBeDefined()
    expect(
      formatToken(actionTokens.action.bg.hover.value._cerberusTheme.base),
    ).toBe('#7F33C4')
    expect(
      formatToken(actionTokens.action.bg.hover.value._cerberusTheme._darkMode),
    ).toBe('#7F33C4')
    expect(
      formatToken(actionTokens.action.bg.hover.value._cerberusTheme._lightMode),
    ).toBe('#7F33C4')
  })

  test('should have a action.bg.active key', () => {
    expect(actionTokens.action.bg.active).toBeDefined()
    expect(
      formatToken(actionTokens.action.bg.active.value._cerberusTheme.base),
    ).toBe('#4C0091')
    expect(
      formatToken(actionTokens.action.bg.active.value._cerberusTheme._darkMode),
    ).toBe('#4C0091')
    expect(
      formatToken(
        actionTokens.action.bg.active.value._cerberusTheme._lightMode,
      ),
    ).toBe('#9F66D3')
  })

  test('should have a action.border.initial key', () => {
    expect(actionTokens.action.border.initial).toBeDefined()
    expect(
      formatToken(actionTokens.action.border.initial.value._cerberusTheme.base),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.border.initial.value._cerberusTheme._darkMode,
      ),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.border.initial.value._cerberusTheme._lightMode,
      ),
    ).toBe('#5F00B5')
  })

  test('should have a action.border.100 key', () => {
    expect(actionTokens.action.border[100]).toBeDefined()
    expect(
      formatToken(actionTokens.action.border[100].value._cerberusTheme.base),
    ).toBe('#918EA7')
    expect(
      formatToken(
        actionTokens.action.border[100].value._cerberusTheme._darkMode,
      ),
    ).toBe('#918EA7')
    expect(
      formatToken(
        actionTokens.action.border[100].value._cerberusTheme._lightMode,
      ),
    ).toBe('#696584')
  })

  test('should have a action.border.focus key', () => {
    expect(actionTokens.action.border.focus).toBeDefined()
    expect(
      formatToken(actionTokens.action.border.focus.value._cerberusTheme.base),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.border.focus.value._cerberusTheme._darkMode,
      ),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.border.focus.value._cerberusTheme._lightMode,
      ),
    ).toBe('#4C0091')
  })

  test('should have a action.ghost key', () => {
    expect(actionTokens.action.ghost).toBeDefined()
  })

  test('should have a action.ghost.initial key', () => {
    expect(actionTokens.action.ghost.initial).toBeDefined()
    expect(
      formatToken(actionTokens.action.ghost.initial.value._cerberusTheme.base),
    ).toBe('#130024')
    expect(
      formatToken(
        actionTokens.action.ghost.initial.value._cerberusTheme._darkMode,
      ),
    ).toBe('#130024')
    expect(
      formatToken(
        actionTokens.action.ghost.initial.value._cerberusTheme._lightMode,
      ),
    ).toBe('#FFFFFF')
  })

  test('should have a action.ghost.hover key', () => {
    expect(actionTokens.action.ghost.hover).toBeDefined()
    expect(
      formatToken(actionTokens.action.ghost.hover.value._cerberusTheme.base),
    ).toBe('#260048')
    expect(
      formatToken(
        actionTokens.action.ghost.hover.value._cerberusTheme._darkMode,
      ),
    ).toBe('#260048')
    expect(
      formatToken(
        actionTokens.action.ghost.hover.value._cerberusTheme._lightMode,
      ),
    ).toBe('#F3F2F4')
  })

  test('should have a action.ghost.active key', () => {
    expect(actionTokens.action.ghost.active).toBeDefined()
    expect(
      formatToken(actionTokens.action.ghost.active.value._cerberusTheme.base),
    ).toBe('#39006D')
    expect(
      formatToken(
        actionTokens.action.ghost.active.value._cerberusTheme._darkMode,
      ),
    ).toBe('#39006D')
    expect(
      formatToken(
        actionTokens.action.ghost.active.value._cerberusTheme._lightMode,
      ),
    ).toBe('#EFE5F8')
  })

  test('should have a action.navigation.initial key', () => {
    expect(actionTokens.action.navigation.initial).toBeDefined()
    expect(
      formatToken(
        actionTokens.action.navigation.initial.value._cerberusTheme.base,
      ),
    ).toBe('#9F66D3')
    expect(
      formatToken(
        actionTokens.action.navigation.initial.value._cerberusTheme._darkMode,
      ),
    ).toBe('#9F66D3')
    expect(
      formatToken(
        actionTokens.action.navigation.initial.value._cerberusTheme._lightMode,
      ),
    ).toBe('#5F00B5')
  })

  test('should have a action.navigation.hover key', () => {
    expect(actionTokens.action.navigation.hover).toBeDefined()
    expect(
      formatToken(
        actionTokens.action.navigation.hover.value._cerberusTheme.base,
      ),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.navigation.hover.value._cerberusTheme._darkMode,
      ),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.navigation.hover.value._cerberusTheme._lightMode,
      ),
    ).toBe('#7F33C4')
  })

  test('should have a action.navigation.visited key', () => {
    expect(actionTokens.action.navigation.visited).toBeDefined()
    expect(
      formatToken(
        actionTokens.action.navigation.visited.value._cerberusTheme.base,
      ),
    ).toBe('#DFCCF0')
    expect(
      formatToken(
        actionTokens.action.navigation.visited.value._cerberusTheme._darkMode,
      ),
    ).toBe('#DFCCF0')
    expect(
      formatToken(
        actionTokens.action.navigation.visited.value._cerberusTheme._lightMode,
      ),
    ).toBe('#362A58')
  })

  test('should have a action.text key', () => {
    expect(actionTokens.action.text).toBeDefined()
  })

  test('should have a action.text.initial key', () => {
    expect(actionTokens.action.text.initial).toBeDefined()
    expect(
      formatToken(actionTokens.action.text.initial.value._cerberusTheme.base),
    ).toBe('#FFFFFF')
    expect(
      formatToken(
        actionTokens.action.text.initial.value._cerberusTheme._darkMode,
      ),
    ).toBe('#FFFFFF')
    expect(
      formatToken(
        actionTokens.action.text.initial.value._cerberusTheme._lightMode,
      ),
    ).toBe('#FCFBFE')
  })

  test('should have a action.text.100 key', () => {
    expect(actionTokens.action.text['100']).toBeDefined()
    expect(
      formatToken(actionTokens.action.text['100'].value._cerberusTheme.base),
    ).toBe('#9F66D3')
    expect(
      formatToken(
        actionTokens.action.text['100'].value._cerberusTheme._darkMode,
      ),
    ).toBe('#9F66D3')
    expect(
      formatToken(
        actionTokens.action.text['100'].value._cerberusTheme._lightMode,
      ),
    ).toBe('#39006D')
  })

  test('should have a action.text.200 key', () => {
    expect(actionTokens.action.text['200']).toBeDefined()
    expect(
      formatToken(actionTokens.action.text['200'].value._cerberusTheme.base),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.text['200'].value._cerberusTheme._darkMode,
      ),
    ).toBe('#BB93E1')
    expect(
      formatToken(
        actionTokens.action.text['200'].value._cerberusTheme._lightMode,
      ),
    ).toBe('#5F00B5')
  })

  test('should have a action.text.inverse key', () => {
    expect(actionTokens.action.text.inverse).toBeDefined()
    expect(
      formatToken(actionTokens.action.text.inverse.value._cerberusTheme.base),
    ).toBe('#FCFBFE')
    expect(
      formatToken(
        actionTokens.action.text.inverse.value._cerberusTheme._darkMode,
      ),
    ).toBe('#FCFBFE')
    expect(
      formatToken(
        actionTokens.action.text.inverse.value._cerberusTheme._lightMode,
      ),
    ).toBe('#130024')
  })
})
