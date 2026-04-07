import { batch, createComputed, createSignal } from '@cerberus-design/signals'
import { DEFAULT_PAGE_IDX, DEFAULT_THEME, OPERATORS } from './const'
import type {
  BaseFilterState,
  ColumnFilterState,
  GridOptions,
  GridStore,
  InternalColumn,
  PinnedState,
  SortState,
  ThemeOptions,
} from './types'
import {
  applyFilterOperator,
  determineInitialCount,
  determinePageIndex,
  determinePageRange,
  determinePageSize,
  determineRowHeight,
} from './utils'

/**
 * Internal signal-based Store engine driving the state. We expose this in
 * the public Context API.
 */
export function createGridStore<TData>(options: GridOptions<TData>): GridStore<TData> {
  const [containerWidth, setContainerWidth] = createSignal<number>(0)
  const [rows, setRows] = createSignal<TData[]>(options.data)
  const [rowSize] = createSignal<number>(determineRowHeight(options.rowSize))

  const [pending, setPending] = createSignal<boolean>(options.pending ?? false)
  const [hasSkeleton] = createSignal<boolean>(options.overlays?.pending === 'skeleton')

  const [showColFilter, setShowColFilter] = createSignal<boolean>(false)
  const [globalFilter, setGlobalFilter] = createSignal<BaseFilterState>({
    operator: OPERATORS.contains,
    value: null,
  })
  const [colFilters, setColFilters] = createSignal<ColumnFilterState[]>([])
  const [sorting, setSorting] = createSignal<SortState[]>([])

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

    const [isVisible] = createSignal<boolean>(true)
    const [isFlex, setFlex] = createSignal<boolean>(col.width === undefined)
    const [pinned, setPinned] = createSignal<PinnedState>(
      col.features?.pinning?.defaultPosition ?? false,
    )
    const [width, setColWidth] = createSignal<number>(finalWidth)

    return {
      id: col.id,
      isFlex,
      isVisible,
      original: col,
      pinned,
      width,
      getValue: col.accessor,
      // feature flags
      pinnable,
      filterable,
      sortable,
      // setters
      setFlex,
      setPinned,
      setColWidth,
    }
  })
  const [columns] = createSignal<InternalColumn<TData>[]>(initialCols)

  const currentPageRange = createComputed<{ start: number; end: number }>(() => {
    const dataIdx = pageIndex() - 1
    const isFirstPage = dataIdx === 0
    const start = isFirstPage ? 0 : dataIdx * pageSize() - 1
    return {
      start,
      end: pageIndex() * pageSize(),
    }
  })

  const filteredRows = createComputed(() => {
    let result = [...rows()]
    const gFilter = globalFilter()
    const cFilters = colFilters()

    if (cFilters.length > 0) {
      result = result.filter((row) => {
        // Every column filter must pass (AND logic)
        return cFilters.every((filter) => {
          const col = columns().find((c) => c.id === filter.id)
          if (!col || !col.filterable) return true

          const customFn =
            typeof col.original.features?.filter === 'function'
              ? col.original.features.filter
              : undefined

          if (customFn) {
            return customFn(row, col.id, filter.value)
          }

          // 2. Fallback to standard engine
          const operator = OPERATORS.contains

          const cellValue = col.getValue(row)
          return applyFilterOperator(cellValue, filter.value, operator)
        })
      })
    }

    // B. Apply Global Filter (Fuzzy search across all filterable columns)
    if (gFilter) {
      result = result.filter((row) => {
        return columns().some((col) => {
          if (!col.filterable) return false
          const cellValue = col.getValue(row)
          return applyFilterOperator(cellValue, gFilter.value, gFilter.operator)
        })
      })
    }

    return result
  })

  const sortedRows = createComputed(() => {
    const currentRows = [...filteredRows()]
    const sortState = sorting()

    if (sortState.length === 0) return currentRows

    return currentRows.sort((a, b) => {
      for (const sort of sortState) {
        const col = columns().find((c) => c.id === sort.id)
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

  // Derived pagination - Ark handles the rest
  const rowCount = createComputed(
    () =>
      determineInitialCount(options?.initialState?.pagination) ?? sortedRows().length,
  )
  const pageCount = createComputed(() => Math.ceil(rowCount() / pageSize()))

  const orderedColumns = createComputed(() => {
    const left: InternalColumn<TData>[] = []
    const center: InternalColumn<TData>[] = []
    const right: InternalColumn<TData>[] = []

    columns().forEach((col) => {
      const pin = col.pinned()
      if (pin === 'left') left.push(col)
      else if (pin === 'right') right.push(col)
      else center.push(col)
    })

    return [...left, ...center, ...right]
  })

  const visibleRows = createComputed(() => {
    if (pageSize() && pageCount() > 1) {
      const currentRange = currentPageRange()
      return sortedRows().slice(currentRange.start, currentRange.end)
    }
    return sortedRows()
  })

  const rootCssVars = createComputed(() => {
    const vars: Record<string, string> = {}
    const visibleCols: InternalColumn<TData>[] = []

    const cols = columns()
    const cWidth = containerWidth()

    let fixedSpace = 0
    let flexCount = 0

    // --- PASS 1: Metrics Gathering ---
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i]
      if (!col.isVisible()) continue

      visibleCols.push(col)
      if (col.isFlex()) {
        flexCount++
      } else {
        fixedSpace += col.width()
      }

      const order = orderedColumns().findIndex((orderedCol) => orderedCol.id === col.id)
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

      let finalWidth = col.width()
      if (col.isFlex()) {
        finalWidth = Math.max(col.original.minWidth ?? 150, flexWidth)
      }

      computedWidths[i] = finalWidth // Cache for the reverse pass
      totalW += finalWidth
      vars[`--col-${col.id}-width`] = `${finalWidth}px`

      if (col.pinned() === 'left') {
        vars[`--col-${col.id}-left`] = `${leftOffset}px`
        leftOffset += finalWidth
      }
    }

    // --- PASS 3: Reverse Assignment (Right Pins) ---
    // We only iterate backwards through the visible columns, using the cached widths.
    let rightOffset = 0
    for (let i = visibleCols.length - 1; i >= 0; i--) {
      const col = visibleCols[i]
      if (col.pinned() === 'right') {
        vars[`--col-${col.id}-right`] = `${rightOffset}px`
        rightOffset += computedWidths[i]
      }
    }

    vars['--total-grid-width'] = `${totalW}px`
    vars['--row-height'] = `${rowSize()}px`

    // setup theme
    const theme = {
      ...DEFAULT_THEME,
      ...options.theme,
    } as Required<ThemeOptions>

    vars['--border'] = theme.border
    vars['--border-color'] = theme.borderColor
    vars['--rounded'] = theme.rounded
    vars['--row-bg-color'] = theme.rowBgColor
    vars['--row-even-bg-color'] = theme.rowEvenBgColor
    vars['--row-hover-bg-color'] = theme.rowHoverBgColor
    vars['--head-cell-bg-color'] = theme.headCellBgColor
    vars['--head-cell-border-bottom-color'] = theme.headCellBorderBottomColor
    vars['--grid-cell-border-color'] = theme.gridCellBorderColor
    vars['--grid-cell-pinned-border-color'] = theme.gridCellPinnedBorderColor

    return vars
  })

  const totalWidth = createComputed(() =>
    columns().reduce((acc, c) => acc + c.width(), 0),
  )

  return {
    columns,
    rows,
    rowCount,
    rowSize,
    visibleRows,
    showColFilter,
    globalFilter,
    colFilters,
    sorting,
    pending,
    hasSkeleton,
    pageCount,
    pageIndex,
    pageSize,
    pageRange,
    currentPageRange,
    isServerPaginated,
    rootCssVars,
    totalWidth,

    // Actions
    updateData: (newData) => {
      setRows(newData)
    },

    updatePending: (newState) => {
      setPending(newState)
    },

    setSort: (colId, direction, multi = false) => {
      if (direction === null) {
        setSorting(sorting().filter((s) => s.id !== colId))
        return
      }

      const current = sorting()
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

    togglePinned: (colId, state) => {
      const col = columns().find((c) => c.id === colId)
      if (col) col.setPinned(state ?? false)
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

    setPage: (details) => {
      setPageIndex(details.page)
      options.onPageChange?.(details)
    },

    setPageSize: (size) => {
      if (isServerPaginated()) {
        // Reset to first page on size change to reset pagination
        setPageIndex(DEFAULT_PAGE_IDX)
      }
      setPageSize(size)
    },

    setGlobalFilter: (val) => {
      batch(() => {
        setGlobalFilter((prev) => ({ ...prev, ...val }))
        setPageIndex(DEFAULT_PAGE_IDX) // Reset to first page on filter
      })
    },

    setColFilter: (val) => {
      setColFilters([...val])
    },

    setShowColFilter: (val) => {
      setShowColFilter(val)
    },

    setContainerWidth: (w: number) => {
      setContainerWidth(w)
    },

    resizeColumn: (colId: string, delta: number) => {
      const col = columns().find((c) => c.id === colId)
      if (col) {
        if (col.isFlex()) {
          const fixedSpace = columns()
            .filter((c) => !c.isFlex())
            .reduce((a, b) => a + b.width(), 0)
          const flexCount = columns().filter((c) => c.isFlex()).length
          const currentFlexWidth = Math.max(
            col.original.minWidth ?? 150,
            (containerWidth() - fixedSpace) / flexCount,
          )

          col.setColWidth(currentFlexWidth)
          col.setFlex(false) // Disable flex behavior permanently for this column
        }

        col.setColWidth(Math.max(col.original.minWidth ?? 50, col.width() + delta))
      }
    },
  }
}
