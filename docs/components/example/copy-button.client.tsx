'use client'

import {
  Clipboard,
  ClipboardRootProps,
  IconButton,
} from '@cerberus-design/react'

interface CopyButtonProps extends ClipboardRootProps {
  content: ClipboardRootProps['value']
}

export function CopyButton(props: CopyButtonProps) {
  return (
    <Clipboard.Root {...props} value={props.content}>
      <Clipboard.Control asChild>
        <Clipboard.TriggerWithTooltip asChild>
          <IconButton clipboard shape="square" size="sm" rounded="xs">
            <Clipboard.CopyIndicator />
          </IconButton>
        </Clipboard.TriggerWithTooltip>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
