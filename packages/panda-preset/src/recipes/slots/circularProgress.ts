import { progressAnatomy } from '@ark-ui/react'
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
  slots: [...progressAnatomy.keys(), 'infoGroup'],
  jsx: [
    // primitives
    'CircularProgressRoot',
    'CircularProgressLabel',
    'CircularProgressValueText',
    'CircularProgressCircle',
    'CircularProgressCircleTrack',
    'CircularProgressCircleRange',
    // components
    'CircularProgress',
  ],

  base: {
    root: {
      alignSelf: 'stretch',
      containerType: 'inline-size',
      flex: 1,
      m: '4px',
      position: 'relative',
      '--size': '100%',
      '--thickness': '1em',
    },
    circle: {
      bgColor: 'var(--fill-color)',
      display: 'block',
      rounded: 'full',
    },
    circleTrack: {
      stroke: 'page.bg.100',
    },
    circleRange: {
      stroke: 'dataViz.progress.start',
      strokeLinecap: 'round',
      transition: 'all 0.5s ease',
      _isComplete: {
        stroke: 'dataViz.progress.complete',
      },
    },
    infoGroup: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      inset: 0,
      justifyContent: 'center',
      position: 'absolute',
      userSelect: 'none',
    },
    valueText: {
      color: 'page.text.300',
      fontFamily: 'mono',
      fontSize: '1.5em',
    },
    label: {
      color: 'page.text.100',
      fontSize: '0.75em',
      textStyle: 'heading-sm',
    },
  },

  variants: {
    usage: {
      filled: {
        root: {
          '--fill-color': '{colors.page.bg.initial}',
        },
      },
      transparent: {
        root: {
          '--fill-color': 'transparent',
        },
      },
    },
  },

  defaultVariants: {
    usage: 'filled',
  },
})
