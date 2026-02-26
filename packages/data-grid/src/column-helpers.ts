import type {
  AccessorOptions,
  DisplayOptions,
  ColumnDef,
  AccessorFn,
} from './types'

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
      options: AccessorOptions<TData, keyof TData>,
    ): ColumnDef<TData> => ({
      id: options.id ?? (key as string),
      accessor: (row) => row[key],
      ...options,
    }),

    accessorFn: (
      accessorFn: AccessorFn<TData>,
      options: AccessorOptions<TData, keyof TData> & { id: string },
    ): ColumnDef<TData> => ({
      accessor: accessorFn,
      ...options,
    }),

    display: <TKey extends keyof TData>(
      options: DisplayOptions<TData, TKey>,
    ): ColumnDef<TData> => ({
      accessor: () => undefined,
      ...options,
    }),
  }
}
