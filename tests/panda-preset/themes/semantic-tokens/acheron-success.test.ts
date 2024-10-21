import { describe, test, expect } from 'bun:test'
import { acheronTheme } from '@cerberus-design/panda-preset'

describe('success', () => {
  const successTokens = acheronTheme.successTokens.success

  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a acheron border.initial property', () => {
    expect(successTokens.border.initial.value.base).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.border.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.border.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
  })

  // bg.initial

  test('should have a acheron bg.initial property', () => {
    expect(successTokens.bg.initial.value.base).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
    expect(successTokens.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
    expect(successTokens.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
  })

  // bg.hover

  test('should have a acheron bg.hover property', () => {
    expect(successTokens.bg.hover.value.base).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
  })

  // bg.active

  test('should have a acheron bg.active property', () => {
    expect(successTokens.bg.active.value.base).toEqual(
      formatSemanticToken`acheron.success.50`,
    )
    expect(successTokens.bg.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.50`,
    )
    expect(successTokens.bg.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
  })

  // ghost.initial

  test('should have a acheron ghost.initial property', () => {
    expect(successTokens.ghost.initial.value.base).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(successTokens.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(successTokens.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a acheron ghost.hover property', () => {
    expect(successTokens.ghost.hover.value.base).toEqual(
      formatSemanticToken`acheron.success.90`,
    )
    expect(successTokens.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.90`,
    )
    expect(successTokens.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.10`,
    )
  })

  // ghost.active

  test('should have a acheron ghost.active property', () => {
    expect(successTokens.ghost.active.value.base).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
    expect(successTokens.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
    expect(successTokens.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.20`,
    )
  })

  // surface.initial

  test('should have a acheron surface.initial property', () => {
    expect(successTokens.surface.initial.value.base).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.50`,
    )
  })

  // surface.100

  test('should have a acheron surface.100 property', () => {
    expect(successTokens.surface['100'].value.base).toEqual(
      formatSemanticToken`acheron.success.90`,
    )
    expect(successTokens.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`acheron.success.90`,
    )
    expect(successTokens.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`acheron.success.40`,
    )
  })

  // surface.200

  test('should have a acheron surface.200 property', () => {
    expect(successTokens.surface['200'].value.base).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
    expect(successTokens.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
    expect(successTokens.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
  })

  // text.initial

  test('should have a acheron text.initial property', () => {
    expect(successTokens.text.initial.value.base).toEqual(
      formatSemanticToken`acheron.success.10`,
    )
    expect(successTokens.text.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.10`,
    )
    expect(successTokens.text.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.100`,
    )
  })

  // text.100

  test('should have a acheron text.100 property', () => {
    expect(successTokens.text[100].value.base).toEqual(
      formatSemanticToken`acheron.success.40`,
    )
    expect(successTokens.text[100].value._darkMode).toEqual(
      formatSemanticToken`acheron.success.40`,
    )
    expect(successTokens.text[100].value._lightMode).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
  })

  // text.200

  test('should have a acheron text.200 property', () => {
    expect(successTokens.text[200].value.base).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.text[200].value._darkMode).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(successTokens.text[200].value._lightMode).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
  })

  // text.inverse

  test('should have a acheron text.inverse property', () => {
    expect(successTokens.text.inverse.value.base).toEqual(
      formatSemanticToken`acheron.success.100`,
    )
    expect(successTokens.text.inverse.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.100`,
    )
    expect(successTokens.text.inverse.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.10`,
    )
  })

  // text.static

  test('should have a acheron text.static property', () => {
    expect(successTokens.text.static.value.base).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
    expect(successTokens.text.static.value._darkMode).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
    expect(successTokens.text.static.value._lightMode).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
  })
})
