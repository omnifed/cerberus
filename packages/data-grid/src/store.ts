import { signal, computed } from '@preact/signals-core'
import type { GridOptions, GridStore, SortState } from './types'

/**
 * Internal signal-based Store engine driving the state. We expose this in
 * the public Context API.
 */
export function createGridStore<TData>(
  options: GridOptions<TData>,
): GridStore<TData> {
  // 1. Core State
  const rows = signal(options.data)
  const globalFilter = signal('')
  const sorting = signal<SortState[]>(options.initialState?.sorting ?? [])
  const pageIndex = signal(options.initialState?.pagination?.defaultPage ?? 0)
  const pageSize = signal(options.initialState?.pagination?.pageSize ?? 25)

  // 2. Initialize Columns
  const initialCols = options.columns.map((col) => ({
    id: col.id,
    width: signal(col.width ?? 150),
    pinned: signal(
      col.features?.pinning?.defaultPosition ??
        options.initialState?.defaultPinnedCols?.[col.id] ??
        false,
    ),
    isVisible: signal(true),
    getValue: col.accessor,
    original: col,
    // feature flags
    sortable: Boolean(col.features?.sort),
    pinnable: Boolean(col.features?.pinning),
    filterable: Boolean(col.features?.filter),
  }))
  const columns = signal(initialCols)

  // 3. Derived: Filtered & Sorted Rows
  const processedRows = computed(() => {
    let result = [...rows.value]
    const filter = globalFilter.value.toLowerCase()
    const sortState = sorting.value

    // A. Filtering
    if (filter) {
      result = result.filter((row) => {
        // Simple search across all filterable columns
        return columns.value.some((col) => {
          if (!col.filterable) return false
          const val = String(col.getValue(row)).toLowerCase()
          return val.includes(filter)
        })
      })
    }

    // B. Sorting
    if (sortState.length > 0) {
      result.sort((a, b) => {
        for (const sort of sortState) {
          const col = columns.value.find((c) => c.id === sort.id)
          if (!col) continue

          const valA = col.getValue(a)
          const valB = col.getValue(b)

          if (valA === valB) continue

          // Basic comparison (extend for dates/numbers)
          const comparison = valA > valB ? 1 : -1
          return sort.desc ? -comparison : comparison
        }
        return 0
      })
    }

    return result
  })

  // 4. Derived: Pagination
  const rowCount = computed(() => processedRows.value.length)
  const pageCount = computed(() => Math.ceil(rowCount.value / pageSize.value))

  const visibleRows = computed(() => {
    const start = pageIndex.value * pageSize.value
    return processedRows.value.slice(start, start + pageSize.value)
  })

  // 5. Layout Engine (CSS Variables)
  const rootCssVars = computed(() => {
    const vars: Record<string, string> = {}
    const cols = columns.value
    let leftOffset = 0
    let rightOffset = 0

    // Pass 1: Widths & Left Pins
    cols.forEach((col) => {
      const w = col.width.value
      vars[`--col-${col.id}-width`] = `${w}px`

      if (col.pinned.value === 'left') {
        vars[`--col-${col.id}-left`] = `${leftOffset}px`
        leftOffset += w
      }
    })

    // Pass 2: Right Pins (Reverse)
    ;[...cols].reverse().forEach((col) => {
      if (col.pinned.value === 'right') {
        vars[`--col-${col.id}-right`] = `${rightOffset}px`
        rightOffset += col.width.value
      }
    })

    // Add total width for scrolling container
    vars['--total-grid-width'] =
      `${cols.reduce((acc, c) => acc + c.width.value, 0)}px`

    return vars
  })

  const totalWidth = computed(() =>
    columns.value.reduce((acc, c) => acc + c.width.value, 0),
  )

  // 6. Actions
  return {
    rows,
    columns,
    sorting,
    globalFilter,
    pageIndex,
    pageSize,
    visibleRows,
    rootCssVars,
    totalWidth,
    pageCount,
    rowCount,

    updateData: (newData) => {
      rows.value = newData
    },

    resizeColumn: (colId, delta) => {
      const col = columns.value.find((c) => c.id === colId)
      if (col) {
        // Enforce min width
        col.width.value = Math.max(
          col.original.minWidth ?? 50,
          col.width.value + delta,
        )
      }
    },

    togglePinned: (colId, state) => {
      const col = columns.value.find((c) => c.id === colId)
      if (col) col.pinned.value = state ?? false
    },

    toggleSort: (colId, multi) => {
      const current = sorting.value
      const exists = current.find((s) => s.id === colId)
      if (exists) {
        if (exists.desc) {
          sorting.value = current.filter((s) => s.id !== colId) // Remove
        } else {
          sorting.value = current.map((s) =>
            s.id === colId ? { ...s, desc: true } : s,
          ) // Asc -> Desc
        }
      } else {
        const newSort = { id: colId, desc: false }
        sorting.value = multi ? [...current, newSort] : [newSort]
      }
    },

    setPage: (p) => {
      const max = Math.max(0, pageCount.value - 1)
      pageIndex.value = Math.max(0, Math.min(p, max))
    },

    setGlobalFilter: (val) => {
      globalFilter.value = val
      pageIndex.value = 0 // Reset to first page on filter
    },
  }
}
