import { createComputed } from '@cerberus-design/signals'
import {
  createDataStore,
  createFilterStore,
  createLayoutStore,
  createPaginationStore,
  createSortStore,
} from './stores'
import type { GridOptions, GridStore } from './types'
import { determineInitialCount } from './utils'

/**
 * Internal signal-based Store engine driving the state. We expose this in
 * the public Context API.
 */
export function createGridStore<TData>(options: GridOptions<TData>): GridStore<TData> {
  // 1. Core Data
  const dataStore = createDataStore(options)

  // 2. Feature Stores
  const paginationStore = createPaginationStore(options)
  const filterStore = createFilterStore(dataStore)
  const sortStore = createSortStore({
    columns: dataStore.columns,
    filteredRows: filterStore.filteredRows,
  })

  // 3. Layout
  const layoutStore = createLayoutStore({
    ...options,
    orderedColumns: dataStore.orderedColumns,
    columns: dataStore.columns,
    rowSize: dataStore.rowSize,
  })

  // Derived pagination - Ark handles the rest
  const rowCount = createComputed(() => {
    return (
      determineInitialCount(options?.initialState?.pagination) ??
      filterStore.filteredRows().length
    )
  })
  const pageCount = createComputed(() =>
    Math.ceil(rowCount() / paginationStore.pageSize()),
  )

  const visibleRows = createComputed(() => {
    const size = paginationStore.pageSize()
    const rows = sortStore.sortedRows()

    if (paginationStore.isServerPaginated()) return rows

    if (size) {
      const ctx = paginationStore.currentPageRange()
      return rows.slice(ctx.start, ctx.end)
    }

    return rows
  })

  return {
    ...dataStore,
    ...paginationStore,
    ...filterStore,
    ...sortStore,
    ...layoutStore,
    rowCount,
    pageCount,
    visibleRows,
  }
}
