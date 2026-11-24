'use client'

import { HStack } from '@/styled-system/jsx'
import { Button } from '@cerberus-design/react'
import {
  type Accessor,
  createSignal,
  ReactiveText,
} from '@cerberus-design/signals'

type CounterStore = {
  count: Accessor<number>
  decrement: () => void
  increment: () => void
}

function createCounter(): CounterStore {
  const [count, setCount] = createSignal<number>(0)
  return {
    count,
    decrement: () => setCount(count() - 1),
    increment: () => setCount(count() + 1),
  }
}

export function StoreDemo() {
  const store = createCounter()

  return (
    <HStack gap="md" w="3/4">
      <ReactiveText data={store.count} />

      <Button.Group>
        <Button onClick={store.decrement}>-</Button>
        <Button onClick={store.increment}>+</Button>
      </Button.Group>
    </HStack>
  )
}
