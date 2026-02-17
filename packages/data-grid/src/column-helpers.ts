import { type ReactNode } from 'react'
import { type ColumnDef, type ColumnFeatures } from './types'

type AccessorOptions<TData, TValue> = {
  id?: string
  header: string | ((props: { colId: string }) => ReactNode)
  features?: ColumnFeatures
  width?: number
  minWidth?: number
  maxWidth?: number
  cell?: (props: { row: TData; value: TValue }) => ReactNode
}

type DisplayOptions<TData> = {
  id: string
  header: string | ((props: { colId: string }) => ReactNode)
  width?: number
  features?: { pinning?: ColumnFeatures['pinning'] }
  cell: (props: { row: TData; value: undefined }) => ReactNode
}

/**
 * A helper to format columns which provides a heavily typed interface for
 * creating column definitions used by the DataGrid component.
 *
 * @example
 * ```tsx
 * import { createColumnHelper } from '@cerberus/data-grid'
 *
 * const columnHelper = createColumnHelper<MyDataType>()
 *
 * const columns = [
 *   columnHelper.accessor('id', {
 *     header: 'ID',
 *     width: 100,
 *     cell: (props) => props.row.original.id,
 *   }),
 *   columnHelper.accessorFn(
 *     (row: User) => `${row.firstName} ${row.lastName}`,
 *     {
 *       id: 'id',
 *       header: 'Full Name',
 *       cell: (props) => <span className="custom-component">{props.value}</span>
 *     }
 *   ),
 *   columnHelper.display({
 *     id: 'actions',
 *     header: 'Actions',
 *     width: 150,
 *     cell: (props) => (
 *       <button onClick={() => handleDelete(props.row.original.id)}>
 *         Delete
 *       </button>
 *     ),
 *   }),
 * ]
 * ```
 */
export function createColumnHelper<TData>() {
  return {
    accessor: <TKey extends keyof TData>(
      key: TKey,
      options: AccessorOptions<TData, TData[TKey]>,
    ): ColumnDef<TData> => ({
      id: options.id ?? (key as string),
      accessor: (row) => row[key],
      ...options,
    }),

    accessorFn: <TValue>(
      accessorFn: (row: TData) => TValue,
      options: AccessorOptions<TData, TValue> & { id: string },
    ): ColumnDef<TData> => ({
      accessor: accessorFn,
      ...options,
    }),

    display: (options: DisplayOptions<TData>): ColumnDef<TData> => ({
      accessor: () => undefined,
      ...options,
    }),
  }
}
