import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('circularProgress recipe', () => {
  const { circularProgress } = slotRecipes

  test('should be exported', () => {
    expect(circularProgress).toBeDefined()
  })

  test('should have a base.root style', () => {
    expect(circularProgress.base?.root).toMatchObject({
      display: 'inline-flex',
      position: 'relative',
      '--thickness': 'calc(var(--size) * 0.13)',
    })
  })

  test('should have a base.circle style', () => {
    expect(circularProgress.base?.circle).toMatchObject({
      bgColor: 'var(--fill-color)',
      display: 'block',
      rounded: 'full',
    })
  })

  test('should have a base.circleTrack style', () => {
    expect(circularProgress.base?.circleTrack).toMatchObject({
      stroke: 'page.bg.100',
    })
  })

  test('should have a base.circleRange style', () => {
    expect(circularProgress.base?.circleRange).toMatchObject({
      stroke: 'dataViz.progress.start',
      strokeLinecap: 'round',
      transition: 'all 0.5s ease',
      _isComplete: {
        stroke: 'dataViz.progress.complete',
      },
    })
  })

  test('should have a base.infoGroup style', () => {
    expect(circularProgress.base?.infoGroup).toMatchObject({
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      inset: 0,
      justifyContent: 'center',
      position: 'absolute',
      userSelect: 'none',
    })
  })

  test('should have a base.valueText style', () => {
    expect(circularProgress.base?.valueText).toMatchObject({
      color: 'page.text.300',
      fontFamily: 'mono',
      fontSize: 'var(--value-text-size)',
      fontWeight: '450',
      lineHeight: '1',
    })
  })

  test('should have a base.label style', () => {
    expect(circularProgress.base?.label).toMatchObject({
      color: 'page.text.100',
      fontFamily: 'sans',
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--label-weight)',
      lineHeight: '1.2',
    })
  })

  test('should have a variants object', () => {
    expect(circularProgress.variants).toMatchObject({
      usage: {
        filled: {
          root: {
            '--fill-color': '{colors.page.bg.initial}',
          },
        },
        transparent: {
          root: {
            '--fill-color': 'transparent',
          },
        },
      },
      size: {
        xs: {
          root: {
            '--size': '6rem',
            '--value-text-size': '1.25rem',
            '--label-size': '0.75rem',
            '--label-weight': '400',
          },
        },
        sm: {
          root: {
            '--size': '10.25rem',
            '--value-text-size': '1.5rem',
            '--label-size': '0.75rem',
            '--label-weight': '400',
          },
        },
        md: {
          root: {
            '--size': '12rem',
            '--value-text-size': '2rem',
            '--label-size': '1rem',
            '--label-weight': '600',
          },
        },
        lg: {
          root: {
            '--size': '15.5rem',
            '--value-text-size': '2.625rem',
            '--label-size': '1.25rem',
            '--label-weight': '600',
          },
        },
      },
    })
  })

  test('should have a defaultVariants object', () => {
    expect(circularProgress.defaultVariants).toMatchObject({
      usage: 'filled',
      size: 'xs',
    })
  })
})
