import { describe, test, expect } from 'bun:test'
import { utilities } from '@cerberus-design/panda-preset'

describe('utilities', () => {
  test('should export a mxi utility', () => {
    expect(utilities.extend.mxi).toBeDefined()
    expect(utilities.extend.mxi.className).toEqual('margin-inline-start-end')
    expect(utilities.extend.mxi.values).toEqual('spacing')
    // @ts-expect-error bug in the Panda-CSS types
    expect(utilities.extend.mxi.transform('4')).toEqual({
      marginInlineStart: '4',
      marginInlineEnd: '4',
    })
  })

  test('should export a pxi utility', () => {
    expect(utilities.extend.pxi).toBeDefined()
    expect(utilities.extend.pxi.className).toEqual('padding-inline-start-end')
    expect(utilities.extend.pxi.values).toEqual('spacing')
    // @ts-expect-error bug in the Panda-CSS types
    expect(utilities.extend.pxi.transform('6')).toEqual({
      paddingInlineStart: '6',
      paddingInlineEnd: '6',
    })
  })

  test('should export a cerberusGradient utility', () => {
    expect(utilities.extend.cerberusGradient).toBeDefined()
    expect(utilities.extend.cerberusGradient.className).toEqual(
      'cerberus-gradient',
    )
    expect(utilities.extend.cerberusGradient.shorthand).toEqual('cerbGradient')
    expect(utilities.extend.cerberusGradient.values).toEqual([
      'green',
      'blue',
      'purple',
      'purple-100',
    ])
    // @ts-expect-error bug in the Panda-CSS types
    expect(utilities.extend.cerberusGradient.transform('green')).toMatchObject({
      color: '#21143B',
      backgroundImage: 'linear-gradient(to bottom left, #E8F8ED, #71D192)',
    })
    // @ts-expect-error bug in the Panda-CSS types
    expect(utilities.extend.cerberusGradient.transform('blue')).toMatchObject({
      color: '#21143B',
      backgroundImage: 'linear-gradient(to bottom left, #E6F3FB, #9ACFEE)',
    })
    // @ts-expect-error bug in the Panda-CSS types
    expect(utilities.extend.cerberusGradient.transform('purple')).toMatchObject(
      {
        backgroundImage: 'linear-gradient(to bottom left, #EFE5F8, #BB93E1)',
        color: '#21143B',
      },
    )
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      utilities.extend.cerberusGradient.transform('purple-100'),
    ).toMatchObject({
      backgroundImage:
        'linear-gradient(234deg, #5F00B5 -1.22%, #9F66D3 79.15%)',
      color: '#21143B',
    })
  })
})
