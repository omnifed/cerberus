'use client'

import { DataGrid, useDataGridContext } from '@cerberus-design/data-grid'
import { useQuery, useRead } from '@cerberus-design/signals'
import { HStack, Stack } from 'styled-system/jsx'
import { queryEmployees, type Employee } from '../api'
import { columns } from '../col-defs/employees'

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
