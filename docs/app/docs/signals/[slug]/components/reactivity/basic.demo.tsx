'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { ReactiveText, useSignal } from '@cerberus-design/signals'
import { createRenderStore } from '../render-store'
import { useEffect } from 'react'

const store = createRenderStore()

export function BasicDemo() {
  const [local, setLocal] = useSignal<string>('hello')

  useEffect(() => {
    return () => store.onUnmount()
  }, [])

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

      <Stack userSelect="none">
        <Text>Local: {local}</Text>

        <Text>
          {/* Not re-rendered - only the html text value is updated */}
          Count: <ReactiveText data={store.count} />
        </Text>

        <Text>
          Renders: <ReactiveText data={store.renderCount} />
        </Text>
      </Stack>
    </HStack>
  )
}
