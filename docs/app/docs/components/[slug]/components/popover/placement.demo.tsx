'use client'

import { Button, Popover } from '@cerberus-design/react'

export function PlacementDemo() {
  return (
    <Popover
      trigger={<Button>Trigger</Button>}
      positioning={{
        placement: 'left-start',
        offset: { mainAxis: 12, crossAxis: 12 },
      }}
    >
      <Popover.Body>Everything is content...</Popover.Body>
    </Popover>
  )
}
