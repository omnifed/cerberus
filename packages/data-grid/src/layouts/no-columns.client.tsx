'use client'

import { Avatar, Button, Text, useCerberusContext } from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { Center, VStack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'

export function NoColumnsLayout() {
  const store = useDataGridContext()
  const cols = useRead(store.columns)

  const { icons } = useCerberusContext()
  const Icon = icons.table
  const ResetIcon = icons.redo

  function handleToggleAll() {
    cols.forEach((col) => {
      col.setVisible(true)
    })
  }

  return (
    <Center h="full" w="full">
      <VStack gap="md">
        <VStack gap="sm">
          <Avatar gradient="charon-light" fallback={<Icon size={24} />} size="lg" />
          <Text textStyle="label-md">No visible columns</Text>
        </VStack>

        <Button onClick={handleToggleAll} usage="outlined" shape="rounded" size="sm">
          <ResetIcon />
          Reset Columns
        </Button>
      </VStack>
    </Center>
  )
}
