/* eslint-disable sonarjs/no-duplicate-string */

import { describe, test, expect } from 'bun:test'
import { gradientTokens } from '@cerberus-design/panda-preset'

describe('gradientTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // charon-light

  test('should have a cerberus charon-light property', () => {
    expect(
      gradientTokens.gradient['charon-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.brand.70`)
    expect(
      gradientTokens.gradient['charon-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.brand.70`)
    expect(
      gradientTokens.gradient['charon-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.brand.70`)
  })

  // charon-dark

  test('should have a cerberus charon-dark property', () => {
    expect(
      gradientTokens.gradient['charon-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.brand.10`)
    expect(
      gradientTokens.gradient['charon-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.brand.10`)
    expect(
      gradientTokens.gradient['charon-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.brand.10`)
  })

  // nyx-light

  test('should have a cerberus nyx-light property', () => {
    expect(
      gradientTokens.gradient['nyx-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.neutral.100`)
    expect(
      gradientTokens.gradient['nyx-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.100`)
    expect(
      gradientTokens.gradient['nyx-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.100`)
  })

  // nyx-dark

  test('should have a cerberus nyx-dark property', () => {
    expect(gradientTokens.gradient['nyx-dark'].text.initial.value.base).toEqual(
      formatSemanticToken`cerberus.neutral.20`,
    )
    expect(
      gradientTokens.gradient['nyx-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.20`)
    expect(
      gradientTokens.gradient['nyx-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.20`)
  })

  // amphiaraus-light

  test('should have a cerberus amphiaraus-light property', () => {
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.info.80`)
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.info.80`)
    expect(
      gradientTokens.gradient['amphiaraus-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.80`)
  })

  // amphiaraus-dark

  test('should have a cerberus amphiaraus-dark property', () => {
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.info.20`)
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.info.20`)
    expect(
      gradientTokens.gradient['amphiaraus-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.info.20`)
  })

  // styx-light

  test('should have a cerberus styx-light property', () => {
    expect(
      gradientTokens.gradient['styx-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.teal.90`)
    expect(
      gradientTokens.gradient['styx-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.teal.90`)
    expect(
      gradientTokens.gradient['styx-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.teal.90`)
  })

  // styx-dark

  test('should have a cerberus styx-dark property', () => {
    expect(
      gradientTokens.gradient['styx-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.teal.100`)
    expect(
      gradientTokens.gradient['styx-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.teal.100`)
    expect(
      gradientTokens.gradient['styx-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.neutral.100`)
  })

  // thanatos-light

  test('should have a cerberus thanatos-light property', () => {
    expect(
      gradientTokens.gradient['thanatos-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
    expect(
      gradientTokens.gradient['thanatos-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
    expect(
      gradientTokens.gradient['thanatos-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.90`)
  })

  // thanatos-dark

  test('should have a cerberus thanatos-dark property', () => {
    expect(
      gradientTokens.gradient['thanatos-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.success.20`)
    expect(
      gradientTokens.gradient['thanatos-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.success.20`)
    expect(
      gradientTokens.gradient['thanatos-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.success.20`)
  })

  // hades-light

  test('should have a cerberus hades-light property', () => {
    expect(
      gradientTokens.gradient['hades-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
    expect(
      gradientTokens.gradient['hades-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
    expect(
      gradientTokens.gradient['hades-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.80`)
  })

  // hades-dark

  test('should have a cerberus hades-dark property', () => {
    expect(
      gradientTokens.gradient['hades-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.danger.10`)
    expect(
      gradientTokens.gradient['hades-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.danger.10`)
    expect(
      gradientTokens.gradient['hades-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.danger.10`)
  })

  // asphodel-light

  test('should have a cerberus asphodel-light property', () => {
    expect(
      gradientTokens.gradient['asphodel-light'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.warning.90`)
    expect(
      gradientTokens.gradient['asphodel-light'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.90`)
    expect(
      gradientTokens.gradient['asphodel-light'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.90`)
  })

  // asphodel-dark

  test('should have a cerberus asphodel-dark property', () => {
    expect(
      gradientTokens.gradient['asphodel-dark'].text.initial.value.base,
    ).toEqual(formatSemanticToken`cerberus.warning.100`)
    expect(
      gradientTokens.gradient['asphodel-dark'].text.initial.value._darkMode,
    ).toEqual(formatSemanticToken`cerberus.warning.100`)
    expect(
      gradientTokens.gradient['asphodel-dark'].text.initial.value._lightMode,
    ).toEqual(formatSemanticToken`cerberus.warning.100`)
  })
})
