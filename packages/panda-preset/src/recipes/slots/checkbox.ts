import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { input } from '../shared/input.base'
import { formStates } from '../shared/states'

/**
 * This module contains the checkbox recipe.
 * @module
 */

/**
 * Styles for the Checkbox component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Checkbox docs](https://cerberus.digitalu.design/react/checkbox)
 */
export const checkbox: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'checkbox',
  slots: ['root', 'input', 'icon'],

  base: {
    root: {
      flexShrink: '0',
      h: '4',
      position: 'relative',
      w: '4',
    },
    input: {
      ...input,
      _checked: {
        bgColor: 'action.bg.initial',
      },
      _disabled: {
        ...input._disabled,
        bgColor: 'page.bg.200',
      },
    },
    icon: {
      color: 'action.text.initial',
      position: 'absolute',
      left: '0',
      top: '0',
      zIndex: 'decorator',
      _peerInvalid: {
        color: 'danger.text.inverse',
      },
      _peerDisabled: {
        opacity: formStates._disabled.opacity,
      },
    },
  },

  variants: {
    size: {
      md: {
        root: {
          h: '1rem',
          w: '1rem',
        },
      },
      lg: {
        root: {
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
