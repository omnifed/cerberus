import {
  defineRecipe,
  type RecipeConfig,
  type RecipeVariantRecord,
} from '@pandacss/dev'
import { modalIconBase } from './shared/modal.base'
import { action, danger, success } from './shared/palettes'

/**
 * This module contains the modalIcon recipe.
 * @module
 */

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
        ...action,
        cerbGradient: 'purple',
      },
      success: {
        ...success,
        cerbGradient: 'green',
      },
      danger: {
        ...danger,
        bgColor: 'danger.surface.initial',
      },
    },
  },

  defaultVariants: {
    palette: 'action',
  },
})
