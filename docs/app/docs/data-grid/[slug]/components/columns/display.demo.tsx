import {
  type ColumnFeatures,
  type DisplayColCellProps,
} from '@cerberus-design/data-grid'
import { ReactNode } from 'react'

export type DisplayOptions<TData> = {
  id: string
  header: string | ((props: { colId: string }) => ReactNode)
  width?: number
  features?: { pinning?: ColumnFeatures['pinning'] }
  cell: (props: DisplayColCellProps<TData>) => ReactNode
}

// columnHelper.display({
//   id: 'actions',
//   header: '',
//   width: 60,
//   features: {
//     pinning: 'right',
//   },
//   cell: () => (
//     <IconButton ariaLabel="View more options">
//       <OverflowMenuHorizontal />
//     </IconButton>
//   ),
// })
