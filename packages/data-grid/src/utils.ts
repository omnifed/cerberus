import {
  DEFAULT_PAGE_IDX,
  DEFAULT_PAGE_SIZES,
  ROW_SIZES,
  type RowSize,
  SM,
  SM_PAGE_SIZE,
} from './const'
import type { PaginationOptions, RowSizeOptions } from './types'

export function determineRowHeight(rowSize: RowSizeOptions = SM): number {
  const prebuiltSizes = ROW_SIZES.items

  if (typeof rowSize === 'number') {
    return rowSize
  }

  if (prebuiltSizes.includes(rowSize as RowSize)) {
    const size = ROW_SIZES.results[rowSize as keyof typeof ROW_SIZES.results]
    return size
  }

  console.error(
    'Unknown row size provided to Data Grid. The rowSize prop requires a number to determine pixel-based value.',
    rowSize,
  )
  return 0
}

// Pagination

export function determinePageSize(
  options?: boolean | PaginationOptions,
): number {
  if (!options) return 0

  if (typeof options === 'boolean' && options === true) {
    return SM_PAGE_SIZE
  }

  if (options.customRange?.length) {
    return options.customRange[0]
  }

  return options.pageSize ?? SM_PAGE_SIZE
}

export function determinePageIndex(
  options?: boolean | PaginationOptions,
): number {
  if (!options) return DEFAULT_PAGE_IDX

  if (typeof options === 'boolean' && options === true) {
    return DEFAULT_PAGE_IDX
  }

  return options.defaultPage ?? DEFAULT_PAGE_IDX
}

export function determinePageRange(
  options?: boolean | PaginationOptions,
): number[] {
  if (!options) return DEFAULT_PAGE_SIZES

  if (typeof options === 'boolean' && options === true) {
    return DEFAULT_PAGE_SIZES
  }

  return options.customRange ?? DEFAULT_PAGE_SIZES
}

export function determineInitialCount(
  options?: boolean | PaginationOptions,
): number | undefined {
  if (!options) return undefined

  if (typeof options === 'boolean' && options === true) {
    return undefined
  }

  return options?.count ?? undefined
}
