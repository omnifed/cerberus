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

  test('should export rubberBand', () => {
    expect(keyframes.rubberBand).toBeDefined()
    expect(keyframes.rubberBand['0%']).toEqual({
      animationTimingFunction:
        'cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971)',
      transform: 'translateX(0)',
    })
    expect(keyframes.rubberBand['19.15%']).toEqual({
      animationTimingFunction:
        'cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432)',
      transform: 'scaleX(1.5)',
    })
    expect(keyframes.rubberBand['45.15%']).toEqual({
      animationTimingFunction:
        'cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179)',
    })
    expect(keyframes.rubberBand['100%']).toEqual({
      transform: 'translateX(200%)',
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
