'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useState } from 'react'
import { Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

const count = 1000
const maxPageSize = 100

export function CountDemo() {
  const [current, setCurrent] = useState<number>(maxPageSize)

  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(current)

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data}
        initialState={{
          pagination: { count },
        }}
        onPageChange={(details) => {
          console.log(details)
          const currentPages = Math.ceil(data.length / details.pageSize)
          const hasEnough = details.page + 1 <= currentPages
          if (hasEnough) return
          setCurrent((prev) => prev + maxPageSize)
        }}
      />
    </Stack>
  )
}
