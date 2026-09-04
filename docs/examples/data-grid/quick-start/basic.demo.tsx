'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { HStack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from './columns.demo'

export function BasicDemo() {
  const data = useQuery(queryEmployees(1000))

  return (
    <HStack h="20rem" w="3/4">
      <DataGrid columns={columns} data={data} />
    </HStack>
  )
}
