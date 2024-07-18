import { defineSlotRecipe } from '@pandacss/dev'
import { focusStates } from '../shared/states'

/**
 * This module contains the toggle recipe.
 * @module
 */

/**
 * Styles for the Toggle component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Input docs](https://cerberus.digitalu.design/react/toggle)
 */
export const toggle = defineSlotRecipe({
  className: 'toggle',
  description: 'The styles for the Toggle component',
  slots: ['track', 'input', 'thumb'],

  base: {
    track: {
      // ...Combine with hstack
      bgColor: 'neutral.surface.300',
      position: 'relative',
      _motionSafe: {
        transitionProperty: 'background-color',
        transitionDuration: '150ms',
      },
      _checked: {
        bgColor: 'action.bg.initial',
      },
    },
    input: {
      appearance: 'none',
      h: 'full',
      opacity: 0,
      position: 'absolute',
      w: 'full',
      zIndex: 'hide',
    },
    thumb: {
      // ...Combine with vstack
      bgColor: 'white',
      color: 'white',
      transform: 'translateX(12%) scale(0.8)',
      zIndex: 'decorator',
      _motionSafe: {
        transitionProperty: 'transform, color',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in',
      },
      ...focusStates,

      _peerChecked: {
        color: 'action.text.200',
        transform: 'translateX(164%) scale(1)',
      },
      _peerDisabled: {
        opacity: '0.5',
      },
    },
  },

  variants: {
    size: {
      sm: {
        track: {
          h: '1.5rem',
          rounded: 'full',
          w: '3.25rem',
        },
        thumb: {
          h: '1rem',
          rounded: 'full',
          w: '1rem',
        },
      },
      lg: {
        track: {
          h: '2.5rem',
          rounded: '0.75rem',
          w: '5rem',
        },
        thumb: {
          h: '1.75rem',
          rounded: '0.75rem',
          w: '1.75rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
