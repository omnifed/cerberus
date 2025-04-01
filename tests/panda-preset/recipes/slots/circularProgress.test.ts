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
    })
  })

  test('should have a base.group style', () => {
    expect(circularProgress.base?.group).toMatchObject({
      display: 'block',
      rounded: 'full',
      transition: 'all 0.5s ease',
    })
  })

  test('should have a base.base style', () => {
    expect(circularProgress.base?.base).toMatchObject({
      fill: 'page.surface.initial',
    })
  })

  test('should have a base.track style', () => {
    expect(circularProgress.base?.track).toMatchObject({
      stroke: 'page.bg.100',
    })
  })

  test('should have a base.path style', () => {
    expect(circularProgress.base?.path).toMatchObject({
      stroke: 'url(#gradient)',
      transition: 'stroke-dashoffset, stroke 0.5s ease',
      _isComplete: {
        stroke: 'success.bg.initial',
      },
    })
  })

  test('should have a base.title style', () => {
    expect(circularProgress.base?.title).toMatchObject({
      fill: 'page.text.initial',
      fontFamily: 'mono',
      fontSize: '1.25rem',
    })
  })

  test('should have a base.description style', () => {
    expect(circularProgress.base?.description).toMatchObject({
      fill: 'page.text.100',
      fontSize: '0.5rem',
      fontWeight: 600,
      '&:is([data-fallback])': {
        textStyle: 'heading-xs',
        fontSize: '0.75rem',
      },
    })
  })
})
