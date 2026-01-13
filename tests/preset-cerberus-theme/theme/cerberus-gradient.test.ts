import { describe, test, expect } from 'bun:test'
import { gradientTokens } from '@cerberus/preset-cerberus-theme'

describe('gradientTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // charon-light

  test('should have a cerberus charon-light property', () => {
    expect(gradientTokens.gradient['charon-light'].text.value.base).toEqual(
      formatSemanticToken`cerberus.brand.70`,
    )
    expect(
      gradientTokens.gradient['charon-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.brand.70`)
    expect(
      gradientTokens.gradient['charon-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.brand.70`)
  })

  // charon-dark

  test('should have a cerberus charon-dark property', () => {
    expect(gradientTokens.gradient['charon-dark'].text.value.base).toEqual(
      formatSemanticToken`cerberus.brand.10`,
    )
    expect(gradientTokens.gradient['charon-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.10`,
    )
    expect(
      gradientTokens.gradient['charon-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.brand.10`)
  })

  // nyx-light

  test('should have a cerberus nyx-light property', () => {
    expect(gradientTokens.gradient['nyx-light'].text.value.base).toEqual(
      formatSemanticToken`cerberus.neutral.100`,
    )
    expect(gradientTokens.gradient['nyx-light'].text.value._darkMode).toEqual(
      formatSemanticToken`cerberus.neutral.100`,
    )
    expect(gradientTokens.gradient['nyx-light'].text.value._lightMode).toEqual(
      formatSemanticToken`cerberus.neutral.100`,
    )
  })

  // nyx-dark

  test('should have a cerberus nyx-dark property', () => {
    expect(gradientTokens.gradient['nyx-dark'].text.value.base).toEqual(
      formatSemanticToken`cerberus.neutral.20`,
    )
    expect(gradientTokens.gradient['nyx-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`cerberus.neutral.20`,
    )
    expect(gradientTokens.gradient['nyx-dark'].text.value._lightMode).toEqual(
      formatSemanticToken`cerberus.neutral.20`,
    )
  })

  // amphiaraus-light

  test('should have a cerberus amphiaraus-light property', () => {
    expect(gradientTokens.gradient['amphiaraus-light'].text.value.base).toEqual(
      formatSemanticToken`info.cerberus.80`,
    )
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`info.cerberus.80`)
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`info.cerberus.80`)
  })

  // amphiaraus-dark

  test('should have a cerberus amphiaraus-dark property', () => {
    expect(gradientTokens.gradient['amphiaraus-dark'].text.value.base).toEqual(
      formatSemanticToken`info.cerberus.20`,
    )
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.value._darkMode,
    ).toEqual(formatSemanticToken`info.cerberus.20`)
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`info.cerberus.20`)
  })

  // styx-light

  test('should have a cerberus styx-light property', () => {
    expect(gradientTokens.gradient['styx-light'].text.value.base).toEqual(
      formatSemanticToken`cerberus.teal.90`,
    )
    expect(gradientTokens.gradient['styx-light'].text.value._darkMode).toEqual(
      formatSemanticToken`cerberus.teal.90`,
    )
    expect(gradientTokens.gradient['styx-light'].text.value._lightMode).toEqual(
      formatSemanticToken`cerberus.teal.90`,
    )
  })

  // styx-dark

  test('should have a cerberus styx-dark property', () => {
    expect(gradientTokens.gradient['styx-dark'].text.value.base).toEqual(
      formatSemanticToken`cerberus.teal.100`,
    )
    expect(gradientTokens.gradient['styx-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`cerberus.teal.100`,
    )
    expect(gradientTokens.gradient['styx-dark'].text.value._lightMode).toEqual(
      formatSemanticToken`cerberus.neutral.100`,
    )
  })

  // thanatos-light

  test('should have a cerberus thanatos-light property', () => {
    expect(gradientTokens.gradient['thanatos-light'].text.value.base).toEqual(
      formatSemanticToken`cerberus.success.90`,
    )
    expect(
      gradientTokens.gradient['thanatos-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
    expect(
      gradientTokens.gradient['thanatos-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
  })

  // thanatos-dark

  test('should have a cerberus thanatos-dark property', () => {
    expect(gradientTokens.gradient['thanatos-dark'].text.value.base).toEqual(
      formatSemanticToken`cerberus.success.20`,
    )
    expect(
      gradientTokens.gradient['thanatos-dark'].text.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.20`)
    expect(
      gradientTokens.gradient['thanatos-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.20`)
  })

  // hades-light

  test('should have a cerberus hades-light property', () => {
    expect(gradientTokens.gradient['hades-light'].text.value.base).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(gradientTokens.gradient['hades-light'].text.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.80`,
    )
    expect(
      gradientTokens.gradient['hades-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`danger.cerberus.80`)
  })

  // hades-dark

  test('should have a cerberus hades-dark property', () => {
    expect(gradientTokens.gradient['hades-dark'].text.value.base).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
    expect(gradientTokens.gradient['hades-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
    expect(gradientTokens.gradient['hades-dark'].text.value._lightMode).toEqual(
      formatSemanticToken`danger.cerberus.10`,
    )
  })

  // asphodel-light

  test('should have a cerberus asphodel-light property', () => {
    expect(gradientTokens.gradient['asphodel-light'].text.value.base).toEqual(
      formatSemanticToken`warning.cerberus.90`,
    )
    expect(
      gradientTokens.gradient['asphodel-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`warning.cerberus.90`)
    expect(
      gradientTokens.gradient['asphodel-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`warning.cerberus.90`)
  })

  // asphodel-dark

  test('should have a cerberus asphodel-dark property', () => {
    expect(gradientTokens.gradient['asphodel-dark'].text.value.base).toEqual(
      formatSemanticToken`warning.cerberus.100`,
    )
    expect(
      gradientTokens.gradient['asphodel-dark'].text.value._darkMode,
    ).toEqual(formatSemanticToken`warning.cerberus.100`)
    expect(
      gradientTokens.gradient['asphodel-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`warning.cerberus.100`)
  })
})
