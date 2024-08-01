import { describe, test, expect } from 'bun:test'
import { secondaryActionTokens } from '@cerberus-design/panda-preset'

describe('secondaryActionTokens', () => {
  const token = secondaryActionTokens.secondaryAction

  function formatToken(token: string) {
    return token.toUpperCase()
  }

  test('should have a action key', () => {
    expect(token).toBeDefined()
  })

  test('should have a action.bg key', () => {
    expect(token.bg).toBeDefined()
  })

  test('should have a action.bg.initial key', () => {
    expect(token.bg.initial).toBeDefined()
    expect(formatToken(token.bg.initial.value._cerberusTheme.base)).toBe(
      '#102D2D',
    )
    expect(formatToken(token.bg.initial.value._cerberusTheme._darkMode)).toBe(
      '#102D2D',
    )
    expect(formatToken(token.bg.initial.value._cerberusTheme._lightMode)).toBe(
      '#D8F9F7',
    )
  })

  test('should have a action.bg.hover key', () => {
    expect(token.bg.hover).toBeDefined()
    expect(formatToken(token.bg.hover.value._cerberusTheme.base)).toBe(
      '#1F5B5A',
    )
    expect(formatToken(token.bg.hover.value._cerberusTheme._darkMode)).toBe(
      '#1F5B5A',
    )
    expect(formatToken(token.bg.hover.value._cerberusTheme._lightMode)).toBe(
      '#B8F4F3',
    )
  })

  test('should have a action.bg.active key', () => {
    expect(token.bg.active).toBeDefined()
    expect(formatToken(token.bg.active.value._cerberusTheme.base)).toBe(
      '#41E3E0',
    )
    expect(formatToken(token.bg.active.value._cerberusTheme._darkMode)).toBe(
      '#41E3E0',
    )
    expect(formatToken(token.bg.active.value._cerberusTheme._lightMode)).toBe(
      '#95EEED',
    )
  })

  test('should have a action.border.initial key', () => {
    expect(token.border.initial).toBeDefined()
    expect(formatToken(token.border.initial.value._cerberusTheme.base)).toBe(
      '#41E3E0',
    )
    expect(
      formatToken(token.border.initial.value._cerberusTheme._darkMode),
    ).toBe('#41E3E0')
    expect(
      formatToken(token.border.initial.value._cerberusTheme._lightMode),
    ).toBe('#3B8180')
  })

  test('should have a action.border.100 key', () => {
    expect(token.border[100]).toBeDefined()
    expect(formatToken(token.border[100].value._cerberusTheme.base)).toBe(
      '#3B8180',
    )
    expect(formatToken(token.border[100].value._cerberusTheme._darkMode)).toBe(
      '#3B8180',
    )
    expect(formatToken(token.border[100].value._cerberusTheme._lightMode)).toBe(
      '#1F5B5A',
    )
  })

  test('should have a action.ghost key', () => {
    expect(token.ghost).toBeDefined()
  })

  test('should have a action.ghost.initial key', () => {
    expect(token.ghost.initial).toBeDefined()
    expect(formatToken(token.ghost.initial.value._cerberusTheme.base)).toBe(
      '#130024',
    )
    expect(
      formatToken(token.ghost.initial.value._cerberusTheme._darkMode),
    ).toBe('#130024')
    expect(
      formatToken(token.ghost.initial.value._cerberusTheme._lightMode),
    ).toBe('#FFFFFF')
  })

  test('should have a action.ghost.hover key', () => {
    expect(token.ghost.hover).toBeDefined()
    expect(formatToken(token.ghost.hover.value._cerberusTheme.base)).toBe(
      '#102D2D',
    )
    expect(formatToken(token.ghost.hover.value._cerberusTheme._darkMode)).toBe(
      '#102D2D',
    )
    expect(formatToken(token.ghost.hover.value._cerberusTheme._lightMode)).toBe(
      '#EEFDFC',
    )
  })

  test('should have a action.ghost.active key', () => {
    expect(token.ghost.active).toBeDefined()
    expect(formatToken(token.ghost.active.value._cerberusTheme.base)).toBe(
      '#3B8180',
    )
    expect(formatToken(token.ghost.active.value._cerberusTheme._darkMode)).toBe(
      '#3B8180',
    )
    expect(
      formatToken(token.ghost.active.value._cerberusTheme._lightMode),
    ).toBe('#D8F9F7')
  })

  test('should have a action.navigation.initial key', () => {
    expect(token.navigation.initial).toBeDefined()
    expect(
      formatToken(token.navigation.initial.value._cerberusTheme.base),
    ).toBe('#41E3E0')
    expect(
      formatToken(token.navigation.initial.value._cerberusTheme._darkMode),
    ).toBe('#41E3E0')
    expect(
      formatToken(token.navigation.initial.value._cerberusTheme._lightMode),
    ).toBe('#3B8180')
  })

  test('should have a action.navigation.hover key', () => {
    expect(token.navigation.hover).toBeDefined()
    expect(formatToken(token.navigation.hover.value._cerberusTheme.base)).toBe(
      '#72E9E7',
    )
    expect(
      formatToken(token.navigation.hover.value._cerberusTheme._darkMode),
    ).toBe('#72E9E7')
    expect(
      formatToken(token.navigation.hover.value._cerberusTheme._lightMode),
    ).toBe('#1F5B5A')
  })

  test('should have a action.navigation.visited key', () => {
    expect(token.navigation.visited).toBeDefined()
    expect(
      formatToken(token.navigation.visited.value._cerberusTheme.base),
    ).toBe('#3FB6B4')
    expect(
      formatToken(token.navigation.visited.value._cerberusTheme._darkMode),
    ).toBe('#3FB6B4')
    expect(
      formatToken(token.navigation.visited.value._cerberusTheme._lightMode),
    ).toBe('#102D2D')
  })

  test('should have a action.text key', () => {
    expect(token.text).toBeDefined()
  })

  test('should have a action.text.initial key', () => {
    expect(token.text.initial).toBeDefined()
    expect(formatToken(token.text.initial.value._cerberusTheme.base)).toBe(
      '#41E3E0',
    )
    expect(formatToken(token.text.initial.value._cerberusTheme._darkMode)).toBe(
      '#41E3E0',
    )
    expect(
      formatToken(token.text.initial.value._cerberusTheme._lightMode),
    ).toBe('#3B8180')
  })

  test('should have a action.text.100 key', () => {
    expect(token.text['100']).toBeDefined()
    expect(formatToken(token.text['100'].value._cerberusTheme.base)).toBe(
      '#1F5B5A',
    )
    expect(formatToken(token.text['100'].value._cerberusTheme._darkMode)).toBe(
      '#1F5B5A',
    )
    expect(formatToken(token.text['100'].value._cerberusTheme._lightMode)).toBe(
      '#102D2D',
    )
  })

  test('should have a action.text.200 key', () => {
    expect(token.text['200']).toBeDefined()
    expect(formatToken(token.text['200'].value._cerberusTheme.base)).toBe(
      '#95EEED',
    )
    expect(formatToken(token.text['200'].value._cerberusTheme._darkMode)).toBe(
      '#95EEED',
    )
    expect(formatToken(token.text['200'].value._cerberusTheme._lightMode)).toBe(
      '#1F5B5A',
    )
  })
})
