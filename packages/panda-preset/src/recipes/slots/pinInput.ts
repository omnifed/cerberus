import { pinInputAnatomy } from '@ark-ui/react'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'

/**
 * This module contains the pinInput recipe.
 * @module
 */

/**
 * Styles for the PinInput family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/pin-input)
 */
export const pinInput: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'pin-input',
  slots: pinInputAnatomy.keys(),
  jsx: [
    // primitives
    'PinInputRoot',
    'PinInputLabel',
    'PinInputControl',
    'PinInputInput',
    // abstractions
    'PinInput',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      w: 'fit-content',
    },
    label: {
      color: 'page.text.initial',
      fontWeight: 'medium',
      textStyle: 'body-sm',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
    input: {
      alignItems: 'center',
      appearance: 'none',
      bgColor: 'page.surface.initial',
      border: '1px solid',
      borderColor: 'action.border.100',
      color: 'page.text.initial',
      display: 'flex',
      h: '12',
      justifyContent: 'center',
      outline: 'none',
      rounded: 'sm',
      textAlign: 'center',
      textStyle: 'heading-sm',
      transitionDuration: 'fast',
      transitionProperty: 'border-color, box-shadow',
      transitionTimingFunction: 'default',
      w: '12',
      _hover: {
        borderColor: 'action.border.initial',
      },
      _focus: {
        borderColor: 'action.border.focus',
        boxShadow: '0 0 0 3px token(colors.action.border.focus/20)',
      },
      _invalid: {
        borderColor: 'danger.border.initial',
        _focus: {
          borderColor: 'danger.border.initial',
          boxShadow: '0 0 0 3px token(colors.danger.border.initial/20)',
        },
      },
      _disabled: {
        bgColor: 'page.surface.100',
        borderColor: 'action.border.100',
        color: 'page.text.100',
        cursor: 'not-allowed',
        _hover: {
          borderColor: 'action.border.100',
        },
      },
    },
  },

  variants: {
    size: {
      sm: {
        input: {
          h: '8',
          w: '8',
          textStyle: 'body-sm',
        },
      },
      md: {
        input: {
          h: '10',
          w: '10',
          textStyle: 'body-md',
        },
      },
      lg: {
        input: {
          h: '12',
          w: '12',
          textStyle: 'heading-sm',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
