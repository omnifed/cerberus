import { describe, test, expect } from 'bun:test'
import { secondaryActionTokens } from '@cerberus-design/panda-preset'

describe('secondaryActionTokens', () => {
  const token = secondaryActionTokens.secondaryAction

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a action key', () => {
    expect(token).toBeDefined()
  })

  test('should have a action.bg key', () => {
    expect(token.bg).toBeDefined()
  })

  test('should have a action.bg.initial key', () => {
    expect(token.bg.initial).toBeDefined()
    expect(token.bg.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.20`,
    )
  })

  test('should have a action.bg.hover key', () => {
    expect(token.bg.hover).toBeDefined()
    expect(token.bg.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.90`,
    )
    expect(token.bg.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.90`,
    )
    expect(token.bg.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.30`,
    )
  })

  test('should have a action.bg.active key', () => {
    expect(token.bg.active).toBeDefined()
    expect(token.bg.active.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.bg.active.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.bg.active.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.40`,
    )
  })

  test('should have a action.border.initial key', () => {
    expect(token.border.initial).toBeDefined()
    expect(token.border.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.border.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.border.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.80`,
    )
  })

  test('should have a action.border.100 key', () => {
    expect(token.border[100]).toBeDefined()
    expect(token.border[100].value._cerberusTheme.base).toBe(
      getSemanticToken`teal.80`,
    )
    expect(token.border[100].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.80`,
    )
    expect(token.border[100].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.90`,
    )
  })

  test('should have a action.ghost key', () => {
    expect(token.ghost).toBeDefined()
  })

  test('should have a action.ghost.initial key', () => {
    expect(token.ghost.initial).toBeDefined()
    expect(token.ghost.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.100`,
    )
    expect(token.ghost.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`brand.100`,
    )
    expect(token.ghost.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`neutral.white`,
    )
  })

  test('should have a action.ghost.hover key', () => {
    expect(token.ghost.hover).toBeDefined()
    expect(token.ghost.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.100`,
    )
    expect(token.ghost.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.100`,
    )
    expect(token.ghost.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.10`,
    )
  })

  test('should have a action.ghost.active key', () => {
    expect(token.ghost.active).toBeDefined()
    expect(token.ghost.active.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.80`,
    )
    expect(token.ghost.active.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.80`,
    )
    expect(token.ghost.active.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.20`,
    )
  })

  test('should have a action.navigation.initial key', () => {
    expect(token.navigation.initial).toBeDefined()
    expect(token.navigation.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.navigation.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.navigation.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.80`,
    )
  })

  test('should have a action.navigation.hover key', () => {
    expect(token.navigation.hover).toBeDefined()
    expect(token.navigation.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.50`,
    )
    expect(token.navigation.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.50`,
    )
    expect(token.navigation.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.90`,
    )
  })

  test('should have a action.navigation.visited key', () => {
    expect(token.navigation.visited).toBeDefined()
    expect(token.navigation.visited.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.70`,
    )
    expect(token.navigation.visited.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.70`,
    )
    expect(token.navigation.visited.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.100`,
    )
  })

  test('should have a action.text key', () => {
    expect(token.text).toBeDefined()
  })

  test('should have a action.text.initial key', () => {
    expect(token.text.initial).toBeDefined()
    expect(token.text.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.text.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.60`,
    )
    expect(token.text.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.80`,
    )
  })

  test('should have a action.text.100 key', () => {
    expect(token.text['100']).toBeDefined()
    expect(token.text['100'].value._cerberusTheme.base).toBe(
      getSemanticToken`teal.70`,
    )
    expect(token.text['100'].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.70`,
    )
    expect(token.text['100'].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.100`,
    )
  })

  test('should have a action.text.200 key', () => {
    expect(token.text['200']).toBeDefined()
    expect(token.text['200'].value._cerberusTheme.base).toBe(
      getSemanticToken`teal.40`,
    )
    expect(token.text['200'].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.40`,
    )
    expect(token.text['200'].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.90`,
    )
  })

  test('should have a action.text.static key', () => {
    expect(token.text.static).toBeDefined()
    expect(token.text.static.value._cerberusTheme.base).toBe(
      getSemanticToken`teal.70`,
    )
    expect(token.text.static.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`teal.70`,
    )
    expect(token.text.static.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`teal.70`,
    )
  })
})
