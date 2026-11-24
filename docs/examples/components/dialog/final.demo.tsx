'use client'

import { Box, Stack, VStack } from '@/styled-system/jsx'
import { Button, Dialog, Text } from '@cerberus-design/react'
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

      <Dialog.Root size="auto" finalFocusEl={() => finalRef.current}>
        <Dialog.Trigger asChild>
          <Button>open dialog</Button>
        </Dialog.Trigger>

        <Dialog>
          <Dialog.CloseIconTrigger />

          <Stack gap="xs" w="full">
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description maxW="prose">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </Dialog.Description>
          </Stack>

          <Box mt="md" w="full">
            <Dialog.CloseTrigger asChild>
              <Button>Close</Button>
            </Dialog.CloseTrigger>
          </Box>
        </Dialog>
      </Dialog.Root>
    </VStack>
  )
}
