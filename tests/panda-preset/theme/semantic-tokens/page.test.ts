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

  test('should have a backdrop.initial property', () => {
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

  test('should have a bg.initial property', () => {
    expect(token.bg.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`brand.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`brand.100`,
    )
    expect(token.bg.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`brand.5`,
    )
  })

  test('should have a bg.100 property', () => {
    expect(token.bg['100'].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.80`,
    )
    expect(token.bg['100'].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.80`,
    )
    expect(token.bg['100'].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.10`,
    )
  })

  test('should have a bg.200 property', () => {
    expect(token.bg['200'].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.70`,
    )
    expect(token.bg['200'].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.70`,
    )
    expect(token.bg['200'].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.20`,
    )
  })

  test('should have a border.initial property', () => {
    expect(token.border.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.70`,
    )
    expect(token.border.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.70`,
    )
    expect(token.border.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.10`,
    )
  })

  test('should have a border.100 property', () => {
    expect(token.border[100].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.60`,
    )
    expect(token.border[100].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.60`,
    )
    expect(token.border[100].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`brand.20`,
    )
  })

  test('should have a border.200 property', () => {
    expect(token.border[200].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.50`,
    )
    expect(token.border[200].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.50`,
    )
    expect(token.border[200].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.20`,
    )
  })

  test('should have a surface.initial property', () => {
    expect(token.surface.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.100`,
    )
    expect(token.surface.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.100`,
    )
    expect(token.surface.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`brand.5`,
    )
  })

  test('should have a surface.100 property', () => {
    expect(token.surface[100].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.90`,
    )
    expect(token.surface[100].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.90`,
    )
    expect(token.surface[100].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.white`,
    )
  })

  test('should have a surface.200 property', () => {
    expect(token.surface[200].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.80`,
    )
    expect(token.surface[200].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.80`,
    )
    expect(token.surface[200].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.10`,
    )
  })

  test('should have a surface.300 property', () => {
    expect(token.surface[300].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.70`,
    )
    expect(token.surface[300].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.70`,
    )
    expect(token.surface[300].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.20`,
    )
  })

  test('should have a surface.inverse property', () => {
    expect(token.surface.inverse.value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.5`,
    )
    expect(token.surface.inverse.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.5`,
    )
    expect(token.surface.inverse.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.90`,
    )
  })

  test('should have a text.initial property', () => {
    expect(token.text.initial.value._cerberusTheme.base).toEqual(
      getSemanticToken`brand.5`,
    )
    expect(token.text.initial.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`brand.5`,
    )
    expect(token.text.initial.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.90`,
    )
  })

  test('should have a text.100 property', () => {
    expect(token.text[100].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.20`,
    )
    expect(token.text[100].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.20`,
    )
    expect(token.text[100].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.40`,
    )
  })

  test('should have a text.200 property', () => {
    expect(token.text[200].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.10`,
    )
    expect(token.text[200].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.10`,
    )
    expect(token.text[200].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.60`,
    )
  })

  test('should have a text.300 property', () => {
    expect(token.text[300].value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.white`,
    )
    expect(token.text[300].value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.white`,
    )
    expect(token.text[300].value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`brand.100`,
    )
  })

  test('should have a text.inverse property', () => {
    expect(token.text.inverse.value._cerberusTheme.base).toEqual(
      getSemanticToken`neutral.100`,
    )
    expect(token.text.inverse.value._cerberusTheme._darkMode).toEqual(
      getSemanticToken`neutral.100`,
    )
    expect(token.text.inverse.value._cerberusTheme._lightMode).toEqual(
      getSemanticToken`neutral.white`,
    )
  })
})
