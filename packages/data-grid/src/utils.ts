import {
  DEFAULT_PAGE_IDX,
  DEFAULT_PAGE_SIZES,
  OPERATORS,
  ROW_SIZES,
  type RowSize,
  SM,
  SM_PAGE_SIZE,
} from './const'
import type { FilterOperator, PaginationOptions, RowSizeOptions } from './types'

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

export function determinePageSize(options?: boolean | PaginationOptions): number {
  if (!options) return 0

  if (typeof options === 'boolean' && options === true) {
    return SM_PAGE_SIZE
  }

  if (options.customRange?.length) {
    return options.customRange[0]
  }

  return options.pageSize ?? SM_PAGE_SIZE
}

export function determinePageIndex(options?: boolean | PaginationOptions): number {
  if (!options) return DEFAULT_PAGE_IDX

  if (typeof options === 'boolean' && options === true) {
    return DEFAULT_PAGE_IDX
  }

  return options.defaultPage ?? DEFAULT_PAGE_IDX
}

export function determinePageRange(options?: boolean | PaginationOptions): number[] {
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

export function applyFilterOperator(
  cellValue: unknown,
  filterValue: unknown,
  operator: FilterOperator = OPERATORS.contains,
): boolean {
  // Ignore empty filters
  if (filterValue === undefined || filterValue === null || filterValue === '')
    return true
  if (cellValue === undefined || cellValue === null) return false

  const cellStr = String(cellValue).toLowerCase()
  const filterStr = String(filterValue).toLowerCase()

  switch (operator) {
    case OPERATORS.contains:
      return cellStr.includes(filterStr)
    case OPERATORS.equals:
      // Loose equality for cross-type matching (e.g., number 1 vs string '1')
      return cellValue == filterValue || cellStr === filterStr
    case OPERATORS.starts_with:
      return cellStr.startsWith(filterStr)
    case OPERATORS.ends_with:
      return cellStr.endsWith(filterStr)
    case OPERATORS.greater_than:
      return Number(cellValue) > Number(filterValue)
    case OPERATORS.less_than:
      return Number(cellValue) < Number(filterValue)
    case OPERATORS.between:
      // Assumes filterValue is an array: [min, max]
      if (!Array.isArray(filterValue)) return false
      const val = Number(cellValue)
      return val >= Number(filterValue[0]) && val <= Number(filterValue[1])
    case OPERATORS.includes_some:
      // Assumes filterValue is an array of selected options
      if (!Array.isArray(filterValue)) return false
      return filterValue.includes(cellValue)
    default:
      return true
  }
}
