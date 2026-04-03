'use client'

import { DataGrid } from '@cerberus-design/data-grid'
import { CircularProgress, Text } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import { useEffect } from 'react'
import { Center, HStack, VStack } from 'styled-system/jsx'
import { columns } from '../quick-start/columns.demo'
import { createFakeQuery } from '../quick-start/data'

export function CustomDemo() {
  const data = createFakeQuery(25)
  return (
    <HStack h="20rem" w="3/4">
      <DataGrid
        pending
        columns={columns}
        data={data()}
        overlays={{
          pending: <MyCustomLoader />,
        }}
      />
    </HStack>
  )
}

function MyCustomLoader() {
  const [now, setNow] = useSignal<number>(0)

  useEffect(() => {
    const timeout = setInterval(() => {
      setNow((prev) => {
        if (prev === 100) return 0
        return prev + 1
      })
    }, 1000)
    return () => clearTimeout(timeout)
  }, [setNow])

  return (
    <Center h="full" w="full">
      <VStack gap="md">
        <CircularProgress value={now} size="xs" />
        <Text as="small" textStyle="heading-xs">
          Loading...
        </Text>
      </VStack>
    </Center>
  )
}
