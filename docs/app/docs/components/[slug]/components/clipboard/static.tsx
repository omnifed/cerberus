'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Clipboard, IconButton, Text } from '@cerberus-design/react'

export function StaticPreview() {
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

export function ButtonPreview() {
  return (
    <Clipboard.Root value="Hello, World!">
      <Clipboard.Control>
        <Clipboard.Trigger asChild>
          <Button color="action.text.initial">
            <Clipboard.CopyText color="currentColor" />
            <Clipboard.Indicator />
          </Button>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}

export function TextPreview() {
  return (
    <Clipboard.Root value="fake@email.com">
      <Clipboard.Label asChild>
        <Text as="small" textStyle="label-sm" color="page.text.200">
          Copy Email
        </Text>
      </Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Trigger>
          <Text textStyle="label-md">fake@email.com</Text>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
