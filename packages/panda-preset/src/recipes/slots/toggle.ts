import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { focusStates, formStates } from '../shared/states'

const toggleTransitions = {
  _motionSafe: {
    transitionProperty: 'transform, color, box-shadow',
    transitionDuration: '150ms',
    transitionTimingFunction: 'ease-in',
  },
  _checked: {
    transform: 'translateX(164%) scale(1)',
  },
}
const SM_RADII = 'full'
const LG_RADII = '0.75rem'

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
export const toggle: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'toggle',
  description: 'The styles for the Toggle component',
  slots: ['track', 'container', 'input', 'thumb'],

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
        _groupHover: {
          bgColor: 'action.bg.hover',
        },
      },
    },
    input: {
      appearance: 'none',
      h: 'full',
      position: 'absolute',
      w: 'full',
      zIndex: 'decorator',
      ...focusStates,
      ...formStates,
    },
    thumb: {
      // ...Combine with vstack
      bgColor: 'white',
      color: 'white',
      transform: 'translateX(12%) scale(0.85)',
      _motionSafe: toggleTransitions._motionSafe,
      _peerChecked: {
        ...toggleTransitions._checked,
        color: 'action.text.200',
      },
      _peerDisabled: {
        opacity: '0.5',
      },
      _groupHover: {
        boxShadow: '0px 0px 8px 0px rgba(22, 1, 38, 0.4)',
      },
    },
  },

  variants: {
    size: {
      sm: {
        track: {
          h: '1.5rem',
          rounded: SM_RADII,
          w: '3.25rem',
        },
        input: {
          rounded: SM_RADII,
        },
        thumb: {
          h: '1rem',
          rounded: SM_RADII,
          w: '1rem',
          _peerChecked: {
            transform: 'translateX(200%) scale(1)',
          },
        },
      },
      lg: {
        track: {
          h: '2.5rem',
          rounded: LG_RADII,
          w: '5rem',
        },
        input: {
          rounded: LG_RADII,
        },
        thumb: {
          h: '1.75rem',
          rounded: LG_RADII,
          w: '1.75rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
