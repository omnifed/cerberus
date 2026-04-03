'use client'

import { Box, HStack } from '@/styled-system/jsx'
import { DataGrid } from '@cerberus-design/data-grid'
import { Button, Show, Tag, Text } from '@cerberus-design/react'
import { createQuery, useQuery, useSignal } from '@cerberus-design/signals'
import { Suspense, useRef } from 'react'
import { createFakeQuery } from '../quick-start/data'
import { columnHelper } from '../quick-start/helper.demo'

export function ColumnDemo() {
  const data = createFakeQuery(25)
  return (
    <HStack h="20rem" w="3/4">
      <DataGrid columns={columns} data={data()} />
    </HStack>
  )
}

// primitives/example.ts

type Status = 'pending' | 'success' | 'error'

// columns.tsx

interface SmartColumnProps {
  row: string
  value: string
}

function SmartColumn(props: SmartColumnProps) {
  // 1. Local state for JUST this row
  const [_, setTrigger, getTrigger] = useSignal<Status | null>(null)

  // 2. A localized query dedicated entirely to this specific row ID
  const ref = useRef(
    createQuery(getTrigger, (currentStatus) => {
      return new Promise<Status>((resolve) => {
        setTimeout(() => resolve(currentStatus), 1000)
      })
    }),
  )

  // 3. Subscribes ONLY to this row's fetch
  const status = useQuery(ref.current)

  return (
    <HStack justify="space-between" w="full">
      <HStack gap="sm">
        <Text textStyle="body-md">{props.value}</Text>
        <Show when={status}>
          <Tag palette="success">{status}</Tag>
        </Show>
      </HStack>

      <Button onClick={() => setTrigger('success')} size="sm">
        Update
      </Button>
    </HStack>
  )
}

export const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    features: {
      pinning: {
        defaultPosition: 'left',
      },
      sort: true,
    },
    cell: ({ row, value }) => (
      <Suspense fallback={<Box aria-busy h="1/3" rounded="full" w="full" />}>
        <SmartColumn row={String(row.id)} value={value} />
      </Suspense>
    ),
  }),

  columnHelper.accessorFn((row) => `${row.firstName.slice(0, 1)} ${row.lastName}`, {
    id: 'fullName',
    header: 'Employee',
    cell: ({ value }) => <Text textStyle="body-md">{value}</Text>,
  }),
]
