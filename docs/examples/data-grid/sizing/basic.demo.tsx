'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { Stack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../col-defs/employees'

export function BasicDemo() {
  const data = useQuery(queryEmployees(2))

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
