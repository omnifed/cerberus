import { focusStates, formStates } from './states'
import { action, danger } from './palettes'

const bgInitial = 'colorPalette.bg.initial'
const textInitial = 'colorPalette.text.initial'

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
  color: 'colorPalette.text.200',
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
  colorPalette: 'secondaryAction',

  bgColor: 'transparent',
  border: 'none',
  color: textInitial,
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
  border: '4px solid',
  borderColor: 'colorPalette.border.initial',
}

export const buttonPalettes = {
  action,
  danger: {
    ...danger,
    _hover: {
      color: 'danger.text.inverse',
    },
  },
}
