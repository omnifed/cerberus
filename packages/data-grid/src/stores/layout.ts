import {
  type Accessor,
  createComputed,
  createSignal,
  Setter,
} from '@cerberus-design/signals'
import { DEFAULT_THEME } from '../const'
import type {
  GridOptions,
  InternalColumn,
  LoadingVariant,
  PinnedState,
  ThemeOptions,
} from '../types'
import { DataStore } from './data'

export type LayoutStore = {
  phase: Accessor<Phase>
  pending: Accessor<boolean>
  pendingVariant: Accessor<LoadingVariant>
  hasSkeleton: Accessor<boolean>
  rootCssVars: Accessor<Record<string, string>>
  totalWidth: Accessor<number>
  // Actions
  resizeColumn: (colId: string, delta: number) => void
  setContainerWidth: Setter<number>
  togglePinned: (colId: string, state: PinnedState) => void
  updatePending: (newState: boolean) => void
}

type Phase = 'initial' | 'initialPending' | 'mounted'
type LayoutGridOptions<T> = Omit<GridOptions<T>, 'columns' | 'rowSize'>

type Options<T> = {
  columns: DataStore<T>['columns']
  orderedColumns: DataStore<T>['orderedColumns']
  rowSize: DataStore<T>['rowSize']
} & LayoutGridOptions<T>

export function createLayoutStore<T>(options: Options<T>): LayoutStore {
  const [containerWidth, setContainerWidth] = createSignal<number>(0)
  const [phase, setPhase] = createSignal<Phase>('initialPending')
  const [pending, setPending] = createSignal<boolean>(options.pending ?? false)
  const [hasSkeleton] = createSignal<boolean>(options.overlays?.pending === 'skeleton')

  const rootCssVars = createComputed(() => {
    const vars: Record<string, string> = {}
    const visibleCols: InternalColumn<T>[] = []

    const cols = options.columns()
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

      const order = options
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
    vars['--row-height'] = `${options.rowSize()}px`

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
    options.columns().reduce((acc, c) => acc + c.width(), 0),
  )

  const pendingVariant = createComputed(() => {
    const isPending = pending()
    const currentPhase = phase()

    if (!isPending) return undefined

    if (currentPhase === 'initialPending' && options.overlays?.initial) {
      return options.overlays.initial
    }

    return options.overlays?.pending
  })

  return {
    phase,
    pending,
    pendingVariant,
    hasSkeleton,
    rootCssVars,
    totalWidth,

    resizeColumn: (colId: string, delta: number) => {
      const columns = options.columns()
      const col = columns.find((c) => c.id === colId)
      if (col) {
        if (col.isFlex()) {
          const fixedSpace = columns
            .filter((c) => !c.isFlex())
            .reduce((a, b) => a + b.width(), 0)
          const flexCount = columns.filter((c) => c.isFlex()).length
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

    setContainerWidth,

    togglePinned: (colId, state) => {
      const col = options.columns().find((c) => c.id === colId)
      if (col) col.setPinned(state ?? false)
    },

    updatePending: (newState: boolean) => {
      setPending(newState)
      const currentPhase = phase()

      if (newState && currentPhase === 'initial') {
        setPhase('initialPending')
      } else if (
        !newState &&
        (currentPhase === 'initialPending' || currentPhase === 'initial')
      ) {
        setPhase('mounted')
      }
    },
  }
}
