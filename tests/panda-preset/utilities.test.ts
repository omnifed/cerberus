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

  test('should export a cerberusGradient utility', () => {
    const cerbGradient = utilities.extend.cerberusGradient
    const color = '#21143B'

    expect(cerbGradient).toBeDefined()
    expect(cerbGradient.className).toEqual('cerberus-gradient')
    expect(cerbGradient.shorthand).toEqual('cerbGradient')
    expect(cerbGradient.values).toEqual(gradientValues)
    expect(cerbGradient.transform?.('light-purple', args)).toMatchObject({
      backgroundImage:
        'linear-gradient(216deg, #EFE5F8 -4.93%, #BB93E1 116.78%)',
      color,
    })
    expect(cerbGradient.transform?.('dark-purple', args)).toMatchObject({
      backgroundImage:
        'linear-gradient(234deg, #5F00B5 -1.22%, #9F66D3 79.15%)',
      color,
    })
    expect(cerbGradient.transform?.('green', args)).toMatchObject({
      color,
      backgroundImage:
        'linear-gradient(103deg, #71D192 -78.15%, #E8F8ED 129.96%)',
    })
    expect(cerbGradient.transform?.('light-blue', args)).toMatchObject({
      color,
      backgroundImage: 'linear-gradient(207deg, #E6F3FB 16.67%, #9ACFEE 100%)',
    })
    expect(cerbGradient.transform?.('red', args)).toMatchObject({
      color,
      backgroundImage:
        'linear-gradient(248deg, #FED7D5 -29.66%, #FC5E57 162.95%)',
    })
    expect(cerbGradient.transform?.('neutral', args)).toMatchObject({
      color,
      backgroundImage:
        'linear-gradient(220deg, #918EA7 -10.94%, #E4E3E9 108.06%)',
    })
    expect(cerbGradient.transform?.('neutral', args)).toMatchObject({
      color,
      backgroundImage:
        'linear-gradient(220deg, #918EA7 -10.94%, #E4E3E9 108.06%)',
    })
    expect(cerbGradient.transform?.('yellow', args)).toMatchObject({
      color,
      backgroundImage:
        'linear-gradient(216deg, #FEFBE9 -4.93%, #F4DA49 116.78%)',
    })
    expect(cerbGradient.transform?.('teal', args)).toMatchObject({
      color,
      backgroundImage:
        'linear-gradient(216deg, #102D2D -4.93%, #3B8180 116.78%)',
    })
    expect(cerbGradient.transform?.('light-teal', args)).toMatchObject({
      color,
      backgroundImage:
        'linear-gradient(216deg, #D8F9F7 -4.93%, #72E9E7 116.78%)',
    })
  })
})
