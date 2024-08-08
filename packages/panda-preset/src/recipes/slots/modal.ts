import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { modalBase, modalHeading, modalIconBase } from '../shared/modal.base'

/**
 * This module contains the modal recipe.
 * @module
 */

/**
 * Styles for the Modal components
 * @definition [ARIA Dialog Modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
 * @definition [Confirm Modal docs](https://cerberus.digitalu.design/react/confirm-modal)
 */
export const modal: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'modal',
  description: 'The styles for Modal components',
  slots: ['dialog', 'icon', 'heading', 'description'],
  jsx: ['ConfirmModal', 'PromptModal'],

  base: {
    dialog: {
      ...modalBase,
      p: '8',
      userSelect: 'none',
      md: {
        w: '35.25rem',
      },
    },
    icon: modalIconBase,
    heading: modalHeading,
    description: {
      color: 'page.text.initial',
    },
  },

  variants: {},

  defaultVariants: {},
})
