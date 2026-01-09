import { describe, test, expect } from 'bun:test'
import { actionTokens } from '@cerberus-design/preset-elysium-theme'

describe('Elysium > actionTokens', () => {
  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a action key', () => {
    expect(actionTokens.action).toBeDefined()
  })

  // bg.initial

  test('should have a elysium action.bg.initial key', () => {
    expect(actionTokens.action.bg.initial).toBeDefined()
    expect(actionTokens.action.bg.initial.value.base).toBe(
      getSemanticToken`elysium.brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._darkMode).toBe(
      getSemanticToken`elysium.brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._lightMode).toBe(
      getSemanticToken`elysium.brand.50`,
    )
  })

  // bg.hover

  test('should have a elysium action.bg.hover key', () => {
    expect(actionTokens.action.bg.hover).toBeDefined()
    expect(actionTokens.action.bg.hover.value.base).toBe(
      getSemanticToken`elysium.brand.40`,
    )
    expect(actionTokens.action.bg.hover.value._darkMode).toBe(
      getSemanticToken`elysium.brand.40`,
    )
    expect(actionTokens.action.bg.hover.value._lightMode).toBe(
      getSemanticToken`elysium.brand.30`,
    )
  })

  // bg.active

  test('should have a elysium action.bg.active key', () => {
    expect(actionTokens.action.bg.active).toBeDefined()
    expect(actionTokens.action.bg.active.value.base).toBe(
      getSemanticToken`elysium.brand.70`,
    )
    expect(actionTokens.action.bg.active.value._darkMode).toBe(
      getSemanticToken`elysium.brand.70`,
    )
    expect(actionTokens.action.bg.active.value._lightMode).toBe(
      getSemanticToken`elysium.brand.20`,
    )
  })

  // border.initial

  test('should have a elysium action.border.initial key', () => {
    expect(actionTokens.action.border.initial).toBeDefined()
    expect(actionTokens.action.border.initial.value.base).toBe(
      getSemanticToken`elysium.neutral.20`,
    )
    expect(actionTokens.action.border.initial.value._darkMode).toBe(
      getSemanticToken`elysium.neutral.20`,
    )
    expect(actionTokens.action.border.initial.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.50`,
    )
  })

  // border.100

  test('should have a elysium action.border.100 key', () => {
    expect(actionTokens.action.border[100]).toBeDefined()
    expect(actionTokens.action.border[100].value.base).toBe(
      getSemanticToken`elysium.neutral.30`,
    )
    expect(actionTokens.action.border[100].value._darkMode).toBe(
      getSemanticToken`elysium.neutral.30`,
    )
    expect(actionTokens.action.border[100].value._lightMode).toBe(
      getSemanticToken`elysium.neutral.60`,
    )
  })

  // border.focus

  test('should have a elysium action.border.focus key', () => {
    expect(actionTokens.action.border.focus).toBeDefined()
    expect(actionTokens.action.border.focus.value.base).toBe(
      getSemanticToken`elysium.neutral.10`,
    )
    expect(actionTokens.action.border.focus.value._darkMode).toBe(
      getSemanticToken`elysium.neutral.10`,
    )
    expect(actionTokens.action.border.focus.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.70`,
    )
  })

  // ghost.initial

  test('should have a elysium action.ghost.initial key', () => {
    expect(actionTokens.action.ghost.initial).toBeDefined()
    expect(actionTokens.action.ghost.initial.value.base).toBe(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(actionTokens.action.ghost.initial.value._darkMode).toBe(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(actionTokens.action.ghost.initial.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a elysium action.ghost.hover key', () => {
    expect(actionTokens.action.ghost.hover).toBeDefined()
    expect(actionTokens.action.ghost.hover.value.base).toBe(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(actionTokens.action.ghost.hover.value._darkMode).toBe(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(actionTokens.action.ghost.hover.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.5`,
    )
  })

  // ghost.active

  test('should have a elysium action.ghost.active key', () => {
    expect(actionTokens.action.ghost.active).toBeDefined()
    expect(actionTokens.action.ghost.active.value.base).toBe(
      getSemanticToken`elysium.brand.80`,
    )
    expect(actionTokens.action.ghost.active.value._darkMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
    expect(actionTokens.action.ghost.active.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.10`,
    )
  })

  // navigation.initial

  test('should have a elysium action.navigation.initial key', () => {
    expect(actionTokens.action.navigation.initial).toBeDefined()
    expect(actionTokens.action.navigation.initial.value.base).toBe(
      getSemanticToken`elysium.neutral.white`,
    )
    expect(actionTokens.action.navigation.initial.value._darkMode).toBe(
      getSemanticToken`elysium.neutral.white`,
    )
    expect(actionTokens.action.navigation.initial.value._lightMode).toBe(
      getSemanticToken`elysium.brand.100`,
    )
  })

  // navigation.hover

  test('should have a elysium action.navigation.hover key', () => {
    expect(actionTokens.action.navigation.hover).toBeDefined()
    expect(actionTokens.action.navigation.hover.value.base).toBe(
      getSemanticToken`elysium.brand.20`,
    )
    expect(actionTokens.action.navigation.hover.value._darkMode).toBe(
      getSemanticToken`elysium.brand.20`,
    )
    expect(actionTokens.action.navigation.hover.value._lightMode).toBe(
      getSemanticToken`elysium.brand.90`,
    )
  })

  // navigation.visited

  test('should have a elysium action.navigation.visited key', () => {
    expect(actionTokens.action.navigation.visited).toBeDefined()
    expect(actionTokens.action.navigation.visited.value.base).toBe(
      getSemanticToken`elysium.brand.10`,
    )
    expect(actionTokens.action.navigation.visited.value._darkMode).toBe(
      getSemanticToken`elysium.brand.10`,
    )
    expect(actionTokens.action.navigation.visited.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.80`,
    )
  })

  // text.initial

  test('should have a elysium action.text.initial key', () => {
    expect(actionTokens.action.text.initial).toBeDefined()
    expect(actionTokens.action.text.initial.value.base).toBe(
      getSemanticToken`elysium.brand.100`,
    )
    expect(actionTokens.action.text.initial.value._darkMode).toBe(
      getSemanticToken`elysium.brand.100`,
    )
    expect(actionTokens.action.text.initial.value._lightMode).toBe(
      getSemanticToken`elysium.brand.100`,
    )
  })

  // text.100

  test('should have a elysium action.text.100 key', () => {
    expect(actionTokens.action.text[100]).toBeDefined()
    expect(actionTokens.action.text[100].value.base).toBe(
      getSemanticToken`elysium.brand.40`,
    )
    expect(actionTokens.action.text[100].value._darkMode).toBe(
      getSemanticToken`elysium.brand.40`,
    )
    expect(actionTokens.action.text[100].value._lightMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
  })

  // text.200

  test('should have a elysium action.text.200 key', () => {
    expect(actionTokens.action.text[200]).toBeDefined()
    expect(actionTokens.action.text[200].value.base).toBe(
      getSemanticToken`elysium.neutral.5`,
    )
    expect(actionTokens.action.text[200].value._darkMode).toBe(
      getSemanticToken`elysium.neutral.5`,
    )
    expect(actionTokens.action.text[200].value._lightMode).toBe(
      getSemanticToken`elysium.neutral.70`,
    )
  })

  // text.inverse

  test('should have a elysium action.text.inverse key', () => {
    expect(actionTokens.action.text.inverse).toBeDefined()
    expect(actionTokens.action.text.inverse.value.base).toBe(
      getSemanticToken`elysium.neutral.10`,
    )
    expect(actionTokens.action.text.inverse.value._darkMode).toBe(
      getSemanticToken`elysium.neutral.10`,
    )
    expect(actionTokens.action.text.inverse.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.90`,
    )
  })

  // text.static

  test('should have a elysium action.text.static key', () => {
    expect(actionTokens.action.text.static).toBeDefined()
    expect(actionTokens.action.text.static.value.base).toBe(
      getSemanticToken`elysium.brand.80`,
    )
    expect(actionTokens.action.text.static.value._darkMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
    expect(actionTokens.action.text.static.value._lightMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
  })
})
