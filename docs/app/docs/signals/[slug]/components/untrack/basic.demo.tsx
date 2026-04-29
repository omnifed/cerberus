'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { ReactiveText, untrack } from '@cerberus-design/signals'
import { useEffect, useMemo } from 'react'
import { createRenderStore } from '../render-store'

export function BasicDemo() {
  // We only do this because we are tracking renders in a fragile React Effect
  const store = useMemo(createRenderStore, [])

  const increment = () => {
    store.setCount((prev) => prev + 1)
  }

  useEffect(() => {
    store.startCounter()
    return () => store.onUnmount()
  }, [store])

  store.trackRenders()

  return (
    <HStack justify="space-between" w="3/4">
      <Button onClick={increment}>Increment</Button>

      <Stack>
        <Text>
          Count: <ReactiveText data={store.count} />
        </Text>
        <Text>Untracked: {untrack(store.count)}</Text>
        <Text>
          Render Count: <ReactiveText data={store.renderCount} />
        </Text>
      </Stack>
    </HStack>
  )
}
