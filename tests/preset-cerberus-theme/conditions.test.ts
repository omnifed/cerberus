import { describe, test, expect } from 'bun:test'
import { conditions } from '@cerberus-design/preset-cerberus-theme'

describe('conditions', () => {
  test('should have a cerberusTheme', () => {
    expect(conditions.cerberusTheme).toEqual('[data-panda-theme=cerberus] &')
  })
})
