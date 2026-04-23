'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { ReactiveText, useSignal } from '@cerberus-design/signals'
import { createRenderStore } from '../render-store'

export function BasicDemo() {
  const store = createRenderStore()
  const [local, setLocal] = useSignal<string>('hello')

  store.trackRenders()

  return (
    <HStack justify="space-between" w="1/2">
      <Stack>
        <Button size="sm" onClick={() => store.setCount((prev) => prev + 1)}>
          Increment
        </Button>
        <Button
          size="sm"
          onClick={() =>
            setLocal((prev) => {
              return prev === 'hello' ? 'world' : 'hello'
            })
          }
        >
          Set Local
        </Button>
      </Stack>

      <Stack>
        <Text>{local}</Text>

        {/* Not re-rendered - but the text value is updated */}
        <ReactiveText data={store.count} />

        <Text>
          Renders: <ReactiveText data={store.renderCount} />
        </Text>
      </Stack>
    </HStack>
  )
}
