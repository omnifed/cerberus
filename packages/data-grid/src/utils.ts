import { ROW_SIZES, type RowSize, SM } from './const'
import type { RowSizeOptions } from './types'

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
