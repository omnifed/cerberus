'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { ReactiveText, useSignal, useStore } from '@cerberus-design/signals'
import { useEffect } from 'react'
import { createRenderStore } from '../render-store'

export function UseDemo() {
  const store = useStore(createRenderStore)
  const [count, setCount, getCount] = useSignal<number>(0)

  const increment = () => setCount(count + 1)

  useEffect(() => {
    return () => store.onUnmount()
  }, [store])

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
