import { describe, test, expect } from 'bun:test'
import { pageTokens } from '@cerberus-design/preset-elysium-theme'

describe('Elysium > page', () => {
  const token = pageTokens.page

  function getSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  test('should have a page property', () => {
    expect(token).toBeDefined()
  })

  // backdrop.initial

  test('should have a elysium backdrop.initial property', () => {
    expect(token.backdrop.initial.value.base).toEqual(
      'rgba(0.27732497453689575, 0.27732497453689575, 0.27732497453689575, 0.6000000238418579)',
    )
    expect(token.backdrop.initial.value._darkMode).toEqual(
      'rgba(0.27732497453689575, 0.27732497453689575, 0.27732497453689575, 0.6000000238418579)',
    )
    expect(token.backdrop.initial.value._lightMode).toEqual(
      'rgba(0.7085617780685425, 0.7058011889457703, 0.7058011889457703, 0.6000000238418579)',
    )
  })

  // bg.initial

  test('should have a elysium bg.100 property', () => {
    expect(token.bg['100'].value.base).toEqual(
      getSemanticToken`elysium.neutral.80`,
    )
    expect(token.bg['100'].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.80`,
    )
    expect(token.bg['100'].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.5`,
    )
  })

  // bg.100

  test('should have a elysium bg.100 property', () => {
    expect(token.bg['100'].value.base).toEqual(
      getSemanticToken`elysium.neutral.80`,
    )
    expect(token.bg['100'].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.80`,
    )
    expect(token.bg['100'].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.5`,
    )
  })

  // bg.200

  test('should have a elysium bg.200 property', () => {
    expect(token.bg['200'].value.base).toEqual(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(token.bg['200'].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(token.bg['200'].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.20`,
    )
  })

  // bg.300

  test('should have a elysium bg.300 property', () => {
    expect(token.bg['300'].value.base).toEqual(
      getSemanticToken`elysium.neutral.60`,
    )
    expect(token.bg['300'].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.60`,
    )
    expect(token.bg['300'].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.30`,
    )
  })

  // border.initial

  test('should have a elysium border.initial property', () => {
    expect(token.border.initial.value.base).toEqual(
      getSemanticToken`elysium.neutral.50`,
    )
    expect(token.border.initial.value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.50`,
    )
    expect(token.border.initial.value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.30`,
    )
  })

  // border.100

  test('should have a elysium border.100 property', () => {
    expect(token.border[100].value.base).toEqual(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(token.border[100].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(token.border[100].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.20`,
    )
  })

  // border.200

  test('should have a elysium border.200 property', () => {
    expect(token.border[200].value.base).toEqual(
      getSemanticToken`elysium.neutral.30`,
    )
    expect(token.border[200].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.30`,
    )
    expect(token.border[200].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.40`,
    )
  })

  // surface.initial

  test('should have a elysium surface.initial property', () => {
    expect(token.surface.initial.value.base).toEqual(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(token.surface.initial.value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(token.surface.initial.value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.5`,
    )
  })

  // surface.100

  test('should have a elysium surface.100 property', () => {
    expect(token.surface[100].value.base).toEqual(
      getSemanticToken`elysium.neutral.90`,
    )
    expect(token.surface[100].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.90`,
    )
    expect(token.surface[100].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.white`,
    )
  })

  // surface.200

  test('should have a elysium surface.200 property', () => {
    expect(token.surface[200].value.base).toEqual(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(token.surface[200].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.70`,
    )
    expect(token.surface[200].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.10`,
    )
  })

  // surface.300

  test('should have a elysium surface.300 property', () => {
    expect(token.surface[300].value.base).toEqual(
      getSemanticToken`elysium.neutral.60`,
    )
    expect(token.surface[300].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.60`,
    )
    expect(token.surface[300].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.20`,
    )
  })

  // surface.400

  test('should have a elysium surface.400 property', () => {
    expect(token.surface[400].value.base).toEqual(
      getSemanticToken`elysium.neutral.50`,
    )
    expect(token.surface[400].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.50`,
    )
    expect(token.surface[400].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.30`,
    )
  })

  // surface.inverse

  test('should have a elysium surface.inverse property', () => {
    expect(token.surface.inverse.value.base).toEqual(
      getSemanticToken`elysium.neutral.5`,
    )
    expect(token.surface.inverse.value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.5`,
    )
    expect(token.surface.inverse.value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.90`,
    )
  })

  // text.initial

  test('should have a elysium text.initial property', () => {
    expect(token.text.initial.value.base).toEqual(
      getSemanticToken`elysium.neutral.5`,
    )
    expect(token.text.initial.value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.5`,
    )
    expect(token.text.initial.value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.90`,
    )
  })

  // text.100

  test('should have a elysium text.100 property', () => {
    expect(token.text[100].value.base).toEqual(
      getSemanticToken`elysium.neutral.30`,
    )
    expect(token.text[100].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.30`,
    )
    expect(token.text[100].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.50`,
    )
  })

  // text.200

  test('should have a elysium text.200 property', () => {
    expect(token.text[200].value.base).toEqual(
      getSemanticToken`elysium.neutral.10`,
    )
    expect(token.text[200].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.10`,
    )
    expect(token.text[200].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.70`,
    )
  })

  // text.300

  test('should have a elysium text.300 property', () => {
    expect(token.text[300].value.base).toEqual(
      getSemanticToken`elysium.neutral.white`,
    )
    expect(token.text[300].value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.white`,
    )
    expect(token.text[300].value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.100`,
    )
  })

  // text.inverse

  test('should have a elysium text.inverse property', () => {
    expect(token.text.inverse.value.base).toEqual(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(token.text.inverse.value._darkMode).toEqual(
      getSemanticToken`elysium.neutral.100`,
    )
    expect(token.text.inverse.value._lightMode).toEqual(
      getSemanticToken`elysium.neutral.white`,
    )
  })
})
