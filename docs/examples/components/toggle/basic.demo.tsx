'use client'

import { Notification, NotificationOff } from '@carbon/icons-react'
import { IconButton, ToggleParts } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <ToggleParts.Root defaultPressed={true} asChild>
      <IconButton ariaLabel="Notification preferences">
        <ToggleParts.Indicator fallback={<NotificationOff />}>
          <Notification />
        </ToggleParts.Indicator>
      </IconButton>
    </ToggleParts.Root>
  )
}
