'use client'

import { VStack } from '@/styled-system/jsx'
import { Clipboard } from '@cerberus-design/react'

export function StaticPreview() {
  return (
    <VStack gap="md" w="full">
      <Clipboard.Root value="Hello, World!">
        <Clipboard.Label>Copy this text</Clipboard.Label>
        <Clipboard.Control>
          <Clipboard.Input />
          <Clipboard.Trigger>
            <Clipboard.Indicator />
          </Clipboard.Trigger>
        </Clipboard.Control>
      </Clipboard.Root>
    </VStack>
  )
}
