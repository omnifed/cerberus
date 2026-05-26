'use client'

import { DataGrid, useDataGridContext } from '@cerberus-design/data-grid'
import { useQuery, useRead } from '@cerberus-design/signals'
import { HStack, Stack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'
import { type Employee } from '../quick-start/data.demo'

export function FooterDemo() {
  const data = useQuery(queryEmployees(200))
  return (
    <Stack direction="column" gap="md" h="25rem" mb="md" w="90%">
      <DataGrid columns={columns} data={data} footer={<Footer />} />
    </Stack>
  )
}

function Footer() {
  const store = useDataGridContext<Employee>()
  const totalCount = useRead(store.rowCount)
  return <HStack w="full">This table has {totalCount} rows</HStack>
}
