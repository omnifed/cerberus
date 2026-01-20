'use client'

import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogTrigger,
} from '@cerberus-design/react'
import { SelectBasicPreview } from './static'
import { Box, VStack } from '@/styled-system/jsx'

export function SelectWithDialogDemo() {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <Button>Open Select Dialog</Button>
      </DialogTrigger>
      <Dialog>
        <VStack alignItems="flex-start" gap="lg" w="full">
          <DialogCloseIconTrigger />
          <DialogHeading>Some heading</DialogHeading>
          <DialogDescription>
            This is a description for the dialog. You can use this space to
            provide more context or instructions for the user.
          </DialogDescription>

          <Box w="full">
            <SelectBasicPreview />
          </Box>
        </VStack>
      </Dialog>
    </DialogProvider>
  )
}
