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
  presetElysiumTheme,
} from '@cerberus/preset-elysium-theme'
import { describe, expect, test } from 'bun:test'

describe('Elysium Theme', () => {
  test('should return a valid preset config', () => {
    expect(presetElysiumTheme).toBeDefined()
    expect(presetElysiumTheme.name).toBe('@cerberus/preset-elysium-theme')
  })

  test('should provide a theme name helper', () => {
    expect(getThemeName()).toBe('elysium')
  })

  test('should provide a new condition', () => {
    expect(conditions.elysiumTheme).toEqual('[data-panda-theme=elysium] &')
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
