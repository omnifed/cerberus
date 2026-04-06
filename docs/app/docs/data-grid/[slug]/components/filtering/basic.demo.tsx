'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Box } from 'styled-system/jsx'
import { createFakeQuery } from '../quick-start/data'
import { columns } from './columns'

export function BasicDemo() {
  const data = createFakeQuery(1000)
  return (
    <Box h="20rem" w="90%">
      <DataGrid columns={columns} data={data()} />
    </Box>
  )
}

// columnHelper.accessor('id', {
//   header: 'ID',
//   width: 80,
//   features: {
//     pinning: {
//       defaultPosition: 'left',
//     },
//     sort: true,
//     filter: true,
//   },
//   cell: ({ value }) => <Text>#{value}</Text>,
// })
