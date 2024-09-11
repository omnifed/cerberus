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
          cerbGradient: 'purple',
          color: 'colorPalette.text.inverse',
        },
      },
      processing: {
        icon: {
          ...action,
          cerbGradient: 'purple',
          color: 'colorPalette.text.inverse',
        },
      },
      done: {
        icon: {
          ...success,
          cerbGradient: 'green',
          color: 'colorPalette.text.200',
        },
      },
      error: {
        icon: {
          ...danger,
          bgColor: 'colorPalette.surface.initial',
          color: 'colorPalette.text.200',
        },
      },
    },
  },

  defaultVariants: {
    status: 'todo',
  },
})
