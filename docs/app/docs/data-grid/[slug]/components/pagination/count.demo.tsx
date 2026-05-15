'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery, useSignal } from '@cerberus-design/signals'
import { Stack } from 'styled-system/jsx'
import { queryPaginatedEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'

export function CountDemo() {
  const [current, setCurrent] = useSignal<number>(100)

  const data = useQuery(queryPaginatedEmployees(current))

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data.data}
        initialState={{
          pagination: { count: data.pagination.count },
        }}
        onPageChange={(details) => {
          console.log(details)
          const currentPages = Math.ceil(data.pagination.count / details.pageSize)
          const hasEnough = details.page + 1 <= currentPages
          if (hasEnough) return
          setCurrent((prev) => prev + current)
        }}
      />
    </Stack>
  )
}
