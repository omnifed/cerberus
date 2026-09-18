'use client'

import { Box, Stack } from '@/styled-system/jsx'
import { Collapsible, type OpenChangeDetails, Text } from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'

export function ControlledDemo() {
  const [open, setOpen] = useSignal<boolean>(false)

  return (
    <Stack gap="4" w="3/4">
      <Text textStyle="label-sm">Status: {open ? 'Open' : 'Closed'}</Text>

      <Collapsible.Root
        open={open}
        onOpenChange={(e: OpenChangeDetails) => setOpen(e.open)}
        w="full"
      >
        <Collapsible.Trigger paddingY="3">Toggle Collapsible</Collapsible.Trigger>
        <Collapsible.Content>
          <Box padding="4" borderWidth="1px">
            This collapsible is controlled by external state. You can open and close it
            using the buttons above or by clicking the trigger.
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  )
}
