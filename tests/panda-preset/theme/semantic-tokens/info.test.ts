import { describe, test, expect } from 'bun:test'
import { infoTokens } from '@cerberus-design/panda-preset'

describe('infoTokens', () => {
  test('should have a info property', () => {
    expect(infoTokens.info).toBeDefined()
  })

  test('should have a border property', () => {
    expect(infoTokens.info.border).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(infoTokens.info.border.initial.value._cerberusTheme.base).toEqual(
      '#35A0DD',
    )
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#35A0DD')
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#0288D5')
  })

  test('should have a surface property', () => {
    expect(infoTokens.info.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(infoTokens.info.surface.initial.value._cerberusTheme.base).toEqual(
      '#026DAA',
    )
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#026DAA')
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#CCE7F7')
  })

  test('should have a text property', () => {
    expect(infoTokens.info.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(infoTokens.info.text.initial.value._cerberusTheme.base).toEqual(
      '#E6F3FB',
    )
    expect(infoTokens.info.text.initial.value._cerberusTheme._darkMode).toEqual(
      '#E6F3FB',
    )
    expect(
      infoTokens.info.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#015280')
  })

  test('should have a text.100 property', () => {
    expect(infoTokens.info.text['100'].value._cerberusTheme.base).toEqual(
      '#9ACFEE',
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._darkMode).toEqual(
      '#9ACFEE',
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._lightMode).toEqual(
      '#026DAA',
    )
  })

  test('should have a text.200 property', () => {
    expect(infoTokens.info.text['200'].value._cerberusTheme.base).toEqual(
      '#2BB2FF',
    )
    expect(infoTokens.info.text['200'].value._cerberusTheme._darkMode).toEqual(
      '#2BB2FF',
    )
    expect(infoTokens.info.text['200'].value._cerberusTheme._lightMode).toEqual(
      '#0088D5',
    )
  })
})
