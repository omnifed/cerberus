'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { ReactiveText } from '@cerberus-design/signals'
import { useEffect } from 'react'
import { createRenderStore } from '../render-store'

const store = createRenderStore()

export function BasicDemo() {
  const increment = () => {
    store.setCount((prev) => prev + 1)
  }

  useEffect(() => {
    return () => store.onUnmount()
  }, [])

  store.trackRenders()

  return (
    <HStack justify="space-between" w="3/4">
      <Button onClick={increment}>Increment</Button>

      <Stack>
        <Text>
          Count: <ReactiveText data={store.count} />
        </Text>
        <Text>
          Render Count: <ReactiveText data={store.renderCount} />
        </Text>
      </Stack>
    </HStack>
  )
}
