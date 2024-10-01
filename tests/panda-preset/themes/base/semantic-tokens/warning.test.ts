import { describe, test, expect } from 'bun:test'
import { warningTokens } from '@cerberus-design/panda-preset'

describe('warning', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.warning.20`)
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.20`)
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.50`)
  })
  test('should have a acheron border.initial property', () => {
    expect(
      warningTokens.warning.border.initial.value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.warning.30`)
    expect(
      warningTokens.warning.border.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.30`)
    expect(
      warningTokens.warning.border.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.50`)
  })

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(warningTokens.warning.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.warning.70`,
    )
    expect(
      warningTokens.warning.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.70`)
    expect(
      warningTokens.warning.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.50`)
  })
  test('should have a acheron bg.initial property', () => {
    expect(warningTokens.warning.bg.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.70`,
    )
    expect(
      warningTokens.warning.bg.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.70`)
    expect(
      warningTokens.warning.bg.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.50`)
  })

  // bg.hover

  test('should have a cerberus bg.hover property', () => {
    expect(warningTokens.warning.bg.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(
      warningTokens.warning.bg.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.60`)
    expect(
      warningTokens.warning.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.60`)
  })
  test('should have a acheron bg.hover property', () => {
    expect(warningTokens.warning.bg.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(
      warningTokens.warning.bg.hover.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.60`)
    expect(
      warningTokens.warning.bg.hover.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.60`)
  })

  // bg.active

  test('should have a cerberus bg.active property', () => {
    expect(warningTokens.warning.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(
      warningTokens.warning.bg.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.40`)
    expect(
      warningTokens.warning.bg.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.70`)
  })
  test('should have a acheron bg.active property', () => {
    expect(warningTokens.warning.bg.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.40`,
    )
    expect(
      warningTokens.warning.bg.active.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.40`)
    expect(
      warningTokens.warning.bg.active.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.70`)
  })

  // ghost.initial

  test('should have a cerberus ghost.initial property', () => {
    expect(
      warningTokens.warning.ghost.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.brand.100`)
    expect(
      warningTokens.warning.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.brand.100`)
    expect(
      warningTokens.warning.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.white`)
  })
  test('should have a acheron ghost.initial property', () => {
    expect(
      warningTokens.warning.ghost.initial.value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.neutral.100`)
    expect(
      warningTokens.warning.ghost.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.neutral.100`)
    expect(
      warningTokens.warning.ghost.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.neutral.white`)
  })

  // ghost.hover

  test('should have a cerberus ghost.hover property', () => {
    expect(warningTokens.warning.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.warning.90`,
    )
    expect(
      warningTokens.warning.ghost.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.90`)
    expect(
      warningTokens.warning.ghost.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.20`)
  })
  test('should have a acheron ghost.hover property', () => {
    expect(warningTokens.warning.ghost.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.90`,
    )
    expect(
      warningTokens.warning.ghost.hover.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.90`)
    expect(
      warningTokens.warning.ghost.hover.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.20`)
  })

  // ghost.active

  test('should have a cerberus ghost.active property', () => {
    expect(
      warningTokens.warning.ghost.active.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.warning.80`)
    expect(
      warningTokens.warning.ghost.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.80`)
    expect(
      warningTokens.warning.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.30`)
  })
  test('should have a acheron ghost.active property', () => {
    expect(warningTokens.warning.ghost.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.80`,
    )
    expect(
      warningTokens.warning.ghost.active.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.80`)
    expect(
      warningTokens.warning.ghost.active.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.30`)
  })

  // surface.initial

  test('should have a cerberus surface.initial property', () => {
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.warning.70`)
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.70`)
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.40`)
  })
  test('should have a acheron surface.initial property', () => {
    expect(
      warningTokens.warning.surface.initial.value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.warning.70`)
    expect(
      warningTokens.warning.surface.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.70`)
    expect(
      warningTokens.warning.surface.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.40`)
  })

  // surface.100

  test('should have a cerberus surface.100 property', () => {
    expect(
      warningTokens.warning.surface['100'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.warning.90`)
    expect(
      warningTokens.warning.surface['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.90`)
    expect(
      warningTokens.warning.surface['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.20`)
  })
  test('should have a acheron surface.100 property', () => {
    expect(
      warningTokens.warning.surface['100'].value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.warning.90`)
    expect(
      warningTokens.warning.surface['100'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.90`)
    expect(
      warningTokens.warning.surface['100'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.20`)
  })

  // surface.200

  test('should have a cerberus surface.200 property', () => {
    expect(
      warningTokens.warning.surface['200'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.warning.50`)
    expect(
      warningTokens.warning.surface['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.50`)
    expect(
      warningTokens.warning.surface['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.60`)
  })
  test('should have a acheron surface.200 property', () => {
    expect(
      warningTokens.warning.surface['200'].value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.warning.50`)
    expect(
      warningTokens.warning.surface['200'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.50`)
    expect(
      warningTokens.warning.surface['200'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.60`)
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.warning.100`)
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.100`)
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.100`)
  })
  test('should have a acheron text.initial property', () => {
    expect(warningTokens.warning.text.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.100`,
    )
    expect(
      warningTokens.warning.text.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.100`)
    expect(
      warningTokens.warning.text.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.100`)
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(warningTokens.warning.text[100].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.30`)
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.80`)
  })
  test('should have a acheron text.100 property', () => {
    expect(warningTokens.warning.text[100].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.30`,
    )
    expect(
      warningTokens.warning.text[100].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.30`)
    expect(
      warningTokens.warning.text[100].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.70`)
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(warningTokens.warning.text[200].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.60`)
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.80`)
  })
  test('should have a acheron text.200 property', () => {
    expect(warningTokens.warning.text[200].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(
      warningTokens.warning.text[200].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.60`)
    expect(
      warningTokens.warning.text[200].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.80`)
  })

  // text.inverse

  test('should have a cerberus text.inverse property', () => {
    expect(
      warningTokens.warning.text.inverse.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.warning.20`)
    expect(
      warningTokens.warning.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.20`)
    expect(
      warningTokens.warning.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.100`)
  })
  test('should have a acheron text.inverse property', () => {
    expect(warningTokens.warning.text.inverse.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.20`,
    )
    expect(
      warningTokens.warning.text.inverse.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.20`)
    expect(
      warningTokens.warning.text.inverse.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.100`)
  })

  // text.static

  test('should have a cerberus text.static property', () => {
    expect(warningTokens.warning.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.warning.80`,
    )
    expect(
      warningTokens.warning.text.static.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.80`)
    expect(
      warningTokens.warning.text.static.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.80`)
  })
  test('should have a acheron text.static property', () => {
    expect(warningTokens.warning.text.static.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.warning.80`,
    )
    expect(
      warningTokens.warning.text.static.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.warning.80`)
    expect(
      warningTokens.warning.text.static.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.warning.80`)
  })
})
