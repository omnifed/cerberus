'use client'

import { Button, Theme, Tooltip } from '@cerberus-design/react'

export function PortalDemo() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button>Dark</Button>
      </Tooltip.Trigger>

      <Tooltip.Positioner>
        <Theme mode="dark">
          <Tooltip.Content color="page.text.200" bgColor="page.bg.200">
            This is a dark mode tooltip bubble
          </Tooltip.Content>
        </Theme>
      </Tooltip.Positioner>
    </Tooltip.Root>
  )
}
