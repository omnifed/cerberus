import { describe, test, expect } from 'bun:test'
import { infoTokens } from '@cerberus-design/panda-preset'

describe('infoTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a border.initial property', () => {
    expect(infoTokens.info.border.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.50`,
    )
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`info.50`)
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`info.60`)
  })

  test('should have a bg property', () => {
    expect(infoTokens.info.bg).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(infoTokens.info.bg.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.70`,
    )
    expect(infoTokens.info.bg.initial.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.70`,
    )
    expect(infoTokens.info.bg.initial.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`info.30`,
    )
  })

  test('should have a bg.hover property', () => {
    expect(infoTokens.info.bg.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.90`,
    )
    expect(infoTokens.info.bg.hover.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.90`,
    )
    expect(infoTokens.info.bg.hover.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`info.20`,
    )
  })

  test('should have a bg.active property', () => {
    expect(infoTokens.info.bg.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.50`,
    )
    expect(infoTokens.info.bg.active.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.50`,
    )
    expect(infoTokens.info.bg.active.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`info.50`,
    )
  })

  test('should have a ghost property', () => {
    expect(infoTokens.info.ghost).toBeDefined()
  })

  test('should have a ghost.initial property', () => {
    expect(infoTokens.info.ghost.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`brand.100`,
    )
    expect(
      infoTokens.info.ghost.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`brand.100`)
    expect(
      infoTokens.info.ghost.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`neutral.white`)
  })

  test('should have a ghost.hover property', () => {
    expect(infoTokens.info.ghost.hover.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.90`,
    )
    expect(infoTokens.info.ghost.hover.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.90`,
    )
    expect(infoTokens.info.ghost.hover.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`info.20`,
    )
  })

  test('should have a ghost.active property', () => {
    expect(infoTokens.info.ghost.active.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.80`,
    )
    expect(infoTokens.info.ghost.active.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.80`,
    )
    expect(
      infoTokens.info.ghost.active.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`info.30`)
  })

  test('should have a surface.initial property', () => {
    expect(infoTokens.info.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(infoTokens.info.surface.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.70`,
    )
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`info.70`)
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`info.30`)
  })

  test('should have a surface.100 property', () => {
    expect(infoTokens.info.surface['100'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.90`,
    )
    expect(
      infoTokens.info.surface['100'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`info.90`)
    expect(
      infoTokens.info.surface['100'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`info.20`)
  })

  test('should have a surface.200 property', () => {
    expect(infoTokens.info.surface['200'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.50`,
    )
    expect(
      infoTokens.info.surface['200'].value._cerberusTheme._darkMode,
    ).toEqual(formatSemanticToken`info.50`)
    expect(
      infoTokens.info.surface['200'].value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`info.50`)
  })

  test('should have a text property', () => {
    expect(infoTokens.info.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(infoTokens.info.text.initial.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.10`,
    )
    expect(infoTokens.info.text.initial.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.10`,
    )
    expect(
      infoTokens.info.text.initial.value._cerberusTheme._lightMode,
    ).toEqual(formatSemanticToken`info.100`)
  })

  test('should have a text.100 property', () => {
    expect(infoTokens.info.text['100'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.30`,
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.30`,
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`info.70`,
    )
  })

  test('should have a text.200 property', () => {
    expect(infoTokens.info.text['200'].value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.50`,
    )
    expect(infoTokens.info.text['200'].value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.50`,
    )
    expect(infoTokens.info.text['200'].value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`info.50`,
    )
  })

  test('should have a text.static property', () => {
    expect(infoTokens.info.text.static.value._cerberusTheme.base).toEqual(
      formatSemanticToken`info.60`,
    )
    expect(infoTokens.info.text.static.value._cerberusTheme._darkMode).toEqual(
      formatSemanticToken`info.60`,
    )
    expect(infoTokens.info.text.static.value._cerberusTheme._lightMode).toEqual(
      formatSemanticToken`info.60`,
    )
  })
})
