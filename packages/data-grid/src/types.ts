import { type ReactNode } from 'react'

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
  pinning?: 'left' | 'right' | false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ColumnDef<TData, TValue = any> = {
  id: string
  /**
   * The label or custom compoent to display.
   */
  header: string | ((props: { colId: string }) => ReactNode)
  accessor: (row: TData) => TValue

  // Visuals
  width?: number
  minWidth?: number
  maxWidth?: number

  // Capability Flags
  features?: ColumnFeatures

  // Renderer
  cell?: (props: { row: TData; value: TValue }) => ReactNode
}

export interface GridOptions<TData> {
  data: TData[]
  columns: ColumnDef<TData>[]

  // Initial State
  initialState?: {
    pagination?: { pageIndex: number; pageSize: number }
    sorting?: { id: string; desc: boolean }[]
    pinning?: Record<string, 'left' | 'right'>
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

// Utils

export type DisplayColCellProps<TData> = { row: TData; value: undefined }
