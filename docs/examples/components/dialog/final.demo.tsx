'use client'

import { Box, Stack, VStack } from '@/styled-system/jsx'
import {
  Button,
  Dialog,
  DialogCloseIconTrigger,
  DialogCloseTrigger,
  DialogDescription,
  DialogHeading,
  DialogProvider,
  DialogTrigger,
  Text,
} from '@cerberus-design/react'
import { useRef } from 'react'

export function FinalFocusDemo() {
  const finalRef = useRef<HTMLParagraphElement>(null)

  return (
    <VStack gap="md" w="full">
      <Text
        ref={finalRef}
        display="inline-block"
        _focusVisible={{
          boxShadow: 'none',
          outline: '3px solid',
          outlineColor: 'action.border.focus',
          outlineOffset: '2px',
        }}
      >
        I will receive focus when dialog closes
      </Text>

      <DialogProvider finalFocusEl={() => finalRef.current}>
        <DialogTrigger asChild>
          <Button>open dialog</Button>
        </DialogTrigger>

        <Dialog size="auto">
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
        </Dialog>
      </DialogProvider>
    </VStack>
  )
}
