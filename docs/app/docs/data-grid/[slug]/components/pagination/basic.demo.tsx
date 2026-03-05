'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function BasicDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(1000)

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data}
        initialState={{ pagination: { pageSize: 25 } }}
      />
    </Stack>
  )
}
