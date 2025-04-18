import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('progressBar recipe', () => {
  const { progressBar } = slotRecipes

  test('should be exported', () => {
    expect(progressBar).toBeDefined()
  })

  test('should have a base style', () => {
    expect(progressBar.base?.root).toMatchObject({
      bgColor: 'page.bg.100',
      position: 'relative',
      w: 'full',
    })
    expect(progressBar.base?.bar).toMatchObject({
      gradient: 'progress',
      h: 'full',
      left: 0,
      position: 'absolute',
      top: 0,
      transitionDuration: '250ms',
      transitionProperty: 'background-image,width',
      transitionTimingFunction: 'ease',
      willChange: 'width',
      zIndex: 'decorator',
      _isComplete: {
        gradient: 'complete !important',
      },
      _motionSafe: {
        _indeterminate: {
          animationName: 'rubberBand',
          animationIterationCount: 'infinite',
          animationDuration: '1.25s',
          animationTimingFunction: 'ease-in-out',
        },
      },
    })
  })

  test('should have variants', () => {
    expect(progressBar.variants).toMatchObject({
      size: {
        sm: {
          root: {
            h: '0.75rem',
          },
        },
        md: {
          root: {
            h: '1.5rem',
          },
        },
      },
      usage: {
        block: {
          root: {
            rounded: 'initial',
          },
          bar: {
            rounded: 'initial',
          },
        },
        rounded: {
          root: {
            rounded: '1.5rem',
          },
          bar: {
            rounded: '1.5rem',
          },
        },
      },
    })
  })

  test('should have default variants', () => {
    expect(progressBar.defaultVariants).toMatchObject({
      size: 'md',
      usage: 'rounded',
    })
  })
})
