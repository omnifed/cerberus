'use client'

import { Box, Stack } from '@/styled-system/jsx'
import { Button, Dialog, type OpenChangeDetails } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function ControlledDemo() {
  const [open, setOpen] = useSignal<boolean>(false)

  return (
    <Dialog.Root
      size="auto"
      open={open}
      onOpenChange={(details: OpenChangeDetails) => setOpen(details.open)}
    >
      <Dialog.Trigger asChild>
        <Button>open dialog</Button>
      </Dialog.Trigger>

      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="xs" w="full">
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Description maxW="prose">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Dialog.Description>
        </Stack>

        <Box mt="md" w="full">
          <Dialog.CloseTrigger asChild>
            <Button>Close</Button>
          </Dialog.CloseTrigger>
        </Box>
      </Dialog>
    </Dialog.Root>
  )
}
