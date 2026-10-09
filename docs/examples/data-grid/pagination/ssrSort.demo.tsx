'use client'

import { DataGrid, SortDirection } from '@cerberus-design/data-grid'
import { PageSizeChangeDetails, type PageDetails } from '@cerberus-design/react'
import { useQuery } from '@cerberus-design/signals'
import { useState, useTransition } from 'react'
import { Stack } from 'styled-system/jsx'
import { queryPaginatedEmployees, type PaginatedRequest } from '../api'
import { columns } from '../col-defs/employees'

function useDeferredValue() {
  const [current, setCurrent] = useState<PaginatedRequest>({
    page: 1,
    pageSize: 25,
    sortBy: null,
    sortDirection: null,
  })
  const [pending, startTransition] = useTransition()

  return {
    current,
    setCurrent,
    pending,
    startTransition,
  }
}

export function SSRSortDemo() {
  const { current, setCurrent, pending, startTransition } = useDeferredValue()
  const data = useQuery(queryPaginatedEmployees(current))

  function handlePageChange(details: PageDetails) {
    startTransition(() => {
      setCurrent((prev) => ({ ...prev, ...details }))
    })
  }

  function handlePageSizeChange(details: PageSizeChangeDetails) {
    startTransition(() => {
      // Reset to page 1 when page size changes
      setCurrent((prev) => ({ ...prev, ...details, page: 1 }))
    })
  }

  function handleSortChange(colId: string, direction: SortDirection) {
    startTransition(() => {
      console.log('handleSortChange', colId, direction)
      // Apply the sort and reset pagination to page 1 to sync state
      setCurrent((prev) => ({
        ...prev,
        sortBy: direction ? colId : null,
        sortDirection: direction,
        page: 1,
      }))
    })
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
