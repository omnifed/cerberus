'use client'

import { Button, Theme, TooltipParts } from '@cerberus-design/react'

export function PortalDemo() {
  return (
    <TooltipParts.Root>
      <TooltipParts.Trigger asChild>
        <Button>Dark</Button>
      </TooltipParts.Trigger>

      <TooltipParts.Positioner>
        <Theme mode="dark">
          <TooltipParts.Content color="page.text.200" bgColor="page.bg.200">
            This is a dark mode tooltip bubble
          </TooltipParts.Content>
        </Theme>
      </TooltipParts.Positioner>
    </TooltipParts.Root>
  )
}
