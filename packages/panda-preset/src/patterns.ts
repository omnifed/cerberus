import type { PatternConfig } from '@pandacss/types'

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
    const { direction = 'vertical', hideScrollbar = false, ...rest } = props
    return {
      overflow: 'auto',
      height: direction === 'horizontal' ? '100%' : 'auto',
      width: direction === 'vertical' ? '100%' : 'auto',
      scrollBehavior: 'smooth',
      scrollbarGutter: 'stable',
      '&::-webkit-scrollbar': {
        display: hideScrollbar ? 'none' : 'auto',
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
      _motionSafe: {
        animationName: 'fadeIn',
        animationDuration: '2s',
        animationFillMode: 'forwards',
        animationDelay: delay ?? '200ms',
        opacity: '0',
      },
      ...rest,
    }
  },
})

const emphasizedFadeIn: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'emphasized-fade-in',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

const emphasizedFadeOut: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'emphasized-fade-out',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

const emphasizedSlideIn: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'emphasized-slide-in',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

const emphasizedSlideOut: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'emphasized-slide-out',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

const slideFadeIn: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'slide-fade-in',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

const slideFadeOut: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'slide-fade-out',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

const scaleFadeOut: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'scale-fade-out',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

const scaleFadeIn: PatternConfig = definePattern({
  description: `An element for applying animations.`,
  transform(props: {
    duration?: string
    delay?: string
    fillMode?: string
    timing?: string
  }) {
    return {
      animationStyle: 'scale-fade-in',
      animationDuration: props.duration ?? 'normal',
      animationDelay: props.delay ?? '0s',
      animationFillMode: props.fillMode ?? 'forwards',
      animationTimingFunction: props.timing ?? 'ease-in-out',
      ...props,
    }
  },
})

export const patterns = {
  extend: {
    animateIn,
    emphasizedFadeIn,
    emphasizedFadeOut,
    emphasizedSlideIn,
    emphasizedSlideOut,
    slideFadeIn,
    slideFadeOut,
    scaleFadeIn,
    scaleFadeOut,
    scrollable,
  },
}
