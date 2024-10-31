import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import {
  DANGER,
  INFO,
  PAGE,
  SUCCESS,
  WARNING,
  nonActionPalettes,
} from '../shared/palettes'
import { focusStates } from '../shared/states'

/**
 * This module contains the admonition recipe.
 * @module
 */

function getAdmonitionPalette(
  palette: 'page' | 'info' | 'success' | 'warning' | 'danger',
) {
  const statePalette = nonActionPalettes[palette]
  return {
    root: statePalette,
    heading: statePalette,
    description: statePalette,
  }
}

/**
 * Styles for the Admonition component
 * @definition [FileStatus docs](https://cerberus.digitalu.design/react/admonition)
 */
export const admonition: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'admonition',
  slots: ['root', 'heading', 'description'],
  jsx: ['Admonition', 'AdmonitionHeading', 'AdmonitionDescription'],

  base: {
    root: {
      // combine with hstack
      color: 'colorPalette.text.100',
      p: 'lg',
      rounded: 'sm',
    },
    heading: {
      color: 'inherit',
      mb: 'xs',
      textStyle: 'heading-xs',
    },
    description: {
      color: 'inherit',
      textStyle: 'body-sm',
      textWrap: 'pretty',
      '& > :is(a)': {
        rounded: 'sm',
        textStyle: 'link',
        ...focusStates,
      },
    },
  },

  variants: {
    palette: {
      [PAGE]: getAdmonitionPalette(PAGE),
      [INFO]: getAdmonitionPalette(INFO),
      [SUCCESS]: getAdmonitionPalette(SUCCESS),
      [WARNING]: getAdmonitionPalette(WARNING),
      [DANGER]: getAdmonitionPalette(DANGER),
    },
    usage: {
      filled: {
        root: {
          bgColor: 'colorPalette.surface.100',
        },
      },
      outlined: {
        root: {
          bgColor: 'page.surface.initial',
          border: '1px solid',
          borderColor: 'colorPalette.border.initial',
        },
      },
    },
  },

  compoundVariants: [
    {
      palette: 'page',
      usage: 'filled',
      css: {
        root: {
          bgColor: 'page.surface.200',
          color: 'page.text.initial',
        },
      },
    },
    {
      palette: 'page',
      usage: 'outlined',
      css: {
        root: {
          bgColor: 'page.surface.100',
          borderColor: 'page.border.200',
          color: 'page.text.initial',
        },
      },
    },
  ],

  defaultVariants: {
    palette: 'page',
    usage: 'filled',
  },
})
