export const SCOPE = 'data-grid'
export const DEFAULT_COL_H = 40

export const PARTS = {
  TOOLBAR: 'toolbar',
  ROOT: 'root',
  VIEWPORT: 'viewport',
  HEAD_CELL: 'head-cell',
  ROW: 'row',
  CELL: 'row-cell',
  FOOTER: 'footer',
}

// Pagination
export const SM_PAGE_SIZE = 25
export const MD_PAGE_SIZE = 50
export const LG_PAGE_SIZE = 100

export const DEFAULT_PAGE_SIZES = [SM_PAGE_SIZE, MD_PAGE_SIZE, LG_PAGE_SIZE]

// Row sizing

export const XS = 'xs'
export const SM = 'sm'
export const MD = 'md'
export const LG = 'lg'
export const XL = 'xl'

export type RowSize = typeof XS | typeof SM | typeof MD | typeof LG | typeof XL

type RowSizeData = {
  items: RowSize[]
  results: Record<RowSize, number> // in pixels
}

export const ROW_SIZES: RowSizeData = {
  items: [XS, SM, MD, LG, XL],
  results: {
    [XS]: 32,
    [SM]: 40,
    [MD]: 48,
    [LG]: 56,
    [XL]: 64,
  },
}
