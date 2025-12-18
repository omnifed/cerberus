import { describe, test, expect } from 'bun:test'
import { dataVizTokens } from '@cerberus-design/preset-elysium-theme'

describe('Elysium > dataVizTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // diverging.50

  test('should have a elysium diverging.50 property', () => {
    expect(dataVizTokens.dataViz.diverging[50].value.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
  })

  // diverging.100

  test('should have a elysium diverging.100 property', () => {
    expect(dataVizTokens.dataViz.diverging[100].value.base).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.50`,
    )
  })

  // diverging.200

  test('should have a elysium diverging.200 property', () => {
    expect(dataVizTokens.dataViz.diverging[200].value.base).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
  })

  // diverging.300

  test('should have a elysium diverging.300 property', () => {
    expect(dataVizTokens.dataViz.diverging[300].value.base).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.30`,
    )
  })

  // diverging.400

  test('should have a elysium diverging.400 property', () => {
    expect(dataVizTokens.dataViz.diverging[400].value.base).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.20`,
    )
  })

  // diverging.500

  test('should have a elysium diverging.500 property', () => {
    expect(dataVizTokens.dataViz.diverging[500].value.base).toEqual(
      formatSemanticToken`cerberus.neutral.5`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._darkMode).toEqual(
      formatSemanticToken`cerberus.neutral.5`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._lightMode).toEqual(
      formatSemanticToken`elysium.neutral.5`,
    )
  })

  // diverging.600

  test('should have a elysium diverging.600 property', () => {
    expect(dataVizTokens.dataViz.diverging[600].value.base).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.30`,
    )
  })

  // diverging.700

  test('should have a elysium diverging.700 property', () => {
    expect(dataVizTokens.dataViz.diverging[700].value.base).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.40`,
    )
  })

  // diverging.800

  test('should have a elysium diverging.800 property', () => {
    expect(dataVizTokens.dataViz.diverging[800].value.base).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
  })

  // diverging.900

  test('should have a elysium diverging.900 property', () => {
    expect(dataVizTokens.dataViz.diverging[900].value.base).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.70`,
    )
  })

  // sequential.100

  test('should have a elysium sequential.100 property', () => {
    expect(dataVizTokens.dataViz.sequential[100].value.base).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.20`,
    )
  })

  // sequential.200

  test('should have a elysium sequential.200 property', () => {
    expect(dataVizTokens.dataViz.sequential[200].value.base).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
    expect(dataVizTokens.dataViz.sequential[200].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
    expect(dataVizTokens.dataViz.sequential[200].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
  })

  // sequential.300

  test('should have a elysium sequential.300 property', () => {
    expect(dataVizTokens.dataViz.sequential[300].value.base).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.50`,
    )
  })

  // sequential.400

  test('should have a elysium sequential.400 property', () => {
    expect(dataVizTokens.dataViz.sequential[400].value.base).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
  })

  // sequential.500

  test('should have a elysium sequential.500 property', () => {
    expect(dataVizTokens.dataViz.sequential[500].value.base).toEqual(
      formatSemanticToken`elysium.brand.30`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.30`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
  })

  // sequential.600

  test('should have a elysium sequential.600 property', () => {
    expect(dataVizTokens.dataViz.sequential[600].value.base).toEqual(
      formatSemanticToken`elysium.brand.10`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.10`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.90`,
    )
  })

  // qualitative.100

  test('should have a elysium qualitative.100 property', () => {
    expect(dataVizTokens.dataViz.qualitative[100].value.base).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[100].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[100].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
  })

  // qualitative.200

  test('should have a elysium qualitative.200 property', () => {
    expect(dataVizTokens.dataViz.qualitative[200].value.base).toEqual(
      formatSemanticToken`elysium.accent.70`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._darkMode).toEqual(
      formatSemanticToken`elysium.accent.70`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._lightMode).toEqual(
      formatSemanticToken`elysium.accent.70`,
    )
  })

  // qualitative.300

  test('should have a elysium qualitative.300 property', () => {
    expect(dataVizTokens.dataViz.qualitative[300].value.base).toEqual(
      formatSemanticToken`elysium.warning.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._darkMode).toEqual(
      formatSemanticToken`elysium.warning.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._lightMode).toEqual(
      formatSemanticToken`elysium.warning.60`,
    )
  })

  // qualitative.400

  test('should have a elysium qualitative.400 property', () => {
    expect(dataVizTokens.dataViz.qualitative[400].value.base).toEqual(
      formatSemanticToken`elysium.success.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._darkMode).toEqual(
      formatSemanticToken`elysium.success.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._lightMode).toEqual(
      formatSemanticToken`elysium.success.50`,
    )
  })

  // qualitative.500

  test('should have a elysium qualitative.500 property', () => {
    expect(dataVizTokens.dataViz.qualitative[500].value.base).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._darkMode).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._lightMode).toEqual(
      formatSemanticToken`elysium.info.60`,
    )
  })

  // qualitative.600

  test('should have a elysium qualitative.600 property', () => {
    expect(dataVizTokens.dataViz.qualitative[600].value.base).toEqual(
      formatSemanticToken`elysium.danger.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._darkMode).toEqual(
      formatSemanticToken`elysium.danger.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._lightMode).toEqual(
      formatSemanticToken`elysium.danger.50`,
    )
  })

  // qualitative.700

  test('should have a elysium qualitative.700 property', () => {
    expect(dataVizTokens.dataViz.qualitative[700].value.base).toEqual(
      formatSemanticToken`elysium.neutral.30`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._darkMode).toEqual(
      formatSemanticToken`elysium.neutral.30`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._lightMode).toEqual(
      formatSemanticToken`elysium.neutral.30`,
    )
  })

  // progress.start

  test('should have a elysium progress.start property', () => {
    expect(dataVizTokens.dataViz.progress.start.value.base).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.progress.start.value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.progress.start.value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
  })

  // progress.end

  test('should have a elysium progress.end property', () => {
    expect(dataVizTokens.dataViz.progress.end.value.base).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
    expect(dataVizTokens.dataViz.progress.end.value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
    expect(dataVizTokens.dataViz.progress.end.value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
  })

  // progress.complete

  test('should have a elysium progress.complete property', () => {
    expect(dataVizTokens.dataViz.progress.complete.value.base).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(dataVizTokens.dataViz.progress.complete.value._darkMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(dataVizTokens.dataViz.progress.complete.value._lightMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
  })
})
