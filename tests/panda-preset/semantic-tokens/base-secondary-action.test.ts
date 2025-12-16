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
    expect(token.bg.initial.value.base).toBe(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.bg.initial.value._darkMode).toBe(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.bg.initial.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.20`,
    )
  })

  // bg.hover

  test('should have a cerberus secondary-action.bg.hover key', () => {
    expect(token.bg.hover).toBeDefined()
    expect(token.bg.hover.value.base).toBe(
      getSemanticToken`cerberus.neutral.50`,
    )
    expect(token.bg.hover.value._darkMode).toBe(
      getSemanticToken`cerberus.neutral.50`,
    )
    expect(token.bg.hover.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
  })

  // bg.active

  test('should have a cerberus secondary-action.bg.active key', () => {
    expect(token.bg.active).toBeDefined()
    expect(token.bg.active.value.base).toBe(getSemanticToken`cerberus.brand.30`)
    expect(token.bg.active.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(token.bg.active.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
  })

  // border.initial

  test('should have a cerberus secondary-action.border.initial key', () => {
    expect(token.border.initial).toBeDefined()
    expect(token.border.initial.value.base).toBe(
      getSemanticToken`cerberus.brand.50`,
    )
    expect(token.border.initial.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.50`,
    )
    expect(token.border.initial.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
  })

  // border.100

  test('should have a cerberus secondary-action.border.100 key', () => {
    expect(token.border[100]).toBeDefined()
    expect(token.border[100].value.base).toBe(
      getSemanticToken`cerberus.brand.70`,
    )
    expect(token.border[100].value._darkMode).toBe(
      getSemanticToken`cerberus.brand.70`,
    )
    expect(token.border[100].value._lightMode).toBe(
      getSemanticToken`cerberus.brand.20`,
    )
  })

  // ghost.initial

  test('should have a cerberus secondary-action.ghost.initial key', () => {
    expect(token.ghost.initial).toBeDefined()
    expect(token.ghost.initial.value.base).toBe(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.ghost.initial.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.ghost.initial.value._lightMode).toBe(
      getSemanticToken`cerberus.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a cerberus secondary-action.ghost.hover key', () => {
    expect(token.ghost.hover).toBeDefined()
    expect(token.ghost.hover.value.base).toBe(
      getSemanticToken`cerberus.brand.90`,
    )
    expect(token.ghost.hover.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.90`,
    )
    expect(token.ghost.hover.value._lightMode).toBe(
      getSemanticToken`cerberus.neutral.15`,
    )
  })

  // ghost.active

  test('should have a cerberus secondary-action.ghost.active key', () => {
    expect(token.ghost.active).toBeDefined()
    expect(token.ghost.active.value.base).toBe(
      getSemanticToken`cerberus.brand.80`,
    )
    expect(token.ghost.active.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.80`,
    )
    expect(token.ghost.active.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.20`,
    )
  })

  // navigation.initial

  test('should have a cerberus secondary-action.navigation.initial key', () => {
    expect(token.navigation.initial).toBeDefined()
    expect(token.navigation.initial.value.base).toBe(
      getSemanticToken`cerberus.brand.10`,
    )
    expect(token.navigation.initial.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.10`,
    )
    expect(token.navigation.initial.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.60`,
    )
  })

  // navigation.hover

  test('should have a cerberus secondary-action.navigation.hover key', () => {
    expect(token.navigation.hover).toBeDefined()
    expect(token.navigation.hover.value.base).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(token.navigation.hover.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(token.navigation.hover.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.50`,
    )
  })

  // navigation.visited

  test('should have a cerberus secondary-action.navigation.visited key', () => {
    expect(token.navigation.visited).toBeDefined()
    expect(token.navigation.visited.value.base).toBe(
      getSemanticToken`cerberus.brand.20`,
    )
    expect(token.navigation.visited.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.20`,
    )
    expect(token.navigation.visited.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.100`,
    )
  })

  // text.initial

  test('should have a cerberus secondary-action.text.initial key', () => {
    expect(token.text.initial).toBeDefined()
    expect(token.text.initial.value.base).toBe(
      getSemanticToken`cerberus.brand.20`,
    )
    expect(token.text.initial.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.20`,
    )
    expect(token.text.initial.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.90`,
    )
  })

  // text.100

  test('should have a cerberus secondary-action.text.100 key', () => {
    expect(token.text['100']).toBeDefined()
    expect(token.text['100'].value.base).toBe(
      getSemanticToken`cerberus.brand.10`,
    )
    expect(token.text['100'].value._darkMode).toBe(
      getSemanticToken`cerberus.brand.10`,
    )
    expect(token.text['100'].value._lightMode).toBe(
      getSemanticToken`cerberus.brand.100`,
    )
  })

  // text.200

  test('should have a cerberus secondary-action.text.200 key', () => {
    expect(token.text['200']).toBeDefined()
    expect(token.text['200'].value.base).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(token.text['200'].value._darkMode).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(token.text['200'].value._lightMode).toBe(
      getSemanticToken`cerberus.brand.50`,
    )
  })

  // text.static

  test('should have a cerberus secondary-action.text.static key', () => {
    expect(token.text.static).toBeDefined()
    expect(token.text.static.value.base).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
    expect(token.text.static.value._darkMode).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
    expect(token.text.static.value._lightMode).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
  })
})
