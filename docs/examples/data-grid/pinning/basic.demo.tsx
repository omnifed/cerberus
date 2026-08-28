'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { Box } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columns } from './columns'

export function BasicDemo() {
  const data = useQuery(queryEmployees(1000))

  return (
    <Box h="20rem" w="90%">
      <DataGrid columns={columns} data={data} />
    </Box>
  )
}
