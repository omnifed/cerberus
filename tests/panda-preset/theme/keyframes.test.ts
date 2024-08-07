import { describe, test, expect } from 'bun:test'
import { keyframes } from '@cerberus-design/panda-preset'

describe('keyframes', () => {
  test('should export fadeIn', () => {
    expect(keyframes.fadeIn).toBeDefined()
    expect(keyframes.fadeIn['0%']).toEqual({ opacity: '0' })
    expect(keyframes.fadeIn['100%']).toEqual({ opacity: '1' })
  })

  test('should export fadeInDown', () => {
    expect(keyframes.fadeInDown).toBeDefined()
    expect(keyframes.fadeInDown['0%']).toEqual({
      opacity: '0',
      transform: 'translateY(-20px)',
    })
    expect(keyframes.fadeInDown['100%']).toEqual({
      opacity: '1',
      transform: 'translateY(0)',
    })
  })

  test('should export zoomIn', () => {
    expect(keyframes.zoomIn).toBeDefined()
    expect(keyframes.zoomIn['0%']).toEqual({
      opacity: '0',
      transform: 'scale(0.8)',
    })
    expect(keyframes.zoomIn['75%']).toEqual({ opacity: '0.5' })
    expect(keyframes.zoomIn['100%']).toEqual({
      opacity: '1',
      transform: 'scale(1)',
    })
  })
})
