'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Box } from 'styled-system/jsx'
import { useFakeQuery } from '../quick-start/data'
import { columns } from './compare-columns'

export function ComparatorDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(100)

  return (
    <Box h="20rem" w="90%">
      <DataGrid columns={columns} data={data} />
    </Box>
  )
}

// columnHelper.accessor('lastLogin', {
//   header: 'Last Login',
//   features: {
//     sort: {
//       comparator: (a, b) =>
//         new Date(a as string).getTime() - new Date(b as string).getTime(),
//     },
//   },
//   cell: ({ value }) => {
//     const formatter = new DateFormatter('en-US', {
//       dateStyle: 'short',
//       timeZone: 'America/New_York',
//     })
//     return (
//       <Text textStyle="label-md">{formatter.format(new Date(value))}</Text>
//     )
//   },
// })
