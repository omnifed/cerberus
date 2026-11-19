'use client'

import { ClipboardIndicator, type ClipboardIndicatorProps } from './primitives'

export type ClipboardCopyTextProps = ClipboardIndicatorProps

/**
 * An abstraction of `Clipboard.Indicator` that shows "Copy", then "Copied"
 * once the value is copied. Pass `children` to replace "Copy" or `copied` to
 * replace "Copied".
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/clipboard)
 * @description [Ark Docs](https://ark-ui.com/docs/components/clipboard)
 */
export function ClipboardCopyText(props: ClipboardCopyTextProps) {
  const { children, ...indicatorProps } = props
  return (
    <ClipboardIndicator copied="Copied" {...indicatorProps}>
      {children ?? 'Copy'}
    </ClipboardIndicator>
  )
}
