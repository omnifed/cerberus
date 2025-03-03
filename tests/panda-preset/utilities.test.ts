import { describe, test, expect, jest } from 'bun:test'
import { gradientValues, utilities } from '@cerberus-design/panda-preset'
import { type TransformArgs } from '@pandacss/types'

describe('utilities', () => {
  const CHARON_LIGHT = '{gradients.acheron.dark.charon-light}'
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

  test('should export a size utility', () => {
    expect(utilities.extend.size).toBeDefined()
    expect(utilities.extend.size.className).toEqual('size')
    expect(utilities.extend.size.values).toEqual('sizing')
    expect(utilities.extend.size.transform?.('4rem', args)).toEqual({
      height: '4rem',
      width: '4rem',
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
        backgroundImage: CHARON_LIGHT,
        color,
      },
      '[data-panda-theme=acheron][data-color-mode=light] &, &.light, .light &':
        {
          backgroundImage: '{gradients.acheron.light.charon-light}',
          color,
        },
      '[data-panda-theme=acheron][data-color-mode=system] &, &.system, .system &':
        {
          backgroundImage: CHARON_LIGHT,
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

  test('should export a borderGradient utility', () => {
    const cerbGradient = utilities.extend.borderGradient
    const args = {
      token: jest.fn((value: string) => `{${value}}`),
      raw: '',
      utils: {
        colorMix: jest.fn(),
      },
    } as unknown as TransformArgs
    const color = 'var(--cerberus-colors-page-text-initial)'
    const backgroundImage =
      'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),{gradients.cerberus.dark.charon-light}'

    expect(cerbGradient).toBeDefined()
    expect(cerbGradient.className).toEqual('border-gradient')
    expect(cerbGradient.values).toEqual(gradientValues)
    expect(cerbGradient.transform?.('charon-light', args)).toMatchObject({
      '[data-color-mode=dark] &, &.dark, .dark &': {
        backgroundImage,
        color,
      },
      '[data-color-mode=light] &, &.light, .light &': {
        backgroundImage:
          'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),{gradients.cerberus.light.charon-light}',
        color,
      },
      '[data-color-mode=system] &, &.system, .system &': {
        backgroundImage,
        color,
      },
      '[data-panda-theme=acheron][data-color-mode=dark] &, &.dark, .dark &': {
        backgroundImage:
          'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),{gradients.acheron.dark.charon-light}',
        color,
      },
      '[data-panda-theme=acheron][data-color-mode=light] &, &.light, .light &':
        {
          backgroundImage:
            'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),{gradients.acheron.light.charon-light}',
          color,
        },
      '[data-panda-theme=acheron][data-color-mode=system] &, &.system, .system &':
        {
          backgroundImage:
            'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),{gradients.acheron.dark.charon-light}',
          color,
        },
      '[data-panda-theme=cerberus][data-color-mode=dark] &, &.dark, .dark &': {
        backgroundImage,
        color,
      },
      '[data-panda-theme=cerberus][data-color-mode=light] &, &.light, .light &':
        {
          backgroundImage:
            'conic-gradient(var(--cerberus-colors-page-surface-initial) 0 0),{gradients.cerberus.light.charon-light}',
          color,
        },
      '[data-panda-theme=cerberus][data-color-mode=system] &, &.system, .system &':
        {
          backgroundImage,
          color,
        },
    })
  })
})
