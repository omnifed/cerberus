import { describe, test, expect } from 'bun:test'
import { actionTokens } from '@cerberus-design/panda-preset'

describe('actionTokens', () => {
  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a action key', () => {
    expect(actionTokens.action).toBeDefined()
  })

  // bg.initial

  test('should have a cerberus action.bg.initial key', () => {
    expect(actionTokens.action.bg.initial).toBeDefined()
    expect(actionTokens.action.bg.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.brand.60`,
    )
  })

  // bg.hover

  test('should have a cerberus action.bg.hover key', () => {
    expect(actionTokens.action.bg.hover).toBeDefined()
    expect(actionTokens.action.bg.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.50`,
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.50`,
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.brand.50`,
    )
  })

  // bg.active

  test('should have a cerberus action.bg.active key', () => {
    expect(actionTokens.action.bg.active).toBeDefined()
    expect(actionTokens.action.bg.active.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.70`,
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.70`,
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
  })

  // border.initial

  test('should have a cerberus action.border.initial key', () => {
    expect(actionTokens.action.border.initial).toBeDefined()
    expect(actionTokens.action.border.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.30`)
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.60`)
  })

  // border.100

  test('should have a cerberus action.border.100 key', () => {
    expect(actionTokens.action.border[100]).toBeDefined()
    expect(actionTokens.action.border[100].value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.neutral.30`,
    )
    expect(actionTokens.action.border[100].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.neutral.30`,
    )
    expect(
      actionTokens.action.border[100].value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.neutral.40`)
  })

  // border.focus

  test('should have a cerberus action.border.focus key', () => {
    expect(actionTokens.action.border.focus).toBeDefined()
    expect(actionTokens.action.border.focus.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.40`)
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.70`)
  })

  // ghost.initial

  test('should have a cerberus action.ghost.initial key', () => {
    expect(actionTokens.action.ghost.initial).toBeDefined()
    expect(actionTokens.action.ghost.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(
      actionTokens.action.ghost.initial.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.100`)
    expect(
      actionTokens.action.ghost.initial.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.neutral.white`)
  })

  // ghost.hover

  test('should have a cerberus action.ghost.hover key', () => {
    expect(actionTokens.action.ghost.hover).toBeDefined()
    expect(actionTokens.action.ghost.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.90`,
    )
    expect(actionTokens.action.ghost.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.90`,
    )
    expect(
      actionTokens.action.ghost.hover.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.neutral.5`)
  })

  // ghost.active

  test('should have a cerberus action.ghost.active key', () => {
    expect(actionTokens.action.ghost.active).toBeDefined()
    expect(actionTokens.action.ghost.active.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.80`,
    )
    expect(
      actionTokens.action.ghost.active.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.80`)
    expect(
      actionTokens.action.ghost.active.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.10`)
  })

  // navigation.initial

  test('should have a cerberus action.navigation.initial key', () => {
    expect(actionTokens.action.navigation.initial).toBeDefined()
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme.base,
    ).toBe(getSemanticToken`cerberus.brand.40`)
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.40`)
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.60`)
  })

  // navigation.hover

  test('should have a cerberus action.navigation.hover key', () => {
    expect(actionTokens.action.navigation.hover).toBeDefined()
    expect(actionTokens.action.navigation.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.30`)
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.50`)
  })

  // navigation.visited

  test('should have a cerberus action.navigation.visited key', () => {
    expect(actionTokens.action.navigation.visited).toBeDefined()
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme.base,
    ).toBe(getSemanticToken`cerberus.brand.20`)
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.20`)
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.neutral.60`)
  })

  // text.initial

  test('should have a action.text.initial key', () => {
    expect(actionTokens.action.text.initial).toBeDefined()
    expect(actionTokens.action.text.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.neutral.white`,
    )
    expect(
      actionTokens.action.text.initial.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.neutral.white`)
    expect(
      actionTokens.action.text.initial.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.5`)
  })

  // text.100

  test('should have a cerberus action.text.100 key', () => {
    expect(actionTokens.action.text[100]).toBeDefined()
    expect(actionTokens.action.text[100].value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
    expect(actionTokens.action.text[100].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.40`,
    )
    expect(actionTokens.action.text[100].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.brand.80`,
    )
  })

  // text.200

  test('should have a cerberus action.text.200 key', () => {
    expect(actionTokens.action.text[200]).toBeDefined()
    expect(actionTokens.action.text[200].value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(actionTokens.action.text[200].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.30`,
    )
    expect(actionTokens.action.text[200].value._cerberusTheme._lightMode).toBe(
      getSemanticToken`cerberus.brand.60`,
    )
  })

  // text.inverse

  test('should have a cerberus action.text.inverse key', () => {
    expect(actionTokens.action.text.inverse).toBeDefined()
    expect(actionTokens.action.text.inverse.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.5`,
    )
    expect(
      actionTokens.action.text.inverse.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`cerberus.brand.5`)
    expect(
      actionTokens.action.text.inverse.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.100`)
  })

  // text.static

  test('should have a cerberus action.text.static key', () => {
    expect(actionTokens.action.text.static).toBeDefined()
    expect(actionTokens.action.text.static.value._cerberusTheme.base).toBe(
      getSemanticToken`cerberus.brand.60`,
    )
    expect(actionTokens.action.text.static.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`cerberus.brand.60`,
    )
    expect(
      actionTokens.action.text.static.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`cerberus.brand.60`)
  })
})
