import { type Accessor, createComputed } from '@cerberus-design/signals'
import type { ColumnFilterState, GridOptions, SortDirection } from '../types'
import { determineInitialCount } from '../utils'

export type SSRStore = {
  isServerPaginated: Accessor<boolean>
  handleSortDelegate: (colId: string, direction: SortDirection, multi?: boolean) => void
  handleFilterDelegate: (filters: ColumnFilterState) => void
}

export function createSSRStore<TData>(options: GridOptions<TData>): SSRStore {
  const initOptions = options.pagination

  const isServerPaginated = createComputed<boolean>(() =>
    Boolean(determineInitialCount(initOptions)),
  )

  return {
    isServerPaginated,

    handleSortDelegate: (colId, direction, multi) => {
      if (!isServerPaginated()) return
      if (typeof initOptions === 'object' && initOptions.onSortChange) {
        console.log('Calling event', { colId, direction, multi })
        initOptions.onSortChange(colId, direction, multi)
      }
    },

    handleFilterDelegate: (filters) => {
      if (!isServerPaginated()) return
      if (typeof initOptions === 'object' && initOptions.onFilterChange) {
        initOptions.onFilterChange(filters)
      }
    },
  }
}
