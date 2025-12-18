import { describe, test, expect } from 'bun:test'
import { infoTokens } from '@cerberus-design/preset-elysium-theme'

describe('Elysium > infoTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a elysium border.initial property', () => {
    expect(infoTokens.info.border.initial.value.base).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
    expect(infoTokens.info.border.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
    expect(infoTokens.info.border.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
  })

  // border.100

  test('should have a elysium border.100 property', () => {
    expect(infoTokens.info.border['100'].value.base).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.border['100'].value._darkMode).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.border['100'].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.40`,
    )
  })

  // bg.initial

  test('should have a elysium bg.initial property', () => {
    expect(infoTokens.info.bg.initial.value.base).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.30`,
    )
  })

  // bg.hover

  test('should have a elysium bg.hover property', () => {
    expect(infoTokens.info.bg.hover.value.base).toEqual(
      formatSemanticToken`elysium.info.80`,
    )
    expect(infoTokens.info.bg.hover.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.80`,
    )
    expect(infoTokens.info.bg.hover.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.20`,
    )
  })

  // bg.active

  test('should have a elysium bg.active property', () => {
    expect(infoTokens.info.bg.active.value.base).toEqual(
      formatSemanticToken`elysium.info.90`,
    )
    expect(infoTokens.info.bg.active.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.90`,
    )
    expect(infoTokens.info.bg.active.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
  })

  // ghost.initial

  test('should have a elysium ghost.initial property', () => {
    expect(infoTokens.info.ghost.initial.value.base).toEqual(
      formatSemanticToken`elysium.neutral.100`,
    )
    expect(infoTokens.info.ghost.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.neutral.100`,
    )
    expect(infoTokens.info.ghost.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.neutral.white`,
    )
  })

  // ghost.hover

  test('should have a elysium ghost.hover property', () => {
    expect(infoTokens.info.ghost.hover.value.base).toEqual(
      formatSemanticToken`elysium.info.80`,
    )
    expect(infoTokens.info.ghost.hover.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.80`,
    )
    expect(infoTokens.info.ghost.hover.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.20`,
    )
  })

  // ghost.active

  test('should have a elysium ghost.active property', () => {
    expect(infoTokens.info.ghost.active.value.base).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.ghost.active.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.ghost.active.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.30`,
    )
  })

  // surface.initial

  test('should have a elysium surface.initial property', () => {
    expect(infoTokens.info.surface.initial.value.base).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
    expect(infoTokens.info.surface.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
    expect(infoTokens.info.surface.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.30`,
    )
  })

  // surface.100

  test('should have a elysium surface.100 property', () => {
    expect(infoTokens.info.surface['100'].value.base).toEqual(
      formatSemanticToken`elysium.info.90`,
    )
    expect(infoTokens.info.surface['100'].value._darkMode).toEqual(
      formatSemanticToken`elysium.info.90`,
    )
    expect(infoTokens.info.surface['100'].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.20`,
    )
  })

  // surface.200

  test('should have a elysium surface.200 property', () => {
    expect(infoTokens.info.surface['200'].value.base).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.surface['200'].value._darkMode).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
    expect(infoTokens.info.surface['200'].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
  })

  // text.initial

  test('should have a elysium text.initial property', () => {
    expect(infoTokens.info.text.initial.value.base).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
    expect(infoTokens.info.text.initial.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.50`,
    )
    expect(infoTokens.info.text.initial.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
  })

  // text.100

  test('should have a elysium text.100 property', () => {
    expect(infoTokens.info.text['100'].value.base).toEqual(
      formatSemanticToken`elysium.info.30`,
    )
    expect(infoTokens.info.text['100'].value._darkMode).toEqual(
      formatSemanticToken`elysium.info.30`,
    )
    expect(infoTokens.info.text['100'].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.80`,
    )
  })

  // text.200

  test('should have a elysium text.200 property', () => {
    expect(infoTokens.info.text['200'].value.base).toEqual(
      formatSemanticToken`elysium.info.10`,
    )
    expect(infoTokens.info.text['200'].value._darkMode).toEqual(
      formatSemanticToken`elysium.info.10`,
    )
    expect(infoTokens.info.text['200'].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.100`,
    )
  })

  // text.static

  test('should have a elysium text.static property', () => {
    expect(infoTokens.info.text.static.value.base).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
    expect(infoTokens.info.text.static.value._darkMode).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
    expect(infoTokens.info.text.static.value._lightMode).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
  })
})
