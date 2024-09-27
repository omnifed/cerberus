import { describe, test, expect } from 'bun:test'
import { warningTokens } from '@cerberus-design/panda-preset'

describe('warning', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a warning property', () => {
    expect(warningTokens.warning).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`warning.20`)
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.20`)
    expect(
      warningTokens.warning.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.50`)
  })

  test('should have a bg.initial property', () => {
    expect(warningTokens.warning.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`warning.70`,
    )
    expect(
      warningTokens.warning.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.70`)
    expect(
      warningTokens.warning.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.50`)
  })

  test('should have a bg.hover property', () => {
    expect(warningTokens.warning.bg.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`warning.60`,
    )
    expect(
      warningTokens.warning.bg.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.60`)
    expect(
      warningTokens.warning.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.60`)
  })

  test('should have a bg.active property', () => {
    expect(warningTokens.warning.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`warning.40`,
    )
    expect(
      warningTokens.warning.bg.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.40`)
    expect(
      warningTokens.warning.bg.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.70`)
  })

  test('should have a ghost property', () => {
    expect(warningTokens.warning.ghost).toBeDefined()
  })

  test('should have a ghost.initial property', () => {
    expect(
      warningTokens.warning.ghost.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`brand.100`)
    expect(
      warningTokens.warning.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`brand.100`)
    expect(
      warningTokens.warning.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`neutral.white`)
  })

  test('should have a ghost.hover property', () => {
    expect(warningTokens.warning.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`warning.90`,
    )
    expect(
      warningTokens.warning.ghost.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.90`)
    expect(
      warningTokens.warning.ghost.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.20`)
  })

  test('should have a ghost.active property', () => {
    expect(
      warningTokens.warning.ghost.active.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`warning.80`)
    expect(
      warningTokens.warning.ghost.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.80`)
    expect(
      warningTokens.warning.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.30`)
  })

  test('should have a surface property', () => {
    expect(warningTokens.warning.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`warning.70`)
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.70`)
    expect(
      warningTokens.warning.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.40`)
  })

  test('should have a surface.100 property', () => {
    expect(
      warningTokens.warning.surface['100'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`warning.90`)
    expect(
      warningTokens.warning.surface['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.90`)
    expect(
      warningTokens.warning.surface['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.20`)
  })

  test('should have a surface.200 property', () => {
    expect(
      warningTokens.warning.surface['200'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`warning.50`)
    expect(
      warningTokens.warning.surface['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.50`)
    expect(
      warningTokens.warning.surface['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.60`)
  })

  test('should have a text.initial property', () => {
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`warning.100`)
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.100`)
    expect(
      warningTokens.warning.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.100`)
  })

  test('should have a text.100 property', () => {
    expect(warningTokens.warning.text[100].value._cerberusTheme.base).toEqual(
      formatSemanticToken`warning.30`,
    )
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.30`)
    expect(
      warningTokens.warning.text[100].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.80`)
  })

  test('should have a text.200 property', () => {
    expect(warningTokens.warning.text[200].value._cerberusTheme.base).toEqual(
      formatSemanticToken`warning.60`,
    )
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.60`)
    expect(
      warningTokens.warning.text[200].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.80`)
  })

  test('should have a text.inverse property', () => {
    expect(
      warningTokens.warning.text.inverse.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`warning.20`)
    expect(
      warningTokens.warning.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.20`)
    expect(
      warningTokens.warning.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.100`)
  })

  test('should have a text.static property', () => {
    expect(warningTokens.warning.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`warning.80`,
    )
    expect(
      warningTokens.warning.text.static.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`warning.80`)
    expect(
      warningTokens.warning.text.static.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`warning.80`)
  })
})
