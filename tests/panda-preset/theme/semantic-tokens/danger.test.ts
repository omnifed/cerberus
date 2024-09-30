import { describe, test, expect } from 'bun:test'
import { dangerTokens } from '@cerberus-design/panda-preset'

describe('dangerTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(dangerTokens.danger.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.80`,
    )
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.60`)
  })
  test('should have a acheron bg.initial property', () => {
    expect(dangerTokens.danger.bg.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(
      dangerTokens.danger.bg.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.80`)
    expect(
      dangerTokens.danger.bg.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.60`)
  })

  // bg.hover

  test('should have a cerberus bg.hover property', () => {
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.40`,
    )
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`cerberus.danger.40`,
    )
    expect(
      dangerTokens.danger.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
  })
  test('should have a acheron bg.hover property', () => {
    expect(dangerTokens.danger.bg.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
    expect(dangerTokens.danger.bg.hover.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
    expect(dangerTokens.danger.bg.hover.value._acheronTheme._lightMode).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
  })

  // bg.active

  test('should have a cerberus bg.active property', () => {
    expect(dangerTokens.danger.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.30`,
    )
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.30`)
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.90`)
  })
  test('should have a acheron bg.active property', () => {
    expect(dangerTokens.danger.bg.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.40`,
    )
    expect(dangerTokens.danger.bg.active.value._acheronTheme._darkMode).toEqual(
      formatSemanticToken`acheron.danger.40`,
    )
    expect(
      dangerTokens.danger.bg.active.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.90`)
  })

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.danger.30`)
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.30`)
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.50`)
  })
  test('should have a acheron border.initial property', () => {
    expect(dangerTokens.danger.border.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.40`,
    )
    expect(
      dangerTokens.danger.border.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.40`)
    expect(
      dangerTokens.danger.border.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.70`)
  })

  // ghost.initial

  test('should have a cerberus ghost.initial property', () => {
    expect(dangerTokens.danger.ghost.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.brand.100`,
    )
    expect(
      dangerTokens.danger.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.brand.100`)
    expect(
      dangerTokens.danger.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.white`)
  })
  test('should have a acheron ghost.initial property', () => {
    expect(dangerTokens.danger.ghost.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.neutral.100`,
    )
    expect(
      dangerTokens.danger.ghost.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.neutral.100`)
    expect(
      dangerTokens.danger.ghost.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.neutral.white`)
  })

  // ghost.hover

  test('should have a cerberus ghost.hover property', () => {
    expect(dangerTokens.danger.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.90`,
    )
    expect(
      dangerTokens.danger.ghost.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.90`)
    expect(
      dangerTokens.danger.ghost.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.10`)
  })
  test('should have a acheron ghost.hover property', () => {
    expect(dangerTokens.danger.ghost.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(
      dangerTokens.danger.ghost.hover.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.80`)
    expect(
      dangerTokens.danger.ghost.hover.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.10`)
  })

  // ghost.active

  test('should have a cerberus ghost.active property', () => {
    expect(dangerTokens.danger.ghost.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.80`,
    )
    expect(
      dangerTokens.danger.ghost.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
    expect(
      dangerTokens.danger.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.20`)
  })
  test('should have a acheron ghost.active property', () => {
    expect(dangerTokens.danger.ghost.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.70`,
    )
    expect(
      dangerTokens.danger.ghost.active.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.70`)
    expect(
      dangerTokens.danger.ghost.active.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.20`)
  })

  // surface.initial

  test('should have a acheron surface.initial property', () => {
    expect(
      dangerTokens.danger.surface.initial.value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.danger.80`)
    expect(
      dangerTokens.danger.surface.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.80`)
    expect(
      dangerTokens.danger.surface.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.30`)
  })

  // surface.100

  test('should have a acheron surface.100 property', () => {
    expect(dangerTokens.danger.surface['100'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.90`,
    )
    expect(
      dangerTokens.danger.surface['100'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.90`)
    expect(
      dangerTokens.danger.surface['100'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.10`)
  })

  // surface.200

  test('should have a acheron surface.200 property', () => {
    expect(dangerTokens.danger.surface['200'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.60`,
    )
    expect(
      dangerTokens.danger.surface['200'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.60`)
    expect(
      dangerTokens.danger.surface['200'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.50`)
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(dangerTokens.danger.text.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.10`,
    )
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.10`)
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.100`)
  })
  test('should have a acheron text.initial property', () => {
    expect(dangerTokens.danger.text.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.10`,
    )
    expect(
      dangerTokens.danger.text.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.10`)
    expect(
      dangerTokens.danger.text.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.100`)
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(dangerTokens.danger.text['100'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.30`,
    )
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.30`)
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
  })
  test('should have a acheron text.100 property', () => {
    expect(dangerTokens.danger.text['100'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.30`,
    )
    expect(
      dangerTokens.danger.text['100'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.30`)
    expect(
      dangerTokens.danger.text['100'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.80`)
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(dangerTokens.danger.text['200'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.50`,
    )
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.50`)
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.70`)
  })
  test('should have a acheron text.200 property', () => {
    expect(dangerTokens.danger.text['200'].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
    expect(
      dangerTokens.danger.text['200'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.50`)
    expect(
      dangerTokens.danger.text['200'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.70`)
  })

  // text.inverse

  test('should have a cerberus text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.90`,
    )
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.90`)
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.10`)
  })
  test('should have a acheron text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.90`,
    )
    expect(
      dangerTokens.danger.text.inverse.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.90`)
    expect(
      dangerTokens.danger.text.inverse.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.10`)
  })

  // text.static

  test('should have a cerberus text.static property', () => {
    expect(dangerTokens.danger.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.danger.80`,
    )
    expect(
      dangerTokens.danger.text.static.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
    expect(
      dangerTokens.danger.text.static.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
  })
  test('should have a acheron text.static property', () => {
    expect(dangerTokens.danger.text.static.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.danger.80`,
    )
    expect(
      dangerTokens.danger.text.static.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.danger.80`)
    expect(
      dangerTokens.danger.text.static.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.danger.80`)
  })
})
