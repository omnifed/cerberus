import type { CssKeyframes } from '@pandacss/types'

export function defineKeyframes<T extends CssKeyframes>(
  config: T,
): CssKeyframes {
  return config
}

export const keyframes: CssKeyframes = defineKeyframes({
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeInDown: {
    '0%': {
      opacity: '0',
      transform: 'translateY(-20px)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
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
