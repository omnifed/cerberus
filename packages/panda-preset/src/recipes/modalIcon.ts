import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import { modalIconBase } from './shared/modal.base'

/**
 * This module contains the modalIcon recipe.
 * @module
 */

// For some reason, we need to declare this in the variants object
const color = 'colorPalette.text.200'

/**
 * Styles for the ModalIcon component
 * @definition [Modal docs](https://cerberus.digitalu.design/react/confirm-modal)
 */
export const modalIcon: RecipeConfig<RecipeVariantRecord> = defineRecipe({
  className: 'modal-icon',
  description: 'The styles for ModalIcon components',

  base: modalIconBase,

  variants: {
    palette: {
      action: {
        colorPalette: 'action',
        cerbGradient: 'purple',
        color,
      },
      success: {
        colorPalette: 'success',
        cerbGradient: 'green',
        color,
      },
      danger: {
        colorPalette: 'danger',
        bgColor: 'danger.surface.initial',
        color,
      },
    },
  },

  defaultVariants: {
    palette: 'action',
  },
})
