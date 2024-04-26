import { describe, test, expect } from 'bun:test'
import { keyframes } from '@omni-federal/panda-preset'

describe('keyframes', () => {
  test('should export fadeIn', () => {
    expect(keyframes.fadeIn).toBeDefined()
    expect(keyframes.fadeIn['0%']).toEqual({ opacity: '0' })
    expect(keyframes.fadeIn['100%']).toEqual({ opacity: '1' })
  })
})
