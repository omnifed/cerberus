import { nonActionPalettes } from './palettes'

export const tagBase = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: '2',
  justifyContent: 'center',
  lineHeight: '0',
  textTransform: 'capitalize',
  userSelect: 'none',
  whiteSpace: 'nowrap',
}

export const filledUsage = {
  bgColor: 'colorPalette.surface.200',
  color: 'colorPalette.text.200',
}

export const tagPalettes = nonActionPalettes
