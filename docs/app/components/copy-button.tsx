'use client'

import { Clipboard, ClipboardRootProps, IconButton } from '@cerberus-design/react'

interface CopyButtonProps {
  content: ClipboardRootProps['value']
}

export function CopyButton(props: CopyButtonProps) {
  return (
    <Clipboard.Root value={props.content}>
      <Clipboard.Control asChild>
        <Clipboard.Trigger asChild>
          <IconButton clipboard shape="square" size="sm" rounded="xs">
            <Clipboard.Indicator />
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
