'use client'

import { Box, Stack } from '@/styled-system/jsx'
import {
  Button,
  DialogCloseIconTrigger,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogPositioner,
  DialogProvider,
  DialogTrigger,
  Portal,
} from '@cerberus-design/react'

export function NonModalDemo() {
  return (
    <DialogProvider closeOnInteractOutside={false} modal={false}>
      <DialogTrigger asChild>
        <Button>open dialog</Button>
      </DialogTrigger>

      <Portal>
        <DialogPositioner pointerEvents="none">
          <DialogContent size="auto">
            <DialogCloseIconTrigger />

            <Stack gap="xs" w="full">
              <DialogHeading>Dialog Title</DialogHeading>
              <DialogDescription maxW="prose">
                Far far away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </DialogDescription>
            </Stack>

            <Box mt="md" w="full">
              <DialogCloseTrigger asChild>
                <Button>Close</Button>
              </DialogCloseTrigger>
            </Box>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogProvider>
  )
}
