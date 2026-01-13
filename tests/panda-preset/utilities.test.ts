import { describe, test, expect, jest } from 'bun:test'
import { utilities } from '@cerberus/panda-preset'
import { type TransformArgs } from '@pandacss/types'
import { getGradients } from '@cerberus/tokens'

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

    expect(cerbGradient).toBeDefined()
    expect(cerbGradient.className).toEqual('gradient')
    expect(cerbGradient.values).toEqual(getGradients())
    expect(cerbGradient.transform?.('charon-light', args)).toMatchObject({
      backgroundImage:
        'linear-gradient(to right, {colors.gradient.charon-light.start}, {colors.gradient.charon-light.end})',
      color: '{colors.gradient.charon-light.text}',
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

    expect(cerbGradient).toBeDefined()
    expect(cerbGradient.className).toEqual('border-gradient')
    expect(cerbGradient.values).toEqual(getGradients())
    expect(cerbGradient.transform?.('charon-light', args)).toMatchObject({
      backgroundImage:
        'conic-gradient({colors.page.surface.initial} 0 0), linear-gradient(to right, {colors.gradient.charon-light.start}, {colors.gradient.charon-light.end})',
      color: '{colors.page.text.initial}',
    })
  })
})
