import { type ColCell, type ColumnFeatures } from '@cerberus-design/data-grid'
import { ReactNode } from 'react'

export type DisplayOptions<TData, TKey extends keyof TData> = {
  id: string
  header: string | ((props: { colId: string }) => ReactNode)
  width?: number
  features?: { pinning?: ColumnFeatures<TData, TKey>['pinning'] }
  cell: ColCell<TData>
}

// columnHelper.display({
//   id: 'actions',
//   header: '',
//   width: 60,
//   features: {
//     pinning: true,
//   },
//   cell: () => (
//     <IconButton ariaLabel="View more options">
//       <OverflowMenuHorizontal />
//     </IconButton>
//   ),
// })
