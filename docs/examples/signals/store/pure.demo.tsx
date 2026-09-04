'use client'

import { HStack, Square } from '@/styled-system/jsx'
import { Add, Subtract } from '@carbon/icons-react'
import { Group, IconButton, Text } from '@cerberus-design/react'
import { createComputed, createSignal, ReactiveText } from '@cerberus-design/signals'

function myStore() {
  const [count, setCount] = createSignal<number>(0)

  const multiplied = createComputed<number>(() => count() + count())

  return {
    count,
    multiplied,
    increment: () => setCount(count() + 1),
    decrement: () => setCount(count() - 1),
  }
}

// Call it globally - outside of the React component scope
const store = myStore()

export function PureDemo() {
  return (
    <HStack gap="lg" w="3/4">
      <Group>
        <IconButton ariaLabel="Decrement" onClick={store.decrement}>
          <Subtract />
        </IconButton>

        <Square>
          <ReactiveText data={store.count} />
        </Square>

        <IconButton ariaLabel="Increment" onClick={store.increment}>
          <Add />
        </IconButton>
      </Group>

      <Text>
        Multiplied: <ReactiveText data={store.multiplied} />
      </Text>
    </HStack>
  )
}
