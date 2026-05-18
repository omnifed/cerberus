'use client'

import { DecorativeBox } from '@/app/components/decorative-box'
import { Stack } from '@/styled-system/jsx'
import { DataGrid } from '@cerberus-design/data-grid'
import { useQuery } from '@cerberus-design/signals'
import { queryEmployees } from '../api'
import { columns } from '../quick-start/columns.demo'

export function BasicDemo() {
  const data = useQuery(queryEmployees(10))
  return (
    <Stack direction="column" gap="md" h="25rem" mb="md" w="90%">
      <DataGrid
        columns={columns}
        data={data}
        toolbar={<Toolbar />}
        footer={<Footer />}
      />
    </Stack>
  )
}

function Toolbar() {
  return <DecorativeBox h="50px">Toolbar</DecorativeBox>
}

function Footer() {
  return <DecorativeBox h="50px">Footer</DecorativeBox>
}
