'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function SizesDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(200)

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data}
        initialState={{
          pagination: {
            customRange: [10, 20, 50],
          },
        }}
      />
    </Stack>
  )
}
