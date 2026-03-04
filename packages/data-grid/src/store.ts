import { signal, computed } from '@preact/signals-core'
import type { GridOptions, GridStore, InternalColumn, SortState } from './types'

/**
 * Internal signal-based Store engine driving the state. We expose this in
 * the public Context API.
 */
export function createGridStore<TData>(
  options: GridOptions<TData>,
): GridStore<TData> {
  const rows = signal(options.data)
  const containerWidth = signal(0)

  const globalFilter = signal('')
  const sorting = signal<SortState[]>([])

  const pageIndex = signal(options.initialState?.pagination?.defaultPage ?? 0)
  const pageSize = signal(options.initialState?.pagination?.pageSize ?? 0)

  const initialCols: InternalColumn<TData>[] = options.columns.map((col) => {
    const pinnable = Boolean(col.features?.pinning)
    const filterable = Boolean(col.features?.filter)
    const sortable = Boolean(col.features?.sort)

    const hasFeatures = pinnable || filterable || sortable
    const minWForFeatures = 100

    let finalWidth = col.width ?? 150
    if (hasFeatures && col.width && col.width < minWForFeatures) {
      finalWidth = minWForFeatures
    }

    return {
      id: col.id,
      isFlex: signal(col.width === undefined),
      isVisible: signal(true),
      original: col,
      pinned: signal(col.features?.pinning?.defaultPosition ?? false),
      width: signal(finalWidth),
      getValue: col.accessor,
      // feature flags
      pinnable,
      filterable,
      sortable,
    }
  })
  const columns = signal(initialCols)

  // Processed with data-intensive features
  const processedRows = computed(() => {
    let result = [...rows.value]
    const filter = globalFilter.value.toLowerCase()
    const sortState = sorting.value

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

    if (sortState.length > 0) {
      result.sort((a, b) => {
        for (const sort of sortState) {
          const col = columns.value.find((c) => c.id === sort.id)
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
    }

    return result
  })

  // Derived pagination - Ark handles the rest
  const rowCount = computed(() => processedRows.value.length)
  const pageCount = computed(() => Math.ceil(rowCount.value / pageSize.value))

  const orderedColumns = computed(() => {
    const left: InternalColumn<TData>[] = []
    const center: InternalColumn<TData>[] = []
    const right: InternalColumn<TData>[] = []

    columns.value.forEach((col) => {
      const pin = col.pinned.value
      if (pin === 'left') left.push(col)
      else if (pin === 'right') right.push(col)
      else center.push(col)
    })

    return [...left, ...center, ...right]
  })

  const visibleRows = computed(() => {
    return processedRows.value
  })

  const rootCssVars = computed(() => {
    const vars: Record<string, string> = {}
    const visibleCols: InternalColumn<TData>[] = []

    const cols = columns.value
    const cWidth = containerWidth.value

    let fixedSpace = 0
    let flexCount = 0

    // --- PASS 1: Metrics Gathering ---
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i]
      if (!col.isVisible.value) continue

      visibleCols.push(col)
      if (col.isFlex.value) {
        flexCount++
      } else {
        fixedSpace += col.width.value
      }

      const order = orderedColumns.value.findIndex(
        (orderedCol) => orderedCol.id === col.id,
      )
      vars[`--col-${col.id}-order`] = `${order}`
    }

    // Math for flex columns
    const remainingSpace = Math.max(0, cWidth - fixedSpace)
    const flexWidth = flexCount > 0 ? remainingSpace / flexCount : 0

    let leftOffset = 0
    let totalW = 0
    const computedWidths = new Float64Array(visibleCols.length)

    // --- PASS 2: Forward Assignment (Widths & Left Pins) ---
    for (let i = 0; i < visibleCols.length; i++) {
      const col = visibleCols[i]

      let finalWidth = col.width.value
      if (col.isFlex.value) {
        finalWidth = Math.max(col.original.minWidth ?? 150, flexWidth)
      }

      computedWidths[i] = finalWidth // Cache for the reverse pass
      totalW += finalWidth
      vars[`--col-${col.id}-width`] = `${finalWidth}px`

      if (col.pinned.value === 'left') {
        vars[`--col-${col.id}-left`] = `${leftOffset}px`
        leftOffset += finalWidth
      }
    }

    // --- PASS 3: Reverse Assignment (Right Pins) ---
    // We only iterate backwards through the visible columns, using the cached widths.
    let rightOffset = 0
    for (let i = visibleCols.length - 1; i >= 0; i--) {
      const col = visibleCols[i]
      if (col.pinned.value === 'right') {
        vars[`--col-${col.id}-right`] = `${rightOffset}px`
        rightOffset += computedWidths[i]
      }
    }

    vars['--total-grid-width'] = `${totalW}px`

    return vars
  })

  const totalWidth = computed(() =>
    columns.value.reduce((acc, c) => acc + c.width.value, 0),
  )

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

    setSort: (colId, direction, multi = false) => {
      if (direction === null) {
        sorting.value = sorting.value.filter((s) => s.id !== colId)
        return
      }

      const current = sorting.value
      const newSort = { id: colId, desc: direction === 'desc' }

      if (multi) {
        const existingIndex = current.findIndex((s) => s.id === colId)
        if (existingIndex >= 0) {
          const next = [...current]
          next[existingIndex] = newSort
          sorting.value = next
        } else {
          sorting.value = [...current, newSort]
        }
      } else {
        // Single sort clears all other sorts
        sorting.value = [newSort]
      }
    },

    togglePinned: (colId, state) => {
      const col = columns.value.find((c) => c.id === colId)
      if (col) col.pinned.value = state ?? false
    },

    toggleSort: (colId, multi) => {
      const current = sorting.value
      const exists = current.findIndex((s) => s.id === colId) !== -1

      const updatedSort = current.map((s) => {
        if (s.id === colId) {
          return { ...s, desc: !s.desc }
        }
        return s
      })

      if (exists) {
        sorting.value = multi ? [...current, ...updatedSort] : [...updatedSort]
      } else {
        const newSort = { id: colId, desc: true }
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

    setContainerWidth: (w: number) => {
      containerWidth.value = w
    },

    resizeColumn: (colId: string, delta: number) => {
      const col = columns.value.find((c) => c.id === colId)
      if (col) {
        if (col.isFlex.value) {
          const fixedSpace = columns.value
            .filter((c) => !c.isFlex.value)
            .reduce((a, b) => a + b.width.value, 0)
          const flexCount = columns.value.filter((c) => c.isFlex.value).length
          const currentFlexWidth = Math.max(
            col.original.minWidth ?? 150,
            (containerWidth.value - fixedSpace) / flexCount,
          )

          col.width.value = currentFlexWidth
          col.isFlex.value = false // Disable flex behavior permanently for this column
        }

        col.width.value = Math.max(
          col.original.minWidth ?? 50,
          col.width.value + delta,
        )
      }
    },
  }
}
