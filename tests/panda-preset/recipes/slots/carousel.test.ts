import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('carousel recipe', () => {
  const { carousel } = slotRecipes

  test('should be exported', () => {
    expect(carousel).toBeDefined()
    expect(carousel.className).toEqual('carousel')
  })

  test('should have designated JSX names', () => {
    expect(carousel.jsx).toEqual([
      'CarouselRoot',
      'CarouselControl',
      'CarouselPrevTrigger',
      'CarouselNextTrigger',
      'CarouselIndicatorGroup',
      'CarouselIndicator',
      'CarouselItemGroup',
      'CarouselItem',
      'Carousel',
    ])
  })

  test('should have a base.root style', () => {
    expect(carousel.base?.root).toMatchObject({
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      _horizontal: {
        w: 'full',
      },
      _vertical: {
        h: 'full',
      },
    })
  })

  test('should have a base.indicatorGroup style', () => {
    expect(carousel.base?.indicatorGroup).toMatchObject({
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      gap: 'sm',
      mx: 'auto',
    })
  })

  test('should have a base.indicator style', () => {
    expect(carousel.base?.indicator).toMatchObject({
      bgColor: 'currentColor',
      rounded: '0.25rem',
      height: '0.25rem',
      mx: 1,
      width: '4rem',
      _focusVisible: {
        boxShadow: 'none',
        outline: '3px solid',
        outlineColor: 'action.border.focus',
        outlineOffset: '2px',
      },
      '&:is([data-current])': {
        bgColor: 'action.bg.initial',
      },
    })
  })

  test('should have a base.itemGroup style', () => {
    expect(carousel.base?.itemGroup).toMatchObject({
      alignSelf: 'stretch',
      paddingBlock: '3rem',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    })
  })

  test('should have a base.item style', () => {
    expect(carousel.base?.item).toMatchObject({
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      pos: 'relative',
    })
  })
})
