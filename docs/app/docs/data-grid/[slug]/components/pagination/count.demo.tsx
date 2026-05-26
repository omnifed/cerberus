'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { type PageDetails } from '@cerberus-design/react'
import { useQuery } from '@cerberus-design/signals'
import { useState, useTransition } from 'react'
import { Stack } from 'styled-system/jsx'
import { queryPaginatedEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'

function useDeferredValue() {
  // Use native React state and transitions for loading state to override Suspsense
  const [current, setCurrent] = useState<PageDetails>({
    page: 1,
    pageSize: 25,
  })
  const [pending, startTransition] = useTransition()
  return {
    current,
    setCurrent,
    pending,
    startTransition,
  }
}

export function CountDemo() {
  const { current, setCurrent, pending, startTransition } = useDeferredValue()
  const data = useQuery(queryPaginatedEmployees(current))

  function handlePageChange(details: PageDetails) {
    console.log(details)
    startTransition(() => {
      setCurrent((prev) => ({ ...prev, ...details }))
    })
  }

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data.data}
        initialState={{
          pagination: { count: data.pagination.count },
        }}
        onPageChange={handlePageChange}
        pending={pending}
      />
    </Stack>
  )
}
