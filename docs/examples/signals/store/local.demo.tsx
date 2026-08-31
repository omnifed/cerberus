'use client'

import { HStack, Square } from '@/styled-system/jsx'
import { Add, Subtract } from '@carbon/icons-react'
import { For, Group, IconButton, Text } from '@cerberus-design/react'
import {
  createComputed,
  createSignal,
  ReactiveText,
  useRead,
  useStore,
} from '@cerberus-design/signals'

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

export function LocalDemo() {
  // You only need to do this if you are using `useRead` for iteration
  const store = useStore(myStore)
  const count = useRead(store.count)

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

      <For each={Array.from({ length: count }, (_, i) => i)}>
        {(i) => <Text key={i}>{i}</Text>}
      </For>
    </HStack>
  )
}
