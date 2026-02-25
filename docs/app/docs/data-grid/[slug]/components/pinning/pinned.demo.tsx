'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Box } from 'styled-system/jsx'
import { useFakeQuery } from '../quick-start/data'
import { columns } from './columns'

export function DefaultPinnedDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(1000)

  return (
    <Box h="20rem" w="90%">
      <DataGrid columns={columns} data={data} />
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
//   },
//   cell: ({ value }) => <Text>#{value}</Text>,
// }),
