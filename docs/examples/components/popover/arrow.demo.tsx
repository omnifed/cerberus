'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Popover } from '@cerberus-design/react'

export function ArrowDemo() {
  return (
    <Popover trigger={<Button>Trigger</Button>} usage="arrow">
      <HStack p="md" w="full">
        Everything is content...
      </HStack>
    </Popover>
  )
}
