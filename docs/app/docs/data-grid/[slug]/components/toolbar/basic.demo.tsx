'use client'

import {
  DataGrid,
  useDataGridContext,
  useSignalValue,
} from '@cerberus-design/data-grid'
import { HStack, Stack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'
import { type Employee } from '../quick-start/data.demo'

export function BasicDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(200)

  return (
    <Stack direction="column" gap="md" h="25rem" mb="md" w="90%">
      <DataGrid columns={columns} data={data} toolbar={<Toolbar />} />
    </Stack>
  )
}

function Toolbar() {
  const store = useDataGridContext<Employee>()
  const totalCount = useSignalValue(store.rowCount)
  return <HStack w="full">This table has {totalCount} rows</HStack>
}
