'use client'

import { createRenderStore } from '@/app/docs/signals/[slug]/components/render-store'
import { HStack, Stack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { ReactiveText, useStore } from '@cerberus-design/signals'
import { useTrackRenders } from './track-renders'

export function BasicDemo() {
  const store = useStore(createRenderStore)

  const increment = () => {
    store.setCount((prev) => prev + 1)
  }

  useTrackRenders(store)

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
