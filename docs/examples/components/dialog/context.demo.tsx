'use client'

import { Stack } from '@/styled-system/jsx'
import {
  Button,
  cerberus,
  Dialog,
  DialogCloseIconTrigger,
  DialogContext,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogTrigger,
} from '@cerberus-design/react'

export function ContextDemo() {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Dialog size="auto">
        <DialogCloseIconTrigger />

        <Stack gap="xs" w="20rem">
          <DialogHeading>Status</DialogHeading>
          <DialogDescription maxW="prose">
            <DialogContext>
              {(dialog) => (
                <cerberus.p>Dialog is {dialog.open ? 'open' : 'closed'}</cerberus.p>
              )}
            </DialogContext>
          </DialogDescription>
        </Stack>
      </Dialog>
    </DialogProvider>
  )
}
