'use client'

import { Box } from '@/styled-system/jsx'
import { Collapsible } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Collapsible.Root w="full">
      <Collapsible.Trigger
        color="danger.text.100"
        bgColor="danger.surface.initial"
        px="sm"
        w="full"
      >
        Custom Toggle
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box w="full">Custom collapsible content.</Box>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
