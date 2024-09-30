import { describe, test, expect } from 'bun:test'
import { secondaryActionTokens } from '@cerberus-design/panda-preset'

describe('secondaryActionTokens', () => {
  const token = secondaryActionTokens.secondaryAction

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // bg.initial

  test('should have a cerberus secondary-action.bg.initial key', () => {
    expect(token.bg.initial).toBeDefined()
    expect(token.bg.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.20`,
    )
  })

  // bg.hover

  test('should have a cerberus secondary-action.bg.hover key', () => {
    expect(token.bg.hover).toBeDefined()
    expect(token.bg.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
    expect(token.bg.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
    expect(token.bg.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.30`,
    )
  })

  // bg.active

  test('should have a cerberus secondary-action.bg.active key', () => {
    expect(token.bg.active).toBeDefined()
    expect(token.bg.active.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.bg.active.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.bg.active.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.40`,
    )
  })

  // border.initial

  test('should have a cerberus secondary-action.border.initial key', () => {
    expect(token.border.initial).toBeDefined()
    expect(token.border.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.border.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.border.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.80`,
    )
  })

  // border.100

  test('should have a cerberus secondary-action.border.100 key', () => {
    expect(token.border[100]).toBeDefined()
    expect(token.border[100].value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.80`,
    )
    expect(token.border[100].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.80`,
    )
    expect(token.border[100].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
  })

  // ghost.initial

  test('should have a cerberus secondary-action.ghost.initial key', () => {
    expect(token.ghost.initial).toBeDefined()
    expect(token.ghost.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.ghost.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.ghost.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a cerberus secondary-action.ghost.hover key', () => {
    expect(token.ghost.hover).toBeDefined()
    expect(token.ghost.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.100`,
    )
    expect(token.ghost.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.100`,
    )
    expect(token.ghost.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.10`,
    )
  })

  // ghost.active

  test('should have a cerberus secondary-action.ghost.active key', () => {
    expect(token.ghost.active).toBeDefined()
    expect(token.ghost.active.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.80`,
    )
    expect(token.ghost.active.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.80`,
    )
    expect(token.ghost.active.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.20`,
    )
  })

  // navigation.initial

  test('should have a cerberus secondary-action.navigation.initial key', () => {
    expect(token.navigation.initial).toBeDefined()
    expect(token.navigation.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.navigation.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.navigation.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.80`,
    )
  })

  // navigation.hover

  test('should have a cerberus secondary-action.navigation.hover key', () => {
    expect(token.navigation.hover).toBeDefined()
    expect(token.navigation.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.50`,
    )
    expect(token.navigation.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.50`,
    )
    expect(token.navigation.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
  })

  // navigation.visited

  test('should have a cerberus secondary-action.navigation.visited key', () => {
    expect(token.navigation.visited).toBeDefined()
    expect(token.navigation.visited.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.70`,
    )
    expect(token.navigation.visited.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.70`,
    )
    expect(token.navigation.visited.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.100`,
    )
  })

  // text.initial

  test('should have a cerberus secondary-action.text.initial key', () => {
    expect(token.text.initial).toBeDefined()
    expect(token.text.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.text.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.60`,
    )
    expect(token.text.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.80`,
    )
  })

  // text.100

  test('should have a cerberus secondary-action.text.100 key', () => {
    expect(token.text['100']).toBeDefined()
    expect(token.text['100'].value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
    expect(token.text['100'].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
    expect(token.text['100'].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.100`,
    )
  })

  // text.200

  test('should have a cerberus secondary-action.text.200 key', () => {
    expect(token.text['200']).toBeDefined()
    expect(token.text['200'].value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.40`,
    )
    expect(token.text['200'].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.40`,
    )
    expect(token.text['200'].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
  })

  // text.static

  test('should have a cerberus secondary-action.text.static key', () => {
    expect(token.text.static).toBeDefined()
    expect(token.text.static.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.teal.70`,
    )
    expect(token.text.static.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.teal.70`,
    )
    expect(token.text.static.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.teal.70`,
    )
  })
})
