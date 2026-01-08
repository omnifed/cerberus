import { describe, test, expect } from 'bun:test'
import { pageTokens } from '@cerberus-design/preset-acheron-theme'

describe('Acheron > page', () => {
  const token = pageTokens.page

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a page property', () => {
    expect(token).toBeDefined()
  })

  // backdrop.initial

  test('should have a acheron backdrop.initial property', () => {
    expect(token.backdrop.initial.value.base).toEqual(
      'rgba(0.054901961237192154, 0.05098039284348488, 0.0470588244497776, 0.5)',
    )
    expect(token.backdrop.initial.value._darkMode).toEqual(
      'rgba(0.054901961237192154, 0.05098039284348488, 0.0470588244497776, 0.5)',
    )
    expect(token.backdrop.initial.value._lightMode).toEqual(
      'rgba(0.4156862795352936, 0.40392157435417175, 0.3921568691730499, 0.5)',
    )
  })

  // bg.initial

  test('should have a acheron bg.100 property', () => {
    expect(token.bg['100'].value.base).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.bg['100'].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.bg['100'].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.10`,
    )
  })

  // bg.100

  test('should have a acheron bg.100 property', () => {
    expect(token.bg['100'].value.base).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.bg['100'].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.bg['100'].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.10`,
    )
  })

  // bg.200

  test('should have a acheron bg.200 property', () => {
    expect(token.bg['200'].value.base).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.bg['200'].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.bg['200'].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
  })

  // bg.300

  test('should have a acheron bg.300 property', () => {
    expect(token.bg['300'].value.base).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
    expect(token.bg['300'].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
    expect(token.bg['300'].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.30`,
    )
  })

  // border.initial

  test('should have a acheron border.initial property', () => {
    expect(token.border.initial.value.base).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.border.initial.value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.border.initial.value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
  })

  // border.100

  test('should have a acheron border.100 property', () => {
    expect(token.border[100].value.base).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.border[100].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.border[100].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.30`,
    )
  })

  // border.200

  test('should have a acheron border.200 property', () => {
    expect(token.border[200].value.base).toEqual(
      getSemanticToken`acheron.neutral.50`,
    )
    expect(token.border[200].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.50`,
    )
    expect(token.border[200].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
  })

  // surface.initial

  test('should have a acheron surface.initial property', () => {
    expect(token.surface.initial.value.base).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.surface.initial.value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.surface.initial.value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.0`,
    )
  })

  // surface.100

  test('should have a acheron surface.100 property', () => {
    expect(token.surface[100].value.base).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.surface[100].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
    expect(token.surface[100].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
  })

  // surface.200

  test('should have a acheron surface.200 property', () => {
    expect(token.surface[200].value.base).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.surface[200].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.80`,
    )
    expect(token.surface[200].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.10`,
    )
  })

  // surface.300

  test('should have a acheron surface.300 property', () => {
    expect(token.surface[300].value.base).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.surface[300].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.70`,
    )
    expect(token.surface[300].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
  })

  // surface.400

  test('should have a acheron surface.400 property', () => {
    expect(token.surface[400].value.base).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
    expect(token.surface[400].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
    expect(token.surface[400].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.30`,
    )
  })

  // surface.inverse

  test('should have a acheron surface.inverse property', () => {
    expect(token.surface.inverse.value.base).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.surface.inverse.value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.surface.inverse.value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
  })

  // text.initial

  test('should have a acheron text.initial property', () => {
    expect(token.text.initial.value.base).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.text.initial.value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.5`,
    )
    expect(token.text.initial.value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.90`,
    )
  })

  // text.100

  test('should have a acheron text.100 property', () => {
    expect(token.text[100].value.base).toEqual(
      getSemanticToken`acheron.neutral.40`,
    )
    expect(token.text[100].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.40`,
    )
    expect(token.text[100].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.50`,
    )
  })

  // text.200

  test('should have a acheron text.200 property', () => {
    expect(token.text[200].value.base).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
    expect(token.text[200].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.20`,
    )
    expect(token.text[200].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.60`,
    )
  })

  // text.300

  test('should have a acheron text.300 property', () => {
    expect(token.text[300].value.base).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
    expect(token.text[300].value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
    expect(token.text[300].value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
  })

  // text.inverse

  test('should have a acheron text.inverse property', () => {
    expect(token.text.inverse.value.base).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.text.inverse.value._darkMode).toEqual(
      getSemanticToken`acheron.neutral.100`,
    )
    expect(token.text.inverse.value._lightMode).toEqual(
      getSemanticToken`acheron.neutral.white`,
    )
  })
})
