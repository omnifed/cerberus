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
      overflow: 'hidden',
      position: 'relative',
      rounded: 'var(--progress-bar-radii)',
      w: 'full',
    },
    bar: {
      gradient: 'progress',
      h: 'full',
      left: 0,
      position: 'absolute',
      top: 0,
      transitionProperty: 'background-image,width',
      transitionDuration: '250ms',
      transitionTimingFunction: 'ease',
      willChange: 'width',
      rounded: 'var(--progress-bar-radii)',
      zIndex: 'decorator',
      _isComplete: {
        gradient: 'complete !important',
      },
      _motionSafe: {
        _indeterminate: {
          animationName: 'rubberBand',
          animationIterationCount: 'infinite',
          animationDuration: '1.25s',
          animationTimingFunction: 'ease-in-out',
        },
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
      block: {
        root: {
          '--progress-bar-radii': '0',
        },
      },
      rounded: {
        root: {
          '--progress-bar-radii': '1.5rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    usage: 'rounded',
  },
})
