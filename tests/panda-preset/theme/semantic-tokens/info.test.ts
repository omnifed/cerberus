import { describe, test, expect } from 'bun:test'
import { infoTokens } from '@omni-federal/panda-preset'

describe('infoTokens', () => {
  test('should have a info property', () => {
    expect(infoTokens.info).toBeDefined()
  })

  test('should have a border property', () => {
    expect(infoTokens.info.border).toBeDefined()
  })

  test('should have a border.initial property', () => {
    expect(infoTokens.info.border.initial.value._cerberusTheme.base).toEqual(
      '#00A3FF',
    )
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#00A3FF')
    expect(
      infoTokens.info.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#00A3FF')
  })

  test('should have a surface property', () => {
    expect(infoTokens.info.surface).toBeDefined()
  })

  test('should have a surface.initial property', () => {
    expect(infoTokens.info.surface.initial.value._cerberusTheme.base).toEqual(
      '#003655',
    )
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#003655')
    expect(
      infoTokens.info.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#AAE0FF')
  })

  test('should have a text property', () => {
    expect(infoTokens.info.text).toBeDefined()
  })

  test('should have a text.initial property', () => {
    expect(infoTokens.info.text.initial.value._cerberusTheme.base).toEqual(
      '#D5F0FF',
    )
    expect(infoTokens.info.text.initial.value._cerberusTheme._darkMode).toEqual(
      '#D5F0FF',
    )
    expect(
      infoTokens.info.text.initial.value._cerberusTheme._lightMode,
    ).toEqual('#003655')
  })

  test('should have a text.100 property', () => {
    expect(infoTokens.info.text['100'].value._cerberusTheme.base).toEqual(
      '#80D1FF',
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._darkMode).toEqual(
      '#80D1FF',
    )
    expect(infoTokens.info.text['100'].value._cerberusTheme._lightMode).toEqual(
      '#005180',
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
