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
