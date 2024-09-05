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
