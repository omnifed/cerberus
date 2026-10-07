import { type Accessor, createComputed } from '@cerberus-design/signals'
import { DEFAULT_PAGE_IDX } from '../const'
import type { ColumnFilterState, GridOptions, SortDirection } from '../types'
import { determineInitialCount } from '../utils'
import type { PaginationStore } from './pagination'

export type SSRStore = {
  isServerPaginated: Accessor<boolean>
  handleSortDelegate: (colId: string, direction: SortDirection, multi?: boolean) => void
  handleFilterDelegate: (filters: ColumnFilterState) => void
}

export function createSSRStore<TData>(
  options: GridOptions<TData>,
  paginationStore: PaginationStore,
): SSRStore {
  const initOptions = options.pagination

  const isServerPaginated = createComputed(() =>
    Boolean(determineInitialCount(initOptions)),
  )

  return {
    isServerPaginated,

    handleSortDelegate: (colId, direction, multi) => {
      if (!isServerPaginated()) return

      paginationStore.setPageIndex(DEFAULT_PAGE_IDX)

      if (typeof initOptions === 'object' && initOptions.onSortChange) {
        initOptions.onSortChange(colId, direction, multi)
      }
    },

    handleFilterDelegate: (filters) => {
      if (!isServerPaginated()) return

      paginationStore.setPageIndex(DEFAULT_PAGE_IDX)

      if (typeof initOptions === 'object' && initOptions.onFilterChange) {
        initOptions.onFilterChange(filters)
      }
    },
  }
}
