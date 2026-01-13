import { describe, test, expect } from 'bun:test'
import { gradientTokens } from '@cerberus/preset-acheron-theme'

describe('acheron gradientTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // charon-light

  test('should have a acheron charon-light property', () => {
    expect(gradientTokens.gradient['charon-light'].text.value.base).toEqual(
      formatSemanticToken`acheron.brand.90`,
    )
    expect(
      gradientTokens.gradient['charon-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`acheron.brand.90`)
    expect(
      gradientTokens.gradient['charon-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`acheron.brand.90`)
  })

  // charon-dark

  test('should have a acheron charon-dark property', () => {
    expect(gradientTokens.gradient['charon-dark'].text.value.base).toEqual(
      formatSemanticToken`acheron.brand.20`,
    )
    expect(gradientTokens.gradient['charon-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.20`,
    )
    expect(
      gradientTokens.gradient['charon-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`acheron.brand.20`)
  })

  // nyx-light

  test('should have a acheron nyx-light property', () => {
    expect(gradientTokens.gradient['nyx-light'].text.value.base).toEqual(
      formatSemanticToken`acheron.neutral.90`,
    )
    expect(gradientTokens.gradient['nyx-light'].text.value._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.90`,
    )
    expect(gradientTokens.gradient['nyx-light'].text.value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.90`,
    )
  })

  // nyx-dark

  test('should have a acheron nyx-dark property', () => {
    expect(gradientTokens.gradient['nyx-dark'].text.value.base).toEqual(
      formatSemanticToken`acheron.neutral.20`,
    )
    expect(gradientTokens.gradient['nyx-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.20`,
    )
    expect(gradientTokens.gradient['nyx-dark'].text.value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.20`,
    )
  })

  // amphiaraus-light

  test('should have a acheron amphiaraus-light property', () => {
    expect(gradientTokens.gradient['amphiaraus-light'].text.value.base).toEqual(
      formatSemanticToken`info.acheron.80`,
    )
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`info.acheron.80`)
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`info.acheron.80`)
  })

  // amphiaraus-dark

  test('should have a acheron amphiaraus-dark property', () => {
    expect(gradientTokens.gradient['amphiaraus-dark'].text.value.base).toEqual(
      formatSemanticToken`info.acheron.20`,
    )
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.value._darkMode,
    ).toEqual(formatSemanticToken`info.acheron.20`)
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`info.acheron.20`)
  })

  // styx-light

  test('should have a acheron styx-light property', () => {
    expect(gradientTokens.gradient['styx-light'].text.value.base).toEqual(
      formatSemanticToken`acheron.accent.90`,
    )
    expect(gradientTokens.gradient['styx-light'].text.value._darkMode).toEqual(
      formatSemanticToken`acheron.accent.90`,
    )
    expect(gradientTokens.gradient['styx-light'].text.value._lightMode).toEqual(
      formatSemanticToken`acheron.accent.90`,
    )
  })

  // styx-dark

  test('should have a acheron styx-dark property', () => {
    expect(gradientTokens.gradient['styx-dark'].text.value.base).toEqual(
      formatSemanticToken`acheron.accent.10`,
    )
    expect(gradientTokens.gradient['styx-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`acheron.accent.10`,
    )
    expect(gradientTokens.gradient['styx-dark'].text.value._lightMode).toEqual(
      formatSemanticToken`acheron.accent.10`,
    )
  })

  // thanatos-light

  test('should have a acheron thanatos-light property', () => {
    expect(gradientTokens.gradient['thanatos-light'].text.value.base).toEqual(
      formatSemanticToken`acheron.success.80`,
    )
    expect(
      gradientTokens.gradient['thanatos-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.80`)
    expect(
      gradientTokens.gradient['thanatos-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.80`)
  })

  // thanatos-dark

  test('should have a acheron thanatos-dark property', () => {
    expect(gradientTokens.gradient['thanatos-dark'].text.value.base).toEqual(
      formatSemanticToken`acheron.success.20`,
    )
    expect(
      gradientTokens.gradient['thanatos-dark'].text.value._darkMode,
    ).toEqual(formatSemanticToken`acheron.success.20`)
    expect(
      gradientTokens.gradient['thanatos-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`acheron.success.20`)
  })

  // hades-light

  test('should have a acheron hades-light property', () => {
    expect(gradientTokens.gradient['hades-light'].text.value.base).toEqual(
      formatSemanticToken`danger.acheron.80`,
    )
    expect(gradientTokens.gradient['hades-light'].text.value._darkMode).toEqual(
      formatSemanticToken`danger.acheron.80`,
    )
    expect(
      gradientTokens.gradient['hades-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`danger.acheron.80`)
  })

  // hades-dark

  test('should have a acheron hades-dark property', () => {
    expect(gradientTokens.gradient['hades-dark'].text.value.base).toEqual(
      formatSemanticToken`danger.acheron.10`,
    )
    expect(gradientTokens.gradient['hades-dark'].text.value._darkMode).toEqual(
      formatSemanticToken`danger.acheron.10`,
    )
    expect(gradientTokens.gradient['hades-dark'].text.value._lightMode).toEqual(
      formatSemanticToken`danger.acheron.10`,
    )
  })

  // asphodel-light

  test('should have a acheron asphodel-light property', () => {
    expect(gradientTokens.gradient['asphodel-light'].text.value.base).toEqual(
      formatSemanticToken`warning.acheron.90`,
    )
    expect(
      gradientTokens.gradient['asphodel-light'].text.value._darkMode,
    ).toEqual(formatSemanticToken`warning.acheron.90`)
    expect(
      gradientTokens.gradient['asphodel-light'].text.value._lightMode,
    ).toEqual(formatSemanticToken`warning.acheron.90`)
  })

  // asphodel-dark

  test('should have a acheron asphodel-dark property', () => {
    expect(gradientTokens.gradient['asphodel-dark'].text.value.base).toEqual(
      formatSemanticToken`warning.acheron.100`,
    )
    expect(
      gradientTokens.gradient['asphodel-dark'].text.value._darkMode,
    ).toEqual(formatSemanticToken`warning.acheron.100`)
    expect(
      gradientTokens.gradient['asphodel-dark'].text.value._lightMode,
    ).toEqual(formatSemanticToken`warning.acheron.100`)
  })
})
