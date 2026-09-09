'use client'

import { Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogTrigger,
  Text,
} from '@cerberus-design/react'

export function LazyDemo() {
  return (
    <DialogProvider lazyMount unmountOnExit>
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Dialog size="auto">
        <DialogCloseIconTrigger />

        <Stack gap="md" w="full">
          <DialogHeading asChild>
            <Text textStyle="heading-sm">Lazy Loaded</Text>
          </DialogHeading>
          <DialogDescription maxW="prose">
            This dialog content is only mounted when opened and unmounts on close.
          </DialogDescription>
        </Stack>
      </Dialog>
    </DialogProvider>
  )
}
