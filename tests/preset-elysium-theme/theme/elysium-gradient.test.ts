import { describe, test, expect } from 'bun:test'
import { gradientTokens } from '@cerberus-design/preset-elysium-theme'

describe('Elysium > gradientTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // charon-light

  test('should have a elysium charon-light property', () => {
    expect(
      gradientTokens.gradient['charon-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.brand.100`)
    expect(
      gradientTokens.gradient['charon-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.brand.100`)
    expect(
      gradientTokens.gradient['charon-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.brand.100`)
  })

  // charon-dark

  test('should have a elysium charon-dark property', () => {
    expect(
      gradientTokens.gradient['charon-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.brand.10`)
    expect(
      gradientTokens.gradient['charon-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.brand.10`)
    expect(
      gradientTokens.gradient['charon-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.brand.10`)
  })

  // nyx-light

  test('should have a elysium nyx-light property', () => {
    expect(
      gradientTokens.gradient['nyx-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.neutral.90`)
    expect(
      gradientTokens.gradient['nyx-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.neutral.90`)
    expect(
      gradientTokens.gradient['nyx-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.neutral.90`)
  })

  // nyx-dark

  test('should have a elysium nyx-dark property', () => {
    expect(gradientTokens.gradient['nyx-dark'].text.initial.value.base).toEqual(
      formatSemanticToken`elysium.neutral.20`,
    )
    expect(
      gradientTokens.gradient['nyx-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.neutral.20`)
    expect(
      gradientTokens.gradient['nyx-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.neutral.20`)
  })

  // amphiaraus-light

  test('should have a elysium amphiaraus-light property', () => {
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.info.90`)
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.info.90`)
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.info.90`)
  })

  // amphiaraus-dark

  test('should have a elysium amphiaraus-dark property', () => {
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.info.10`)
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.info.10`)
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.info.10`)
  })

  // styx-light

  test('should have a elysium styx-light property', () => {
    expect(
      gradientTokens.gradient['styx-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.accent.100`)
    expect(
      gradientTokens.gradient['styx-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.accent.100`)
    expect(
      gradientTokens.gradient['styx-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.accent.100`)
  })

  // styx-dark

  test('should have a elysium styx-dark property', () => {
    expect(
      gradientTokens.gradient['styx-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.accent.10`)
    expect(
      gradientTokens.gradient['styx-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.accent.10`)
    expect(
      gradientTokens.gradient['styx-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.accent.10`)
  })

  // thanatos-light

  test('should have a elysium thanatos-light property', () => {
    expect(
      gradientTokens.gradient['thanatos-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.success.100`)
    expect(
      gradientTokens.gradient['thanatos-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.success.100`)
    expect(
      gradientTokens.gradient['thanatos-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.success.100`)
  })

  // thanatos-dark

  test('should have a elysium thanatos-dark property', () => {
    expect(
      gradientTokens.gradient['thanatos-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.success.10`)
    expect(
      gradientTokens.gradient['thanatos-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.success.10`)
    expect(
      gradientTokens.gradient['thanatos-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.success.10`)
  })

  // hades-light

  test('should have a elysium hades-light property', () => {
    expect(
      gradientTokens.gradient['hades-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.danger.80`)
    expect(
      gradientTokens.gradient['hades-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.danger.80`)
    expect(
      gradientTokens.gradient['hades-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.danger.80`)
  })

  // hades-dark

  test('should have a elysium hades-dark property', () => {
    expect(
      gradientTokens.gradient['hades-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.danger.10`)
    expect(
      gradientTokens.gradient['hades-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.danger.10`)
    expect(
      gradientTokens.gradient['hades-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.danger.10`)
  })

  // asphodel-light

  test('should have a elysium asphodel-light property', () => {
    expect(
      gradientTokens.gradient['asphodel-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.warning.100`)
    expect(
      gradientTokens.gradient['asphodel-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.warning.100`)
    expect(
      gradientTokens.gradient['asphodel-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.warning.90`)
  })

  // asphodel-dark

  test('should have a elysium asphodel-dark property', () => {
    expect(
      gradientTokens.gradient['asphodel-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`elysium.warning.100`)
    expect(
      gradientTokens.gradient['asphodel-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`elysium.warning.100`)
    expect(
      gradientTokens.gradient['asphodel-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`elysium.warning.100`)
  })
})
