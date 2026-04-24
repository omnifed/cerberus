'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { Add, Subtract } from '@carbon/icons-react'
import { Group, IconButton, Text } from '@cerberus-design/react'
import { createComputed, createSignal, ReactiveText } from '@cerberus-design/signals'
import { createRenderStore } from '../render-store'
import { useEffect } from 'react'

const store = createRenderStore()

const [count, setCount] = createSignal<number[]>([1])
const result = createComputed<string>(() => count().join(', '))

export function StateDemo() {
  // There is no difference between these two implementations
  // They both work correctly and efficiently
  const increment = () => setCount(count().concat([1]))
  const decrement = () => setCount((prev) => prev.slice(0, -1))

  useEffect(() => {
    return () => store.onUnmount()
  }, [])

  store.trackRenders()

  return (
    <Stack direction="column" gap="md" w="3/4">
      <HStack justify="space-between" w="full">
        <Group layout="attached">
          <IconButton ariaLabel="Increment" onClick={increment} usage="filled">
            <Add />
          </IconButton>
          <IconButton
            ariaLabel="Decrement"
            onClick={decrement}
            palette="danger"
            usage="filled"
          >
            <Subtract />
          </IconButton>
        </Group>
        <Text>
          Renders: <ReactiveText data={store.renderCount} />
        </Text>
      </HStack>

      <Text userSelect="none">
        <ReactiveText data={result} />
      </Text>
    </Stack>
  )
}
