import { pinInputAnatomy } from '@ark-ui/react'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { focusStates, formStates } from '../shared/states'
import { inputStyles } from './field'

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
      bgColor: inputStyles.bgColor,
      border: inputStyles.border,
      borderColor: inputStyles.borderColor,
      color: inputStyles.color,
      display: 'flex',
      h: 'var(--pin-input-h)',
      justifyContent: 'center',
      outline: 'none',
      rounded: inputStyles.rounded,
      textAlign: 'center',
      transitionDuration: inputStyles.transitionDuration,
      transitionProperty: inputStyles.transitionProperty,
      w: 'var(--pin-input-w)',
      _hover: inputStyles._hover,
      _invalid: inputStyles._userInvalid,
      ...focusStates,
      ...formStates,
    },
  },

  variants: {
    size: {
      md: {
        root: {
          '--pin-input-h': '3.125rem',
          '--pin-input-w': '2.5rem',
        },
        input: {
          textStyle: 'heading-md',
        },
      },
      lg: {
        root: {
          '--pin-input-h': '5rem',
          '--pin-input-w': '4rem',
        },
        input: {
          textStyle: 'heading-xl',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
