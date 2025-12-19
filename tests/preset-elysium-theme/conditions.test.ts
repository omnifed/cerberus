import { describe, test, expect } from 'bun:test'
import { conditions } from '@cerberus-design/preset-elysium-theme'

describe('Elysium conditions', () => {
  test('should have a elysiumTheme', () => {
    expect(conditions.elysiumTheme).toEqual('[data-panda-theme=elysium] &')
  })
})
