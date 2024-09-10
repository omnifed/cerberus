import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'

/**
 * This module contains the fileStatus recipe.
 * @module
 */

/**
 * Styles for the FileStatus component
 * @definition [FileStatus docs](https://cerberus.digitalu.design/react/file-status)
 */
export const fileStatus: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'fileStatus',
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
      color: 'colorPalette.text.initial',
      p: 2,
    },
  },

  variants: {
    status: {
      todo: {
        icon: {
          colorPalette: 'action',
          cerGradient: 'purple',
          color: 'colorPalette.text.200',
        },
      },
      processing: {
        icon: {
          colorPalette: 'action',
          cerGradient: 'purple',
          color: 'colorPalette.text.200',
        },
      },
      done: {
        icon: {
          colorPalette: 'success',
          cerbGradient: 'green',
        },
      },
      error: {
        icon: {
          colorPalette: 'danger',
          bgColor: 'colorPalette.surface.initial',
        },
      },
    },
  },

  defaultVariants: {
    status: 'todo',
  },
})
