import { describe, test, expect } from 'bun:test'
import { actionTokens } from '@cerberus-design/panda-preset'

describe('actionTokens', () => {
  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a action key', () => {
    expect(actionTokens.action).toBeDefined()
  })

  test('should have a action.bg.initial key', () => {
    expect(actionTokens.action.bg.initial).toBeDefined()
    expect(actionTokens.action.bg.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`brand.60`,
    )
    expect(actionTokens.action.bg.initial.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`brand.60`,
    )
  })

  test('should have a action.bg.hover key', () => {
    expect(actionTokens.action.bg.hover).toBeDefined()
    expect(actionTokens.action.bg.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.50`,
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`brand.50`,
    )
    expect(actionTokens.action.bg.hover.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`brand.50`,
    )
  })

  test('should have a action.bg.active key', () => {
    expect(actionTokens.action.bg.active).toBeDefined()
    expect(actionTokens.action.bg.active.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.70`,
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`brand.70`,
    )
    expect(actionTokens.action.bg.active.value._cerberusTheme._lightMode).toBe(
      getSemanticToken`brand.40`,
    )
  })

  test('should have a action.border.initial key', () => {
    expect(actionTokens.action.border.initial).toBeDefined()
    expect(actionTokens.action.border.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.30`,
    )
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`brand.30`)
    expect(
      actionTokens.action.border.initial.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`brand.60`)
  })

  test('should have a action.border.100 key', () => {
    expect(actionTokens.action.border[100]).toBeDefined()
    expect(actionTokens.action.border[100].value._cerberusTheme.base).toBe(
      getSemanticToken`neutral.30`,
    )
    expect(actionTokens.action.border[100].value._cerberusTheme._darkMode).toBe(
      getSemanticToken`neutral.30`,
    )
    expect(
      actionTokens.action.border[100].value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`neutral.40`)
  })

  test('should have a action.border.focus key', () => {
    expect(actionTokens.action.border.focus).toBeDefined()
    expect(actionTokens.action.border.focus.value._cerberusTheme.base).toBe(
      '#BB93E1',
    )
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._darkMode,
    ).toBe('#BB93E1')
    expect(
      actionTokens.action.border.focus.value._cerberusTheme._lightMode,
    ).toBe('#4C0091')
  })

  test('should have a action.ghost.initial key', () => {
    expect(actionTokens.action.ghost.initial).toBeDefined()
    expect(actionTokens.action.ghost.initial.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.100`,
    )
    expect(
      actionTokens.action.ghost.initial.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`brand.100`)
    expect(
      actionTokens.action.ghost.initial.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`neutral.white`)
  })

  test('should have a action.ghost.hover key', () => {
    expect(actionTokens.action.ghost.hover).toBeDefined()
    expect(actionTokens.action.ghost.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.90`,
    )
    expect(actionTokens.action.ghost.hover.value._cerberusTheme._darkMode).toBe(
      getSemanticToken`brand.90`,
    )
    expect(
      actionTokens.action.ghost.hover.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`neutral.5`)
  })

  test('should have a action.ghost.active key', () => {
    expect(actionTokens.action.ghost.active).toBeDefined()
    expect(actionTokens.action.ghost.active.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.80`,
    )
    expect(
      actionTokens.action.ghost.active.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`brand.80`)
    expect(
      actionTokens.action.ghost.active.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`brand.10`)
  })

  test('should have a action.navigation.initial key', () => {
    expect(actionTokens.action.navigation.initial).toBeDefined()
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme.base,
    ).toBe(getSemanticToken`brand.40`)
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`brand.40`)
    expect(
      actionTokens.action.navigation.initial.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`brand.60`)
  })

  test('should have a action.navigation.hover key', () => {
    expect(actionTokens.action.navigation.hover).toBeDefined()
    expect(actionTokens.action.navigation.hover.value._cerberusTheme.base).toBe(
      getSemanticToken`brand.30`,
    )
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`brand.30`)
    expect(
      actionTokens.action.navigation.hover.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`brand.50`)
  })

  test('should have a action.navigation.visited key', () => {
    expect(actionTokens.action.navigation.visited).toBeDefined()
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme.base,
    ).toBe(getSemanticToken`brand.20`)
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._darkMode,
    ).toBe(getSemanticToken`brand.20`)
    expect(
      actionTokens.action.navigation.visited.value._cerberusTheme._lightMode,
    ).toBe(getSemanticToken`neutral.60`)
  })
})
