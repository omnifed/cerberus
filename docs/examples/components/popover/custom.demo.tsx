'use client'

import { Popover } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Popover.Root size="lg">
      <Popover.Trigger>Custom Trigger</Popover.Trigger>

      <Popover.Positioner>
        <Popover.Content
          bgColor="page.bg.100"
          border="2px solid"
          rounded="none"
        >
          <Popover.Header pb="lg">This is a custom popover</Popover.Header>
          <Popover.Body bgColor="page.bg.200">
            That is fully built from scratch
          </Popover.Body>
          <Popover.Footer textStyle="heading-2xs">Footer sturf</Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  )
}
