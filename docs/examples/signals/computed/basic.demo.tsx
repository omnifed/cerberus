'use client'

import { HStack, Stack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { createComputed, createEffect, useSignal } from '@cerberus-design/signals'

export function BasicDemo() {
  const [count, setCount, getCount] = useSignal<number>(0)
  const [_isEven, setIsEven, getIsEven] = useSignal<boolean>(false)

  const info = createComputed(() => {
    return `${getCount()} is ${getIsEven() ? 'even' : 'odd'}`
  })

  createEffect(() => {
    setIsEven(getCount() % 2 === 0)
  })

  return (
    <HStack gap="xl" w="3/4">
      <Button onClick={() => setCount(count + 1)}>Increment</Button>

      <Stack direction="column" gap="xs">
        <Text>Count: {count}</Text>
        <Text>Double Count: {info()}</Text>
      </Stack>
    </HStack>
  )
}
