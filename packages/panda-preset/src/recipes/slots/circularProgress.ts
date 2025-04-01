import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'

/**
 * This module contains the circularProgress recipe.
 * @module
 */

/**
 * Styles for the circularProgress component
 * @definition [circularProgress docs](https://cerberus.digitalu.design/react/progress-bar)
 */
export const circularProgress: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'circular-progress',
  slots: ['root', 'group', 'base', 'track', 'path', 'title', 'description'],

  base: {
    root: {
      alignSelf: 'stretch',
      containerType: 'inline-size',
      flex: 1,
      m: '4px',
      position: 'relative',
    },
    group: {
      display: 'block',
      rounded: 'full',
      transition: 'all 0.5s ease',
    },
    base: {
      fill: 'page.surface.initial',
    },
    track: {
      stroke: 'page.bg.100',
    },
    path: {
      stroke: 'url(#gradient)',
      transition: 'stroke-dashoffset, stroke 0.5s ease',
      _isComplete: {
        stroke: 'success.bg.initial',
      },
    },
    title: {
      fill: 'page.text.initial',
      fontFamily: 'mono',
      fontSize: '1.25rem',
    },
    description: {
      fill: 'page.text.100',
      fontSize: '0.5rem',
      fontWeight: 600,
      '&:is([data-fallback])': {
        textStyle: 'heading-xs',
        fontSize: '0.75rem',
      },
    },
  },
})
