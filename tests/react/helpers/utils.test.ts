import { describe, test, expect } from 'bun:test'
import { formatNotifyCount, splitProps } from '@cerberus-design/react'

describe('utils', () => {
  test('formatNotifyCount', () => {
    expect(formatNotifyCount(100)).toBe('99+')
    expect(formatNotifyCount(99)).toBe('99')
    expect(formatNotifyCount(0)).toBe('0')
  })

  test('splitProps', () => {
    const props = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
    }

    const [a, c, d, rest] = splitProps(props, ['a', 'b'], ['c'], ['d'])

    expect(a).toEqual({ a: 1, b: 2 })
    expect(c).toEqual({ c: 3 })
    expect(d).toEqual({ d: 4 })
    expect(rest).toEqual({ e: 5, f: 6 })
  })
})
