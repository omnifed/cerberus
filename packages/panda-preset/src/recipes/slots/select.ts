import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { inputSizes } from '../shared/input.base'
import { focusStates, formStates } from '../shared/states'

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
  slots: ['root', 'input', 'iconStack', 'stateIcon', 'arrowIcon'],

  base: {
    root: {
      bgColor: 'page.surface.initial',
      border: '1px solid',
      borderColor: 'action.border.100',
      color: 'page.text.initial',
      h: '3.7rem',
      overflow: 'hidden',
      position: 'relative',
      py: '1',
      rounded: 'sm',
      transitionProperty: 'border-color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-in-out',
      w: 'full',
    },
    input: {
      appearance: 'none',
      bottom: 0,
      color: 'page.text.initial',
      h: 'full',
      left: 0,
      position: 'absolute',
      pxi: '4',
      right: 0,
      top: 0,
      w: 'full',
      zIndex: 'decorator',
      ...focusStates,
      ...formStates,
      _userInvalid: {
        bgColor: 'page.surface.100',
        borderColor: 'danger.border.initial',
      },
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
      zIndex: 'base',
    },
    stateIcon: {
      _invalid: {
        color: 'danger.text.200',
      },
    },
    arrowIcon: {
      color: 'action.text.inverse',
    },
  },

  variants: {
    size: inputSizes,
  },

  defaultVariants: {
    size: 'lg',
  },
})
