'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, Show, Text, Toggle } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function BasicDemo() {
  const [authenticated, setAuthenticated] = useSignal<boolean>(false)

  function handleChange(state: boolean) {
    setAuthenticated(state)
  }

  return (
    <Stack w="1/2">
      <Toggle.Root
        onPressedChange={handleChange}
        pressed={authenticated}
        asChild
      >
        <Button type="button">
          <Toggle.Indicator fallback={<>Sign in</>}>Sign out</Toggle.Indicator>
        </Button>
      </Toggle.Root>

      <Show when={authenticated}>
        <Text>You are authenticated and can enter the gates of Hades!</Text>
      </Show>
    </Stack>
  )
}
