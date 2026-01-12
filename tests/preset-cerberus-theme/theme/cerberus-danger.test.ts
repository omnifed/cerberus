import { describe, test, expect } from 'bun:test'
import { dangerTokens } from '@cerberus-design/preset-cerberus-theme'

describe('dangerTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(dangerTokens.danger.bg.initial.value.base).toEqual(
      formatSemanticToken`danger.cerberus.70`,
    )
    expect(dangerTokens.danger.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.70`,
    )
    expect(dangerTokens.danger.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.60`,
    )
  })

  // bg.hover

  test('should have a cerberus bg.hover property', () => {
    expect(dangerTokens.danger.bg.hover.value.base).toEqual(
      formatSemanticToken`danger.cerberus.50`,
    )
    expect(dangerTokens.danger.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.50`,
    )
    expect(dangerTokens.danger.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.70`,
    )
  })

  // bg.active

  test('should have a cerberus bg.active property', () => {
    expect(dangerTokens.danger.bg.active.value.base).toEqual(
      formatSemanticToken`danger.cerberus.30`,
    )
    expect(dangerTokens.danger.bg.active.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.30`,
    )
    expect(dangerTokens.danger.bg.active.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.90`,
    )
  })

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(dangerTokens.danger.border.initial.value.base).toEqual(
      formatSemanticToken`danger.cerberus.30`,
    )
    expect(dangerTokens.danger.border.initial.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.30`,
    )
    expect(dangerTokens.danger.border.initial.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.50`,
    )
  })

  // ghost.initial

  test('should have a cerberus ghost.initial property', () => {
    expect(dangerTokens.danger.ghost.initial.value.base).toEqual(
      formatSemanticToken`cerberus.brand.100`,
    )
    expect(dangerTokens.danger.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.100`,
    )
    expect(dangerTokens.danger.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`cerberus.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a cerberus ghost.hover property', () => {
    expect(dangerTokens.danger.ghost.hover.value.base).toEqual(
      formatSemanticToken`danger.cerberus.90`,
    )
    expect(dangerTokens.danger.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.90`,
    )
    expect(dangerTokens.danger.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
  })

  // ghost.active

  test('should have a cerberus ghost.active property', () => {
    expect(dangerTokens.danger.ghost.active.value.base).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(dangerTokens.danger.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(dangerTokens.danger.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.20`,
    )
  })

  // surface.initial

  test('should have a cerberus surface.initial property', () => {
    expect(dangerTokens.danger.surface.initial.value.base).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(dangerTokens.danger.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(dangerTokens.danger.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.30`,
    )
  })

  // surface.100

  test('should have a cerberus surface.100 property', () => {
    expect(dangerTokens.danger.surface['100'].value.base).toEqual(
      formatSemanticToken`danger.cerberus.90`,
    )
    expect(dangerTokens.danger.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.90`,
    )
    expect(dangerTokens.danger.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
  })

  // surface.200

  test('should have a cerberus surface.200 property', () => {
    expect(dangerTokens.danger.surface['200'].value.base).toEqual(
      formatSemanticToken`danger.cerberus.70`,
    )
    expect(dangerTokens.danger.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.70`,
    )
    expect(dangerTokens.danger.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.60`,
    )
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(dangerTokens.danger.text.initial.value.base).toEqual(
      formatSemanticToken`danger.cerberus.60`,
    )
    expect(dangerTokens.danger.text.initial.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.60`,
    )
    expect(dangerTokens.danger.text.initial.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.70`,
    )
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(dangerTokens.danger.text['100'].value.base).toEqual(
      formatSemanticToken`danger.cerberus.20`,
    )
    expect(dangerTokens.danger.text['100'].value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.20`,
    )
    expect(dangerTokens.danger.text['100'].value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(dangerTokens.danger.text['200'].value.base).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
    expect(dangerTokens.danger.text['200'].value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
    expect(dangerTokens.danger.text['200'].value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.100`,
    )
  })

  // text.inverse

  test('should have a cerberus text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse.value.base).toEqual(
      formatSemanticToken`danger.cerberus.100`,
    )
    expect(dangerTokens.danger.text.inverse.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.100`,
    )
    expect(dangerTokens.danger.text.inverse.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
  })

  // text.static

  test('should have a cerberus text.static property', () => {
    expect(dangerTokens.danger.text.static.value.base).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(dangerTokens.danger.text.static.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(dangerTokens.danger.text.static.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
  })
})
