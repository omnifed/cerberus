'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Input, PopoverParts } from '@cerberus-design/react'

export function AnchorDemo() {
  return (
    <PopoverParts.Root size="lg">
      <HStack gap="md">
        <PopoverParts.Trigger asChild>
          <Button size="sm" usage="outlined-subtle">
            Trigger
          </Button>
        </PopoverParts.Trigger>

        <PopoverParts.Anchor>
          <Input placeholder="Anchor..." size="sm" />
        </PopoverParts.Anchor>
      </HStack>

      <PopoverParts.Positioner>
        <PopoverParts.Content>
          <PopoverParts.Body>This is anchored to the input.</PopoverParts.Body>
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </PopoverParts.Root>
  )
}
