'use client'

import { DataGrid, ThemeOptions } from '@cerberus-design/data-grid'
import { For, Text } from '@cerberus-design/react'
import { useQuery } from '@cerberus-design/signals'
import { Center, HStack, VStack } from 'styled-system/jsx'
import { queryEmployees } from '../api'
import { columnHelper } from '../quick-start/helper.demo'

const customTheme: ThemeOptions = {
  border: 'none',
  borderColor: 'transparent',
  rowBgColor: 'var(--cerberus-colors-page-surface-initial)',
  rowEvenBgColor: 'var(--cerberus-colors-page-surface-initial)',
  rowHoverBgColor: 'transparent',
  headCellBorderBottomColor: 'transparent',
}

const columns = Array.from({ length: 4 }, (_, i) =>
  columnHelper.display({
    id: `col-${i}`,
    header: () => (
      <Text
        as="strong"
        display="block"
        ms="lg"
        fontWeight="bold"
        textStyle="label-sm"
      >{`Column ${i + 1}`}</Text>
    ),
    cell: () => (
      <HStack bgColor="black" justify="center" h="full" me="sm" p="sm" w="full">
        <Center bgColor="red" p="sm" rounded="md" w="full">
          1.0
        </Center>
      </HStack>
    ),
  }),
)

export function BasicDemo() {
  const data = useQuery(queryEmployees(10))
  return (
    <HStack h="20rem" w="3/4">
      <Legend />
      <DataGrid columns={columns} data={data} rowSize="lg" theme={customTheme} />
    </HStack>
  )
}

function Legend() {
  return (
    <VStack gap="0" justify="center" h="full" pt="15px">
      <For each={columns}>
        {(column) => (
          <Center key={column.id} h="56px" w="full">
            <Text
              as="strong"
              display="block"
              fontWeight="bold"
              textStyle="label-sm"
              transform="rotate(-90deg)"
            >
              Kewl
            </Text>
          </Center>
        )}
      </For>
    </VStack>
  )
}
