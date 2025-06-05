import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

describe('circularProgress recipe', () => {
  const { circularProgress } = slotRecipes

  test('should be exported', () => {
    expect(circularProgress).toBeDefined()
  })

  test('should have a base.root style', () => {
    expect(circularProgress.base?.root).toMatchObject({
      alignSelf: 'stretch',
      containerType: 'inline-size',
      flex: 1,
      m: '4px',
      position: 'relative',
      '--size': '100%',
      '--thickness': '1em',
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
      fontSize: '1.5em',
    })
  })

  test('should have a base.label style', () => {
    expect(circularProgress.base?.label).toMatchObject({
      color: 'page.text.100',
      fontSize: '0.75em',
      textStyle: 'heading-sm',
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
    })
  })

  test('should have a defaultVariants object', () => {
    expect(circularProgress.defaultVariants).toMatchObject({
      usage: 'filled',
    })
  })
})
