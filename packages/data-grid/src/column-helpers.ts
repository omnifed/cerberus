import type { AccessorOptions, DisplayOptions, ColumnDef } from './types'

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
      options: AccessorOptions<TData, TData[TKey], TKey>,
    ): ColumnDef<TData, TData[TKey], TKey> => ({
      id: options.id ?? (key as string),
      accessor: (row) => row[key],
      ...options,
    }),

    accessorFn: <TValue, TKey extends keyof TData>(
      accessorFn: (row: TData) => TValue,
      options: AccessorOptions<TData, TValue, TKey> & { id: string },
    ): ColumnDef<TData, TValue, TKey> => ({
      accessor: accessorFn,
      ...options,
    }),

    display: <TKey extends keyof TData>(
      options: DisplayOptions<TData, TKey>,
    ): ColumnDef<TData, undefined, TKey> => ({
      accessor: () => undefined,
      ...options,
    }),
  }
}
