import {
  conditions,
  getThemeName,
  pageTokens,
  actionTokens,
  secondaryActionTokens,
  infoTokens,
  successTokens,
  warningTokens,
  dangerTokens,
  gradientTokens,
  dataVizTokens,
  presetAcheronTheme,
} from '@cerberus/preset-acheron-theme'
import { describe, expect, test } from 'bun:test'

describe('Acheron Theme', () => {
  test('should return a valid preset config', () => {
    expect(presetAcheronTheme).toBeDefined()
    expect(presetAcheronTheme.name).toBe('@cerberus/preset-acheron-theme')
  })

  test('should provide a theme name helper', () => {
    expect(getThemeName()).toBe('acheron')
  })

  test('should provide a new condition', () => {
    expect(conditions.acheronTheme).toEqual('[data-panda-theme=acheron] &')
  })

  test('pageTokens should match the established baseline', () => {
    expect(pageTokens).toMatchSnapshot()
  })

  test('actionTokens should match the established baseline', () => {
    expect(actionTokens).toMatchSnapshot()
  })

  test('secondaryActionTokens should match the established baseline', () => {
    expect(secondaryActionTokens).toMatchSnapshot()
  })

  test('infoTokens should match the established baseline', () => {
    expect(infoTokens).toMatchSnapshot()
  })

  test('successTokens should match the established baseline', () => {
    expect(successTokens).toMatchSnapshot()
  })

  test('warningTokens should match the established baseline', () => {
    expect(warningTokens).toMatchSnapshot()
  })

  test('dangerTokens should match the established baseline', () => {
    expect(dangerTokens).toMatchSnapshot()
  })

  test('gradientTokens should match the established baseline', () => {
    expect(gradientTokens).toMatchSnapshot()
  })

  test('dataVizTokens should match the established baseline', () => {
    expect(dataVizTokens).toMatchSnapshot()
  })
})
