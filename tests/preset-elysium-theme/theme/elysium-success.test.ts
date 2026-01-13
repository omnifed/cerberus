import { describe, test, expect } from 'bun:test'
import { successTokens } from '@cerberus/preset-elysium-theme'

describe('Elysium > success', () => {
  const token = successTokens.success

  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a elysium border.initial property', () => {
    expect(token.border.initial.value.base).toEqual(
      formatSemanticToken`elysium.success.50`,
    )
    expect(token.border.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.50`,
    )
    expect(token.border.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.70`,
    )
  })

  // bg.initial

  test('should have a elysium bg.initial property', () => {
    expect(token.bg.initial.value.base).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(token.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(token.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
  })

  // bg.hover

  test('should have a elysium bg.hover property', () => {
    expect(token.bg.hover.value.base).toEqual(
      formatSemanticToken`elysium.success.50`,
    )
    expect(token.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.50`,
    )
    expect(token.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.70`,
    )
  })

  // bg.active

  test('should have a elysium bg.active property', () => {
    expect(token.bg.active.value.base).toEqual(
      formatSemanticToken`elysium.success.40`,
    )
    expect(token.bg.active.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.40`,
    )
    expect(token.bg.active.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.80`,
    )
  })

  // ghost.initial

  test('should have a elysium ghost.initial property', () => {
    expect(token.ghost.initial.value.base).toEqual(
      formatSemanticToken`elysium.neutral.100`,
    )
    expect(token.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.neutral.100`,
    )
    expect(token.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a elysium ghost.hover property', () => {
    expect(token.ghost.hover.value.base).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
    expect(token.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
    expect(token.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.10`,
    )
  })

  // ghost.active

  test('should have a elysium ghost.active property', () => {
    expect(token.ghost.active.value.base).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
    expect(token.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
    expect(token.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.20`,
    )
  })

  // surface.initial

  test('should have a elysium surface.initial property', () => {
    expect(token.surface.initial.value.base).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(token.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(token.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
  })

  // surface.100

  test('should have a elysium surface.100 property', () => {
    expect(token.surface['100'].value.base).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
    expect(token.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
    expect(token.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`elysium.success.20`,
    )
  })

  // surface.200

  test('should have a elysium surface.200 property', () => {
    expect(token.surface['200'].value.base).toEqual(
      formatSemanticToken`elysium.success.80`,
    )
    expect(token.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`elysium.success.80`,
    )
    expect(token.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
  })

  // text.initial

  test('should have a elysium text.initial property', () => {
    expect(token.text.initial.value.base).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(token.text.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(token.text.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
  })

  // text.100

  test('should have a elysium text.100 property', () => {
    expect(token.text[100].value.base).toEqual(
      formatSemanticToken`elysium.success.20`,
    )
    expect(token.text[100].value._darkMode).toEqual(
      formatSemanticToken`elysium.success.20`,
    )
    expect(token.text[100].value._lightMode).toEqual(
      formatSemanticToken`elysium.success.90`,
    )
  })

  // text.200

  test('should have a elysium text.200 property', () => {
    expect(token.text[200].value.base).toEqual(
      formatSemanticToken`elysium.success.10`,
    )
    expect(token.text[200].value._darkMode).toEqual(
      formatSemanticToken`elysium.success.10`,
    )
    expect(token.text[200].value._lightMode).toEqual(
      formatSemanticToken`elysium.success.100`,
    )
  })

  // text.inverse

  test('should have a elysium text.inverse property', () => {
    expect(token.text.inverse.value.base).toEqual(
      formatSemanticToken`elysium.success.100`,
    )
    expect(token.text.inverse.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.100`,
    )
    expect(token.text.inverse.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.10`,
    )
  })

  // text.static

  test('should have a elysium text.static property', () => {
    expect(token.text.static.value.base).toEqual(
      formatSemanticToken`elysium.success.70`,
    )
    expect(token.text.static.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.70`,
    )
    expect(token.text.static.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.70`,
    )
  })
})
