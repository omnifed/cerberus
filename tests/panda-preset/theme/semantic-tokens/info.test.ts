import { describe, test, expect } from 'bun:test'
import { infoTokens } from '@cerberus-design/panda-preset'

describe('infoTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(infoTokens.info.border.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.info.50`)
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.60`)
  })
  test('should have a acheron border.initial property', () => {
    expect(infoTokens.info.border.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(
      infoTokens.info.border.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.info.50`)
    expect(
      infoTokens.info.border.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.info.60`)
  })

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(infoTokens.info.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`cerberus.info.30`,
    )
  })
  test('should have a acheron bg.initial property', () => {
    expect(infoTokens.info.bg.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.bg.initial.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
  })

  // bg.hover

  test('should have a cerberus bg.hover property', () => {
    expect(infoTokens.info.bg.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.90`,
    )
    expect(infoTokens.info.bg.hover.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.90`,
    )
    expect(infoTokens.info.bg.hover.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`cerberus.info.20`,
    )
  })
  test('should have a acheron bg.hover property', () => {
    expect(infoTokens.info.bg.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.bg.hover.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.bg.hover.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.20`,
    )
  })

  // bg.active

  test('should have a cerberus bg.active property', () => {
    expect(infoTokens.info.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(infoTokens.info.bg.active.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(infoTokens.info.bg.active.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
  })
  test('should have a acheron bg.active property', () => {
    expect(infoTokens.info.bg.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.90`,
    )
    expect(infoTokens.info.bg.active.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.90`,
    )
    expect(infoTokens.info.bg.active.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
  })

  // ghost.initial

  test('should have a cerberus ghost.initial property', () => {
    expect(infoTokens.info.ghost.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.brand.100`,
    )
    expect(
      infoTokens.info.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.brand.100`)
    expect(
      infoTokens.info.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.white`)
  })
  test('should have a acheron ghost.initial property', () => {
    expect(infoTokens.info.ghost.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(infoTokens.info.ghost.initial.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(
      infoTokens.info.ghost.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.neutral.white`)
  })

  // ghost.hover

  test('should have a cerberus ghost.hover property', () => {
    expect(infoTokens.info.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.90`,
    )
    expect(infoTokens.info.ghost.hover.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.90`,
    )
    expect(infoTokens.info.ghost.hover.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`cerberus.info.20`,
    )
  })
  test('should have a acheron ghost.hover property', () => {
    expect(infoTokens.info.ghost.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.ghost.hover.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.80`,
    )
    expect(infoTokens.info.ghost.hover.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.20`,
    )
  })

  // ghost.active

  test('should have a cerberus ghost.active property', () => {
    expect(infoTokens.info.ghost.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.80`,
    )
    expect(infoTokens.info.ghost.active.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.80`,
    )
    expect(
      infoTokens.info.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.30`)
  })
  test('should have a acheron ghost.active property', () => {
    expect(infoTokens.info.ghost.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.ghost.active.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(infoTokens.info.ghost.active.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
  })

  // surface.initial

  test('should have a cerberus surface.initial property', () => {
    expect(infoTokens.info.surface.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.70`,
    )
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.info.70`)
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.30`)
  })
  test('should have a acheron surface.initial property', () => {
    expect(infoTokens.info.surface.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
    expect(
      infoTokens.info.surface.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.info.70`)
    expect(
      infoTokens.info.surface.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.info.30`)
  })

  // surface.100

  test('should have a cerberus surface.100 property', () => {
    expect(infoTokens.info.surface['100'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.90`,
    )
    expect(
      infoTokens.info.surface['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.info.90`)
    expect(
      infoTokens.info.surface['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.20`)
  })
  test('should have a acheron surface.100 property', () => {
    expect(infoTokens.info.surface['100'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.90`,
    )
    expect(
      infoTokens.info.surface['100'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.info.90`)
    expect(
      infoTokens.info.surface['100'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.info.20`)
  })

  // surface.200

  test('should have a cerberus surface.200 property', () => {
    expect(infoTokens.info.surface['200'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(
      infoTokens.info.surface['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.info.50`)
    expect(
      infoTokens.info.surface['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.50`)
  })
  test('should have a acheron surface.200 property', () => {
    expect(infoTokens.info.surface['200'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
    expect(
      infoTokens.info.surface['200'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.info.50`)
    expect(
      infoTokens.info.surface['200'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.info.60`)
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(infoTokens.info.text.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.10`,
    )
    expect(infoTokens.info.text.initial.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.10`,
    )
    expect(
      infoTokens.info.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.100`)
  })
  test('should have a acheron text.initial property', () => {
    expect(infoTokens.info.text.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.10`,
    )
    expect(infoTokens.info.text.initial.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.10`,
    )
    expect(infoTokens.info.text.initial.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.100`,
    )
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(infoTokens.info.text['100'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.30`,
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.30`,
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`cerberus.info.70`,
    )
  })
  test('should have a acheron text.100 property', () => {
    expect(infoTokens.info.text['100'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
    expect(infoTokens.info.text['100'].value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
    expect(infoTokens.info.text['100'].value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(infoTokens.info.text['200'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(infoTokens.info.text['200'].value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(infoTokens.info.text['200'].value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
  })
  test('should have a acheron text.200 property', () => {
    expect(infoTokens.info.text['200'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(infoTokens.info.text['200'].value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(infoTokens.info.text['200'].value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.50`,
    )
  })

  // text.static

  test('should have a cerberus text.static property', () => {
    expect(infoTokens.info.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.info.60`,
    )
    expect(infoTokens.info.text.static.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.info.60`,
    )
    expect(infoTokens.info.text.static.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`cerberus.info.60`,
    )
  })
  test('should have a acheron text.static property', () => {
    expect(infoTokens.info.text.static.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(infoTokens.info.text.static.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(infoTokens.info.text.static.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
  })
})
