'use client'

import { Button, Popover } from '@cerberus-design/react'

export function NestedDemo() {
  return (
    <Popover trigger={<Button>Trigger</Button>}>
      <Popover.Body>
        This is the parent popover content.
        <Popover
          trigger={
            <Button usage="outlined-subtle" size="sm">
              Trigger
            </Button>
          }
        >
          <Popover.Body>This is the nested popover content.</Popover.Body>
        </Popover>
      </Popover.Body>
    </Popover>
  )
}
