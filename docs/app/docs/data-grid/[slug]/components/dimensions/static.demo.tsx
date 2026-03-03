'use client'

import { OverflowMenuHorizontal, Search } from '@carbon/icons-react'
import { DataGrid } from '@cerberus-design/data-grid'
import { ButtonGroup, Field, IconButton, Input } from '@cerberus-design/react'
import { Box, HStack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { useFakeQuery } from '../quick-start/data'

export function StaticDemo() {
  // Normally this would be from useQuery or a server-side API call
  const data = useFakeQuery(25)

  return (
    <Box h="20rem" mb="md" w="3/4">
      <DataGrid columns={columns} data={data} toolbar={<Toolbar />} />
    </Box>
  )
}

function Toolbar() {
  return (
    <HStack justify="space-between" mb="sm" w="full">
      <Box maxW="3/4">
        <Field label="Search anything" hideLabel>
          <Input startIcon={<Search />} size="sm" />
        </Field>
      </Box>

      <ButtonGroup>
        <IconButton ariaLabel="Example trigger" size="sm">
          <OverflowMenuHorizontal />
        </IconButton>
      </ButtonGroup>
    </HStack>
  )
}
