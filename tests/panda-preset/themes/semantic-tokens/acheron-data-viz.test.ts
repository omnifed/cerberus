import { describe, test, expect } from 'bun:test'
import { acheronTheme } from '@cerberus-design/panda-preset'

describe('dataVizTokens', () => {
  const dataVizTokens = acheronTheme.dataVizTokens

  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // diverging.50

  test('should have a acheron diverging.50 property', () => {
    expect(dataVizTokens.dataViz.diverging[50].value.base).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.60`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.60`,
    )
  })

  // diverging.100

  test('should have a acheron diverging.100 property', () => {
    expect(dataVizTokens.dataViz.diverging[100].value.base).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.50`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.50`,
    )
  })

  // diverging.200

  test('should have a acheron diverging.200 property', () => {
    expect(dataVizTokens.dataViz.diverging[200].value.base).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.40`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.40`,
    )
  })

  // diverging.300

  test('should have a acheron diverging.300 property', () => {
    expect(dataVizTokens.dataViz.diverging[300].value.base).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.30`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.30`,
    )
  })

  // diverging.400

  test('should have a acheron diverging.400 property', () => {
    expect(dataVizTokens.dataViz.diverging[400].value.base).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._darkMode).toEqual(
      formatSemanticToken`cerberus.warning.20`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.20`,
    )
  })

  // diverging.500

  test('should have a acheron diverging.500 property', () => {
    expect(dataVizTokens.dataViz.diverging[500].value.base).toEqual(
      formatSemanticToken`cerberus.neutral.5`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._darkMode).toEqual(
      formatSemanticToken`cerberus.neutral.5`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.5`,
    )
  })

  // diverging.600

  test('should have a acheron diverging.600 property', () => {
    expect(dataVizTokens.dataViz.diverging[600].value.base).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.30`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.30`,
    )
  })

  // diverging.700

  test('should have a acheron diverging.700 property', () => {
    expect(dataVizTokens.dataViz.diverging[700].value.base).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.40`,
    )
  })

  // diverging.800

  test('should have a acheron diverging.800 property', () => {
    expect(dataVizTokens.dataViz.diverging[800].value.base).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
  })

  // diverging.900

  test('should have a acheron diverging.900 property', () => {
    expect(dataVizTokens.dataViz.diverging[900].value.base).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._darkMode).toEqual(
      formatSemanticToken`cerberus.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.70`,
    )
  })

  // sequential.100

  test('should have a acheron sequential.100 property', () => {
    expect(dataVizTokens.dataViz.sequential[100].value.base).toEqual(
      formatSemanticToken`acheron.brand.80`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.80`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.20`,
    )
  })

  // sequential.200

  test('should have a acheron sequential.200 property', () => {
    expect(dataVizTokens.dataViz.sequential[200].value.base).toEqual(
      formatSemanticToken`acheron.brand.70`,
    )
    expect(dataVizTokens.dataViz.sequential[200].value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.70`,
    )
    expect(dataVizTokens.dataViz.sequential[200].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.40`,
    )
  })

  // sequential.300

  test('should have a acheron sequential.300 property', () => {
    expect(dataVizTokens.dataViz.sequential[300].value.base).toEqual(
      formatSemanticToken`acheron.brand.60`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.60`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.50`,
    )
  })

  // sequential.400

  test('should have a acheron sequential.400 property', () => {
    expect(dataVizTokens.dataViz.sequential[400].value.base).toEqual(
      formatSemanticToken`acheron.brand.40`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.40`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.70`,
    )
  })

  // sequential.500

  test('should have a acheron sequential.500 property', () => {
    expect(dataVizTokens.dataViz.sequential[500].value.base).toEqual(
      formatSemanticToken`acheron.brand.30`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.30`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.80`,
    )
  })

  // sequential.600

  test('should have a acheron sequential.600 property', () => {
    expect(dataVizTokens.dataViz.sequential[600].value.base).toEqual(
      formatSemanticToken`acheron.brand.10`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.10`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.90`,
    )
  })

  // qualitative.100

  test('should have a acheron qualitative.100 property', () => {
    expect(dataVizTokens.dataViz.qualitative[100].value.base).toEqual(
      formatSemanticToken`acheron.brand.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[100].value._darkMode).toEqual(
      formatSemanticToken`acheron.brand.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[100].value._lightMode).toEqual(
      formatSemanticToken`acheron.brand.60`,
    )
  })

  // qualitative.200

  test('should have a acheron qualitative.200 property', () => {
    expect(dataVizTokens.dataViz.qualitative[200].value.base).toEqual(
      formatSemanticToken`acheron.accent.70`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._darkMode).toEqual(
      formatSemanticToken`acheron.accent.70`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._lightMode).toEqual(
      formatSemanticToken`acheron.accent.70`,
    )
  })

  // qualitative.300

  test('should have a acheron qualitative.300 property', () => {
    expect(dataVizTokens.dataViz.qualitative[300].value.base).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._darkMode).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._lightMode).toEqual(
      formatSemanticToken`acheron.warning.60`,
    )
  })

  // qualitative.400

  test('should have a acheron qualitative.400 property', () => {
    expect(dataVizTokens.dataViz.qualitative[400].value.base).toEqual(
      formatSemanticToken`acheron.success.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._darkMode).toEqual(
      formatSemanticToken`acheron.success.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._lightMode).toEqual(
      formatSemanticToken`acheron.success.50`,
    )
  })

  // qualitative.500

  test('should have a acheron qualitative.500 property', () => {
    expect(dataVizTokens.dataViz.qualitative[500].value.base).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._darkMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._lightMode).toEqual(
      formatSemanticToken`acheron.info.60`,
    )
  })

  // qualitative.600

  test('should have a acheron qualitative.600 property', () => {
    expect(dataVizTokens.dataViz.qualitative[600].value.base).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._darkMode).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._lightMode).toEqual(
      formatSemanticToken`acheron.danger.50`,
    )
  })

  // qualitative.700

  test('should have a acheron qualitative.700 property', () => {
    expect(dataVizTokens.dataViz.qualitative[700].value.base).toEqual(
      formatSemanticToken`acheron.neutral.30`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._darkMode).toEqual(
      formatSemanticToken`acheron.neutral.30`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._lightMode).toEqual(
      formatSemanticToken`acheron.neutral.30`,
    )
  })
})
