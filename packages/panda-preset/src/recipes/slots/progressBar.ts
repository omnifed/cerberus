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
      w: 'full',
    },
    bar: {
      gradient: 'charon-dark',
      h: 'full',
      left: 0,
      position: 'absolute',
      top: 0,
      willChange: 'width',
      zIndex: 'decorator',
      ['&:is([data-complete=true])']: {
        bgImage: 'initial !important',
        bgColor: 'success.bg.initial',
      },
      _motionSafe: {
        transitionProperty: 'background-color,background-image,width',
        transitionDuration: '250ms',
        transitionTimingFunction: 'ease',
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
          rounded: 'initial',
        },
        bar: {
          rounded: 'initial',
        },
      },
      rounded: {
        root: {
          rounded: '1.5rem',
        },
        bar: {
          rounded: '1.5rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    usage: 'rounded',
  },
})
