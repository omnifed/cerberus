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
  determineDefaultPage,
  determineInitialCount,
  determinePageIndex,
  determinePageRange,
  determinePageSize,
} from '../utils'

export type PaginationStore = {
  defaultPage: number | void
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
  const initOptions = options.pagination

  const hasOptions = typeof initOptions === 'object'
  const optionActions = {
    onPageChange: hasOptions && initOptions.onPageChange,
    onPageSizeChange: hasOptions && initOptions.onPageSizeChange,
  }
  const onPageChange = optionActions.onPageChange
  const defaultPage = determineDefaultPage(initOptions)

  const [pageIndex, setPageIndex] = createSignal<number>(
    determinePageIndex(initOptions),
  )
  const [pageSize, setPageSize] = createSignal<number>(determinePageSize(initOptions))
  const [pageRange] = createSignal<number[]>(determinePageRange(initOptions))

  const isServerPaginated = createComputed<boolean>(() =>
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
    defaultPage,
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
