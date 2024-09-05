import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'

/**
 * This module contains the progressBar recipe.
 * @module
 */

/**
 * Styles for the ProgressBar component
 * @definition [ProgressBar docs](https://cerberus.digitalu.design/react/progress-bar)
 */
export const progressBar: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'progressBar',
  slots: ['root', 'bar'],

  base: {
    root: {
      bgColor: 'page.bg.100',
      position: 'relative',
      w: 'full',
    },
    bar: {
      cerbGradient: 'purple-100',
      h: 'full',
      left: 0,
      position: 'absolute',
      top: 0,
      zIndex: 'decorator',
      _indeterminate: {
        _motionSafe: {},
      },
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          h: '0.75rem',
        },
      },
      md: {
        root: {
          h: '1.5rem',
        },
      },
    },
    usage: {
      block: {},
      rounded: {
        root: {
          rounded: 'full',
        },
        bar: {
          rounded: 'full',
        },
      },
    },
  },

  defaultVariants: {},
})
