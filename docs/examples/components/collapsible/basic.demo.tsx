'use client'

import { Box, HStack } from '@/styled-system/jsx'
import { ChevronDown } from '@carbon/icons-react'
import { Collapsible } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <HStack h="full" w="3/4">
      <Collapsible.Root w="full">
        <Collapsible.Trigger asChild>
          <HStack gap="sm" userSelect="none">
            <Collapsible.Indicator
              transform="rotate(-90deg)"
              transition="transform 0.2s"
              _open={{ transform: 'rotate(0deg)' }}
            >
              <ChevronDown />
            </Collapsible.Indicator>
            Toggle
          </HStack>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <Box
            border="1px solid"
            borderColor="page.border.initial"
            p="md"
            mt="sm"
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
