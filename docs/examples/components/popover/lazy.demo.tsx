'use client'

import { Button, Popover } from '@cerberus-design/react'

export function LazyDemo() {
  return (
    <Popover trigger={<Button>Trigger</Button>} lazyMounted unmountOnExit>
      <Popover.Body>Everything is content...</Popover.Body>
    </Popover>
  )
}
