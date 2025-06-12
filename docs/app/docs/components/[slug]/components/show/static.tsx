'use client'

import { Button, Show, ToggleParts, Text } from '@cerberus-design/react'
import { VStack } from 'styled-system/jsx'
import { useState } from 'react'

export default function ShowPreview() {
  const [authenticated, setAuthenticated] = useState<boolean>(false)

  function handleChange(state: boolean) {
    setAuthenticated(state)
  }

  return (
    <VStack w="1/2">
      <ToggleParts.Root
        onPressedChange={handleChange}
        pressed={authenticated}
        asChild
      >
        <Button type="button">
          <ToggleParts.Indicator fallback={<>Sign in</>}>
            Sign out
          </ToggleParts.Indicator>
        </Button>
      </ToggleParts.Root>

      <Show
        when={authenticated}
        fallback={<Text>You are not allowed to enter!</Text>}
      >
        <Text>You are authenticated and can enter the gates of Hades!</Text>
      </Show>
    </VStack>
  )
}
