'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { Stack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../col-defs/employees'

export function MaxDemo() {
  const data = useQuery(queryEmployees(2))

  return (
    <Stack direction="column" minH="20rem" maxH="30rem" w="3/4">
      <DataGrid columns={columns} data={data} />
    </Stack>
  )
}
