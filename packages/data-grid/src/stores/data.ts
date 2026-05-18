import { Accessor, createComputed, createSignal } from '@cerberus-design/signals'
import type { GridOptions, InternalColumn, PinnedState } from '../types'
import { determineRowHeight } from '../utils'

export type DataStore<TData> = {
  columns: Accessor<InternalColumn<TData>[]>
  orderedColumns: Accessor<InternalColumn<TData>[]>
  rows: Accessor<TData[]>
  rowSize: Accessor<number>
  // Actions
  updateData: (data: TData[]) => void
}

export function createDataStore<TData>(options: GridOptions<TData>): DataStore<TData> {
  const [rows, setRows] = createSignal<TData[]>(options.data)
  const [rowSize] = createSignal<number>(determineRowHeight(options.rowSize))
  const [columns] = createSignal<InternalColumn<TData>[]>(createInitColumns(options))

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

  return {
    columns,
    orderedColumns,
    rows,
    rowSize,

    updateData: (newData) => {
      setRows(newData)
    },
  }
}

// Private

function createInitColumns<TData>(
  options: GridOptions<TData>,
): InternalColumn<TData>[] {
  return options.columns.map((col) => {
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
}
