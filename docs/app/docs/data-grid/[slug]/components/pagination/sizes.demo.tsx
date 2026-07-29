'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { Stack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'

export function SizesDemo() {
  const data = useQuery(queryEmployees(1000))

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data}
        pagination={{
          customRange: [10, 20, 50],
        }}
      />
    </Stack>
  )
}
