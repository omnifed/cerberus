'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function ChangeDemo() {
  const data = useFakeQuery(100)

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data}
        initialState={{ pagination: { pageSize: 25 } }}
        onPageChange={(details) => {
          console.log(details)
        }}
      />
    </Stack>
  )
}
