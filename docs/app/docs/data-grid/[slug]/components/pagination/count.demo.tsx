'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useState } from 'react'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'
import { useEffect } from 'react'

export function CountDemo() {
  const [current, setCurrent] = useState<number>(100)
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(current)

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data}
        initialState={{
          pagination: {
            count: 1000,
          },
        }}
        onPageChange={(details) => {
          console.log(details)
          setCurrent(details.page * details.pageSize)
        }}
      />
    </Stack>
  )
}
