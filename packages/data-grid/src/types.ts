import { PaginationRootProps } from '@cerberus-design/react'
import { type ReadonlySignal, type Signal } from '@preact/signals-core'
import { type ReactNode } from 'react'

// --- Public Types ---

export type ColumnFeatures = {
  /**
   * Allow the column to be sorted and the rules to use.
   */
  sort?:
    | boolean
    | {
        descFirst?: boolean
        comparator?: (a: unknown, b: unknown) => number
      }
  /**
   * Allow the column to be filtered and the rules to use.
   */
  filter?:
    | boolean
    | {
        operator?: 'contains' | 'equals' | 'startsWith'
      }
  /**
   * Show pinning options in the column menu
   */
  pinning?:
    | (boolean & {
        defaultPosition?: never
      })
    | {
        defaultPosition?: PinnedState
      }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ColumnDef<TData, TValue = any> = {
  id: string
  /**
   * The label or custom compoent to display.
   */
  header: string | ((props: { colId: string }) => ReactNode)
  /**
   * A helper to access the value of the cell used to render a custom cell value.
   */
  accessor: (row: TData) => TValue
  /**
   * Strictly define the cell width. Expects a pixel-based number.
   * @default 150px
   */
  minWidth?: number
  /**
   * Strictly define the cell width. Expects a pixel-based number.
   * @default 150px
   */
  width?: number

  // Capability Flags
  features?: ColumnFeatures

  /**
   * The cell renderer. Provides access to the accessor value and row data. This
   * is used to provide custom components for the cell content.
   *
   * If no content is provided a string will be rendered.
   */
  cell?: (props: { row: TData; value: TValue }) => ReactNode
}

export interface GridOptions<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]

  // Initial State
  initialState?: {
    pagination?: PaginationRootProps
    sorting?: { id: string; desc: boolean }[]
    defaultPinnedCols?: Record<string, PinnedState>
  }
}

export type AccessorOptions<TData, TValue> = {
  id?: string
  header: string | ((props: { colId: string }) => ReactNode)
  features?: ColumnFeatures
  width?: number
  minWidth?: number
  maxWidth?: number
  cell?: (props: { row: TData; value: TValue }) => ReactNode
}

export type DisplayOptions<TData> = {
  id: string
  header: string | ((props: { colId: string }) => ReactNode)
  width?: number
  features?: { pinning?: ColumnFeatures['pinning'] }
  cell: (props: DisplayColCellProps<TData>) => ReactNode
}

// --- Util types ---

export type PinnedState = 'left' | 'right' | undefined | boolean
export type DisplayColCellProps<TData> = { row: TData; value: undefined }

// --- Internal Types ---

export type InternalColumn<TData> = {
  id: string
  // Mutable Signals
  width: Signal<number>
  pinned: Signal<PinnedState>
  isVisible: Signal<boolean>
  // Static Config
  pinnable: boolean
  sortable: boolean
  filterable: boolean
  getValue: (row: TData) => ReactNode
  original: ColumnDef<TData>
}

export type SortState = { id: string; desc: boolean }

export interface GridStore<TData> {
  // State Signals
  rows: Signal<TData[]>
  columns: Signal<InternalColumn<TData>[]>
  sorting: Signal<SortState[]>
  globalFilter: Signal<string>

  // Pagination Signals
  pageIndex: Signal<number>
  pageSize: Signal<number>

  // Computed (Read-Only)
  visibleRows: ReadonlySignal<TData[]>
  rootCssVars: ReadonlySignal<Record<string, string>>
  totalWidth: ReadonlySignal<number>
  pageCount: ReadonlySignal<number>
  rowCount: ReadonlySignal<number>

  // Actions
  resizeColumn: (colId: string, delta: number) => void
  togglePinned: (colId: string, state: PinnedState) => void
  toggleSort: (colId: string, multi?: boolean) => void
  setPage: (index: number) => void
  setGlobalFilter: (val: string) => void
  updateData: (newData: TData[]) => void
}
