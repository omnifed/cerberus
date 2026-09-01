'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Text } from '@cerberus-design/react'
import { batch, useSignal } from '@cerberus-design/signals'

export function BasicDemo() {
  const [count, setCount] = useSignal<number>(0)
  const [isEven, setIsEven] = useSignal<boolean>(false)

  const increment = () => {
    batch(() => {
      setCount(count + 1)
      setIsEven(count % 2 === 0)
    })
  }

  return (
    <HStack gap="md" w="3/4">
      <Button onClick={increment}>Batch Increment</Button>

      <Text>Count: {count}</Text>
      <Text>Is Even: {isEven ? 'Yes' : 'No'}</Text>
    </HStack>
  )
}
