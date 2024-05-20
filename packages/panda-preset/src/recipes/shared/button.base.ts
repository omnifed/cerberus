import { focusStates, formStates } from './states'
import { action, danger } from './palettes'

export const buttonBase = {
  alignItems: 'center',
  display: 'inline-flex',
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

export const nonTextStates = {
  color: 'colorPalette.text.initial',
  _hover: {
    bgColor: 'colorPalette.bg.hover',
    _disabled: {
      bgColor: 'colorPalette.bg.initial',
    },
  },
  _active: {
    bgColor: 'colorPalette.bg.active',
  },
}

export const textUsage = {
  color: 'colorPalette.text.100',
  _hover: {
    bgColor: 'colorPalette.bg.hover',
  },
  _active: {
    color: 'colorPalette.text.initial',
  },
  _disabled: {
    _active: {
      color: 'colorPalette.text.100',
    },
  },
}

export const filledUsage = {
  bgColor: 'colorPalette.bg.initial',
  ...nonTextStates,
  _active: {
    bgColor: 'colorPalette.bg.active',
  },
}

export const buttonPalettes = {
  action,
  danger,
}
