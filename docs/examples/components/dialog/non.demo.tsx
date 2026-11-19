'use client'

import { Box, Stack } from '@/styled-system/jsx'
import { Button, Dialog, Portal } from '@cerberus-design/react'

export function NonModalDemo() {
  return (
    <Dialog.Root size="auto" closeOnInteractOutside={false} modal={false}>
      <Dialog.Trigger asChild>
        <Button>open dialog</Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Positioner pointerEvents="none">
          <Dialog.Content>
            <Dialog.CloseIconTrigger />

            <Stack gap="xs" w="full">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description maxW="prose">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </Dialog.Description>
            </Stack>

            <Box mt="md" w="full">
              <Dialog.CloseTrigger asChild>
                <Button>Close</Button>
              </Dialog.CloseTrigger>
            </Box>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
