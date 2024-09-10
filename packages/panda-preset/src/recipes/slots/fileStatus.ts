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
    },
    icon: {
      color: 'colorPalette.text.initial',
      p: 2,
    },
  },

  variants: {
    palette: {
      action: {
        icon: {
          colorPalette: 'action',
          cerGradient: 'purple',
          color: 'colorPalette.text.200',
        },
      },
      success: {
        icon: {
          colorPalette: 'success',
          cerbGradient: 'green',
        },
      },
      danger: {
        icon: {
          colorPalette: 'danger',
          bgColor: 'colorPalette.surface.initial',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'action',
  },
})
