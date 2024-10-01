import { describe, test, expect } from 'bun:test'
import { successTokens } from '@cerberus-design/panda-preset'

describe('success', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(
      successTokens.success.border.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.success.50`)
    expect(
      successTokens.success.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.50`)
    expect(
      successTokens.success.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.70`)
  })
  test('should have a acheron border.initial property', () => {
    expect(
      successTokens.success.border.initial.value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.success.60`)
    expect(
      successTokens.success.border.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.60`)
    expect(
      successTokens.success.border.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.70`)
  })

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(successTokens.success.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.success.50`,
    )
    expect(
      successTokens.success.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.50`)
    expect(
      successTokens.success.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.60`)
  })
  test('should have a acheron bg.initial property', () => {
    expect(successTokens.success.bg.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
    expect(
      successTokens.success.bg.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.70`)
    expect(
      successTokens.success.bg.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.60`)
  })

  // bg.hover

  test('should have a cerberus bg.hover property', () => {
    expect(successTokens.success.bg.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.success.50`,
    )
    expect(
      successTokens.success.bg.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.50`)
    expect(
      successTokens.success.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.70`)
  })
  test('should have a acheron bg.hover property', () => {
    expect(successTokens.success.bg.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(
      successTokens.success.bg.hover.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.60`)
    expect(
      successTokens.success.bg.hover.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.70`)
  })

  // bg.active

  test('should have a cerberus bg.active property', () => {
    expect(successTokens.success.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.success.40`,
    )
    expect(
      successTokens.success.bg.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.40`)
    expect(
      successTokens.success.bg.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.80`)
  })
  test('should have a acheron bg.active property', () => {
    expect(successTokens.success.bg.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.50`,
    )
    expect(
      successTokens.success.bg.active.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.50`)
    expect(
      successTokens.success.bg.active.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.80`)
  })

  // ghost.initial

  test('should have a cerberus ghost.initial property', () => {
    expect(
      successTokens.success.ghost.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.brand.100`)
    expect(
      successTokens.success.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.brand.100`)
    expect(
      successTokens.success.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.white`)
  })
  test('should have a acheron ghost.initial property', () => {
    expect(
      successTokens.success.ghost.initial.value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.neutral.100`)
    expect(
      successTokens.success.ghost.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.neutral.100`)
    expect(
      successTokens.success.ghost.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.neutral.white`)
  })

  // ghost.hover

  test('should have a cerberus ghost.hover property', () => {
    expect(successTokens.success.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.success.90`,
    )
    expect(
      successTokens.success.ghost.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
    expect(
      successTokens.success.ghost.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.10`)
  })
  test('should have a acheron ghost.hover property', () => {
    expect(successTokens.success.ghost.hover.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.90`,
    )
    expect(
      successTokens.success.ghost.hover.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.90`)
    expect(
      successTokens.success.ghost.hover.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.10`)
  })

  // ghost.active

  test('should have a cerberus ghost.active property', () => {
    expect(
      successTokens.success.ghost.active.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.success.80`)
    expect(
      successTokens.success.ghost.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.80`)
    expect(
      successTokens.success.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.20`)
  })
  test('should have a acheron ghost.active property', () => {
    expect(successTokens.success.ghost.active.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
    expect(
      successTokens.success.ghost.active.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.80`)
    expect(
      successTokens.success.ghost.active.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.20`)
  })

  // surface.initial

  test('should have a cerberus surface.initial property', () => {
    expect(
      successTokens.success.surface.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.success.70`)
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.70`)
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.50`)
  })
  test('should have a acheron surface.initial property', () => {
    expect(
      successTokens.success.surface.initial.value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.success.70`)
    expect(
      successTokens.success.surface.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.70`)
    expect(
      successTokens.success.surface.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.50`)
  })

  // surface.100

  test('should have a cerberus surface.100 property', () => {
    expect(
      successTokens.success.surface['100'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
    expect(
      successTokens.success.surface['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
    expect(
      successTokens.success.surface['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.40`)
  })
  test('should have a acheron surface.100 property', () => {
    expect(
      successTokens.success.surface['100'].value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.success.90`)
    expect(
      successTokens.success.surface['100'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.90`)
    expect(
      successTokens.success.surface['100'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.40`)
  })

  // surface.200

  test('should have a cerberus surface.200 property', () => {
    expect(
      successTokens.success.surface['200'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.success.60`)
    expect(
      successTokens.success.surface['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.60`)
    expect(
      successTokens.success.surface['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.60`)
  })
  test('should have a acheron surface.200 property', () => {
    expect(
      successTokens.success.surface['200'].value._acheronTheme.base,
    ).toEqual(formatSemanticToken`acheron.success.60`)
    expect(
      successTokens.success.surface['200'].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.60`)
    expect(
      successTokens.success.surface['200'].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.60`)
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(
      successTokens.success.text.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.success.10`)
    expect(
      successTokens.success.text.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.10`)
    expect(
      successTokens.success.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.100`)
  })
  test('should have a acheron text.initial property', () => {
    expect(successTokens.success.text.initial.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.10`,
    )
    expect(
      successTokens.success.text.initial.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.10`)
    expect(
      successTokens.success.text.initial.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.100`)
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(successTokens.success.text[100].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.success.40`,
    )
    expect(
      successTokens.success.text[100].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.40`)
    expect(
      successTokens.success.text[100].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.80`)
  })
  test('should have a acheron text.100 property', () => {
    expect(successTokens.success.text[100].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.40`,
    )
    expect(
      successTokens.success.text[100].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.40`)
    expect(
      successTokens.success.text[100].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.80`)
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(successTokens.success.text[200].value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.success.60`,
    )
    expect(
      successTokens.success.text[200].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.60`)
    expect(
      successTokens.success.text[200].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.60`)
  })
  test('should have a acheron text.200 property', () => {
    expect(successTokens.success.text[200].value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.60`,
    )
    expect(
      successTokens.success.text[200].value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.60`)
    expect(
      successTokens.success.text[200].value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.60`)
  })

  // text.inverse

  test('should have a cerberus text.inverse property', () => {
    expect(
      successTokens.success.text.inverse.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`cerberus.success.100`)
    expect(
      successTokens.success.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.100`)
    expect(
      successTokens.success.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.10`)
  })
  test('should have a acheron text.inverse property', () => {
    expect(successTokens.success.text.inverse.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.100`,
    )
    expect(
      successTokens.success.text.inverse.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.100`)
    expect(
      successTokens.success.text.inverse.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.10`)
  })

  // text.static

  test('should have a cerberus text.static property', () => {
    expect(successTokens.success.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`cerberus.success.70`,
    )
    expect(
      successTokens.success.text.static.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.70`)
    expect(
      successTokens.success.text.static.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.70`)
  })
  test('should have a acheron text.static property', () => {
    expect(successTokens.success.text.static.value._acheronTheme.base).toEqual(
      formatSemanticToken`acheron.success.70`,
    )
    expect(
      successTokens.success.text.static.value._acheronTheme._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.70`)
    expect(
      successTokens.success.text.static.value._acheronTheme._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.70`)
  })
})
