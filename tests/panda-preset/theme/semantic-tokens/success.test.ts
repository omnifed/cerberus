import { describe, test, expect } from 'bun:test'
import { successTokens } from '@cerberus-design/panda-preset'

describe('success', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a success property', () => {
    expect(successTokens.success).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      successTokens.success.border.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`success.50`)
    expect(
      successTokens.success.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.50`)
    expect(
      successTokens.success.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.70`)
  })

  test('should have a bg.initial property', () => {
    expect(successTokens.success.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`success.50`,
    )
    expect(
      successTokens.success.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.50`)
    expect(
      successTokens.success.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.60`)
  })

  test('should have a ghost.initial property', () => {
    expect(
      successTokens.success.ghost.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`brand.100`)
    expect(
      successTokens.success.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`brand.100`)
    expect(
      successTokens.success.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`neutral.white`)
  })

  test('should have a ghost.hover property', () => {
    expect(successTokens.success.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`success.90`,
    )
    expect(
      successTokens.success.ghost.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.90`)
    expect(
      successTokens.success.ghost.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.10`)
  })

  test('should have a ghost.active property', () => {
    expect(
      successTokens.success.ghost.active.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`success.80`)
    expect(
      successTokens.success.ghost.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.80`)
    expect(
      successTokens.success.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.20`)
  })

  test('should have a surface.initial property', () => {
    expect(
      successTokens.success.surface.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`success.70`)
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.70`)
    expect(
      successTokens.success.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.50`)
  })

  test('should have a surface.100 property', () => {
    expect(
      successTokens.success.surface['100'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`success.90`)
    expect(
      successTokens.success.surface['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.90`)
    expect(
      successTokens.success.surface['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.40`)
  })

  test('should have a surface.200 property', () => {
    expect(
      successTokens.success.surface['200'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`success.70`)
    expect(
      successTokens.success.surface['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.70`)
    expect(
      successTokens.success.surface['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.60`)
  })

  test('should have a bg.active property', () => {
    expect(successTokens.success.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`success.40`,
    )
    expect(
      successTokens.success.bg.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.40`)
    expect(
      successTokens.success.bg.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.80`)
  })

  test('should have a text.initial property', () => {
    expect(
      successTokens.success.text.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`success.10`)
    expect(
      successTokens.success.text.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.10`)
    expect(
      successTokens.success.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.100`)
  })

  test('should have a text.100 property', () => {
    expect(successTokens.success.text[100].value._cerberusTheme.base).toEqual(
      formatSemanticToken`success.40`,
    )
    expect(
      successTokens.success.text[100].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.40`)
    expect(
      successTokens.success.text[100].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.80`)
  })

  test('should have a text.200 property', () => {
    expect(successTokens.success.text[200].value._cerberusTheme.base).toEqual(
      formatSemanticToken`success.60`,
    )
    expect(
      successTokens.success.text[200].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.60`)
    expect(
      successTokens.success.text[200].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.60`)
  })

  test('should have a text.inverse property', () => {
    expect(
      successTokens.success.text.inverse.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`success.100`)
    expect(
      successTokens.success.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.100`)
    expect(
      successTokens.success.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.10`)
  })

  test('should have a text.static property', () => {
    expect(successTokens.success.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`success.70`,
    )
    expect(
      successTokens.success.text.static.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`success.70`)
    expect(
      successTokens.success.text.static.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`success.70`)
  })
})
