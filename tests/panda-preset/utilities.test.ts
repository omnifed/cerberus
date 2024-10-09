import { describe, test, expect, jest } from 'bun:test'
import { gradientValues, utilities } from '@cerberus-design/panda-preset'
import { type TransformArgs } from '@pandacss/types'

describe('utilities', () => {
  const args = {
    token: {
      raw: jest.fn(),
    },
    raw: '',
    utils: {
      colorMix: jest.fn(),
    },
  } as unknown as TransformArgs

  test('should export a mxi utility', () => {
    expect(utilities.extend.mxi).toBeDefined()
    expect(utilities.extend.mxi.className).toEqual('margin-inline-start-end')
    expect(utilities.extend.mxi.values).toEqual('spacing')
    expect(utilities.extend.mxi.transform?.('4', args)).toEqual({
      marginInlineStart: '4',
      marginInlineEnd: '4',
    })
  })

  test('should export a pxi utility', () => {
    expect(utilities.extend.pxi).toBeDefined()
    expect(utilities.extend.pxi.className).toEqual('padding-inline-start-end')
    expect(utilities.extend.pxi.values).toEqual('spacing')
    expect(utilities.extend.pxi.transform?.('6', args)).toEqual({
      paddingInlineStart: '6',
      paddingInlineEnd: '6',
    })
  })

  test('should export a gradient utility', () => {
    const cerbGradient = utilities.extend.gradient
    const args = {
      token: jest.fn((value: string) => `{${value}}`),
      raw: '',
      utils: {
        colorMix: jest.fn(),
      },
    } as unknown as TransformArgs
    const color = '{colors.gradient.charon-light.text.initial}'
    const cerbLight = '{gradients.cerberus.light.charon-light}'
    const cerbDark = '{gradients.cerberus.dark.charon-light}'

    expect(cerbGradient).toBeDefined()
    expect(cerbGradient.className).toEqual('gradient')
    expect(cerbGradient.values).toEqual(gradientValues)
    expect(cerbGradient.transform?.('charon-light', args)).toMatchObject({
      '[data-color-mode=dark] &, &.dark, .dark &': {
        backgroundImage: cerbDark,
        color,
      },
      '[data-color-mode=light] &, &.light, .light &': {
        backgroundImage: cerbLight,
        color,
      },
      '[data-color-mode=system] &, &.system, .system &': {
        backgroundImage: cerbDark,
        color,
      },
      '[data-panda-theme=acheron][data-color-mode=dark] &, &.dark, .dark &': {
        backgroundImage: '{gradients.acheron.dark.charon-light}',
        color,
      },
      '[data-panda-theme=acheron][data-color-mode=light] &, &.light, .light &':
        {
          backgroundImage: '{gradients.acheron.light.charon-light}',
          color,
        },
      '[data-panda-theme=acheron][data-color-mode=system] &, &.system, .system &':
        {
          backgroundImage: '{gradients.acheron.dark.charon-light}',
          color,
        },
      '[data-panda-theme=cerberus][data-color-mode=dark] &, &.dark, .dark &': {
        backgroundImage: cerbDark,
        color,
      },
      '[data-panda-theme=cerberus][data-color-mode=light] &, &.light, .light &':
        {
          backgroundImage: cerbLight,
          color,
        },
      '[data-panda-theme=cerberus][data-color-mode=system] &, &.system, .system &':
        {
          backgroundImage: cerbDark,
          color,
        },
    })
  })
})
