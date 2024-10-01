import { describe, test, expect } from 'bun:test'
import { acheronTheme } from '@cerberus-design/panda-preset'

describe('Acheron actionTokens', () => {
  const actionTokens = acheronTheme.actionTokens

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a action key', () => {
    expect(actionTokens.action).toBeDefined()
  })

  // bg.initial

  test('should have a acheron action.bg.initial key', () => {
    expect(actionTokens.action.bg.initial).toBeDefined()
    expect(actionTokens.action.bg.initial.value.base).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._darkMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._lightMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
  })

  // bg.hover

  test('should have a acheron action.bg.hover key', () => {
    expect(actionTokens.action.bg.hover).toBeDefined()
    expect(actionTokens.action.bg.hover.value.base).toBe(
      getSemanticToken`acheron.brand.50`,
    )
    expect(actionTokens.action.bg.hover.value._darkMode).toBe(
      getSemanticToken`acheron.brand.50`,
    )
    expect(actionTokens.action.bg.hover.value._lightMode).toBe(
      getSemanticToken`acheron.brand.50`,
    )
  })

  // bg.active

  test('should have a acheron action.bg.active key', () => {
    expect(actionTokens.action.bg.active).toBeDefined()
    expect(actionTokens.action.bg.active.value.base).toBe(
      getSemanticToken`acheron.brand.40`,
    )
    expect(actionTokens.action.bg.active.value._darkMode).toBe(
      getSemanticToken`acheron.brand.40`,
    )
    expect(actionTokens.action.bg.active.value._lightMode).toBe(
      getSemanticToken`acheron.brand.40`,
    )
  })

  // border.initial

  test('should have a acheron action.border.initial key', () => {
    expect(actionTokens.action.border.initial).toBeDefined()
    expect(actionTokens.action.border.initial.value.base).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.border.initial.value._darkMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.border.initial.value._lightMode).toBe(
      getSemanticToken`acheron.brand.80`,
    )
  })

  // border.100

  test('should have a acheron action.border.100 key', () => {
    expect(actionTokens.action.border[100]).toBeDefined()
    expect(actionTokens.action.border[100].value.base).toBe(
      getSemanticToken`acheron.neutral.50`,
    )
    expect(actionTokens.action.border[100].value._darkMode).toBe(
      getSemanticToken`acheron.neutral.50`,
    )
    expect(actionTokens.action.border[100].value._lightMode).toBe(
      getSemanticToken`acheron.neutral.50`,
    )
  })

  // border.focus

  test('should have a acheron action.border.focus key', () => {
    expect(actionTokens.action.border.focus).toBeDefined()
    expect(actionTokens.action.border.focus.value.base).toBe(
      getSemanticToken`acheron.brand.70`,
    )
    expect(actionTokens.action.border.focus.value._darkMode).toBe(
      getSemanticToken`acheron.brand.70`,
    )
    expect(actionTokens.action.border.focus.value._lightMode).toBe(
      getSemanticToken`acheron.brand.70`,
    )
  })

  // ghost.initial

  test('should have a acheron action.ghost.initial key', () => {
    expect(actionTokens.action.ghost.initial).toBeDefined()
    expect(actionTokens.action.ghost.initial.value.base).toBe(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(actionTokens.action.ghost.initial.value._darkMode).toBe(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(actionTokens.action.ghost.initial.value._lightMode).toBe(
      getSemanticToken`acheron.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a acheron action.ghost.hover key', () => {
    expect(actionTokens.action.ghost.hover).toBeDefined()
    expect(actionTokens.action.ghost.hover.value.base).toBe(
      getSemanticToken`acheron.brand.90`,
    )
    expect(actionTokens.action.ghost.hover.value._darkMode).toBe(
      getSemanticToken`acheron.brand.90`,
    )
    expect(actionTokens.action.ghost.hover.value._lightMode).toBe(
      getSemanticToken`acheron.brand.5`,
    )
  })

  // ghost.active

  test('should have a acheron action.ghost.active key', () => {
    expect(actionTokens.action.ghost.active).toBeDefined()
    expect(actionTokens.action.ghost.active.value.base).toBe(
      getSemanticToken`acheron.brand.80`,
    )
    expect(actionTokens.action.ghost.active.value._darkMode).toBe(
      getSemanticToken`acheron.brand.80`,
    )
    expect(actionTokens.action.ghost.active.value._lightMode).toBe(
      getSemanticToken`acheron.brand.10`,
    )
  })

  // navigation.initial

  test('should have a acheron action.navigation.initial key', () => {
    expect(actionTokens.action.navigation.initial).toBeDefined()
    expect(actionTokens.action.navigation.initial.value.base).toBe(
      getSemanticToken`acheron.brand.70`,
    )
    expect(actionTokens.action.navigation.initial.value._darkMode).toBe(
      getSemanticToken`acheron.brand.70`,
    )
    expect(actionTokens.action.navigation.initial.value._lightMode).toBe(
      getSemanticToken`acheron.brand.70`,
    )
  })

  // navigation.hover

  test('should have a acheron action.navigation.hover key', () => {
    expect(actionTokens.action.navigation.hover).toBeDefined()
    expect(actionTokens.action.navigation.hover.value.base).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.navigation.hover.value._darkMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.navigation.hover.value._lightMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
  })

  // navigation.visited

  test('should have a acheron action.navigation.visited key', () => {
    expect(actionTokens.action.navigation.visited).toBeDefined()
    expect(actionTokens.action.navigation.visited.value.base).toBe(
      getSemanticToken`acheron.brand.80`,
    )
    expect(actionTokens.action.navigation.visited.value._darkMode).toBe(
      getSemanticToken`acheron.brand.80`,
    )
    expect(actionTokens.action.navigation.visited.value._lightMode).toBe(
      getSemanticToken`acheron.brand.80`,
    )
  })

  // text.initial

  test('should have a acheron action.text.initial key', () => {
    expect(actionTokens.action.text.initial).toBeDefined()
    expect(actionTokens.action.text.initial.value.base).toBe(
      getSemanticToken`acheron.brand.100`,
    )
    expect(actionTokens.action.text.initial.value._darkMode).toBe(
      getSemanticToken`acheron.brand.100`,
    )
    expect(actionTokens.action.text.initial.value._lightMode).toBe(
      getSemanticToken`acheron.brand.100`,
    )
  })

  // text.100

  test('should have a acheron action.text.100 key', () => {
    expect(actionTokens.action.text[100]).toBeDefined()
    expect(actionTokens.action.text[100].value.base).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.text[100].value._darkMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.text[100].value._lightMode).toBe(
      getSemanticToken`acheron.brand.70`,
    )
  })

  // text.200

  test('should have a acheron action.text.200 key', () => {
    expect(actionTokens.action.text[200]).toBeDefined()
    expect(actionTokens.action.text[200].value.base).toBe(
      getSemanticToken`acheron.brand.40`,
    )
    expect(actionTokens.action.text[200].value._darkMode).toBe(
      getSemanticToken`acheron.brand.40`,
    )
    expect(actionTokens.action.text[200].value._lightMode).toBe(
      getSemanticToken`acheron.brand.90`,
    )
  })

  // text.inverse

  test('should have a acheron action.text.inverse key', () => {
    expect(actionTokens.action.text.inverse).toBeDefined()
    expect(actionTokens.action.text.inverse.value.base).toBe(
      getSemanticToken`acheron.brand.5`,
    )
    expect(actionTokens.action.text.inverse.value._darkMode).toBe(
      getSemanticToken`acheron.brand.5`,
    )
    expect(actionTokens.action.text.inverse.value._lightMode).toBe(
      getSemanticToken`acheron.brand.100`,
    )
  })

  // text.static

  test('should have a acheron action.text.static key', () => {
    expect(actionTokens.action.text.static).toBeDefined()
    expect(actionTokens.action.text.static.value.base).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.text.static.value._darkMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
    expect(actionTokens.action.text.static.value._lightMode).toBe(
      getSemanticToken`acheron.brand.60`,
    )
  })
})
