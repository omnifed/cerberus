import { describe, test, expect } from 'bun:test'
import { patterns } from '@cerberus/panda-preset'

describe('patterns', () => {
  test('should export animateIn', () => {
    expect(patterns.extend.animateIn).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.animateIn.transform({ bgColor: 'black' }),
    ).toMatchObject({
      _motionSafe: {
        animationName: 'fadeIn',
        animationDuration: '2s',
        animationFillMode: 'forwards',
        animationDelay: '200ms',
        opacity: '0',
      },
      bgColor: 'black',
    })
  })

  test('should export scrollable', () => {
    expect(patterns.extend.scrollable).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.scrollable.transform({ bgColor: 'white' }),
    ).toMatchObject({
      overflow: 'auto',
      height: 'auto',
      width: '100%',
      scrollBehavior: 'smooth',
      scrollbarGutter: 'stable',
      '&::-webkit-scrollbar': {
        display: 'auto',
        w: '0.5em',
      },
      '&::-webkit-scrollbar-track': {
        bg: 'transparent',
        outline: 'none',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'page.border.100',
        borderRadius: '5px',
        outline: 'none',
      },
      '&:hover::-webkit-scrollbar-thumb': {
        backgroundColor: 'page.border.100',
      },
    })
  })

  test('should have a emphasizedFadeIn motion style', () => {
    expect(patterns.extend.emphasizedFadeIn).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.emphasizedFadeIn.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'emphasized-fade-in',
      animationDuration: 'normal',
      animationDelay: '0s',
      bgColor: 'black',
    })
  })

  test('should have a emphasizedFadeOut motion style', () => {
    expect(patterns.extend.emphasizedFadeOut).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.emphasizedFadeOut.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'emphasized-fade-out',
      animationDuration: 'normal',
      animationDelay: '0s',
      bgColor: 'black',
    })
  })

  test('should have a emphasizedSlideIn motion style', () => {
    expect(patterns.extend.emphasizedSlideIn).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.emphasizedSlideIn.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'emphasized-slide-in',
      animationDuration: 'normal',
      animationDelay: '0s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      bgColor: 'black',
    })
  })

  test('should have a emphasizedSlideOut motion style', () => {
    expect(patterns.extend.emphasizedSlideOut).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.emphasizedSlideOut.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'emphasized-slide-out',
      animationDuration: 'normal',
      animationDelay: '0s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      bgColor: 'black',
    })
  })

  test('should have a slideFadeIn motion style', () => {
    expect(patterns.extend.slideFadeIn).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.slideFadeIn.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'slide-fade-in',
      animationDuration: 'normal',
      animationDelay: '0s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      bgColor: 'black',
    })
  })

  test('should have a slideFadeOut motion style', () => {
    expect(patterns.extend.slideFadeOut).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.slideFadeOut.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'slide-fade-out',
      animationDuration: 'normal',
      animationDelay: '0s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      bgColor: 'black',
    })
  })

  test('should have a scaleFadeIn motion style', () => {
    expect(patterns.extend.scaleFadeIn).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.scaleFadeIn.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'scale-fade-in',
      animationDuration: 'normal',
      animationDelay: '0s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      bgColor: 'black',
    })
  })

  test('should have a scaleFadeOut motion style', () => {
    expect(patterns.extend.scaleFadeOut).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.scaleFadeOut.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationStyle: 'scale-fade-out',
      animationDuration: 'normal',
      animationDelay: '0s',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      bgColor: 'black',
    })
  })
})
