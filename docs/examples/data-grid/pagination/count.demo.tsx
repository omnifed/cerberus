'use client'

import { DataGrid, SortDirection } from '@cerberus-design/data-grid'
import { PageSizeChangeDetails, type PageDetails } from '@cerberus-design/react'
import { useQuery } from '@cerberus-design/signals'
import { useState, useTransition } from 'react'
import { Stack } from 'styled-system/jsx'
import { queryPaginatedEmployees } from '../api'
import { columns } from '../col-defs/employees'

// Use native React state and transitions for updates to override Suspense.
// Transitions prevent harsh reloads of the Data Grid post-initial rendering.
// This is the only time you are required to use React state over Cerberus Signals.
// React transitions require React state to work.
function useDeferredValue() {
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

  function handlePageSizeChange(details: PageSizeChangeDetails) {
    console.log(details)
  }

  function handleSortChange(colId: string, direction: SortDirection, multi?: boolean) {
    console.log({ colId, direction, multi })
  }

  return (
    <Stack direction="column" h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data.data}
        overlays={{
          initial: 'skeleton',
          pending: 'linear',
        }}
        pagination={{
          count: data.pagination.count,
          onPageChange: handlePageChange,
          onPageSizeChange: handlePageSizeChange,
          onSortChange: handleSortChange,
        }}
        pending={pending}
      />
    </Stack>
  )
}
