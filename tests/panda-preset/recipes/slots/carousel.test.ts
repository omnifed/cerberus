import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus-design/panda-preset'

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

  test('should have a base.control style', () => {
    expect(carousel.base?.control).toMatchObject({
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'base',
    })
  })

  test('should have a base.prevTrigger style', () => {
    expect(carousel.base?.prevTrigger).toMatchObject({
      left: 0,
    })
  })

  test('should have a base.nextTrigger style', () => {
    expect(carousel.base?.nextTrigger).toMatchObject({
      right: 0,
    })
  })

  test('should have a base.indicatorGroup style', () => {
    expect(carousel.base?.indicatorGroup).toMatchObject({
      display: 'flex',
      justifyContent: 'center',
      marginTop: 2,
    })
  })

  test('should have a base.indicator style', () => {
    expect(carousel.base?.indicator).toMatchObject({
      width: 2,
      height: 2,
      borderRadius: 'full',
      backgroundColor: 'currentColor',
      marginX: 1,
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
