'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Input, Popover } from '@cerberus-design/react'

export function AnchorDemo() {
  return (
    <Popover.Root size="lg">
      <HStack gap="md">
        <Popover.Trigger asChild>
          <Button size="sm" usage="outlined-subtle">
            Trigger
          </Button>
        </Popover.Trigger>

        <Popover.Anchor>
          <Input placeholder="Anchor..." size="sm" />
        </Popover.Anchor>
      </HStack>

      <Popover.Positioner>
        <Popover.Content>
          <Popover.Body>This is anchored to the input.</Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
