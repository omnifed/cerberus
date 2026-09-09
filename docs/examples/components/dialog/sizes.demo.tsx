'use client'

import { Box, HStack, Stack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogCloseTrigger,
  DialogDescription,
  DialogHeading,
  DialogProps,
  DialogProvider,
  DialogTrigger,
} from '@cerberus-design/react'

export function SizesDemo() {
  return (
    <HStack gap="md">
      <DialogContent size="xs" />
      <DialogContent size="sm" />
      <DialogContent size="md" />
      <DialogContent size="lg" />
      <DialogContent size="full" />
      <DialogContent size="auto" />
    </HStack>
  )
}

function DialogContent(props: DialogProps) {
  return (
    <DialogProvider>
      <DialogTrigger asChild>
        <Button size="sm">open {String(props.size)}</Button>
      </DialogTrigger>

      <Dialog size={props.size}>
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
