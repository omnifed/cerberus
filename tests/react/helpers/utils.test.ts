import { describe, test, expect } from 'bun:test'
import { formatNotifyCount } from '@cerberus-design/react'

describe('utils', () => {
  test('formatNotifyCount', () => {
    expect(formatNotifyCount(100)).toBe('99+')
    expect(formatNotifyCount(99)).toBe('99')
    expect(formatNotifyCount(0)).toBe('0')
  })
})
