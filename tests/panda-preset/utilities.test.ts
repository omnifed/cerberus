import { describe, test, expect } from 'bun:test'
import { utilities } from '@cerberus/panda-preset'

describe('utilities', () => {
  test('should export a mxi utility', () => {
    expect(utilities.extend.mxi).toBeDefined()
    expect(utilities.extend.mxi.description).toEqual(
      'x-axis margin shorthand - used to set inline margin at the start and end of an element',
    )
    expect(utilities.extend.mxi.className).toEqual('margin-inline-start-end')
    expect(utilities.extend.mxi.values).toEqual('spacing')
    expect(utilities.extend.mxi.transform(4)).toEqual({
      marginInlineStart: 4,
      marginInlineEnd: 4,
    })
  })

  test('should export a pxi utility', () => {
    expect(utilities.extend.pxi).toBeDefined()
    expect(utilities.extend.pxi.description).toEqual(
      'x-axis padding shorthand - used to set inline padding at the start and end of an element',
    )
    expect(utilities.extend.pxi.className).toEqual('padding-inline-start-end')
    expect(utilities.extend.pxi.values).toEqual('spacing')
    expect(utilities.extend.pxi.transform(6)).toEqual({
      paddingInlineStart: 6,
      paddingInlineEnd: 6,
    })
  })
})
