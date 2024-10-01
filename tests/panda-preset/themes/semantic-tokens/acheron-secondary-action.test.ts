import { describe, test, expect } from 'bun:test'
import { acheronTheme } from '@cerberus-design/panda-preset'

describe('secondaryActionTokens', () => {
  const token = acheronTheme.secondaryActionTokens.secondaryAction

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // bg.initial

  test('should have a acheron secondary-action.bg.initial key', () => {
    expect(token.bg.initial).toBeDefined()
    expect(token.bg.initial.value.base).toBe(
      getSemanticToken`acheron.accent.100`,
    )
    expect(token.bg.initial.value._darkMode).toBe(
      getSemanticToken`acheron.accent.100`,
    )
    expect(token.bg.initial.value._lightMode).toBe(
      getSemanticToken`acheron.accent.30`,
    )
  })

  // bg.hover

  test('should have a acheron secondary-action.bg.hover key', () => {
    expect(token.bg.hover).toBeDefined()
    expect(token.bg.hover.value.base).toBe(getSemanticToken`acheron.accent.90`)
    expect(token.bg.hover.value._darkMode).toBe(
      getSemanticToken`acheron.accent.90`,
    )
    expect(token.bg.hover.value._lightMode).toBe(
      getSemanticToken`acheron.accent.40`,
    )
  })

  // bg.active

  test('should have a acheron secondary-action.bg.active key', () => {
    expect(token.bg.active).toBeDefined()
    expect(token.bg.active.value.base).toBe(getSemanticToken`acheron.accent.60`)
    expect(token.bg.active.value._darkMode).toBe(
      getSemanticToken`acheron.accent.60`,
    )
    expect(token.bg.active.value._lightMode).toBe(
      getSemanticToken`acheron.accent.50`,
    )
  })

  // border.initial

  test('should have a acheron secondary-action.border.initial key', () => {
    expect(token.border.initial).toBeDefined()
    expect(token.border.initial.value.base).toBe(
      getSemanticToken`acheron.accent.60`,
    )
    expect(token.border.initial.value._darkMode).toBe(
      getSemanticToken`acheron.accent.60`,
    )
    expect(token.border.initial.value._lightMode).toBe(
      getSemanticToken`acheron.accent.80`,
    )
  })

  // border.100

  test('should have a acheron secondary-action.border.100 key', () => {
    expect(token.border[100]).toBeDefined()
    expect(token.border[100].value.base).toBe(getSemanticToken`acheron.info.80`)
    expect(token.border[100].value._darkMode).toBe(
      getSemanticToken`acheron.info.80`,
    )
    expect(token.border[100].value._lightMode).toBe(
      getSemanticToken`acheron.info.90`,
    )
  })

  // ghost.initial

  test('should have a acheron secondary-action.ghost.initial key', () => {
    expect(token.ghost.initial).toBeDefined()
    expect(token.ghost.initial.value.base).toBe(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.ghost.initial.value._darkMode).toBe(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.ghost.initial.value._lightMode).toBe(
      getSemanticToken`acheron.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a acheron secondary-action.ghost.hover key', () => {
    expect(token.ghost.hover).toBeDefined()
    expect(token.ghost.hover.value.base).toBe(
      getSemanticToken`acheron.accent.90`,
    )
    expect(token.ghost.hover.value._darkMode).toBe(
      getSemanticToken`acheron.accent.90`,
    )
    expect(token.ghost.hover.value._lightMode).toBe(
      getSemanticToken`acheron.accent.10`,
    )
  })

  // ghost.active

  test('should have a acheron secondary-action.ghost.active key', () => {
    expect(token.ghost.active).toBeDefined()
    expect(token.ghost.active.value.base).toBe(
      getSemanticToken`acheron.accent.80`,
    )
    expect(token.ghost.active.value._darkMode).toBe(
      getSemanticToken`acheron.accent.80`,
    )
    expect(token.ghost.active.value._lightMode).toBe(
      getSemanticToken`acheron.accent.20`,
    )
  })

  // navigation.initial

  test('should have a acheron secondary-action.navigation.initial key', () => {
    expect(token.navigation.initial).toBeDefined()
    expect(token.navigation.initial.value.base).toBe(
      getSemanticToken`acheron.accent.60`,
    )
    expect(token.navigation.initial.value._darkMode).toBe(
      getSemanticToken`acheron.accent.60`,
    )
    expect(token.navigation.initial.value._lightMode).toBe(
      getSemanticToken`acheron.accent.70`,
    )
  })

  // navigation.hover

  test('should have a acheron secondary-action.navigation.hover key', () => {
    expect(token.navigation.hover).toBeDefined()
    expect(token.navigation.hover.value.base).toBe(
      getSemanticToken`cerberus.teal.50`,
    )
    expect(token.navigation.hover.value._darkMode).toBe(
      getSemanticToken`cerberus.teal.50`,
    )
    expect(token.navigation.hover.value._lightMode).toBe(
      getSemanticToken`cerberus.teal.90`,
    )
  })

  // navigation.visited

  test('should have a acheron secondary-action.navigation.visited key', () => {
    expect(token.navigation.visited).toBeDefined()
    expect(token.navigation.visited.value.base).toBe(
      getSemanticToken`acheron.info.70`,
    )
    expect(token.navigation.visited.value._darkMode).toBe(
      getSemanticToken`acheron.info.70`,
    )
    expect(token.navigation.visited.value._lightMode).toBe(
      getSemanticToken`acheron.info.90`,
    )
  })

  // text.initial

  test('should have a acheron secondary-action.text.initial key', () => {
    expect(token.text.initial).toBeDefined()
    expect(token.text.initial.value.base).toBe(
      getSemanticToken`acheron.accent.60`,
    )
    expect(token.text.initial.value._darkMode).toBe(
      getSemanticToken`acheron.accent.60`,
    )
    expect(token.text.initial.value._lightMode).toBe(
      getSemanticToken`acheron.accent.80`,
    )
  })

  // text.100

  test('should have a acheron secondary-action.text.100 key', () => {
    expect(token.text['100']).toBeDefined()
    expect(token.text['100'].value.base).toBe(
      getSemanticToken`acheron.accent.80`,
    )
    expect(token.text['100'].value._darkMode).toBe(
      getSemanticToken`acheron.accent.80`,
    )
    expect(token.text['100'].value._lightMode).toBe(
      getSemanticToken`acheron.accent.100`,
    )
  })

  // text.200

  test('should have a acheron secondary-action.text.200 key', () => {
    expect(token.text['200']).toBeDefined()
    expect(token.text['200'].value.base).toBe(getSemanticToken`acheron.info.40`)
    expect(token.text['200'].value._darkMode).toBe(
      getSemanticToken`acheron.info.40`,
    )
    expect(token.text['200'].value._lightMode).toBe(
      getSemanticToken`acheron.info.70`,
    )
  })

  // text.static

  test('should have a acheron secondary-action.text.static key', () => {
    expect(token.text.static).toBeDefined()
    expect(token.text.static.value.base).toBe(getSemanticToken`acheron.info.70`)
    expect(token.text.static.value._darkMode).toBe(
      getSemanticToken`acheron.info.70`,
    )
    expect(token.text.static.value._lightMode).toBe(
      getSemanticToken`acheron.accent.70`,
    )
  })
})
