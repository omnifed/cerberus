import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { fieldsetAnatomy } from '@ark-ui/react'
import { formStates } from '../shared/states'
import { field } from './field'
// import { focusStates } from '../shared/states'

/**
 * This module contains the fieldset recipe.
 * @module
 */

/**
 * Styles for the fieldset family components
 * @definition [Fieldset docs](https://cerberus.digitalu.design/react/accordion)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/fieldset)
 */
export const fieldset: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'fieldset',
  slots: fieldsetAnatomy.keys(),
  jsx: [
    'FieldsetRoot',
    'FieldsetLegend',
    'FieldsetHelperText',
    'FieldsetErrorText',
    'Fieldset',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      width: 'full',
    },
    legend: {
      _disabled: {
        ...formStates._disabled,
        color: 'page.text.100',
      },
    },
    errorText: field.base!.errorText,
  },

  variants: {
    usage: {
      fieldGroup: {
        legend: field.base!.label,
        helperText: {
          color: 'page.text.initial',
          textStyle: 'body-xs',
        },
      },
      formSection: {
        legend: {
          color: 'page.text.200',
          textStyle: 'heading-sm',
        },
        helperText: {
          color: 'page.text.200',
          paddingBlockStart: 'xs',
          textStyle: 'body-md',
        },
      },
    },
  },

  defaultVariants: {
    usage: 'fieldGroup',
  },
})
