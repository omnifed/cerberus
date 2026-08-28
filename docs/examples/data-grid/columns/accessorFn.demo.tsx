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

// columnHelper.accessorFn((row) => `${row.firstName} ${row.lastName}`, {
//   id: 'fullName',
//   header: 'Employee',
//   width: 200,
//   features: {
//     sort: true,
//     filter: { operator: 'contains' },
//   },
//   cell: ({ row, value }) => (
//     <VStack alignItems="flex-start" gap="2">
//       <Text textStyle="body-md">{value}</Text>
//       <Text color="page.text.100" textStyle="label-sm">
//         {row.email}
//       </Text>
//     </VStack>
//   ),
// })
