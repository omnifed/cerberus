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
        cerbGradient: 'purple',
        color: 'action.navigation.initial',
      },
      danger: {
        bgColor: 'danger.surface.initial',
        color: 'danger.text.100',
      },
    },
  },

  defaultVariants: {
    palette: 'action',
  },
})
