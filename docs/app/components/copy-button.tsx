'use client'

import {
  Clipboard,
  IconButton,
  type IconButtonProps,
} from '@cerberus-design/react'

interface CopyButtonProps extends Omit<IconButtonProps, 'ariaLabel'> {
  content: string
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
