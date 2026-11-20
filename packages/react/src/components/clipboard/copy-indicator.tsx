'use client'

import {
  AnimatedCheckmarkIcon,
  CopyIcon,
} from '../../config/icons/checkbox.icons'
import { ClipboardIndicator, type ClipboardIndicatorProps } from './primitives'

export type ClipboardCopyIndicatorProps = ClipboardIndicatorProps

/**
 * An abstraction of `Clipboard.Indicator` that shows a copy icon, then an
 * animated checkmark once the value is copied. Pass `children` to replace the
 * copy icon or `copied` to replace the checkmark.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/clipboard)
 * @description [Ark Docs](https://ark-ui.com/docs/components/clipboard)
 */
export function ClipboardCopyIndicator(props: ClipboardCopyIndicatorProps) {
  const { children, ...indicatorProps } = props
  return (
    <ClipboardIndicator
      copied={<AnimatedCheckmarkIcon />}
      h="1em"
      w="1em"
      {...indicatorProps}
    >
      {children ?? <CopyIcon />}
    </ClipboardIndicator>
  )
}
