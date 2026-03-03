'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function MaxDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(2)

  return (
    <Stack direction="column" minH="20rem" maxH="30rem" w="3/4">
      <DataGrid columns={columns} data={data} />
    </Stack>
  )
}
