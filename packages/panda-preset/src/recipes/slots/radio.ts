import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { radioGroupAnatomy } from '@ark-ui/anatomy'
import { focusStates, formStates } from '../shared/states'
import { checkbox } from './checkbox'

/**
 * This module contains the radio recipe.
 * @module
 */

/**
 * Styles for the RadioGroup components
 */
export const radioGroup: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'radio-group',
  description: 'The styles for the Radio components',
  slots: radioGroupAnatomy.keys(),
  jsx: [
    'RadioGroupRoot',
    'RadioGroupLabel',
    'RadioGroupIndicator',
    'RadioGroupItem',
    'RadioGroupItemText',
    'RadioGroupItemControl',
    'RadioGroupItemHiddenInput',
    'RadioGroup',
    'Radio',
  ],

  base: {
    root: {
      display: 'flex',
      gap: 'md',
    },
    item: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'inline-flex',
      gap: 'sm',
      position: 'relative',
      _disabled: formStates._disabled,
    },
    itemControl: {
      colorPalette: 'action',
      alignItems: 'center',
      border: '1px solid',
      borderColor: 'colorPalette.border.initial',
      bgColor: 'page.surface.initial',
      cursor: 'radio',
      display: 'inline-flex',
      flexShrink: 0,
      justifyContent: 'center',
      rounded: 'full',
      verticalAlign: 'top',
      ...focusStates,
      _checked: {
        bg: 'radial-gradient(circle, var(--cerberus-colors-action-border-initial) 35%, var(--cerberus-colors-page-surface-initial) 35%)',
      },
      _userInvalid: {
        colorPalette: 'danger',
        _checked: {
          bgColor: 'colorPalette.bg.initial',
          bg: 'radial-gradient(circle, var(--cerberus-colors-danger-border-initial) 35%, var(--cerberus-colors-danger-bg-initial) 35%)',
        },
      },
      _disabled: {
        ...formStates._disabled,
        colorPalette: 'page',
        borderColor: 'colorPalette.border.100',
      },
    },
    itemText: checkbox.base!.label,
  },

  variants: {
    orientation: {
      horizontal: {
        root: {
          alignItems: 'center',
          flexDirection: 'row',
        },
      },
      vertical: {
        root: {
          flexDirection: 'column',
        },
      },
    },
    size: {
      sm: {
        itemControl: {
          h: '1rem',
          w: '1rem',
        },
        itemText: checkbox.variants!.size.sm.label,
      },
      md: {
        itemControl: {
          h: '1.25rem',
          w: '1.25rem',
        },
        itemText: checkbox.variants!.size.md.label,
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
    size: 'sm',
  },
})
