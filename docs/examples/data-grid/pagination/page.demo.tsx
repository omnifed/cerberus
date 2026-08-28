'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { Stack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../col-defs/employees'

export function PageDemo() {
  const data = useQuery(queryEmployees(1000))

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data}
        pagination={{
          defaultPage: 2,
        }}
      />
    </Stack>
  )
}
