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
      position: 'relative',
    },
    input: {
      ...input,
      position: 'absolute',
      top: '0',
      left: '0',
      pxi: '0',
      zIndex: 'base',
      _checked: {
        bgColor: 'action.bg.initial',
        _userInvalid: {
          bgColor: 'danger.bg.initial',
          borderColor: input._userInvalid.borderColor,
        },
      },
      _disabled: {
        ...input._disabled,
        bgColor: 'page.bg.200',
      },
      _userInvalid: {
        ...input._userInvalid,
      },
    },
    icon: {
      bottom: '0',
      color: 'action.text.initial',
      display: 'inline-block',
      zIndex: 'decorator',
      w: 'full',
      _peerInvalid: {
        color: 'danger.text.initial',
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
