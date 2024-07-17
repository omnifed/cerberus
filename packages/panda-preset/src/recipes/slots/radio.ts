import { defineSlotRecipe } from '@pandacss/dev'
import { focusStates } from '../shared/states'

export const radio = defineSlotRecipe({
  className: 'radio',
  description: 'The styles for the Radio component',
  slots: ['root', 'input'],

  base: {
    root: {
      rounded: 'lg',
      p: '1',
      ...focusStates,
    },
    input: {
      appearance: 'none',
      bgColor: 'inherit',
      border: '1px solid',
      borderColor: 'action.border.initial',
      rounded: 'full',
      _motionSafe: {
        transitionProperty: 'background-color, background',
        transitionDuration: '150ms',
        transitionTimingFunction: 'ease-in-out',
      },
      _checked: {
        bg: 'radial-gradient(circle, var(--cerberus-colors-action-border-initial) 35%, var(--cerberus-colors-neutral-surface-initial) 35%)',
      },
      _disabled: {
        cursor: 'not-allowed',
        borderColor: 'action.border.100',
      },
      _userInvalid: {
        borderColor: 'danger.border.initial',
        _checked: {
          bgColor: 'danger.bg.initial',
          bg: 'radial-gradient(circle, var(--cerberus-colors-danger-border-initial) 35%, var(--cerberus-colors-danger-bg-initial) 35%)',
        },
      },
      _groupHover: {
        bgColor: 'action.bg.100.hover',
        _checked: {
          bgColor: 'action.bg.initial',
        },
      },
    },
  },

  variants: {
    size: {
      sm: {
        input: {
          h: '1rem',
          w: '1rem',
        },
      },
      md: {
        input: {
          h: '1.25rem',
          w: '1.25rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
