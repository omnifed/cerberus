'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function BasicDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(2)

  return (
    <Stack direction="column" gap="md" w="3/4">
      <DataGrid columns={columns} data={data} rowSize="xs" />
      <DataGrid columns={columns} data={data} rowSize="sm" />
      <DataGrid columns={columns} data={data} rowSize="md" />
      <DataGrid columns={columns} data={data} rowSize="lg" />
      <DataGrid columns={columns} data={data} rowSize="xl" />
    </Stack>
  )
}
