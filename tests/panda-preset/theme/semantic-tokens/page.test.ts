import { describe, test, expect } from 'bun:test'
import { pageTokens } from '@cerberus-design/panda-preset'

describe('page', () => {
  const token = pageTokens.page

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a page property', () => {
    expect(token).toBeDefined()
  })

  // backdrop.initial

  test('should have a cerberus backdrop.initial property', () => {
    expect(token.backdrop.initial.value._cerberusTheme.base).toEqual(
      'rgba(19, 0, 36, 0.75)',
    )
    expect(token.backdrop.initial.value._cerberusTheme._darkMode).toEqual(
      'rgba(19, 0, 36, 0.75)',
    )
    expect(token.backdrop.initial.value._cerberusTheme._lightMode).toEqual(
      'rgba(188, 186, 202, 0.50)',
    )
  })
  test('should have a acheron backdrop.initial property', () => {
    expect(token.backdrop.initial.value._acheronTheme.base).toEqual(
      'rgba(27, 26, 25, 0.50)',
    )
    expect(token.backdrop.initial.value._acheronTheme._darkMode).toEqual(
      'rgba(27, 26, 25, 0.50)',
    )
    expect(token.backdrop.initial.value._acheronTheme._lightMode).toEqual(
      'rgba(106, 103, 100, 0.50)',
    )
  })

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(token.bg.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
  })
  test('should have a acheron bg.100 property', () => {
    expect(token.bg['100'].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.bg['100'].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.bg['100'].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.10`,
    )
  })

  // bg.100

  test('should have a cerberus bg.100 property', () => {
    expect(token.bg['100'].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.bg['100'].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.bg['100'].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
  })
  test('should have a acheron bg.100 property', () => {
    expect(token.bg['100'].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.bg['100'].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.bg['100'].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.10`,
    )
  })

  // bg.200

  test('should have a cerberus bg.200 property', () => {
    expect(token.bg['200'].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.bg['200'].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.bg['200'].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
  })
  test('should have a acheron bg.200 property', () => {
    expect(token.bg['200'].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.bg['200'].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.bg['200'].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
  })

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(token.border.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.border.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.border.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
  })
  test('should have a acheron border.initial property', () => {
    expect(token.border.initial.value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.border.initial.value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.border.initial.value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
  })

  // border.100

  test('should have a cerberus border.100 property', () => {
    expect(token.border[100].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.border[100].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.border[100].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.brand.20`,
    )
  })
  test('should have a acheron border.100 property', () => {
    expect(token.border[100].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.border[100].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.border[100].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.30`,
    )
  })

  // border.200

  test('should have a cerberus border.200 property', () => {
    expect(token.border[200].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.50`,
    )
    expect(token.border[200].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.50`,
    )
    expect(token.border[200].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
  })
  test('should have a acheron border.200 property', () => {
    expect(token.border[200].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.50`,
    )
    expect(token.border[200].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.50`,
    )
    expect(token.border[200].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
  })

  // surface.initial

  test('should have a cerberus surface.initial property', () => {
    expect(token.surface.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.surface.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.surface.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
  })
  test('should have a acheron surface.initial property', () => {
    expect(token.surface.initial.value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.surface.initial.value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.surface.initial.value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
  })

  // surface.100

  test('should have a cerberus surface.100 property', () => {
    expect(token.surface[100].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
    expect(token.surface[100].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
    expect(token.surface[100].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
  })
  test('should have a acheron surface.100 property', () => {
    expect(token.surface[100].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.surface[100].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.surface[100].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
  })

  // surface.200

  test('should have a cerberus surface.200 property', () => {
    expect(token.surface[200].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.surface[200].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.surface[200].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
  })
  test('should have a acheron surface.200 property', () => {
    expect(token.surface[200].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.surface[200].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.surface[200].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.10`,
    )
  })

  // surface.300

  test('should have a cerberus surface.300 property', () => {
    expect(token.surface[300].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.surface[300].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.surface[300].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
  })
  test('should have a acheron surface.300 property', () => {
    expect(token.surface[300].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.surface[300].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.surface[300].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
  })

  // surface.inverse

  test('should have a cerberus surface.inverse property', () => {
    expect(token.surface.inverse.value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.5`,
    )
    expect(token.surface.inverse.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.5`,
    )
    expect(token.surface.inverse.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
  })
  test('should have a acheron surface.inverse property', () => {
    expect(token.surface.inverse.value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.surface.inverse.value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.surface.inverse.value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(token.text.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
    expect(token.text.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
    expect(token.text.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
  })
  test('should have a acheron text.initial property', () => {
    expect(token.text.initial.value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.text.initial.value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.text.initial.value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(token.text[100].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
    expect(token.text[100].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
    expect(token.text[100].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.40`,
    )
  })
  test('should have a acheron text.100 property', () => {
    expect(token.text[100].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.30`,
    )
    expect(token.text[100].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.30`,
    )
    expect(token.text[100].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.40`,
    )
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(token.text[200].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
    expect(token.text[200].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
    expect(token.text[200].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
  })
  test('should have a acheron text.200 property', () => {
    expect(token.text[200].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
    expect(token.text[200].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
    expect(token.text[200].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
  })

  // text.300

  test('should have a cerberus text.300 property', () => {
    expect(token.text[300].value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
    expect(token.text[300].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
    expect(token.text[300].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.brand.100`,
    )
  })
  test('should have a acheron text.300 property', () => {
    expect(token.text[300].value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
    expect(token.text[300].value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
    expect(token.text[300].value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
  })

  // text.inverse

  test('should have a cerberus text.inverse property', () => {
    expect(token.text.inverse.value._cerberusTheme.base).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.text.inverse.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.text.inverse.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
  })
  test('should have a acheron text.inverse property', () => {
    expect(token.text.inverse.value._acheronTheme.base).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.text.inverse.value._acheronTheme._darkMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.text.inverse.value._acheronTheme._lightMode).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
  })
})
