'use client'

import { Button, Clipboard } from '@cerberus-design/react'

// [!code word:asChild]
export function ButtonDemo() {
  return (
    <Clipboard.Root value="Hello, World!">
      <Clipboard.Control>
        <Clipboard.TriggerWithTooltip asChild>
          <Button color="action.text.initial">
            <Clipboard.CopyText color="currentColor" />
            <Clipboard.CopyIndicator />
          </Button>
        </Clipboard.TriggerWithTooltip>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
