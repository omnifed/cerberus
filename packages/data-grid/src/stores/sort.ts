import {
  type Accessor,
  batch,
  createComputed,
  createSignal,
} from '@cerberus-design/signals'
import type { SortDirection, SortState } from '../types'
import { type DataStore } from './data'
import { type FilterStore } from './filter'
import { SSRStore } from './ssr'
import { PaginationStore } from './pagination'

type SortStore<TData> = {
  sorting: Accessor<SortState[]>
  sortedRows: Accessor<TData[]>
  // Actions
  setSort: (colId: string, direction: 'asc' | 'desc' | null, multi?: boolean) => void
  toggleSort: (colId: string, multi?: boolean) => void
}

type Options<TData> = {
  columns: DataStore<TData>['columns']
  filteredRows: FilterStore<TData>['filteredRows']
  ssrStore: SSRStore
}

export function createSortStore<TData>(options: Options<TData>): SortStore<TData> {
  const [sorting, setSorting] = createSignal<SortState[]>([])

  function commit(
    next: SortState[],
    colId: string,
    direction: SortDirection,
    multi: boolean | undefined,
  ): void {
    batch(() => {
      setSorting(next)
      options.ssrStore.resetPage()
    })
    options.ssrStore.handleSortDelegate(colId, direction, multi)
  }

  const sortedRows = createComputed(() => {
    if (options.ssrStore.isServerPaginated()) return options.filteredRows()

    const filteredRows = options.filteredRows()
    const currentRows = [...filteredRows]
    const sortState = sorting()
    const cols = options.columns()

    if (sortState.length === 0) return currentRows

    return currentRows.sort((a, b) => {
      for (const sort of sortState) {
        const col = cols.find((c) => c.id === sort.id)
        if (!col) continue

        const valA = col.getValue(a) as TData[keyof TData]
        const valB = col.getValue(b) as TData[keyof TData]

        if (valA === valB) continue // Move to next tie-breaker if equal

        // Use custom comparator if provided
        let comparison = 0
        const customComparator =
          typeof col.original.features?.sort === 'object'
            ? col.original.features.sort.comparator
            : undefined

        if (customComparator) {
          comparison = customComparator(valA, valB)
        } else {
          // Fallback: Default JS Comparison
          comparison = valA > valB ? 1 : -1
        }

        // Invert the result if we are sorting descending
        return sort.desc ? -comparison : comparison
      }
      return 0
    })
  })

  return {
    sorting,
    sortedRows,

    setSort: (colId, direction, multi = false) => {
      const current = sorting()

      if (direction === null) {
        commit(
          current.filter((s) => s.id !== colId),
          colId,
          direction,
          multi,
        )
        return
      }

      const newSort: SortState = { id: colId, desc: direction === 'desc' }
      if (!multi) {
        commit([newSort], colId, direction, multi)
        return
      }

      const hasExisting = current.some((s) => s.id === colId)
      const next = hasExisting
        ? current.map((s) => (s.id === colId ? newSort : s))
        : [...current, newSort]

      commit(next, colId, direction, multi)
    },

    toggleSort: (colId, multi) => {
      const current = sorting()
      const existing = current.find((s) => s.id === colId)
      const nextSort: SortState = { id: colId, desc: existing ? !existing.desc : true }

      // Non-multi toggle on an existing column keeps other sorts
      const next = existing
        ? current.map((s) => (s.id === colId ? nextSort : s))
        : multi
          ? [...current, nextSort]
          : [nextSort]

      commit(next, colId, nextSort.desc ? 'desc' : 'asc', multi)
    },
  }
}
