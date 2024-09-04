import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { inputSizes, input as inputStyles } from '../shared/input.base'

/**
 * This module contains the select recipe.
 * @module
 */

/**
 * Styles for the Select components
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 */
export const select: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'select',
  slots: ['root', 'input', 'iconStack', 'stateIcon'],

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
    iconStack: {
      position: 'absolute',
      right: '4',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 'decorator',
    },
    stateIcon: {
      _invalid: {
        color: 'danger.text.200',
      },
    },
  },

  variants: {
    size: inputSizes,
  },

  defaultVariants: {
    size: 'lg',
  },
})
