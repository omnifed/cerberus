import { describe, test, expect } from 'bun:test'
import { secondaryActionTokens } from '@cerberus/preset-elysium-theme'

describe('Elysium > secondaryActionTokens', () => {
  const token = secondaryActionTokens.secondaryAction

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // bg.initial

  test('should have a elysium secondary-action.bg.initial key', () => {
    expect(token.bg.initial).toBeDefined()
    expect(token.bg.initial.value.base).toBe(getSemanticToken`elysium.brand.90`)
    expect(token.bg.initial.value._darkMode).toBe(
      getSemanticToken`elysium.brand.90`,
    )
    expect(token.bg.initial.value._lightMode).toBe(
      getSemanticToken`elysium.brand.20`,
    )
  })

  // bg.hover

  test('should have a elysium secondary-action.bg.hover key', () => {
    expect(token.bg.hover).toBeDefined()
    expect(token.bg.hover.value.base).toBe(getSemanticToken`elysium.brand.70`)
    expect(token.bg.hover.value._darkMode).toBe(
      getSemanticToken`elysium.brand.70`,
    )
    expect(token.bg.hover.value._lightMode).toBe(
      getSemanticToken`elysium.brand.40`,
    )
  })

  // bg.active

  test('should have a elysium secondary-action.bg.active key', () => {
    expect(token.bg.active).toBeDefined()
    expect(token.bg.active.value.base).toBe(getSemanticToken`elysium.brand.40`)
    expect(token.bg.active.value._darkMode).toBe(
      getSemanticToken`elysium.brand.40`,
    )
    expect(token.bg.active.value._lightMode).toBe(
      getSemanticToken`elysium.brand.70`,
    )
  })

  // border.initial

  test('should have a elysium secondary-action.border.initial key', () => {
    expect(token.border.initial).toBeDefined()
    expect(token.border.initial.value.base).toBe(
      getSemanticToken`elysium.brand.30`,
    )
    expect(token.border.initial.value._darkMode).toBe(
      getSemanticToken`elysium.brand.30`,
    )
    expect(token.border.initial.value._lightMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
  })

  // border.100

  test('should have a elysium secondary-action.border.100 key', () => {
    expect(token.border[100]).toBeDefined()
    expect(token.border[100].value.base).toBe(
      getSemanticToken`elysium.brand.70`,
    )
    expect(token.border[100].value._darkMode).toBe(
      getSemanticToken`elysium.brand.70`,
    )
    expect(token.border[100].value._lightMode).toBe(
      getSemanticToken`elysium.brand.70`,
    )
  })

  // ghost.initial

  test('should have a elysium secondary-action.ghost.initial key', () => {
    expect(token.ghost.initial).toBeDefined()
    expect(token.ghost.initial.value.base).toBe(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(token.ghost.initial.value._darkMode).toBe(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(token.ghost.initial.value._lightMode).toBe(
      getSemanticToken`elysium.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a elysium secondary-action.ghost.hover key', () => {
    expect(token.ghost.hover).toBeDefined()
    expect(token.ghost.hover.value.base).toBe(
      getSemanticToken`elysium.brand.80`,
    )
    expect(token.ghost.hover.value._darkMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
    expect(token.ghost.hover.value._lightMode).toBe(
      getSemanticToken`elysium.brand.40`,
    )
  })

  // ghost.active

  test('should have a elysium secondary-action.ghost.active key', () => {
    expect(token.ghost.active).toBeDefined()
    expect(token.ghost.active.value.base).toBe(
      getSemanticToken`elysium.brand.70`,
    )
    expect(token.ghost.active.value._darkMode).toBe(
      getSemanticToken`elysium.brand.70`,
    )
    expect(token.ghost.active.value._lightMode).toBe(
      getSemanticToken`elysium.brand.50`,
    )
  })

  // navigation.initial

  test('should have a elysium secondary-action.navigation.initial key', () => {
    expect(token.navigation.initial).toBeDefined()
    expect(token.navigation.initial.value.base).toBe(
      getSemanticToken`elysium.brand.50`,
    )
    expect(token.navigation.initial.value._darkMode).toBe(
      getSemanticToken`elysium.brand.50`,
    )
    expect(token.navigation.initial.value._lightMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
  })

  // navigation.hover

  test('should have a elysium secondary-action.navigation.hover key', () => {
    expect(token.navigation.hover).toBeDefined()
    expect(token.navigation.hover.value.base).toBe(
      getSemanticToken`elysium.brand.30`,
    )
    expect(token.navigation.hover.value._darkMode).toBe(
      getSemanticToken`elysium.brand.30`,
    )
    expect(token.navigation.hover.value._lightMode).toBe(
      getSemanticToken`elysium.brand.90`,
    )
  })

  // navigation.visited

  test('should have a elysium secondary-action.navigation.visited key', () => {
    expect(token.navigation.visited).toBeDefined()
    expect(token.navigation.visited.value.base).toBe(
      getSemanticToken`elysium.brand.10`,
    )
    expect(token.navigation.visited.value._darkMode).toBe(
      getSemanticToken`elysium.brand.10`,
    )
    expect(token.navigation.visited.value._lightMode).toBe(
      getSemanticToken`elysium.brand.100`,
    )
  })

  // text.initial

  test('should have a elysium secondary-action.text.initial key', () => {
    expect(token.text.initial).toBeDefined()
    expect(token.text.initial.value.base).toBe(
      getSemanticToken`elysium.brand.30`,
    )
    expect(token.text.initial.value._darkMode).toBe(
      getSemanticToken`elysium.brand.30`,
    )
    expect(token.text.initial.value._lightMode).toBe(
      getSemanticToken`elysium.brand.90`,
    )
  })

  // text.100

  test('should have a elysium secondary-action.text.100 key', () => {
    expect(token.text['100']).toBeDefined()
    expect(token.text['100'].value.base).toBe(
      getSemanticToken`elysium.brand.10`,
    )
    expect(token.text['100'].value._darkMode).toBe(
      getSemanticToken`elysium.brand.10`,
    )
    expect(token.text['100'].value._lightMode).toBe(
      getSemanticToken`elysium.brand.100`,
    )
  })

  // text.200

  test('should have a elysium secondary-action.text.200 key', () => {
    expect(token.text['200']).toBeDefined()
    expect(token.text['200'].value.base).toBe(
      getSemanticToken`elysium.brand.50`,
    )
    expect(token.text['200'].value._darkMode).toBe(
      getSemanticToken`elysium.brand.50`,
    )
    expect(token.text['200'].value._lightMode).toBe(
      getSemanticToken`elysium.brand.80`,
    )
  })

  // text.static

  test('should have a elysium secondary-action.text.static key', () => {
    expect(token.text.static).toBeDefined()
    expect(token.text.static.value.base).toBe(
      getSemanticToken`elysium.brand.60`,
    )
    expect(token.text.static.value._darkMode).toBe(
      getSemanticToken`elysium.brand.60`,
    )
    expect(token.text.static.value._lightMode).toBe(
      getSemanticToken`elysium.brand.60`,
    )
  })
})
