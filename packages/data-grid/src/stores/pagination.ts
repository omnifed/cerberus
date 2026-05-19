import { type PageDetails } from '@cerberus-design/react'
import {
  type Accessor,
  createComputed,
  createSignal,
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

type PaginationStore = {
  currentPageRange: Accessor<{ start: number; end: number }>
  pageIndex: Accessor<number>
  pageSize: Accessor<number>
  pageRange: Accessor<number[]>
  isServerPaginated: Accessor<boolean>
  // Actions
  setPage: (details: PageDetails) => void
  setPageIndex: Setter<number>
  setPageSize: (size: number) => void
}

export function createPaginationStore<TData>(
  options: GridOptions<TData>,
): PaginationStore {
  const [pageIndex, setPageIndex] = createSignal<number>(
    determinePageIndex(options.initialState?.pagination),
  )
  const [pageSize, setPageSize] = createSignal<number>(
    determinePageSize(options.initialState?.pagination),
  )
  const [pageRange] = createSignal<number[]>(
    determinePageRange(options.initialState?.pagination),
  )
  const [isServerPaginated] = createSignal<boolean>(
    Boolean(determineInitialCount(options.initialState?.pagination)),
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
      options.onPageChange?.(details)
    },

    setPageIndex,

    setPageSize: (size) => {
      if (isServerPaginated()) {
        // Reset to first page on size change to reset pagination
        setPageIndex(DEFAULT_PAGE_IDX)
      }
      setPageSize(size)
    },
  }
}
