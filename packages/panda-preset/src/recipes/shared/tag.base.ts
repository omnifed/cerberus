import { neutral, action, info, success, warning, danger } from './palettes'

export const tagBase = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: '2',
  justifyContent: 'center',
  lineHeight: '0',
  userSelect: 'none',
  whiteSpace: 'nowrap',
}

export const filledUsage = {
  bgColor: 'colorPalette.bg.initial',
  color: 'colorPalette.text.initial',
}

export const tagPalettes = {
  neutral,
  action,
  info,
  success,
  warning,
  danger,
}
