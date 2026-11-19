'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, Dialog, Text } from '@cerberus-design/react'

export function LazyDemo() {
  return (
    <Dialog.Root size="auto" lazyMount unmountOnExit>
      <Dialog.Trigger asChild>
        <Button>open dialog</Button>
      </Dialog.Trigger>

      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="md" w="full">
          <Dialog.Title asChild>
            <Text textStyle="heading-sm">Lazy Loaded</Text>
          </Dialog.Title>
          <Dialog.Description maxW="prose">
            This dialog content is only mounted when opened and unmounts on
            close.
          </Dialog.Description>
        </Stack>
      </Dialog>
    </Dialog.Root>
  )
}
