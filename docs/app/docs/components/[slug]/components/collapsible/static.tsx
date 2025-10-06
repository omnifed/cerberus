'use client'

import { Box, HStack } from '@/styled-system/jsx'
import { Collapsible } from '@cerberus-design/react'

export function StaticPreview() {
  return (
    <HStack h="full" w="17rem">
      <Collapsible.Root>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>
          <Box
            border="1px solid"
            borderColor="page.border.initial"
            p="md"
            rounded="md"
            w="full"
          >
            Collapsible content goes here.
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </HStack>
  )
}

export function FadeInPreview() {
  return (
    <HStack h="full" w="17rem">
      <Collapsible.Root>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content effect="fade">
          <Box
            border="1px solid"
            borderColor="page.border.initial"
            p="md"
            rounded="md"
            w="full"
          >
            Collapsible content goes here.
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </HStack>
  )
}

export function CustomPreview() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger style={{ color: 'tomato' }}>
        Custom Toggle
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: 16, background: '#e0f7fa', borderRadius: 4 }}>
          Custom collapsible content.
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
