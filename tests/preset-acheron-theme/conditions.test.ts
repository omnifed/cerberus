import { describe, test, expect } from 'bun:test'
import { conditions } from '@cerberus/preset-acheron-theme'

describe('conditions', () => {
  test('should have a acheronTheme', () => {
    expect(conditions.acheronTheme).toEqual('[data-panda-theme=acheron] &')
  })
})
