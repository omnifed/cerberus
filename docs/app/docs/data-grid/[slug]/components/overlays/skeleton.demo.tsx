'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { HStack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'

export function SkeletonDemo() {
  const data = useQuery(queryEmployees(25))
  return (
    <HStack h="20rem" w="3/4">
      <DataGrid
        pending
        columns={columns}
        data={data}
        overlays={{
          pending: 'skeleton',
        }}
      />
    </HStack>
  )
}
