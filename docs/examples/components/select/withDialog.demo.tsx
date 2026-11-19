'use client'

import { Box, VStack } from '@/styled-system/jsx'
import { Button, Dialog } from '@cerberus-design/react'
import { BasicDemo } from './basic.demo'

export function WithDialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Select Dialog</Button>
      </Dialog.Trigger>
      <Dialog>
        <VStack alignItems="flex-start" gap="lg" w="full">
          <Dialog.CloseIconTrigger />
          <Dialog.Title>Some heading</Dialog.Title>
          <Dialog.Description>
            This is a description for the dialog. You can use this space to
            provide more context or instructions for the user.
          </Dialog.Description>

          <Box w="full">
            <BasicDemo />
          </Box>
        </VStack>
      </Dialog>
    </Dialog.Root>
  )
}
