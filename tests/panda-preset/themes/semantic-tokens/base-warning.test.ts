import { describe, test, expect } from 'bun:test'
import { warningTokens } from '@cerberus-design/panda-preset'

describe('warning', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(warningTokens.warning.border.initial.value.base).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(warningTokens.warning.border.initial.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(warningTokens.warning.border.initial.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
  })

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(warningTokens.warning.bg.initial.value.base).toEqual(
      formatSemanticToken`cerberus.warning.70`,
    )
    expect(warningTokens.warning.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.70`,
    )
    expect(warningTokens.warning.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
  })

  // bg.hover

  test('should have a cerberus bg.hover property', () => {
    expect(warningTokens.warning.bg.hover.value.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(warningTokens.warning.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(warningTokens.warning.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
  })

  // bg.active

  test('should have a cerberus bg.active property', () => {
    expect(warningTokens.warning.bg.active.value.base).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(warningTokens.warning.bg.active.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(warningTokens.warning.bg.active.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.70`,
    )
  })

  // ghost.initial

  test('should have a cerberus ghost.initial property', () => {
    expect(warningTokens.warning.ghost.initial.value.base).toEqual(
      formatSemanticToken`cerberus.brand.100`,
    )
    expect(warningTokens.warning.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.100`,
    )
    expect(warningTokens.warning.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`cerberus.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a cerberus ghost.hover property', () => {
    expect(warningTokens.warning.ghost.hover.value.base).toEqual(
      formatSemanticToken`cerberus.warning.90`,
    )
    expect(warningTokens.warning.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.90`,
    )
    expect(warningTokens.warning.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
  })

  // ghost.active

  test('should have a cerberus ghost.active property', () => {
    expect(warningTokens.warning.ghost.active.value.base).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
    expect(warningTokens.warning.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
    expect(warningTokens.warning.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
  })

  // surface.initial

  test('should have a cerberus surface.initial property', () => {
    expect(warningTokens.warning.surface.initial.value.base).toEqual(
      formatSemanticToken`cerberus.warning.70`,
    )
    expect(warningTokens.warning.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.70`,
    )
    expect(warningTokens.warning.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
  })

  // surface.100

  test('should have a cerberus surface.100 property', () => {
    expect(warningTokens.warning.surface['100'].value.base).toEqual(
      formatSemanticToken`cerberus.warning.90`,
    )
    expect(warningTokens.warning.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.90`,
    )
    expect(warningTokens.warning.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
  })

  // surface.200

  test('should have a cerberus surface.200 property', () => {
    expect(warningTokens.warning.surface['200'].value.base).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(warningTokens.warning.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(warningTokens.warning.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(warningTokens.warning.text.initial.value.base).toEqual(
      formatSemanticToken`cerberus.warning.100`,
    )
    expect(warningTokens.warning.text.initial.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.100`,
    )
    expect(warningTokens.warning.text.initial.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.100`,
    )
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(warningTokens.warning.text[100].value.base).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(warningTokens.warning.text[100].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(warningTokens.warning.text[100].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(warningTokens.warning.text[200].value.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(warningTokens.warning.text[200].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(warningTokens.warning.text[200].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
  })

  // text.inverse

  test('should have a cerberus text.inverse property', () => {
    expect(warningTokens.warning.text.inverse.value.base).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(warningTokens.warning.text.inverse.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(warningTokens.warning.text.inverse.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.100`,
    )
  })

  // text.static

  test('should have a cerberus text.static property', () => {
    expect(warningTokens.warning.text.static.value.base).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
    expect(warningTokens.warning.text.static.value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
    expect(warningTokens.warning.text.static.value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
  })
})
