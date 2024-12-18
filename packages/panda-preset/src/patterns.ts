import type { PatternConfig } from '@pandacss/types'
import type { Headings, TextElements } from './types'

export function definePattern<T extends PatternConfig>(
  config: T,
): PatternConfig {
  return config
}

/**
 * A container that allows for scrolling
 * @param direction - 'horizontal' or 'vertical'
 * @param hideScrollbar - boolean to hide the scrollbar
 * @example
 * ```tsx
 * <div css={scrollable({ direction: 'vertical', hideScrollbar: true })}>
 *  <p>Scroll me</p>
 * </div>
 * ```
 */
const scrollable: PatternConfig = definePattern({
  description: 'A container that allows for scrolling',
  properties: {
    // The direction of the scroll
    direction: { type: 'enum', value: ['horizontal', 'vertical'] },
    // Whether to hide the scrollbar
    hideScrollbar: { type: 'boolean' },
  },

  // disallow the `overflow` property (in TypeScript)
  blocklist: ['overflow'],

  transform(props) {
    const { direction, hideScrollbar, ...rest } = props
    return {
      overflow: 'auto',
      height: direction === 'horizontal' ? '100%' : 'auto',
      width: direction === 'vertical' ? '100%' : 'auto',
      scrollbarWidth: hideScrollbar ? 'none' : 'auto',
      WebkitOverflowScrolling: 'touch',
      '&::-webkit-scrollbar': {
        display: hideScrollbar ? 'none' : 'auto',
      },
      ...rest,
    }
  },
})

/**
 * A container that fades in the content
 * @param delay - The delay of the animation
 * @example
 * ```tsx
 * <div css={animateIn({ delay: '200ms' })}>
 *  <p>Fade in</p>
 * </div>
 * ```
 */
const animateIn: PatternConfig = definePattern({
  description: 'A container that fades in the content',
  properties: {
    // The delay of the animation
    delay: { type: 'string' },
  },

  // disallow the `overflow` property (in TypeScript)
  blocklist: ['overflow'],

  transform(props: { delay?: string }) {
    const { delay, ...rest } = props
    return {
      animationName: 'fadeIn',
      animationDuration: '2s',
      animationFillMode: 'forwards',
      animationDelay: delay ?? '200ms',
      opacity: '0',
      ...rest,
      _motionReduce: {
        animationName: 'none',
      },
    }
  },
})

const textTags: (Headings | TextElements)[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'strong',
  'em',
  'small',
  'span',
]

const textTagList: PatternConfig[] = textTags.map((tag) => {
  return definePattern({
    description: `A ${tag} element`,
    jsxElement: tag,
    transform(props) {
      return props
    },
  })
})

export const patterns = {
  extend: {
    animateIn,
    scrollable,
    h1: textTagList[0],
    h2: textTagList[1],
    h3: textTagList[2],
    h4: textTagList[3],
    h5: textTagList[4],
    h6: textTagList[5],
    p: textTagList[6],
    strong: textTagList[7],
    em: textTagList[8],
    small: textTagList[9],
    span: textTagList[10],
  },
}
