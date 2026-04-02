'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { HStack } from 'styled-system/jsx'
import { createFakeQuery } from '../quick-start/data'
import { columns } from '../quick-start/columns.demo'

export function DefaultNoContentDemo() {
  const data = createFakeQuery(0)
  return (
    <HStack h="20rem" w="3/4">
      <DataGrid columns={columns} data={data()} />
    </HStack>
  )
}
