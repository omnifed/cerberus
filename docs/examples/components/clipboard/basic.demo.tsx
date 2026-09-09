'use client'

import { HStack } from '@/styled-system/jsx'
import { Clipboard, IconButton, Text } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Clipboard.Root value="Hello, World!">
      <Clipboard.Control asChild>
        <HStack gap="md" w="full">
          <Clipboard.Label asChild>
            <Text as="small" textStyle="label-sm">
              Hello, World!
            </Text>
          </Clipboard.Label>

          <Clipboard.Trigger asChild>
            <IconButton clipboard shape="square" size="sm" rounded="xs">
              <Clipboard.Indicator />
            </IconButton>
          </Clipboard.Trigger>
        </HStack>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
