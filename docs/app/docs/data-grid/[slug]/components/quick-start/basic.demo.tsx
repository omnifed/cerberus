'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { HStack } from 'styled-system/jsx'
import { columns } from './columns.demo'
import { createFakeQuery } from './data'

export function BasicDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = createFakeQuery(1000)

  return (
    <HStack h="20rem" w="3/4">
      <DataGrid columns={columns} data={data} />
    </HStack>
  )
}
