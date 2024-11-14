import { describe, test, expect } from 'bun:test'
import { keyframes } from '@cerberus-design/panda-preset'

describe('keyframes', () => {
  test('should export bgPosition', () => {
    expect(keyframes.bgPosition).toBeDefined()
    expect(keyframes.bgPosition.from).toEqual({
      backgroundPosition: 'var(--animate-from, 1rem) 0',
    })
    expect(keyframes.bgPosition.to).toEqual({
      backgroundPosition: 'var(--animate-to, 0) 0',
    })
  })

  test('should export position', () => {
    expect(keyframes.position).toBeDefined()
    expect(keyframes.position.from).toEqual({
      insetInlineStart: 'var(--animate-from-x)',
      insetBlockStart: 'var(--animate-from-y)',
    })
    expect(keyframes.position.to).toEqual({
      insetInlineStart: 'var(--animate-to-x)',
      insetBlockStart: 'var(--animate-to-y)',
    })
  })

  test('should export expandHeight', () => {
    expect(keyframes.expandHeight).toBeDefined()
    expect(keyframes.expandHeight.from).toEqual({ height: '0' })
    expect(keyframes.expandHeight.to).toEqual({ height: 'var(--height)' })
  })

  test('should export collapseHeight', () => {
    expect(keyframes.collapseHeight).toBeDefined()
    expect(keyframes.collapseHeight.from).toEqual({ height: 'var(--height)' })
    expect(keyframes.collapseHeight.to).toEqual({ height: '0' })
  })

  test('should export expandWidth', () => {
    expect(keyframes.expandWidth).toBeDefined()
    expect(keyframes.expandWidth.from).toEqual({ width: '0' })
    expect(keyframes.expandWidth.to).toEqual({ width: 'var(--width)' })
  })

  test('should export collapseWidth', () => {
    expect(keyframes.collapseWidth).toBeDefined()
    expect(keyframes.collapseWidth.from).toEqual({ height: 'var(--width)' })
    expect(keyframes.collapseWidth.to).toEqual({ height: '0' })
  })

  test('should export fadeIn', () => {
    expect(keyframes.fadeIn).toBeDefined()
    expect(keyframes.fadeIn['0%']).toEqual({ opacity: '0' })
    expect(keyframes.fadeIn['100%']).toEqual({ opacity: '1' })
  })

  test('should export fadeOut', () => {
    expect(keyframes.fadeOut).toBeDefined()
    expect(keyframes.fadeOut.from).toEqual({ opacity: 1 })
    expect(keyframes.fadeOut.to).toEqual({ opacity: 0 })
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

  test('should export slideFromLeftFull', () => {
    expect(keyframes.slideFromLeftFull).toBeDefined()
    expect(keyframes.slideFromLeftFull.from).toEqual({
      translate: '-100% 0',
    })
    expect(keyframes.slideFromLeftFull.to).toEqual({
      translate: '0 0',
    })
  })

  test('should export slideFromRightFull', () => {
    expect(keyframes.slideFromRightFull).toBeDefined()
    expect(keyframes.slideFromRightFull.from).toEqual({
      translate: '100% 0',
    })
    expect(keyframes.slideFromRightFull.to).toEqual({
      translate: '0 0',
    })
  })

  test('should export slideFromTopFull', () => {
    expect(keyframes.slideFromTopFull).toBeDefined()
    expect(keyframes.slideFromTopFull.from).toEqual({
      translate: '0 -100%',
    })
    expect(keyframes.slideFromTopFull.to).toEqual({
      translate: '0 0',
    })
  })

  test('should export slideFromBottomFull', () => {
    expect(keyframes.slideFromBottomFull).toBeDefined()
    expect(keyframes.slideFromBottomFull.from).toEqual({
      translate: '0 100%',
    })
    expect(keyframes.slideFromBottomFull.to).toEqual({
      translate: '0 0',
    })
  })

  test('should export slideFromTop', () => {
    expect(keyframes.slideFromTop).toBeDefined()
    expect(keyframes.slideFromTop['0%']).toEqual({ translate: '0 -0.5rem' })
    expect(keyframes.slideFromTop.to).toEqual({ translate: '0' })
  })

  test('should export slideFromBottom', () => {
    expect(keyframes.slideFromBottom).toBeDefined()
    expect(keyframes.slideFromBottom['0%']).toEqual({ translate: '0 0.5rem' })
    expect(keyframes.slideFromBottom.to).toEqual({ translate: '0' })
  })

  test('should export slideFromLeft', () => {
    expect(keyframes.slideFromLeft).toBeDefined()
    expect(keyframes.slideFromLeft['0%']).toEqual({ translate: '-0.5rem 0' })
    expect(keyframes.slideFromLeft.to).toEqual({ translate: '0' })
  })

  test('should export slideFromRight', () => {
    expect(keyframes.slideFromRight).toBeDefined()
    expect(keyframes.slideFromRight['0%']).toEqual({ translate: '0.5rem 0' })
    expect(keyframes.slideFromRight.to).toEqual({ translate: '0' })
  })

  test('should export slideToTop', () => {
    expect(keyframes.slideToTop).toBeDefined()
    expect(keyframes.slideToTop['0%']).toEqual({ translate: '0' })
    expect(keyframes.slideToTop.to).toEqual({ translate: '0 -0.5rem' })
  })

  test('should export slideToBottom', () => {
    expect(keyframes.slideToBottom).toBeDefined()
    expect(keyframes.slideToBottom['0%']).toEqual({ translate: '0' })
    expect(keyframes.slideToBottom.to).toEqual({ translate: '0 0.5rem' })
  })

  test('should export slideToLeft', () => {
    expect(keyframes.slideToLeft).toBeDefined()
    expect(keyframes.slideToLeft['0%']).toEqual({ translate: '0' })
    expect(keyframes.slideToLeft.to).toEqual({ translate: '-0.5rem 0' })
  })

  test('should export slideToRight', () => {
    expect(keyframes.slideToRight).toBeDefined()
    expect(keyframes.slideToRight['0%']).toEqual({ translate: '0' })
    expect(keyframes.slideToRight.to).toEqual({ translate: '0.5rem 0' })
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

  test('should export scaleIn', () => {
    expect(keyframes.scaleIn).toBeDefined()
    expect(keyframes.scaleIn.from).toEqual({ scale: '0.95' })
    expect(keyframes.scaleIn.to).toEqual({ scale: '1' })
  })

  test('should export scaleOut', () => {
    expect(keyframes.scaleOut).toBeDefined()
    expect(keyframes.scaleOut.from).toEqual({ scale: '1' })
    expect(keyframes.scaleOut.to).toEqual({ scale: '0.95' })
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
