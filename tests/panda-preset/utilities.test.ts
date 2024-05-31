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
})
