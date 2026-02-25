import {
  type EnforceNoProperties,
  type PaginationRootProps,
} from '@cerberus-design/react'
import { type ReadonlySignal, type Signal } from '@preact/signals-core'
import { type ReactNode } from 'react'

// --- Public Types ---

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ColumnDef<TData, TValue = any> = {
  id: string
  /**
   * The label or custom compoent to display.
   */
  header: string | ((props: { colId: string }) => ReactNode)
  /**
   * A helper to access and manage the preferred value of the cell.
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

// --- Internal Types ---

export type InternalColumn<TData> = {
  id: string
  // Mutable Signals
  pinned: Signal<PinnedState>
  isFlex: Signal<boolean>
  isVisible: Signal<boolean>
  width: Signal<number>
  // Static Config
  pinnable: boolean
  sortable: boolean
  filterable: boolean
  getValue: (row: TData) => ReactNode
  original: ColumnDef<TData>
}

export type SortState = { id: string; desc: boolean }

// -- Store Context --

export interface GridStore<TData> {
  // State Signals
  columns: Signal<InternalColumn<TData>[]>
  rows: Signal<TData[]>
  globalFilter: Signal<string>
  sorting: Signal<SortState[]>

  // Pagination Signals
  pageIndex: Signal<number>
  pageSize: Signal<number>

  // Computed (Read-Only)
  pageCount: ReadonlySignal<number>
  rootCssVars: ReadonlySignal<Record<string, string>>
  rowCount: ReadonlySignal<number>
  totalWidth: ReadonlySignal<number>
  visibleRows: ReadonlySignal<TData[]>

  // Actions
  resizeColumn: (colId: string, delta: number) => void
  setContainerWidth: (val: number) => void
  setPage: (index: number) => void
  setGlobalFilter: (val: string) => void
  setSort: (colId: string, direction: SortDirection, multi?: boolean) => void
  togglePinned: (colId: string, state: PinnedState) => void
  toggleSort: (colId: string, multi?: boolean) => void
  updateData: (newData: TData[]) => void
}

// -- Column Features --

export type ColumnFeatures = {
  /**
   * Allow the column to be sorted and the rules to use.
   */
  sort?: (boolean & EnforceNoProperties<SortOptions>) | SortOptions
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
  pinning?: (boolean & EnforceNoProperties<PinnedOptions>) | PinnedOptions
}

export type PinnedOptions = {
  defaultPosition?: PinnedState
}

export type SortOptions = {
  firstSortDirection?: SortDirection
  comparator?: (a: unknown, b: unknown) => number
}

// --- Util types ---

export type SortDirection = 'asc' | 'desc' | null
export type PinnedState = 'left' | 'right' | undefined | boolean
export type DisplayColCellProps<TData> = { row: TData; value: undefined }
