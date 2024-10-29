import { describe, test, expect } from 'bun:test'
import { acheronTheme } from '@cerberus-design/panda-preset'

describe('acheron dangerTokens', () => {
  const dangerTokens = acheronTheme.dangerTokens

  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // bg.initial

  test('should have a acheron bg.initial property', () => {
    expect(dangerTokens.danger.bg.initial.value.base).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(dangerTokens.danger.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(dangerTokens.danger.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.60`,
    )
  })

  // bg.hover

  test('should have a acheron bg.hover property', () => {
    expect(dangerTokens.danger.bg.hover.value.base).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
    expect(dangerTokens.danger.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
    expect(dangerTokens.danger.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
  })

  // bg.active

  test('should have a acheron bg.active property', () => {
    expect(dangerTokens.danger.bg.active.value.base).toEqual(
      formatSemanticToken`acheron.danger.40`,
    )
    expect(dangerTokens.danger.bg.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.40`,
    )
    expect(dangerTokens.danger.bg.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.90`,
    )
  })

  // border.initial

  test('should have a acheron border.initial property', () => {
    expect(dangerTokens.danger.border.initial.value.base).toEqual(
      formatSemanticToken`acheron.danger.40`,
    )
    expect(dangerTokens.danger.border.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.40`,
    )
    expect(dangerTokens.danger.border.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.70`,
    )
  })

  // ghost.initial

  test('should have a acheron ghost.initial property', () => {
    expect(dangerTokens.danger.ghost.initial.value.base).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(dangerTokens.danger.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(dangerTokens.danger.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a acheron ghost.hover property', () => {
    expect(dangerTokens.danger.ghost.hover.value.base).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(dangerTokens.danger.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(dangerTokens.danger.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.10`,
    )
  })

  // ghost.active

  test('should have a acheron ghost.active property', () => {
    expect(dangerTokens.danger.ghost.active.value.base).toEqual(
      formatSemanticToken`acheron.danger.70`,
    )
    expect(dangerTokens.danger.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.70`,
    )
    expect(dangerTokens.danger.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.20`,
    )
  })

  // surface.initial

  test('should have a acheron surface.initial property', () => {
    expect(dangerTokens.danger.surface.initial.value.base).toEqual(
      formatSemanticToken`acheron.danger.60`,
    )
    expect(dangerTokens.danger.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.60`,
    )
    expect(dangerTokens.danger.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.30`,
    )
  })

  // surface.100

  test('should have a acheron surface.100 property', () => {
    expect(dangerTokens.danger.surface['100'].value.base).toEqual(
      formatSemanticToken`acheron.danger.90`,
    )
    expect(dangerTokens.danger.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.90`,
    )
    expect(dangerTokens.danger.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.10`,
    )
  })

  // surface.200

  test('should have a acheron surface.200 property', () => {
    expect(dangerTokens.danger.surface['200'].value.base).toEqual(
      formatSemanticToken`acheron.danger.70`,
    )
    expect(dangerTokens.danger.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.70`,
    )
    expect(dangerTokens.danger.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.60`,
    )
  })

  // text.initial

  test('should have a acheron text.initial property', () => {
    expect(dangerTokens.danger.text.initial.value.base).toEqual(
      formatSemanticToken`acheron.danger.60`,
    )
    expect(dangerTokens.danger.text.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.60`,
    )
    expect(dangerTokens.danger.text.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.70`,
    )
  })

  // text.100

  test('should have a acheron text.100 property', () => {
    expect(dangerTokens.danger.text['100'].value.base).toEqual(
      formatSemanticToken`acheron.danger.30`,
    )
    expect(dangerTokens.danger.text['100'].value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.30`,
    )
    expect(dangerTokens.danger.text['100'].value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
  })

  // text.200

  test('should have a acheron text.200 property', () => {
    expect(dangerTokens.danger.text['200'].value.base).toEqual(
      formatSemanticToken`acheron.danger.10`,
    )
    expect(dangerTokens.danger.text['200'].value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.10`,
    )
    expect(dangerTokens.danger.text['200'].value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.100`,
    )
  })

  // text.inverse

  test('should have a acheron text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse.value.base).toEqual(
      formatSemanticToken`acheron.danger.90`,
    )
    expect(dangerTokens.danger.text.inverse.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.90`,
    )
    expect(dangerTokens.danger.text.inverse.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.10`,
    )
  })

  // text.static

  test('should have a acheron text.static property', () => {
    expect(dangerTokens.danger.text.static.value.base).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(dangerTokens.danger.text.static.value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(dangerTokens.danger.text.static.value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
  })
})
