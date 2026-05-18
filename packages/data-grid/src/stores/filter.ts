import {
  type Accessor,
  createComputed,
  createSignal,
  Setter,
} from '@cerberus-design/signals'
import { OPERATORS } from '../const'
import type { BaseFilterState, ColumnFilterState } from '../types'
import { applyFilterOperator } from '../utils'
import { DataStore } from './data'

export interface FilterStore<TData> {
  showColFilter: Accessor<boolean>
  globalFilter: Accessor<BaseFilterState>
  colFilters: Accessor<ColumnFilterState>
  filteredRows: Accessor<TData[]>
  // Actions
  setGlobalFilter: Setter<BaseFilterState>
  setColFilter: Setter<ColumnFilterState>
  setShowColFilter: Setter<boolean>
}

export function createFilterStore<TData>(
  dataStore: DataStore<TData>,
): FilterStore<TData> {
  const [showColFilter, setShowColFilter] = createSignal<boolean>(false)
  const [globalFilter, setGlobalFilter] = createSignal<BaseFilterState>({
    operator: OPERATORS.contains,
    value: null,
  })
  const [colFilters, setColFilters] = createSignal<ColumnFilterState>({
    active: [],
    filters: {},
    editing: null,
  })

  const filteredRows = createComputed(() => {
    const rows = dataStore.rows()
    const columns = dataStore.columns()
    let result = [...rows]
    const gFilter = globalFilter()
    const cFilters = colFilters()

    if (cFilters.active.length > 0) {
      result = result.filter((row) => {
        return cFilters.active.every((filterId) => {
          const col = columns.find((c) => c.id === filterId)
          const filter = cFilters.filters[filterId]

          if (!col || !col.filterable) return true

          const customFn =
            typeof col.original.features?.filter === 'function'
              ? col.original.features.filter
              : undefined

          if (customFn) {
            return customFn(row, col.id, filter.value)
          }

          const cellValue = col.getValue(row)
          return applyFilterOperator(cellValue, filter.value, filter.operator)
        })
      })
    }

    // B. Apply Global Filter (Fuzzy search across all filterable columns)
    if (gFilter.value) {
      result = result.filter((row) => {
        return columns.some((col) => {
          if (!col.filterable) return false
          const cellValue = col.getValue(row)
          return applyFilterOperator(cellValue, gFilter.value, gFilter.operator)
        })
      })
    }

    return result
  })

  return {
    showColFilter,
    globalFilter,
    colFilters,
    filteredRows,

    setGlobalFilter,
    setColFilter: (val) => setColFilters(val),
    setShowColFilter,
  }
}
