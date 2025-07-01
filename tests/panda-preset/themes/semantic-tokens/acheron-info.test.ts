import { describe, test, expect } from 'bun:test'
import { acheronTheme } from '@cerberus-design/panda-preset'

describe('acheron infoTokens', () => {
  const infoTokens = acheronTheme.infoTokens

  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a acheron border.initial property', () => {
    expect(infoTokens.info.border.initial.value.base).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(infoTokens.info.border.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(infoTokens.info.border.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
  })

  // border.100

  test('should have a acheron border.100 property', () => {
    expect(infoTokens.info.border['100'].value.base).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.border['100'].value._darkMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.border['100'].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.40`,
    )
  })

  // bg.initial

  test('should have a acheron bg.initial property', () => {
    expect(infoTokens.info.bg.initial.value.base).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
  })

  // bg.hover

  test('should have a acheron bg.hover property', () => {
    expect(infoTokens.info.bg.hover.value.base).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.20`,
    )
  })

  // bg.active

  test('should have a acheron bg.active property', () => {
    expect(infoTokens.info.bg.active.value.base).toEqual(
      formatSemanticToken`acheron.info.90`,
    )
    expect(infoTokens.info.bg.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.90`,
    )
    expect(infoTokens.info.bg.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
  })

  // ghost.initial

  test('should have a acheron ghost.initial property', () => {
    expect(infoTokens.info.ghost.initial.value.base).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(infoTokens.info.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(infoTokens.info.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a acheron ghost.hover property', () => {
    expect(infoTokens.info.ghost.hover.value.base).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.20`,
    )
  })

  // ghost.active

  test('should have a acheron ghost.active property', () => {
    expect(infoTokens.info.ghost.active.value.base).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
  })

  // surface.initial

  test('should have a acheron surface.initial property', () => {
    expect(infoTokens.info.surface.initial.value.base).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(infoTokens.info.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(infoTokens.info.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
  })

  // surface.100

  test('should have a acheron surface.100 property', () => {
    expect(infoTokens.info.surface['100'].value.base).toEqual(
      formatSemanticToken`acheron.info.90`,
    )
    expect(infoTokens.info.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`acheron.info.90`,
    )
    expect(infoTokens.info.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.20`,
    )
  })

  // surface.200

  test('should have a acheron surface.200 property', () => {
    expect(infoTokens.info.surface['200'].value.base).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
  })

  // text.initial

  test('should have a acheron text.initial property', () => {
    expect(infoTokens.info.text.initial.value.base).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(infoTokens.info.text.initial.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(infoTokens.info.text.initial.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
  })

  // text.100

  test('should have a acheron text.100 property', () => {
    expect(infoTokens.info.text['100'].value.base).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
    expect(infoTokens.info.text['100'].value._darkMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
    expect(infoTokens.info.text['100'].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
  })

  // text.200

  test('should have a acheron text.200 property', () => {
    expect(infoTokens.info.text['200'].value.base).toEqual(
      formatSemanticToken`acheron.info.10`,
    )
    expect(infoTokens.info.text['200'].value._darkMode).toEqual(
      formatSemanticToken`acheron.info.10`,
    )
    expect(infoTokens.info.text['200'].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.100`,
    )
  })

  // text.static

  test('should have a acheron text.static property', () => {
    expect(infoTokens.info.text.static.value.base).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(infoTokens.info.text.static.value._darkMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(infoTokens.info.text.static.value._lightMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
  })
})
