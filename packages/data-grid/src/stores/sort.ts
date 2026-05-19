import { type Accessor, createComputed, createSignal } from '@cerberus-design/signals'
import type { SortState } from '../types'
import { type DataStore } from './data'
import { type FilterStore } from './filter'

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
}

export function createSortStore<TData>(options: Options<TData>): SortStore<TData> {
  const [sorting, setSorting] = createSignal<SortState[]>([])

  const sortedRows = createComputed(() => {
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
        setSorting(current.filter((s) => s.id !== colId))
        return
      }

      const newSort = { id: colId, desc: direction === 'desc' }

      if (multi) {
        const existingIndex = current.findIndex((s) => s.id === colId)
        if (existingIndex >= 0) {
          const next = [...current]
          next[existingIndex] = newSort
          setSorting(next)
        } else {
          setSorting([...current, newSort])
        }
      } else {
        // Single sort clears all other sorts
        setSorting([newSort])
      }
    },

    toggleSort: (colId, multi) => {
      const current = sorting()
      const exists = current.findIndex((s) => s.id === colId) !== -1

      const updatedSort = current.map((s) => {
        if (s.id === colId) {
          return { ...s, desc: !s.desc }
        }
        return s
      })

      if (exists) {
        setSorting(multi ? [...current, ...updatedSort] : [...updatedSort])
      } else {
        const newSort = { id: colId, desc: true }
        setSorting(multi ? [...current, newSort] : [newSort])
      }
    },
  }
}
