import { type ColCell, type ColumnFeatures } from '@cerberus-design/data-grid'
import { type ReactNode } from 'react'

export type AccessorOptions<TData, TKey extends keyof TData> = {
  id?: string
  header: string | ((props: { colId: string }) => ReactNode)
  minWidth?: number
  maxWidth?: number
  width?: number
  features?: ColumnFeatures<TData, TKey>
  cell?: ColCell<TData>
}

// columnHelper.accessor('id', {
//   header: 'ID',
//   width: 80,
//   features: {
//     pinning: 'left',
//     sort: true,
//   },
//   cell: ({ value }) => <Text>#{value}</Text>,
// })
