import { formStates } from './states'
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
  cursor: 'pointer',
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
  _disabled: {
    ...formStates._disabled,
  },
}

export const sharpRadii = {
  borderTopRightRadius: 'lg',
  borderBottomLeftRadius: 'lg',
}

export const nonTextStates = {
  color: text200,
  _hover: {
    _notDisabled: {
      bgColor: 'colorPalette.ghost.hover',
    },
  },
  _selected: {
    bgColor: 'colorPalette.ghost.active',
  },
  _enabled: {
    _active: {
      bgColor: 'colorPalette.ghost.active',
    },
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
    _notDisabled: {
      bgColor: 'colorPalette.ghost.hover',
    },
  },
  _enabled: {
    _active: {
      bgColor: 'colorPalette.ghost.active',
      color: 'colorPalette.text.active',
    },
  },
  _disabled: {
    bgColor: 'transparent',
    _active: {
      color: textInitial,
    },
    _hover: {
      bgColor: 'transparent',
    },
  },
}

export const filledUsage = {
  bgColor: bgInitial,
  color: textInitial,
  _hover: {
    _notDisabled: {
      bgColor: 'colorPalette.bg.hover',
    },
  },
  _enabled: {
    _active: {
      bgColor: 'colorPalette.bg.active',
    },
  },
}

export const outlinedUsage = {
  ...nonTextStates,
  bgColor: 'colorPalette.ghost.initial',
  border: '2px solid',
  borderColor: 'colorPalette.border.initial',
}

export const outlinedSubtleUsage = {
  ...outlinedUsage,
  border: '1px solid',
  _selected: {
    bgColor: 'action.bg.active',
    color: 'action.text.initial',
    _hover: {
      color: 'action.text.200',
    },
  },
}

export const notifyStyles = {
  position: 'relative',
  _after: {
    alignItems: 'center',
    bgColor: 'danger.surface.200',
    color: 'danger.text.200',
    content: 'attr(data-notify-count)',
    display: 'inline-flex',
    fontFamily: 'mono',
    fontSize: '0.625rem',
    h: '1rem',
    insetBlockEnd: 'auto',
    insetInlineStart: 'auto',
    insetInlineEnd: 0,
    justifyContent: 'center',
    pos: 'absolute',
    paddingInlineStart: 'calc(0.25rem + 2px)',
    paddingInlineEnd: 'xs',
    rounded: 'full',
    translate: '50% -50%',
  },
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
        _notDisabled: {
          color: 'colorPalette.text.inverse',
        },
      },
    },
  },
  {
    palette: 'danger',
    usage: 'ghost',
    css: {
      color: 'colorPalette.text.initial',
      _hover: {
        _notDisabled: {
          color: 'colorPalette.text.100',
        },
      },
    },
  },
]
