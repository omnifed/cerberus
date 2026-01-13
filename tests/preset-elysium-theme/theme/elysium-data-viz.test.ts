import { describe, test, expect } from 'bun:test'
import { dataVizTokens } from '@cerberus/preset-elysium-theme'

describe('Elysium > dataVizTokens', () => {
  function formatSemanticToken(value: TemplateStringsArray) {
    return `{colors.${value}}`
  }

  // diverging.50

  test('should have a elysium diverging.50 property', () => {
    expect(dataVizTokens.dataViz.diverging[50].value.base).toEqual(
      formatSemanticToken`info.elysium.80`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._darkMode).toEqual(
      formatSemanticToken`info.elysium.80`,
    )
    expect(dataVizTokens.dataViz.diverging[50].value._lightMode).toEqual(
      formatSemanticToken`info.elysium.80`,
    )
  })

  // diverging.100

  test('should have a elysium diverging.100 property', () => {
    expect(dataVizTokens.dataViz.diverging[100].value.base).toEqual(
      formatSemanticToken`info.elysium.70`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._darkMode).toEqual(
      formatSemanticToken`info.elysium.70`,
    )
    expect(dataVizTokens.dataViz.diverging[100].value._lightMode).toEqual(
      formatSemanticToken`info.elysium.70`,
    )
  })

  // diverging.200

  test('should have a elysium diverging.200 property', () => {
    expect(dataVizTokens.dataViz.diverging[200].value.base).toEqual(
      formatSemanticToken`info.elysium.60`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._darkMode).toEqual(
      formatSemanticToken`info.elysium.60`,
    )
    expect(dataVizTokens.dataViz.diverging[200].value._lightMode).toEqual(
      formatSemanticToken`info.elysium.60`,
    )
  })

  // diverging.300

  test('should have a elysium diverging.300 property', () => {
    expect(dataVizTokens.dataViz.diverging[300].value.base).toEqual(
      formatSemanticToken`info.elysium.50`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._darkMode).toEqual(
      formatSemanticToken`info.elysium.50`,
    )
    expect(dataVizTokens.dataViz.diverging[300].value._lightMode).toEqual(
      formatSemanticToken`info.elysium.50`,
    )
  })

  // diverging.400

  test('should have a elysium diverging.400 property', () => {
    expect(dataVizTokens.dataViz.diverging[400].value.base).toEqual(
      formatSemanticToken`info.elysium.40`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._darkMode).toEqual(
      formatSemanticToken`info.elysium.40`,
    )
    expect(dataVizTokens.dataViz.diverging[400].value._lightMode).toEqual(
      formatSemanticToken`info.elysium.30`,
    )
  })

  // diverging.500

  test('should have a elysium diverging.500 property', () => {
    expect(dataVizTokens.dataViz.diverging[500].value.base).toEqual(
      formatSemanticToken`elysium.neutral.10`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._darkMode).toEqual(
      formatSemanticToken`elysium.neutral.10`,
    )
    expect(dataVizTokens.dataViz.diverging[500].value._lightMode).toEqual(
      formatSemanticToken`elysium.neutral.10`,
    )
  })

  // diverging.600

  test('should have a elysium diverging.600 property', () => {
    expect(dataVizTokens.dataViz.diverging[600].value.base).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
    expect(dataVizTokens.dataViz.diverging[600].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
  })

  // diverging.700

  test('should have a elysium diverging.700 property', () => {
    expect(dataVizTokens.dataViz.diverging[700].value.base).toEqual(
      formatSemanticToken`elysium.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.50`,
    )
    expect(dataVizTokens.dataViz.diverging[700].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.50`,
    )
  })

  // diverging.800

  test('should have a elysium diverging.800 property', () => {
    expect(dataVizTokens.dataViz.diverging[800].value.base).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
    expect(dataVizTokens.dataViz.diverging[800].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.60`,
    )
  })

  // diverging.900

  test('should have a elysium diverging.900 property', () => {
    expect(dataVizTokens.dataViz.diverging[900].value.base).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
    expect(dataVizTokens.dataViz.diverging[900].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
  })

  // sequential.100

  test('should have a elysium sequential.100 property', () => {
    expect(dataVizTokens.dataViz.sequential[100].value.base).toEqual(
      formatSemanticToken`elysium.brand.90`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.90`,
    )
    expect(dataVizTokens.dataViz.sequential[100].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.30`,
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
      formatSemanticToken`elysium.brand.50`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.50`,
    )
    expect(dataVizTokens.dataViz.sequential[300].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.50`,
    )
  })

  // sequential.400

  test('should have a elysium sequential.400 property', () => {
    expect(dataVizTokens.dataViz.sequential[400].value.base).toEqual(
      formatSemanticToken`elysium.brand.30`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.30`,
    )
    expect(dataVizTokens.dataViz.sequential[400].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
  })

  // sequential.500

  test('should have a elysium sequential.500 property', () => {
    expect(dataVizTokens.dataViz.sequential[500].value.base).toEqual(
      formatSemanticToken`elysium.brand.20`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.20`,
    )
    expect(dataVizTokens.dataViz.sequential[500].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
  })

  // sequential.600

  test('should have a elysium sequential.600 property', () => {
    expect(dataVizTokens.dataViz.sequential[600].value.base).toEqual(
      formatSemanticToken`elysium.brand.5`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.5`,
    )
    expect(dataVizTokens.dataViz.sequential[600].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.100`,
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
      formatSemanticToken`elysium.brand.50`,
    )
  })

  // qualitative.200

  test('should have a elysium qualitative.200 property', () => {
    expect(dataVizTokens.dataViz.qualitative[200].value.base).toEqual(
      formatSemanticToken`warning.elysium.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._darkMode).toEqual(
      formatSemanticToken`warning.elysium.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[200].value._lightMode).toEqual(
      formatSemanticToken`warning.elysium.60`,
    )
  })

  // qualitative.300

  test('should have a elysium qualitative.300 property', () => {
    expect(dataVizTokens.dataViz.qualitative[300].value.base).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._darkMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[300].value._lightMode).toEqual(
      formatSemanticToken`elysium.success.60`,
    )
  })

  // qualitative.400

  test('should have a elysium qualitative.400 property', () => {
    expect(dataVizTokens.dataViz.qualitative[400].value.base).toEqual(
      formatSemanticToken`elysium.accent.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._darkMode).toEqual(
      formatSemanticToken`elysium.accent.60`,
    )
    expect(dataVizTokens.dataViz.qualitative[400].value._lightMode).toEqual(
      formatSemanticToken`elysium.accent.60`,
    )
  })

  // qualitative.500

  test('should have a elysium qualitative.500 property', () => {
    expect(dataVizTokens.dataViz.qualitative[500].value.base).toEqual(
      formatSemanticToken`info.elysium.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._darkMode).toEqual(
      formatSemanticToken`info.elysium.50`,
    )
    expect(dataVizTokens.dataViz.qualitative[500].value._lightMode).toEqual(
      formatSemanticToken`info.elysium.50`,
    )
  })

  // qualitative.600

  test('should have a elysium qualitative.600 property', () => {
    expect(dataVizTokens.dataViz.qualitative[600].value.base).toEqual(
      formatSemanticToken`elysium.brand.10`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.10`,
    )
    expect(dataVizTokens.dataViz.qualitative[600].value._lightMode).toEqual(
      formatSemanticToken`elysium.neutral.70`,
    )
  })

  // qualitative.700

  test('should have a elysium qualitative.700 property', () => {
    expect(dataVizTokens.dataViz.qualitative[700].value.base).toEqual(
      formatSemanticToken`elysium.neutral.40`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._darkMode).toEqual(
      formatSemanticToken`elysium.neutral.40`,
    )
    expect(dataVizTokens.dataViz.qualitative[700].value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.80`,
    )
  })

  // progress.start

  test('should have a elysium progress.start property', () => {
    expect(dataVizTokens.dataViz.progress.start.value.base).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
    expect(dataVizTokens.dataViz.progress.start.value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
    expect(dataVizTokens.dataViz.progress.start.value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.40`,
    )
  })

  // progress.end

  test('should have a elysium progress.end property', () => {
    expect(dataVizTokens.dataViz.progress.end.value.base).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
    expect(dataVizTokens.dataViz.progress.end.value._darkMode).toEqual(
      formatSemanticToken`elysium.brand.70`,
    )
    expect(dataVizTokens.dataViz.progress.end.value._lightMode).toEqual(
      formatSemanticToken`elysium.brand.70`,
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
