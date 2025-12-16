import { describe, test, expect } from 'bun:test'
import { dataVizTokens } from '@cerberus-design/panda-preset'

describe('dataVizTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // diverging.50

  test('should have a cerberus diverging.50 property', () => {
    expect(dataVizTokens.dataViz.diverging[50].value.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
  })

  // diverging.100

  test('should have a cerberus diverging.100 property', () => {
    expect(dataVizTokens.dataViz.diverging[100].value.base).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
  })

  // diverging.200

  test('should have a cerberus diverging.200 property', () => {
    expect(dataVizTokens.dataViz.diverging[200].value.base).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
  })

  // diverging.300

  test('should have a cerberus diverging.300 property', () => {
    expect(dataVizTokens.dataViz.diverging[300].value.base).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
  })

  // diverging.400

  test('should have a cerberus diverging.400 property', () => {
    expect(dataVizTokens.dataViz.diverging[400].value.base).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
  })

  // diverging.500

  test('should have a cerberus diverging.500 property', () => {
    expect(dataVizTokens.dataViz.diverging[500].value.base).toEqual(
      formatSemanticToken`cerberus.neutral.10`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._darkMode).toEqual(
      formatSemanticToken`cerberus.neutral.10`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._lightMode).toEqual(
      formatSemanticToken`cerberus.neutral.10`,
    )
  })

  // diverging.600

  test('should have a cerberus diverging.600 property', () => {
    expect(dataVizTokens.dataViz.diverging[600].value.base).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
  })

  // diverging.700

  test('should have a cerberus diverging.700 property', () => {
    expect(dataVizTokens.dataViz.diverging[700].value.base).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
  })

  // diverging.800

  test('should have a cerberus diverging.800 property', () => {
    expect(dataVizTokens.dataViz.diverging[800].value.base).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
  })

  // diverging.900

  test('should have a cerberus diverging.900 property', () => {
    expect(dataVizTokens.dataViz.diverging[900].value.base).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
  })

  // sequential.100

  test('should have a cerberus sequential.100 property', () => {
    expect(dataVizTokens.dataViz.sequential[100].value.base).toEqual(
      formatSemanticToken`cerberus.brand.80`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.80`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.10`,
    )
  })

  // sequential.200

  test('should have a cerberus sequential.200 property', () => {
    expect(dataVizTokens.dataViz.sequential[200].value.base).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.sequential[200].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.sequential[200].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
  })

  // sequential.300

  test('should have a cerberus sequential.300 property', () => {
    expect(dataVizTokens.dataViz.sequential[300].value.base).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
  })

  // sequential.400

  test('should have a cerberus sequential.400 property', () => {
    expect(dataVizTokens.dataViz.sequential[400].value.base).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.70`,
    )
  })

  // sequential.500

  test('should have a cerberus sequential.500 property', () => {
    expect(dataVizTokens.dataViz.sequential[500].value.base).toEqual(
      formatSemanticToken`cerberus.brand.20`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.20`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.80`,
    )
  })

  // sequential.600

  test('should have a cerberus sequential.600 property', () => {
    expect(dataVizTokens.dataViz.sequential[600].value.base).toEqual(
      formatSemanticToken`cerberus.brand.10`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.10`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.90`,
    )
  })

  // qualitative.100

  test('should have a cerberus qualitative.100 property', () => {
    expect(dataVizTokens.dataViz.qualitative[100].value.base).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[100].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[100].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
  })

  // qualitative.200

  test('should have a cerberus qualitative.200 property', () => {
    expect(dataVizTokens.dataViz.qualitative[200].value.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._lightMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
  })

  // qualitative.300

  test('should have a cerberus qualitative.300 property', () => {
    expect(dataVizTokens.dataViz.qualitative[300].value.base).toEqual(
      formatSemanticToken`cerberus.success.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._darkMode).toEqual(
      formatSemanticToken`cerberus.success.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._lightMode).toEqual(
      formatSemanticToken`cerberus.success.60`,
    )
  })

  // qualitative.400

  test('should have a cerberus qualitative.400 property', () => {
    expect(dataVizTokens.dataViz.qualitative[400].value.base).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._darkMode).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._lightMode).toEqual(
      formatSemanticToken`cerberus.info.50`,
    )
  })

  // qualitative.500

  test('should have a cerberus qualitative.500 property', () => {
    expect(dataVizTokens.dataViz.qualitative[500].value.base).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
  })

  // qualitative.600

  test('should have a cerberus qualitative.600 property', () => {
    expect(dataVizTokens.dataViz.qualitative[600].value.base).toEqual(
      formatSemanticToken`cerberus.teal.70`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._darkMode).toEqual(
      formatSemanticToken`cerberus.teal.70`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._lightMode).toEqual(
      formatSemanticToken`cerberus.teal.70`,
    )
  })

  // qualitative.700

  test('should have a cerberus qualitative.700 property', () => {
    expect(dataVizTokens.dataViz.qualitative[700].value.base).toEqual(
      formatSemanticToken`cerberus.neutral.40`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._darkMode).toEqual(
      formatSemanticToken`cerberus.neutral.40`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._lightMode).toEqual(
      formatSemanticToken`cerberus.neutral.40`,
    )
  })

  // progress.start

  test('should have a cerberus progress.start property', () => {
    expect(dataVizTokens.dataViz.progress.start.value.base).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.progress.start.value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.progress.start.value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
  })

  // progress.end

  test('should have a cerberus progress.end property', () => {
    expect(dataVizTokens.dataViz.progress.end.value.base).toEqual(
      formatSemanticToken`cerberus.brand.70`,
    )
    expect(dataVizTokens.dataViz.progress.end.value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.70`,
    )
    expect(dataVizTokens.dataViz.progress.end.value._lightMode).toEqual(
      formatSemanticToken`cerberus.brand.70`,
    )
  })

  // progress.complete

  test('should have a cerberus progress.complete property', () => {
    expect(dataVizTokens.dataViz.progress.complete.value.base).toEqual(
      formatSemanticToken`cerberus.success.60`,
    )
    expect(dataVizTokens.dataViz.progress.complete.value._darkMode).toEqual(
      formatSemanticToken`cerberus.success.60`,
    )
    expect(dataVizTokens.dataViz.progress.complete.value._lightMode).toEqual(
      formatSemanticToken`cerberus.success.60`,
    )
  })
})
