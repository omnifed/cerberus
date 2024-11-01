import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { inputSizes, input as inputStyles } from '../shared/input.base'

/**
 * This module contains the input recipe.
 * @module
 */

/**
 * Styles for the Input component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Input docs](https://cerberus.digitalu.design/react/input)
 */
export const input: Partial<SlotRecipeConfig> = defineSlotRecipe({
  slots: ['root', 'input', 'icon', 'startIcon'],
  className: 'input',

  base: {
    root: {
      h: '3.7rem',
      position: 'relative',
      py: '1',
      w: 'full',
    },
    input: {
      ...inputStyles,
      _placeholderShown: {
        color: 'page.text.100',
      },
      _startIcon: {
        display: 'inline-block',
        paddingInlineStart: '7',
      },
    },
    icon: {
      position: 'absolute',
      right: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'decorator',
      _peerInvalid: {
        color: 'danger.text.100',
      },
    },
    startIcon: {
      position: 'absolute',
      left: '0.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'decorator',
    },
  },

  variants: {
    size: inputSizes,
  },

  defaultVariants: {
    size: 'lg',
  },
})
