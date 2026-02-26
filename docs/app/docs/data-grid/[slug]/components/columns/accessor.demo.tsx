import { type ColumnFeatures } from '@cerberus-design/data-grid'
import { ReactNode } from 'react'

export type AccessorOptions<TData, TValue> = {
  id?: string
  header: string | ((props: { colId: string }) => ReactNode)
  features?: ColumnFeatures<TData>
  width?: number
  minWidth?: number
  maxWidth?: number
  cell?: (props: { row: TData; value: TValue }) => ReactNode
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
