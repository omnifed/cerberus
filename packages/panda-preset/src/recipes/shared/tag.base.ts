export const base = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: 'xs',
  justifyContent: 'center',
  lineHeight: '0',
  textTransform: 'capitalize',
  userSelect: 'none',
  whiteSpace: 'nowrap',
}

export const shapeVariants = {
  pill: {
    fontWeight: 400,
    h: '1.5rem',
    pxi: '2',
    rounded: 'full',
    textStyle: 'label-sm',
  },
  square: {
    fontWeight: 600,
    h: '1.625rem',
    pxi: '3',
    rounded: 'md',
    textStyle: 'label-md',
  },
}

export const outlined = {
  bgColor: 'inherit',
  border: '1.5px solid',
  borderColor: 'colorPalette.border.initial',
  color: 'colorPalette.text.100',
  _warningPalette: {
    color: 'colorPalette.text.initial',
  },
  _pagePalette: {
    color: 'page.text.initial',
  },
}
