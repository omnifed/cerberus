import { createComputed, createSignal } from '@cerberus-design/signals'
import { DEFAULT_THEME } from './const'
import {
  createDataStore,
  createFilterStore,
  createPaginationStore,
  createSortStore,
} from './stores'
import type { GridOptions, GridStore, InternalColumn, ThemeOptions } from './types'
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

  const [containerWidth, setContainerWidth] = createSignal<number>(0)

  const [pending, setPending] = createSignal<boolean>(options.pending ?? false)
  const [hasSkeleton] = createSignal<boolean>(options.overlays?.pending === 'skeleton')

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

  const rootCssVars = createComputed(() => {
    const vars: Record<string, string> = {}
    const visibleCols: InternalColumn<TData>[] = []

    const cols = dataStore.columns()
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

      const order = dataStore
        .orderedColumns()
        .findIndex((orderedCol) => orderedCol.id === col.id)
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
    vars['--row-height'] = `${dataStore.rowSize()}px`

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
    dataStore.columns().reduce((acc, c) => acc + c.width(), 0),
  )

  return {
    ...dataStore,
    ...paginationStore,
    ...filterStore,
    ...sortStore,
    rowCount,
    visibleRows,
    pending,
    hasSkeleton,
    pageCount,
    rootCssVars,
    totalWidth,

    // Actions

    updatePending: (newState) => {
      setPending(newState)
    },

    togglePinned: (colId, state) => {
      const col = dataStore.columns().find((c) => c.id === colId)
      if (col) col.setPinned(state ?? false)
    },

    setContainerWidth: (w: number) => {
      setContainerWidth(w)
    },

    resizeColumn: (colId: string, delta: number) => {
      const col = dataStore.columns().find((c) => c.id === colId)
      if (col) {
        if (col.isFlex()) {
          const fixedSpace = dataStore
            .columns()
            .filter((c) => !c.isFlex())
            .reduce((a, b) => a + b.width(), 0)
          const flexCount = dataStore.columns().filter((c) => c.isFlex()).length
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
