import { describe, test, expect } from 'bun:test'
import { patterns } from '@cerberus-design/panda-preset'

describe('patterns', () => {
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
