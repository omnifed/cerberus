'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { Stack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../col-defs/employees'

export function CustomDemo() {
  const data = useQuery(queryEmployees(3))

  return (
    <Stack direction="column" gap="md" w="3/4">
      <DataGrid columns={columns} data={data} rowSize={100} />
    </Stack>
  )
}
