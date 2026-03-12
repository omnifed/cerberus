'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function CustomDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(3)

  return (
    <Stack direction="column" gap="md" w="3/4">
      <DataGrid columns={columns} data={data} rowSize={100} />
    </Stack>
  )
}
