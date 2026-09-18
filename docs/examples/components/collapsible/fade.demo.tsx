'use client'

import { Box, HStack } from '@/styled-system/jsx'
import { Collapsible } from '@cerberus-design/react'

export function FadeDemo() {
  return (
    <HStack h="full" w="17rem">
      <Collapsible.Root>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content effect="none">
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
