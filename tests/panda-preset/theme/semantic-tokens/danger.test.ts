import { describe, test, expect } from 'bun:test'
import { dangerTokens } from '@cerberus-design/panda-preset'

describe('dangerTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a danger property', () => {
    expect(dangerTokens.danger).toBeDefined()
  })

  test('should have a bg property', () => {
    expect(dangerTokens.danger.bg).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(dangerTokens.danger.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.80`,
    )
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.80`)
    expect(
      dangerTokens.danger.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.60`)
  })

  test('should have a bg.hover property', () => {
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.40`,
    )
    expect(dangerTokens.danger.bg.hover.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`danger.40`,
    )
    expect(
      dangerTokens.danger.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.80`)
  })

  test('should have a bg.active property', () => {
    expect(dangerTokens.danger.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.30`,
    )
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.30`)
    expect(
      dangerTokens.danger.bg.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.90`)
  })

  test('should have a border property', () => {
    expect(dangerTokens.danger.border).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`danger.30`)
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.30`)
    expect(
      dangerTokens.danger.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.50`)
  })

  test('should have a ghost property', () => {
    expect(dangerTokens.danger.ghost).toBeDefined()
  })

  test('should have a ghost.initial property', () => {
    expect(dangerTokens.danger.ghost.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`brand.100`,
    )
    expect(
      dangerTokens.danger.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`brand.100`)
    expect(
      dangerTokens.danger.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`neutral.white`)
  })

  test('should have a ghost.hover property', () => {
    expect(dangerTokens.danger.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.90`,
    )
    expect(
      dangerTokens.danger.ghost.hover.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.90`)
    expect(
      dangerTokens.danger.ghost.hover.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.10`)
  })

  test('should have a ghost.active property', () => {
    expect(dangerTokens.danger.ghost.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.80`,
    )
    expect(
      dangerTokens.danger.ghost.active.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.80`)
    expect(
      dangerTokens.danger.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.20`)
  })

  test('should have a surface.initial property', () => {
    expect(dangerTokens.danger.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`danger.80`)
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.80`)
    expect(
      dangerTokens.danger.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.30`)
  })

  test('should have a surface.100 property', () => {
    expect(
      dangerTokens.danger.surface['100'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`danger.90`)
    expect(
      dangerTokens.danger.surface['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.90`)
    expect(
      dangerTokens.danger.surface['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.10`)
  })

  test('should have a surface.200 property', () => {
    expect(
      dangerTokens.danger.surface['200'].value._cerberusTheme.base,
    ).toEqual(formatSemanticToken`danger.70`)
    expect(
      dangerTokens.danger.surface['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.70`)
    expect(
      dangerTokens.danger.surface['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.50`)
  })

  test('should have a text property', () => {
    expect(dangerTokens.danger.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(dangerTokens.danger.text.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.10`,
    )
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.10`)
    expect(
      dangerTokens.danger.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.100`)
  })

  test('should have a text.100 property', () => {
    expect(dangerTokens.danger.text['100'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.30`,
    )
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.30`)
    expect(
      dangerTokens.danger.text['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.80`)
  })

  test('should have a text.200 property', () => {
    expect(dangerTokens.danger.text['200'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.50`,
    )
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.50`)
    expect(
      dangerTokens.danger.text['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.70`)
  })

  test('should have a text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse).toBeDefined()
  })

  test('should have a text.inverse property', () => {
    expect(dangerTokens.danger.text.inverse.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.90`,
    )
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.90`)
    expect(
      dangerTokens.danger.text.inverse.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.10`)
  })

  test('should have a text.static property', () => {
    expect(dangerTokens.danger.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`danger.80`,
    )
    expect(
      dangerTokens.danger.text.static.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`danger.80`)
    expect(
      dangerTokens.danger.text.static.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`danger.80`)
  })
})
