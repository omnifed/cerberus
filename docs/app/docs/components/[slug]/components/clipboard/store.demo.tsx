'use client'

import { Button, Show, useClipboard } from '@cerberus-design/react'

export function StoreDemo() {
  const clipboard = useClipboard({ value: 'https://cerberus.digitalu.design/' })
  return (
    <Button size="sm" onClick={clipboard.copy}>
      <Show when={clipboard.copied} fallback="Copy">
        Copied
      </Show>
    </Button>
  )
}
