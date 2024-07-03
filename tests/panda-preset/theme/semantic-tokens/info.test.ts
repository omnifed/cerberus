import { describe, test, expect } from 'bun:test'
import { infoTokens } from '@cerberus-design/panda-preset'

describe('infoTokens', () => {
  function formatToken(token: string) {
    return token.toUpperCase()
  }

  test('should have a info property', () => {
    expect(infoTokens.info).toBeDefined()
  })

  test('should have a border property', () => {
    expect(infoTokens.info.border).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(
      formatToken(infoTokens.info.border.initial.value._cerberusTheme.base),
    ).toEqual('#35A0DD')
    expect(
      formatToken(
        infoTokens.info.border.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#35A0DD')
    expect(
      formatToken(
        infoTokens.info.border.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#0288D5')
  })

  test('should have a bg property', () => {
    expect(infoTokens.info.bg).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(
      formatToken(infoTokens.info.bg.initial.value._cerberusTheme.base),
    ).toEqual('#026DAA')
    expect(
      formatToken(infoTokens.info.bg.initial.value._cerberusTheme._darkMode),
    ).toEqual('#026DAA')
    expect(
      formatToken(infoTokens.info.bg.initial.value._cerberusTheme._lightMode),
    ).toEqual('#9ACFEE')
  })

  test('should have a surface property', () => {
    expect(infoTokens.info.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(
      formatToken(infoTokens.info.surface.initial.value._cerberusTheme.base),
    ).toEqual('#026DAA')
    expect(
      formatToken(
        infoTokens.info.surface.initial.value._cerberusTheme._darkMode,
      ),
    ).toEqual('#026DAA')
    expect(
      formatToken(
        infoTokens.info.surface.initial.value._cerberusTheme._lightMode,
      ),
    ).toEqual('#CCE7F7')
  })

  test('should have a text property', () => {
    expect(infoTokens.info.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(
      formatToken(infoTokens.info.text.initial.value._cerberusTheme.base),
    ).toEqual('#E6F3FB')
    expect(
      formatToken(infoTokens.info.text.initial.value._cerberusTheme._darkMode),
    ).toEqual('#E6F3FB')
    expect(
      formatToken(infoTokens.info.text.initial.value._cerberusTheme._lightMode),
    ).toEqual('#015280')
  })

  test('should have a text.100 property', () => {
    expect(
      formatToken(infoTokens.info.text['100'].value._cerberusTheme.base),
    ).toEqual('#9ACFEE')
    expect(
      formatToken(infoTokens.info.text['100'].value._cerberusTheme._darkMode),
    ).toEqual('#9ACFEE')
    expect(
      formatToken(infoTokens.info.text['100'].value._cerberusTheme._lightMode),
    ).toEqual('#026DAA')
  })

  test('should have a text.200 property', () => {
    expect(
      formatToken(infoTokens.info.text['200'].value._cerberusTheme.base),
    ).toEqual('#35A0DD')
    expect(
      formatToken(infoTokens.info.text['200'].value._cerberusTheme._darkMode),
    ).toEqual('#35A0DD')
    expect(
      formatToken(infoTokens.info.text['200'].value._cerberusTheme._lightMode),
    ).toEqual('#35A0DD')
  })
})
