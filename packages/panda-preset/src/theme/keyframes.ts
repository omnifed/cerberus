import type { CssKeyframes } from '@pandacss/types'

export function defineKeyframes<T extends CssKeyframes>(
  config: T,
): CssKeyframes {
  return config
}

export const keyframes: CssKeyframes = defineKeyframes({
  bgPosition: {
    from: { backgroundPosition: 'var(--animate-from, 1rem) 0' },
    to: { backgroundPosition: 'var(--animate-to, 0) 0' },
  },
  position: {
    from: {
      insetInlineStart: 'var(--animate-from-x)',
      insetBlockStart: 'var(--animate-from-y)',
    },
    to: {
      insetInlineStart: 'var(--animate-to-x)',
      insetBlockStart: 'var(--animate-to-y)',
    },
  },

  // collapse
  expandHeight: {
    from: { height: '0' },
    to: { height: 'var(--height)' },
  },
  collapseHeight: {
    from: { height: 'var(--height)' },
    to: { height: '0' },
  },
  expandWidth: {
    from: { width: '0' },
    to: { width: 'var(--width)' },
  },
  collapseWidth: {
    from: { width: 'var(--width)' },
    to: { width: '0' },
  },

  // fade
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
  fadeInDown: {
    from: {
      opacity: '0',
      transform: 'translateY(-20px)',
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },

  // slide from (full)
  slideFromLeftFull: {
    from: { translate: '-100% 0' },
    to: { translate: '0 0' },
  },
  slideFromRightFull: {
    from: { translate: '100% 0' },
    to: { translate: '0 0' },
  },
  slideFromTopFull: {
    from: { translate: '0 -100%' },
    to: { translate: '0 0' },
  },
  slideFromBottomFull: {
    from: { translate: '0 100%' },
    to: { translate: '0 0' },
  },

  // slide from
  slideFromTop: {
    from: { translate: '0 -0.5rem' },
    to: { translate: '0' },
  },
  slideFromBottom: {
    from: { translate: '0 0.5rem' },
    to: { translate: '0' },
  },
  slideFromLeft: {
    from: { translate: '-0.5rem 0' },
    to: { translate: '0' },
  },
  slideFromRight: {
    from: { translate: '0.5rem 0' },
    to: { translate: '0' },
  },

  // slide to
  slideToTop: {
    from: { translate: '0' },
    to: { translate: '0 -0.5rem' },
  },
  slideToBottom: {
    from: { translate: '0' },
    to: { translate: '0 0.5rem' },
  },
  slideToLeft: {
    from: { translate: '0' },
    to: { translate: '-0.5rem 0' },
  },
  slideToRight: {
    from: { translate: '0' },
    to: { translate: '0.5rem 0' },
  },

  rubberBand: {
    '0%': {
      animationTimingFunction:
        'cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971)',
      transform: 'translateX(0)',
    },
    '19.15%': {
      animationTimingFunction:
        'cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432)',
      transform: 'scaleX(1.5)',
    },
    '45.15%': {
      animationTimingFunction:
        'cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179)',
    },
    '100%': {
      transform: 'translateX(200%)',
    },
  },

  // scale
  scaleIn: {
    from: { scale: '0.95' },
    to: { scale: '1' },
  },
  scaleOut: {
    from: { scale: '1' },
    to: { scale: '0.95' },
  },

  zoomIn: {
    '0%': {
      opacity: '0',
      transform: 'scale(0.8)',
    },
    '75%': {
      opacity: '0.5',
    },
    '100%': {
      opacity: '1',
      transform: 'scale(1)',
    },
  },
})
