'use client'

import { Stack } from '@/styled-system/jsx'
import { Button, cerberus, Dialog } from '@cerberus-design/react'

export function ContextDemo() {
  return (
    <Dialog.Root size="auto">
      <Dialog.Trigger asChild>
        <Button>open dialog</Button>
      </Dialog.Trigger>

      <Dialog>
        <Dialog.CloseIconTrigger />

        <Stack gap="xs" w="20rem">
          <Dialog.Title>Status</Dialog.Title>
          <Dialog.Description maxW="prose">
            <Dialog.Context>
              {(dialog) => (
                <cerberus.p>
                  Dialog is {dialog.open ? 'open' : 'closed'}
                </cerberus.p>
              )}
            </Dialog.Context>
          </Dialog.Description>
        </Stack>
      </Dialog>
    </Dialog.Root>
  )
}
