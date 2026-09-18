'use client'

import { Button, Clipboard } from '@cerberus-design/react'

// [!code word:asChild]
export function ButtonDemo() {
  return (
    <Clipboard.Root value="Hello, World!">
      <Clipboard.Control>
        <Clipboard.Trigger asChild>
          <Button color="action.text.initial">
            <Clipboard.CopyText color="currentColor" />
            <Clipboard.Indicator />
          </Button>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
