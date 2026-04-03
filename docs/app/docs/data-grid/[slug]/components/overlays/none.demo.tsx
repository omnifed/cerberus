'use client'

import { Corn } from '@carbon/icons-react'
import { DataGrid } from '@cerberus-design/data-grid'
import { Text } from '@cerberus-design/react'
import { HStack, VStack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { createFakeQuery } from '../quick-start/data'

export function NoContentDemo() {
  const data = createFakeQuery(0)
  return (
    <HStack h="20rem" w="3/4">
      <DataGrid
        columns={columns}
        data={data()}
        overlays={{
          noContent: <CustomNoContent />,
        }}
      />
    </HStack>
  )
}

function CustomNoContent() {
  return (
    <VStack color="page.text.100" gap="md">
      <Corn size={24} />
      <Text color="page.text.initial" textStyle="body-md">
        No corn found
      </Text>
    </VStack>
  )
}
