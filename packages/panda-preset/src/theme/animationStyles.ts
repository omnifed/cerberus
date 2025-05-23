import { defineAnimationStyles, type AnimationStyles } from '../types'

const transformOrigin = 'var(--transform-origin)'

export const animationStyles: AnimationStyles = defineAnimationStyles({
  'emphasized-fade-in': {
    value: {
      animationDuration: 'fast',
      animationName: 'fadeIn',
    },
  },

  'emphasized-fade-out': {
    value: {
      animationDuration: 'fast',
      animationName: 'fadeOut',
    },
  },

  'emphasized-slide-in': {
    value: {
      animationDuration: 'slow',
      animationName: 'slideIn',
    },
  },

  'emphasized-slide-out': {
    value: {
      animationDuration: 'fast',
      animationName: 'slideOut',
    },
  },

  'slide-fade-in': {
    value: {
      transformOrigin,
      '&[data-placement^=top]': {
        animationName: 'slideFromBottom, fadeIn',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slideFromTop, fadeIn',
      },
      '&[data-placement^=left]': {
        animationName: 'slideFromRight, fadeIn',
      },
      '&[data-placement^=right]': {
        animationName: 'slideFromLeft, fadeIn',
      },
    },
  },

  'slide-fade-out': {
    value: {
      transformOrigin,
      '&[data-placement^=top]': {
        animationName: 'slideToBottom, fadeOut',
      },
      '&[data-placement^=bottom]': {
        animationName: 'slideToTop, fadeOut',
      },
      '&[data-placement^=left]': {
        animationName: 'slideToRight, fadeOut',
      },
      '&[data-placement^=right]': {
        animationName: 'slideToLeft, fadeOut',
      },
    },
  },

  'scale-fade-in': {
    value: {
      transformOrigin,
      animationName: 'scaleIn, fadeIn',
    },
  },

  'scale-fade-out': {
    value: {
      transformOrigin,
      animationName: 'scaleOut, fadeOut',
    },
  },
})
