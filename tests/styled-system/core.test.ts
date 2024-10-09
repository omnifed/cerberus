import { describe, test, expect } from 'bun:test'
import { css, cx } from '@cerberus-design/styled-system/css'

describe('css', () => {
  test('should be a css function', () => {
    expect(css).toBeDefined()
    expect(css({ bgColor: 'black' })).toEqual('cerberus-bg-c_black')
  })

  test('should be a cx function', () => {
    expect(typeof cx).toBe('function')
  })
})
