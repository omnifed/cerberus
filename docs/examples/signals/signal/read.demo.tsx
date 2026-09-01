'use client'

import { DecorativeBox } from '@/app/components/decorative-box'
import { HStack, Stack } from '@/styled-system/jsx'
import { Button, For, Text } from '@cerberus-design/react'
import {
  createComputed,
  ReactiveText,
  useRead,
  useStore,
} from '@cerberus-design/signals'
import { useEffect } from 'react'
import { createRenderStore } from '../render-store'

const store = createRenderStore()

export function ReadDemo() {
  // You can directly read signals outside of JSX
  const increment = () => store.setCount(store.count() + 1)
  const getCount = () => alert(store.count())

  useEffect(() => {
    return () => store.onUnmount()
  }, [])

  store.trackRenders()

  return (
    <Stack gap="md" w="3/4">
      <HStack justify="space-between" w="full">
        <Stack>
          <Button onClick={increment} size="sm">
            Increment
          </Button>
          <Button onClick={getCount} size="sm">
            Get count
          </Button>
        </Stack>

        <Stack>
          <HStack gap="md">
            <Text>Count:</Text>
            <ReactiveText data={store.count} />
          </HStack>
          <HStack gap="md">
            <Text>Render Count:</Text>
            <ReactiveText data={store.renderCount} />
          </HStack>
        </Stack>
      </HStack>

      <ReactiveList />
    </Stack>
  )
}

function ReactiveList() {
  const listStore = useStore(createRenderStore)

  // useRead lives within the React-render scope because it's a hook.
  // This allows the For to know when to re-render to show the updated count.
  const count = useRead(store.count)
  const items = createComputed(() => {
    return Array.from({ length: count }, (_, i) => i + 1)
  })

  useEffect(() => {
    return () => listStore.onUnmount()
  }, [listStore])

  listStore.trackRenders()

  return (
    <Stack w="full">
      <HStack gap="md" h="2rem" overflowX="auto" w="full">
        <For each={items()}>
          {(item) => (
            <DecorativeBox p="sm" w="fit-content">
              {item}
            </DecorativeBox>
          )}
        </For>
      </HStack>

      <Text as="small" textStyle="sm">
        List Renders: <ReactiveText data={listStore.renderCount} />
      </Text>
    </Stack>
  )
}
