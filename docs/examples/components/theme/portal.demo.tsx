'use client'

import { TooltipParts, Theme, Button } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export function PortalDemo() {
  return (
    <TooltipParts.Root>
      <TooltipParts.Trigger asChild>
        <Button>Dark</Button>
      </TooltipParts.Trigger>

      <TooltipParts.Positioner>
        <TooltipParts.Content asChild>
          <Theme mode="dark">
            <Box bgColor="page.bg.200" p="md" w="full">
              This is a dark mode tooltip bubble
            </Box>
          </Theme>
        </TooltipParts.Content>
      </TooltipParts.Positioner>
    </TooltipParts.Root>
  )
}
