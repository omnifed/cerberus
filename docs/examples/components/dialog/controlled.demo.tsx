'use client'

import { Box, Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogCloseTrigger,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogTrigger,
  type OpenChangeDetails,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function ControlledDemo() {
  const [open, setOpen] = useSignal<boolean>(false)

  return (
    <DialogProvider
      open={open}
      onOpenChange={(details: OpenChangeDetails) => setOpen(details.open)}
    >
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Dialog size="auto">
        <DialogCloseIconTrigger />

        <Stack gap="xs" w="full">
          <DialogHeading>Dialog Title</DialogHeading>
          <DialogDescription maxW="prose">
            Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </DialogDescription>
        </Stack>

        <Box mt="md" w="full">
          <DialogCloseTrigger asChild>
            <Button>Close</Button>
          </DialogCloseTrigger>
        </Box>
      </Dialog>
    </DialogProvider>
  )
}
