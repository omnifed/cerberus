'use client'

import { Notification, NotificationOff } from '@carbon/icons-react'
import { IconButton, Toggle } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Toggle.Root defaultPressed={true} asChild>
      <IconButton ariaLabel="Notification preferences">
        <Toggle.Indicator fallback={<NotificationOff />}>
          <Notification />
        </Toggle.Indicator>
      </IconButton>
    </Toggle.Root>
  )
}
