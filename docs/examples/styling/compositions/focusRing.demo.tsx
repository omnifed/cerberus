import { Center, Stack } from 'styled-system/jsx'
import { For } from '@cerberus-design/react'

export function FocusRingDemo() {
  return (
    <Stack gap="4" w="3/4">
      <For each={['inside', 'outside', 'mixed']}>
        {(focusRing) => (
          <Center
            h="20"
            bg="bg"
            borderWidth="1px"
            borderColor="page.border.initial"
            focusRing={focusRing}
            focusRingColor="action.border.focus"
            data-focus
          >
            {focusRing}
          </Center>
        )}
      </For>
    </Stack>
  )
}
