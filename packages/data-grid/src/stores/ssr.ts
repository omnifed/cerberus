import { DEFAULT_PAGE_IDX } from '../const'
import type { ColumnFilterState, GridOptions, SortDirection } from '../types'
import { PaginationStore } from './pagination'

export type SSRStore = {
  isServerPaginated: PaginationStore['isServerPaginated']
  handleSortDelegate: (colId: string, direction: SortDirection, multi?: boolean) => void
  handleFilterDelegate: (filters: ColumnFilterState) => void
  resetPage: () => void
}

export function createSSRStore<TData>(
  options: GridOptions<TData>,
  paginationStore: PaginationStore,
): SSRStore {
  const initOptions = options.pagination

  return {
    isServerPaginated: paginationStore.isServerPaginated,

    handleSortDelegate: (colId, direction, multi) => {
      if (!paginationStore.isServerPaginated()) return
      if (typeof initOptions === 'object' && initOptions.onSortChange) {
        initOptions.onSortChange(colId, direction, multi)
      }
    },

    handleFilterDelegate: (filters) => {
      if (!paginationStore.isServerPaginated()) return
      if (typeof initOptions === 'object' && initOptions.onFilterChange) {
        initOptions.onFilterChange(filters)
      }
    },

    resetPage: () => {
      if (!paginationStore.isServerPaginated()) return
      if (paginationStore.pageIndex() === DEFAULT_PAGE_IDX) return
      paginationStore.setPageIndex(DEFAULT_PAGE_IDX)
    },
  }
}
