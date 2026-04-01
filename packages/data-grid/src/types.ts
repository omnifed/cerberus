import {
  PageDetails,
  type EnforceNoProperties,
  type PaginationRootProps,
} from '@cerberus-design/react'
import { Setter, type Accessor } from '@cerberus-design/signals'
import { type ReactNode } from 'react'
import { type RowSize } from './const'

export interface GridOptions<TData> {
  /**
   * The full Array of data you want the grid to render.
   */
  data: TData[]
  /**
   * A list of Defined Columns created using the column helper.
   */
  columns: ColumnDef<TData>[]
  /**
   * Initial options for feature-related settings.
   */
  initialState?: {
    pagination?: boolean | PaginationOptions
  }
  /**
   * Called when a user clicks on a pagination page trigger.
   */
  onPageChange?: (details: PageDetails) => void
  /**
   * Content to display above the Data Grid and within the Grid context.
   */
  toolbar?: ReactNode
  /**
   * Content to within the Data Grid and within the Grid context.
   */
  overlays?: OverlaySlots
  /**
   * Content to display below the Data Grid and within the Grid context.
   */
  footer?: ReactNode
  /**
   * The visual spacing of cells within a row. Can be a predefined size or any
   * valid CSS sizing value.
   *
   * **default**: 'md'.
   */
  rowSize?: RowSizeOptions
  /**
   * The customizable colors for the Data Grid.
   */
  theme?: ThemeOptions
}

// --- Column Types ---

export type ColumnDef<TData, TKey extends keyof TData = keyof TData> = {
  id: string
  /**
   * The label or custom compoent to display.
   */
  header: string | ((props: { colId: string }) => ReactNode)
  /**
   * A helper to access and manage the preferred value of the cell.
   */
  accessor: DisplayColAccessor | AccessorAccessor<TData, TKey> | AccessorFn<TData>
  /**
   * Strictly define the cell width. Expects a pixel-based number.
   * @default 150px
   */
  minWidth?: number
  /**
   * Strictly define the cell width. Expects a pixel-based number. If the width
   * provided is smaller than what is required for features, the minimum width
   * of 100px will be used instead.
   * @default 150px
   */
  width?: number

  // Capability Flags
  features?: ColumnFeatures<TData, TKey>

  /**
   * The cell renderer. Provides access to the accessor value and row data. This
   * is used to provide custom components for the cell content.
   *
   * If no content is provided a string will be rendered.
   */
  cell?: ColCell<TData>
}

export type PaginationOptions = {
  /**
   * The total number of rows that exist. This is useful if you choose to use
   * server-side pagination design.
   */
  count?: PaginationRootProps['count']
  /**
   * The default page index to start on.
   */
  defaultPage?: PaginationRootProps['defaultPage']
  /**
   * The default page size to start with. **Must be included in customRange if
   * using any value other than 25, 50, or 100**.
   *
   * default: 0
   */
  pageSize?: PaginationRootProps['pageSize']
  /**
   * A custom range of page sizes to display in the page size dropdown.
   */
  customRange?: number[]
}

// -- Column Definitions --

export type AccessorOptions<TData, TKey extends keyof TData> = {
  id?: string
  header: string | ((props: { colId: string }) => ReactNode)
  features?: ColumnFeatures<TData, TKey>
  width?: number
  minWidth?: number
  maxWidth?: number
  cell?: ColCell<TData>
}

export type DisplayOptions<TData, TKey extends keyof TData> = {
  id: string
  header: string | ((props: { colId: string }) => ReactNode)
  width?: number
  features?: { pinning?: ColumnFeatures<TData, TKey>['pinning'] }
  cell: ColCell<TData>
}

// --- Internal Types ---

export type InternalColumn<TData> = {
  id: string
  // Mutable Signals
  pinned: Accessor<PinnedState>
  isFlex: Accessor<boolean>
  isVisible: Accessor<boolean>
  width: Accessor<number>
  // Static Config
  pinnable: boolean
  sortable: boolean
  filterable: boolean
  getValue: ColumnDef<TData>['accessor']
  original: ColumnDef<TData>
  // setters
  setFlex: Setter<boolean>
  setColWidth: Setter<number>
  setPinned: Setter<PinnedState>
}

export type SortState = { id: string; desc: boolean }

// -- Store Context --

export interface GridStore<TData> {
  // State
  columns: Accessor<InternalColumn<TData>[]>
  rows: Accessor<TData[]>
  globalFilter: Accessor<string>
  sorting: Accessor<SortState[]>

  // Pagination
  pageIndex: Accessor<number>
  pageSize: Accessor<number>
  pageRange: Accessor<number[]>
  pageCount: Accessor<number>
  currentPageRange: Accessor<{ start: number; end: number }>
  isServerPaginated: Accessor<boolean>

  // Styling
  rootCssVars: Accessor<Record<string, string>>
  rowCount: Accessor<number>
  rowSize: Accessor<number>
  totalWidth: Accessor<number>
  visibleRows: Accessor<TData[]>

  // Actions
  resizeColumn: (colId: string, delta: number) => void
  setContainerWidth: (val: number) => void
  setPage: (details: PageDetails) => void
  setPageSize: (size: number) => void
  setGlobalFilter: (val: string) => void
  setSort: (colId: string, direction: SortDirection, multi?: boolean) => void
  togglePinned: (colId: string, state: PinnedState) => void
  toggleSort: (colId: string, multi?: boolean) => void
  updateData: (newData: TData[]) => void
}

export type RowSizeOptions = RowSize | number

// -- Column Features --

export type ColumnFeatures<TData, TKey extends keyof TData> = {
  /**
   * Allow the column to be sorted and the rules to use.
   */
  sort?:
    | (boolean & EnforceNoProperties<SortOptions<TData, TKey>>)
    | SortOptions<TData, TKey>
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

export type SortOptions<TData, TKey extends keyof TData> = {
  firstSortDirection?: SortDirection
  comparator?: Comparator<TData[TKey]>
}

// -- Column Props --

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ColCell<TData> = (props: { row: TData; value: any }) => ReactNode

export type DisplayColAccessor = () => undefined
export type AccessorAccessor<TData, TKey extends keyof TData> = (
  row: TData,
) => TData[TKey]
export type AccessorFn<TData> = (row: TData) => ReactNode

// --- Features ---

export type Comparator<TValue> = (a: TValue, b: TValue) => number
export type SortDirection = 'asc' | 'desc' | null
export type PinnedState = 'left' | 'right' | undefined | boolean

export type OverlaySlots = {
  /**
   * A custom component to display within the Grid Viewport when no rows are
   * present in the data or filtered out. Defaults to a basic fallback.
   */
  noContent?: ReactNode
}

export type ThemeOptions = {
  /**
   * The external border of the Data Grid container.
   * The default is `page.border.initial`.
   */
  borderColor?: string
  /**
   * The border width and style of the Data Grid component. Default is `1px solid`.
   */
  border?: string
  /**
   * The border radius of the Data Grid component. Default is `lg`.
   */
  rounded?: string
  /**
   * The background color of the row. Default is `page.surface.100`.
   */
  rowBgColor?: string
  /**
   * The background color of the row on hover. Default is `page.surface.200`.
   */
  rowHoverBgColor?: string
  /**
   * The background color of the even rows. Default is `page.surface.initial`.
   */
  rowEvenBgColor?: string
  /**
   * The background color of the head cell. Default is `page.bg.initial`.
   */
  headCellBgColor?: string
  /**
   * The border color for the bottom border of the head cell. Default is `page.border.200`.
   */
  headCellBorderBottomColor?: string
  /**
   * The border color of the grid cell. Default is `page.border.200`.
   */
  gridCellBorderColor?: string
  /**
   * The border color of the pinned grid cell. Default is `page.border.200`.
   */
  gridCellPinnedBorderColor?: string
}
