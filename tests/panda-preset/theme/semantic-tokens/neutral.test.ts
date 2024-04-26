import { describe, test, expect } from 'bun:test'
import { neutralTokens } from '@omni-federal/panda-preset'

describe('neutral', () => {
  test('should have a neutral property', () => {
    expect(neutralTokens.neutral).toBeDefined()
  })

  test('should have a bg.initial property', () => {
    expect(neutralTokens.neutral.bg.initial.value._cerberusTheme.base).toEqual(
      '#393B6B',
    )
    expect(
      neutralTokens.neutral.bg.initial.value._cerberusTheme._darkMode,
    ).toEqual('#393B6B')
    expect(
      neutralTokens.neutral.bg.initial.value._cerberusTheme._lightMode,
    ).toEqual('#D9E4F2')
  })

  test('should have a bg.active property', () => {
    expect(neutralTokens.neutral.bg.active.value._cerberusTheme.base).toEqual(
      '#2D2D55',
    )
    expect(
      neutralTokens.neutral.bg.active.value._cerberusTheme._darkMode,
    ).toEqual('#2D2D55')
    expect(
      neutralTokens.neutral.bg.active.value._cerberusTheme._lightMode,
    ).toEqual('#D1DFEF')
  })

  test('should have a bg.hover property', () => {
    expect(neutralTokens.neutral.bg.hover.value._cerberusTheme.base).toEqual(
      '#404376',
    )
    expect(
      neutralTokens.neutral.bg.hover.value._cerberusTheme._darkMode,
    ).toEqual('#404376')
    expect(
      neutralTokens.neutral.bg.hover.value._cerberusTheme._lightMode,
    ).toEqual('#DAE3EE')
  })

  test('should have a border.initial property', () => {
    expect(
      neutralTokens.neutral.border.initial.value._cerberusTheme.base,
    ).toEqual('#404376')
    expect(
      neutralTokens.neutral.border.initial.value._cerberusTheme._darkMode,
    ).toEqual('#404376')
    expect(
      neutralTokens.neutral.border.initial.value._cerberusTheme._lightMode,
    ).toEqual('#C2D1E2')
  })

  test('should have a border.100 property', () => {
    expect(neutralTokens.neutral.border[100].value._cerberusTheme.base).toEqual(
      '#2D2D55',
    )
    expect(
      neutralTokens.neutral.border[100].value._cerberusTheme._darkMode,
    ).toEqual('#2D2D55')
    expect(
      neutralTokens.neutral.border[100].value._cerberusTheme._lightMode,
    ).toEqual('#DAE3EE')
  })

  test('should have a border.200 property', () => {
    expect(neutralTokens.neutral.border[200].value._cerberusTheme.base).toEqual(
      '#585FA2',
    )
    expect(
      neutralTokens.neutral.border[200].value._cerberusTheme._darkMode,
    ).toEqual('#585FA2')
    expect(
      neutralTokens.neutral.border[200].value._cerberusTheme._lightMode,
    ).toEqual('#89A4C7')
  })

  test('should have a surface.initial property', () => {
    expect(
      neutralTokens.neutral.surface.initial.value._cerberusTheme.base,
    ).toEqual('#101025')
    expect(
      neutralTokens.neutral.surface.initial.value._cerberusTheme._darkMode,
    ).toEqual('#101025')
    expect(
      neutralTokens.neutral.surface.initial.value._cerberusTheme._lightMode,
    ).toEqual('#F3F3FF')
  })

  test('should have a surface.100 property', () => {
    expect(
      neutralTokens.neutral.surface[100].value._cerberusTheme.base,
    ).toEqual('#1B1834')
    expect(
      neutralTokens.neutral.surface[100].value._cerberusTheme._darkMode,
    ).toEqual('#1B1834')
    expect(
      neutralTokens.neutral.surface[100].value._cerberusTheme._lightMode,
    ).toEqual('#f4f7fa')
  })

  test('should have a surface.200 property', () => {
    expect(
      neutralTokens.neutral.surface[200].value._cerberusTheme.base,
    ).toEqual('#2E2E52')
    expect(
      neutralTokens.neutral.surface[200].value._cerberusTheme._darkMode,
    ).toEqual('#2E2E52')
    expect(
      neutralTokens.neutral.surface[200].value._cerberusTheme._lightMode,
    ).toEqual('#F3F3FF')
  })

  test('should have a surface.300 property', () => {
    expect(
      neutralTokens.neutral.surface[300].value._cerberusTheme.base,
    ).toEqual('#4E4E88')
    expect(
      neutralTokens.neutral.surface[300].value._cerberusTheme._darkMode,
    ).toEqual('#4E4E88')
    expect(
      neutralTokens.neutral.surface[300].value._cerberusTheme._lightMode,
    ).toEqual('#EFEFFF')
  })

  test('should have a surface.inverse property', () => {
    expect(
      neutralTokens.neutral.surface.inverse.value._cerberusTheme.base,
    ).toEqual('#F3F3FF')
    expect(
      neutralTokens.neutral.surface.inverse.value._cerberusTheme._darkMode,
    ).toEqual('#F3F3FF')
    expect(
      neutralTokens.neutral.surface.inverse.value._cerberusTheme._lightMode,
    ).toEqual('#101025')
  })
})
