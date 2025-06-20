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
      display: 'inline-flex',
      position: 'relative',
      '--thickness': 'calc(var(--size) * 0.13)',
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
      fontSize: 'var(--value-text-size)',
      fontWeight: '450',
      lineHeight: '1',
    },
    label: {
      color: 'page.text.100',
      fontFamily: 'sans',
      fontSize: 'var(--label-size)',
      fontWeight: 'var(--label-weight)',
      lineHeight: '1.2',
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
    size: {
      xs: {
        root: {
          '--size': '6rem',
          '--value-text-size': '1.25rem',
          '--label-size': '0.75rem',
          '--label-weight': '400',
        },
      },
      sm: {
        root: {
          '--size': '10.25rem',
          '--value-text-size': '1.5rem',
          '--label-size': '0.75rem',
          '--label-weight': '400',
        },
      },
      md: {
        root: {
          '--size': '12rem',
          '--value-text-size': '2rem',
          '--label-size': '1rem',
          '--label-weight': '600',
        },
      },
      lg: {
        root: {
          '--size': '15.5rem',
          '--value-text-size': '2.625rem',
          '--label-size': '1.25rem',
          '--label-weight': '600',
        },
      },
    },
  },

  defaultVariants: {
    usage: 'filled',
    size: 'xs',
  },
})
