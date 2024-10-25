import { describe, test, expect } from 'bun:test'
import { acheronTheme } from '@cerberus-design/panda-preset'

describe('warning', () => {
  const warningTokens = acheronTheme.warningTokens.warning

  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a acheron border.initial property', () => {
    expect(warningTokens.border.initial.value.base).toEqual(
      formatSemanticToken`acheron.warning.30`,
    )
    expect(warningTokens.border.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.30`,
    )
    expect(warningTokens.border.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.50`,
    )
  })

  // bg.initial

  test('should have a acheron bg.initial property', () => {
    expect(warningTokens.bg.initial.value.base).toEqual(
      formatSemanticToken`acheron.warning.70`,
    )
    expect(warningTokens.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.70`,
    )
    expect(warningTokens.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.50`,
    )
  })

  // bg.hover

  test('should have a acheron bg.hover property', () => {
    expect(warningTokens.bg.hover.value.base).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(warningTokens.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(warningTokens.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
  })

  // bg.active

  test('should have a acheron bg.active property', () => {
    expect(warningTokens.bg.active.value.base).toEqual(
      formatSemanticToken`acheron.warning.40`,
    )
    expect(warningTokens.bg.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.40`,
    )
    expect(warningTokens.bg.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.70`,
    )
  })

  // ghost.initial

  test('should have a acheron ghost.initial property', () => {
    expect(warningTokens.ghost.initial.value.base).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(warningTokens.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(warningTokens.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a acheron ghost.hover property', () => {
    expect(warningTokens.ghost.hover.value.base).toEqual(
      formatSemanticToken`acheron.warning.90`,
    )
    expect(warningTokens.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.90`,
    )
    expect(warningTokens.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.20`,
    )
  })

  // ghost.active

  test('should have a acheron ghost.active property', () => {
    expect(warningTokens.ghost.active.value.base).toEqual(
      formatSemanticToken`acheron.warning.80`,
    )
    expect(warningTokens.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.80`,
    )
    expect(warningTokens.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.30`,
    )
  })

  // surface.initial

  test('should have a acheron surface.initial property', () => {
    expect(warningTokens.surface.initial.value.base).toEqual(
      formatSemanticToken`acheron.warning.70`,
    )
    expect(warningTokens.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.70`,
    )
    expect(warningTokens.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.40`,
    )
  })

  // surface.100

  test('should have a acheron surface.100 property', () => {
    expect(warningTokens.surface['100'].value.base).toEqual(
      formatSemanticToken`acheron.warning.90`,
    )
    expect(warningTokens.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.90`,
    )
    expect(warningTokens.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.20`,
    )
  })

  // surface.200

  test('should have a acheron surface.200 property', () => {
    expect(warningTokens.surface['200'].value.base).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(warningTokens.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(warningTokens.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.50`,
    )
  })

  // text.initial

  test('should have a acheron text.initial property', () => {
    expect(warningTokens.text.initial.value.base).toEqual(
      formatSemanticToken`acheron.warning.40`,
    )
    expect(warningTokens.text.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.40`,
    )
    expect(warningTokens.text.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.90`,
    )
  })

  // text.100

  test('should have a acheron text.100 property', () => {
    expect(warningTokens.text[100].value.base).toEqual(
      formatSemanticToken`acheron.warning.30`,
    )
    expect(warningTokens.text[100].value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.30`,
    )
    expect(warningTokens.text[100].value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.90`,
    )
  })

  // text.200

  test('should have a acheron text.200 property', () => {
    expect(warningTokens.text[200].value.base).toEqual(
      formatSemanticToken`acheron.warning.100`,
    )
    expect(warningTokens.text[200].value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.100`,
    )
    expect(warningTokens.text[200].value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.100`,
    )
  })

  // text.inverse

  test('should have a acheron text.inverse property', () => {
    expect(warningTokens.text.inverse.value.base).toEqual(
      formatSemanticToken`acheron.warning.100`,
    )
    expect(warningTokens.text.inverse.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.100`,
    )
    expect(warningTokens.text.inverse.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.20`,
    )
  })

  // text.static

  test('should have a acheron text.static property', () => {
    expect(warningTokens.text.static.value.base).toEqual(
      formatSemanticToken`acheron.warning.80`,
    )
    expect(warningTokens.text.static.value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.80`,
    )
    expect(warningTokens.text.static.value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.80`,
    )
  })
})
