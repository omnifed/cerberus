import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { sliderAnatomy } from '@ark-ui/react'
import { focusStates } from '../shared/states'

/**
 * This module contains the slider recipe.
 * @module
 */

/**
 * Styles for the slider family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/slider)
 * @definition [Slider docs](https://cerberus.digitalu.design/react/slider)
 */
export const slider: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'slider',
  slots: sliderAnatomy.keys(),
  jsx: [],

  base: {},
})
