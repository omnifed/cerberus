'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { HStack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'

export function DefaultNoContentDemo() {
  const data = useQuery(queryEmployees(0))
  return (
    <HStack h="20rem" w="3/4">
      <DataGrid columns={columns} data={data} />
    </HStack>
  )
}
