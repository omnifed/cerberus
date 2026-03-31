'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Popover } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Popover trigger={<Button>Trigger</Button>}>
      <HStack p="md" w="full">
        Everything is content...
      </HStack>
    </Popover>
  )
}
