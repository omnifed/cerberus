'use client'

import { Clipboard, ClipboardRootProps, IconButton } from '@cerberus-design/react'

interface CopyButtonProps extends ClipboardRootProps {
  content: ClipboardRootProps['value']
}

export function CopyButton(props: CopyButtonProps) {
  return (
    <Clipboard.Root {...props} value={props.content}>
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
