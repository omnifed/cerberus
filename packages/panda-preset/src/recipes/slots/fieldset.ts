import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { fieldsetAnatomy } from '@ark-ui/anatomy'
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
  className: 'accordion',
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
      color: 'page.text.initial',
      fontWeight: 'medium',
      _disabled: {
        ...formStates._disabled,
        color: 'page.text.100',
      },
    },
    helperText: {
      color: 'page.text.initial',
      textStyle: 'body-md',
    },
    errorText: field.base!.errorText,
  },
})
