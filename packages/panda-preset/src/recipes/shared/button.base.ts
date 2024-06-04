import { focusStates, formStates } from './states'
import { action, danger } from './palettes'

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

const sharpRadii = {
  borderTopRightRadius: 'lg',
  borderBottomLeftRadius: 'lg',
}

export const nonTextStates = {
  ...sharpRadii,
  color: 'colorPalette.text.200',
  _hover: {
    bgColor: 'colorPalette.bg.100.hover',
    _disabled: {
      bgColor: 'colorPalette.bg.100.initial',
    },
  },
  _active: {
    bgColor: 'colorPalette.bg.100.active',
  },
}

export const textUsage = {
  ...sharpRadii,
  bgColor: 'transparent',
  border: 'none',
  color: 'colorPalette.text.alternate',
  transitionProperty: 'background-color, color',
  transitionDuration: 'fast',
  transitionTimingFunction: 'ease-in-out',
  _hover: {
    bgColor: 'colorPalette.bg.100.hover',
  },
  _active: {
    bgColor: 'colorPalette.bg.100.active',
    color: 'colorPalette.text.initial',
  },
  _disabled: {
    bgColor: 'transparent',
    _active: {
      color: 'colorPalette.text.alternate',
    },
  },
}

export const filledUsage = {
  ...sharpRadii,
  bgColor: 'colorPalette.bg.initial',
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

export const buttonPalettes = {
  action,
  danger,
}
