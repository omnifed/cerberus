import { PageSizeChangeDetails, type PageDetails } from '@cerberus-design/react'
import {
  createComputed,
  createSignal,
  type Accessor,
  type Setter,
} from '@cerberus-design/signals'
import { DEFAULT_PAGE_IDX } from '../const'
import { GridOptions } from '../types'
import {
  determineInitialCount,
  determinePageIndex,
  determinePageRange,
  determinePageSize,
} from '../utils'

export type PaginationStore = {
  currentPageRange: Accessor<{ start: number; end: number }>
  pageIndex: Accessor<number>
  pageSize: Accessor<number>
  pageRange: Accessor<number[]>
  isServerPaginated: Accessor<boolean>
  // Actions
  setPage: (details: PageDetails) => void
  setPageIndex: Setter<number>
  setPageSize: (details: PageSizeChangeDetails) => void
}

export function createPaginationStore<TData>(
  options: GridOptions<TData>,
): PaginationStore {
  const initOptions = options.initialState?.pagination || options.pagination

  const hasOptions = typeof initOptions === 'object'
  const optionActions = {
    onPageChange: hasOptions ? initOptions.onPageChange : undefined,
    onPageSizeChange: hasOptions ? initOptions.onPageSizeChange : undefined,
    onSortChange: hasOptions ? initOptions.onSortChange : undefined,
  }
  const onPageChange = options.onPageChange || optionActions.onPageChange

  const [pageIndex, setPageIndex] = createSignal<number>(
    determinePageIndex(initOptions),
  )
  const [pageSize, setPageSize] = createSignal<number>(determinePageSize(initOptions))
  const [pageRange] = createSignal<number[]>(determinePageRange(initOptions))
  const [isServerPaginated] = createSignal<boolean>(
    Boolean(determineInitialCount(initOptions)),
  )

  const currentPageRange = createComputed<{ start: number; end: number }>(() => {
    const idx = pageIndex()
    const size = pageSize()
    return {
      start: (idx - 1) * size,
      end: idx * size,
    }
  })

  return {
    currentPageRange,
    pageIndex,
    pageSize,
    pageRange,
    isServerPaginated,

    setPage: (details) => {
      setPageIndex(details.page)
      if (onPageChange) onPageChange(details)
    },

    setPageIndex,

    setPageSize: (details) => {
      if (isServerPaginated()) {
        // Reset to first page on size change to reset pagination
        setPageIndex(DEFAULT_PAGE_IDX)
      }
      setPageSize(details.pageSize)
      if (optionActions.onPageSizeChange) optionActions.onPageSizeChange(details)
    },
  }
}
