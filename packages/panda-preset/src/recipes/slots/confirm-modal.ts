import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { modalBase, modalHeading } from '../shared/modal.base'

/**
 * This module contains the confirmModal recipe.
 * @module
 */

/**
 * Styles for the Confirm Modal component
 * @definition [ARIA Dialog Modal](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
 * @definition [Confirm Modal docs](https://cerberus.digitalu.design/react/confirm-modal)
 */
export const confirmModal: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'confirm-modal',
  description: 'The styles for the Confirm Modal component',
  slots: ['dialog', 'icon', 'heading', 'description', 'confirm', 'cancel'],
  jsx: ['ConfirmModal', 'ConfirmModalIcon'],

  base: {
    dialog: {
      ...modalBase,
      p: '8',
      userSelect: 'none',
      md: {
        w: '35.25rem',
      },
    },
    icon: {
      mxi: 'auto',
      p: '2',
    },
    heading: modalHeading,
    description: {
      color: 'page.text.initial',
    },
  },

  variants: {
    palette: {
      action: {
        icon: {
          cerbGradient: 'purple',
          color: 'action.navigation.initial',
        },
      },
      danger: {
        icon: {
          bgColor: 'danger.surface.initial',
          color: 'danger.text.100',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'action',
  },
})
