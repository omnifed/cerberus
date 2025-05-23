import { describe, test, expect } from 'bun:test'
import { pageTokens } from '@cerberus-design/panda-preset'

describe('Cerberus > page', () => {
  const token = pageTokens.page

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a page property', () => {
    expect(token).toBeDefined()
  })

  // backdrop.initial

  test('should have a cerberus backdrop.initial property', () => {
    expect(token.backdrop.initial.value.base).toEqual('rgba(19, 0, 36, 0.75)')
    expect(token.backdrop.initial.value._darkMode).toEqual(
      'rgba(19, 0, 36, 0.75)',
    )
    expect(token.backdrop.initial.value._lightMode).toEqual(
      'rgba(188, 186, 202, 0.50)',
    )
  })

  // bg.initial

  test('should have a cerberus bg.initial property', () => {
    expect(token.bg.initial.value.base).toEqual(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.bg.initial.value._darkMode).toEqual(
      getSemanticToken`cerberus.brand.100`,
    )
    expect(token.bg.initial.value._lightMode).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
  })

  // bg.100

  test('should have a cerberus bg.100 property', () => {
    expect(token.bg['100'].value.base).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.bg['100'].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.bg['100'].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
  })

  // bg.200

  test('should have a cerberus bg.200 property', () => {
    expect(token.bg['200'].value.base).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.bg['200'].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.bg['200'].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
  })

  // bg.300

  test('should have a cerberus bg.300 property', () => {
    expect(token.bg['300'].value.base).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.bg['300'].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.bg['300'].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.30`,
    )
  })

  // border.initial

  test('should have a cerberus border.initial property', () => {
    expect(token.border.initial.value.base).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.border.initial.value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.border.initial.value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.15`,
    )
  })

  // border.100

  test('should have a cerberus border.100 property', () => {
    expect(token.border[100].value.base).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.border[100].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.border[100].value._lightMode).toEqual(
      getSemanticToken`cerberus.brand.20`,
    )
  })

  // border.200

  test('should have a cerberus border.200 property', () => {
    expect(token.border[200].value.base).toEqual(
      getSemanticToken`cerberus.neutral.50`,
    )
    expect(token.border[200].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.50`,
    )
    expect(token.border[200].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
  })

  // surface.initial

  test('should have a cerberus surface.initial property', () => {
    expect(token.surface.initial.value.base).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.surface.initial.value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.surface.initial.value._lightMode).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
  })

  // surface.100

  test('should have a cerberus surface.100 property', () => {
    expect(token.surface[100].value.base).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
    expect(token.surface[100].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
    expect(token.surface[100].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
  })

  // surface.200

  test('should have a cerberus surface.200 property', () => {
    expect(token.surface[200].value.base).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.surface[200].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.80`,
    )
    expect(token.surface[200].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.5`,
    )
  })

  // surface.300

  test('should have a cerberus surface.300 property', () => {
    expect(token.surface[300].value.base).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.surface[300].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.70`,
    )
    expect(token.surface[300].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
  })

  // surface.400

  test('should have a cerberus surface.400 property', () => {
    expect(token.surface[400].value.base).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.surface[400].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
    expect(token.surface[400].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.15`,
    )
  })

  // surface.inverse

  test('should have a cerberus surface.inverse property', () => {
    expect(token.surface.inverse.value.base).toEqual(
      getSemanticToken`cerberus.neutral.5`,
    )
    expect(token.surface.inverse.value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.5`,
    )
    expect(token.surface.inverse.value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
  })

  // text.initial

  test('should have a cerberus text.initial property', () => {
    expect(token.text.initial.value.base).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
    expect(token.text.initial.value._darkMode).toEqual(
      getSemanticToken`cerberus.brand.5`,
    )
    expect(token.text.initial.value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.90`,
    )
  })

  // text.100

  test('should have a cerberus text.100 property', () => {
    expect(token.text[100].value.base).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
    expect(token.text[100].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.20`,
    )
    expect(token.text[100].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.40`,
    )
  })

  // text.200

  test('should have a cerberus text.200 property', () => {
    expect(token.text[200].value.base).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
    expect(token.text[200].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.10`,
    )
    expect(token.text[200].value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.60`,
    )
  })

  // text.300

  test('should have a cerberus text.300 property', () => {
    expect(token.text[300].value.base).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
    expect(token.text[300].value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
    expect(token.text[300].value._lightMode).toEqual(
      getSemanticToken`cerberus.brand.100`,
    )
  })

  // text.inverse

  test('should have a cerberus text.inverse property', () => {
    expect(token.text.inverse.value.base).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.text.inverse.value._darkMode).toEqual(
      getSemanticToken`cerberus.neutral.100`,
    )
    expect(token.text.inverse.value._lightMode).toEqual(
      getSemanticToken`cerberus.neutral.white`,
    )
  })
})
