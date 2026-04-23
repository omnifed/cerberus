'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { ReactiveText, useSignal } from '@cerberus-design/signals'
import { createRenderStore } from '../render-store'
import { useEffect } from 'react'

const store = createRenderStore()

export function UseDemo() {
  const [count, setCount, getCount] = useSignal<number>(0)

  const increment = () => setCount(count + 1)

  useEffect(() => {
    return () => store.onUnmount()
  }, [])

  store.trackRenders()

  return (
    <HStack justify="space-between" w="3/4">
      <HStack gap="md" w="full">
        <Button onClick={increment}>Increment</Button>

        <Text>{count}</Text>
        <ReactiveText data={getCount} />
      </HStack>

      <HStack gap="md" w="full">
        <Text>
          Render Count: <ReactiveText data={store.renderCount} />
        </Text>
      </HStack>
    </HStack>
  )
}
