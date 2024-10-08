import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { action, danger, success } from '../shared/palettes'

/**
 * This module contains the fileStatus recipe.
 * @module
 */

/**
 * Styles for the FileStatus component
 * @definition [FileStatus docs](https://cerberus.digitalu.design/react/file-status)
 */
export const fileStatus: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'file-status',
  slots: ['root', 'icon'],

  base: {
    root: {
      // combine with hstack
      bgColor: 'page.surface.100',
      border: '2px solid',
      borderColor: 'page.border.initial',
      p: 4,
      rounded: 'sm',
      w: 'full',
    },
    icon: {
      // combine with circle
      p: 2,
    },
  },

  variants: {
    status: {
      todo: {
        icon: {
          ...action,
          gradient: 'charon-dark',
        },
      },
      processing: {
        icon: {
          ...action,
          gradient: 'charon-dark',
        },
      },
      done: {
        icon: {
          ...success,
          gradient: 'thanatos-light',
        },
      },
      error: {
        icon: {
          ...danger,
          gradient: 'hades-dark',
        },
      },
    },
  },

  defaultVariants: {
    status: 'todo',
  },
})
