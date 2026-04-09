'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Box } from 'styled-system/jsx'
import { createFakeQuery } from '../quick-start/data'
import { columns } from './columns'

export function BasicDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = createFakeQuery(1000)

  return (
    <Box h="20rem" w="90%">
      <DataGrid columns={columns} data={data()} />
    </Box>
  )
}

// columnHelper.accessorFn((row) => `${row.firstName} ${row.lastName}`, {
//   id: 'fullName',
//   header: 'Employee',
//   minWidth: 300,
//   features: {
//     sort: true,
//   },
//   cell: ({ row, value }) => (
//     <VStack alignItems="flex-start" gap="0">
//       <Text textStyle="body-md">{value}</Text>
//       <Text color="page.text.100" textStyle="label-sm">
//         {row.email}
//       </Text>
//     </VStack>
//   ),
// }),
