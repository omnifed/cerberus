import { numberInputAnatomy } from '@ark-ui/react'
import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { inputStyles } from './field'

const trigger = {
  alignItems: 'center',
  borderColor: 'action.border.100',
  color: 'action.text.inverse',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  transitionDuration: 'normal',
  transitionProperty: 'background, border-color, color',
  transitionTimingFunction: 'default',
  _hover: {
    bgColor: 'page.bg.100',
    color: 'action.text.100',
  },
  _active: {
    bgColor: 'action.ghost.hover',
    color: 'action.text.200',
  },
  _disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
    _hover: {
      bgColor: 'transparent',
    },
  },
}

/**
 * This module contains the numberInput recipe.
 * @module
 */

/**
 * Styles for the NumberInput component
 */
export const numberInput: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'number-input',
  slots: numberInputAnatomy.keys(),
  jsx: [
    'NumberInput',
    // primitives
    'NumberInputRoot',
    'NumberInputInput',
    'NumberInputControl',
    'NumberInputDecrementTrigger',
    'NumberInputIncrementTrigger',
    'NumberInputScrubber',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      w: 'fit-content',
    },
    input: {
      background: 'transparent',
      border: 'none',
      color: 'page.text.initial',
      gridRow: 'span 2 / span 2',
      h: 'var(--number-input-h)',
      outline: 'none',
      ps: 'md',
      w: 'full',
      _placeholder: {
        color: 'page.text.100',
      },
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    control: {
      ...inputStyles,
      display: 'grid',
      divideX: '1px',
      gridTemplateColumns: '1fr 2.75rem',
      gridTemplateRows: '1fr 1fr',
      overflow: 'hidden',
      paddingInline: 'initial',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, box-shadow',
      transitionTimingFunction: 'default',
      w: '10.75rem',
    },
    decrementTrigger: { ...trigger, borderTopWidth: '1px' },
    incrementTrigger: trigger,
    scrubber: {},
  },

  variants: {
    size: {
      sm: {
        root: {
          '--number-input-h': '2rem',
        },
      },
      md: {
        root: {
          '--number-input-h': '2.5rem',
        },
      },
      lg: {
        root: {
          '--number-input-h': '3rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
