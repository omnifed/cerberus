import { describe, test, expect } from 'bun:test'
import { patterns } from '@cerberus-design/panda-preset'

describe('patterns', () => {
  test('should export h1', () => {
    expect(patterns.extend.h1).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.h1.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export h2', () => {
    expect(patterns.extend.h2).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.h2.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export h3', () => {
    expect(patterns.extend.h3).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.h3.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export h4', () => {
    expect(patterns.extend.h4).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.h4.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export h5', () => {
    expect(patterns.extend.h5).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.h5.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export h6', () => {
    expect(patterns.extend.h6).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.h6.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export p', () => {
    expect(patterns.extend.p).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.p.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export strong', () => {
    expect(patterns.extend.strong).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.strong.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export em', () => {
    expect(patterns.extend.em).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.em.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export small', () => {
    expect(patterns.extend.small).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.small.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export span', () => {
    expect(patterns.extend.span).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.span.transform({ bgColor: 'black' }),
    ).toMatchObject({
      bgColor: 'black',
    })
  })

  test('should export animateIn', () => {
    expect(patterns.extend.animateIn).toBeDefined()
    expect(
      // @ts-expect-error bug in the Panda-CSS types
      patterns.extend.animateIn.transform({ bgColor: 'black' }),
    ).toMatchObject({
      animationName: 'fadeIn',
      animationDuration: '2s',
      animationFillMode: 'forwards',
      animationDelay: '200ms',
      opacity: '0',
      bgColor: 'black',
      _motionReduce: {
        animationName: 'none',
      },
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
      width: 'auto',
      scrollbarWidth: 'auto',
      WebkitOverflowScrolling: 'touch',
      '&::-webkit-scrollbar': {
        display: 'auto',
      },
      bgColor: 'white',
    })
  })
})
