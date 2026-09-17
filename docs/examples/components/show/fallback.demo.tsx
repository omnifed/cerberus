'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, Show, Text, ToggleParts } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function FallbackDemo() {
  const [authenticated, setAuthenticated] = useSignal<boolean>(false)

  function handleChange(state: boolean) {
    setAuthenticated(state)
  }

  return (
    <Stack w="1/2">
      <ToggleParts.Root onPressedChange={handleChange} pressed={authenticated} asChild>
        <Button type="button">
          <ToggleParts.Indicator fallback={<>Sign in</>}>
            Sign out
          </ToggleParts.Indicator>
        </Button>
      </ToggleParts.Root>

      <Show when={authenticated} fallback={<Text>You are not allowed to enter!</Text>}>
        <Text>You are authenticated and can enter the gates of Hades!</Text>
      </Show>
    </Stack>
  )
}
