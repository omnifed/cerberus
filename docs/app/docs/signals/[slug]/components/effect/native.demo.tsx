'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Show, Text } from '@cerberus-design/react'
import { createEffect, onCleanup, useSignal } from '@cerberus-design/signals'
import { useEffect } from 'react'

function MountedMeta() {
  const [lifeCycle, setLifeCycle] = useSignal<string>('')
  const [count, setCount] = useSignal<number>(0)

  useEffect(() => {
    setLifeCycle('mounted')

    const unsubscribe = createEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 1000)

      onCleanup(() => clearInterval(interval))
    })

    return () => {
      setLifeCycle('unmounted')
      unsubscribe()
    }
  }, [setLifeCycle, setCount])

  return (
    <HStack gap="md" w="3/4">
      <Text>Component state: {lifeCycle}</Text>
      <Text>Count: {count}</Text>
    </HStack>
  )
}

export function NativeEffectDemo() {
  const [mount, setMount] = useSignal<boolean>(false)

  return (
    <HStack justify="space-between" w="3/4">
      <Button onClick={() => setMount((prev) => !prev)}>Toggle</Button>
      <Show when={mount}>{() => <MountedMeta />}</Show>
    </HStack>
  )
}
