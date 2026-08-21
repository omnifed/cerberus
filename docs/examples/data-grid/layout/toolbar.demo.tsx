'use client'

import { queryEmployees } from '@/app/docs/data-grid/[slug]/components/api'
import { columns } from '@/app/docs/data-grid/[slug]/components/quick-start/columns.demo'
import { type Employee } from '@/app/docs/data-grid/[slug]/components/quick-start/data.demo'
import { DataGrid, useDataGridContext } from '@cerberus-design/data-grid'
import { useQuery, useRead } from '@cerberus-design/signals'
import { HStack, Stack } from 'styled-system/jsx'

export function ToolbarDemo() {
  const data = useQuery(queryEmployees(200))
  return (
    <Stack direction="column" gap="md" h="25rem" mb="md" w="90%">
      <DataGrid columns={columns} data={data} toolbar={<Toolbar />} />
    </Stack>
  )
}

function Toolbar() {
  const store = useDataGridContext<Employee>()
  const totalCount = useRead(store.rowCount)
  return <HStack w="full">This table has {totalCount} rows</HStack>
}
