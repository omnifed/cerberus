import { focusStates, formStates } from './states'
import { actionPalettes, statePalettes } from './palettes'
import type {
  Pretty,
  RecipeCompoundSelection,
  RecipeCompoundVariant,
  RecipeVariantRecord,
} from '@pandacss/types'

/**
 * This module contains shared button styles.
 * @module buttonBase
 */

const bgInitial = 'colorPalette.bg.initial'
const textInitial = 'colorPalette.text.initial'
const text200 = 'colorPalette.text.200'

export const buttonBase = {
  alignItems: 'center',
  display: 'inline-flex',
  fontWeight: '600',
  gap: '2',
  justifyContent: 'center',
  lineHeight: '0',
  outline: 'none',
  textDecoration: 'none',
  transitionProperty: 'background-color, color',
  transitionDuration: 'fast',
  transitionTimingFunction: 'ease-in-out',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  ...focusStates,
  ...formStates,
}

export const sharpRadii = {
  borderTopRightRadius: 'lg',
  borderBottomLeftRadius: 'lg',
}

export const nonTextStates = {
  color: text200,
  _hover: {
    bgColor: 'colorPalette.ghost.hover',
    _disabled: {
      bgColor: bgInitial,
    },
  },
  _active: {
    bgColor: 'colorPalette.ghost.active',
  },
}

export const textUsage = {
  bgColor: 'transparent',
  border: 'none',
  color: text200,
  transitionProperty: 'background-color, color',
  transitionDuration: 'fast',
  transitionTimingFunction: 'ease-in-out',
  _hover: {
    bgColor: 'colorPalette.ghost.hover',
  },
  _active: {
    bgColor: 'colorPalette.ghost.active',
    color: 'colorPalette.text.active',
  },
  _disabled: {
    bgColor: 'transparent',
    _active: {
      color: textInitial,
    },
  },
}

export const filledUsage = {
  bgColor: bgInitial,
  color: textInitial,
  _hover: {
    bgColor: 'colorPalette.bg.hover',
    _disabled: {
      bgColor: bgInitial,
    },
  },
  _active: {
    bgColor: 'colorPalette.bg.active',
  },
}

export const outlinedUsage = {
  ...nonTextStates,
  bgColor: 'colorPalette.ghost.initial',
  border: '2px solid',
  borderColor: 'colorPalette.border.initial',
}

export const buttonPalettes = {
  ...actionPalettes,
  ...statePalettes,
}

export const buttonCompoundVariants: Pretty<
  RecipeCompoundVariant<RecipeCompoundSelection<RecipeVariantRecord>>
>[] = [
  {
    palette: 'danger',
    usage: 'filled',
    css: {
      color: 'colorPalette.text.200',
      _hover: {
        color: 'colorPalette.text.inverse',
      },
    },
  },
]
