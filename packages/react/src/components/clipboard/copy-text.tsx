import type { ClipboardIndicatorProps } from '@ark-ui/react'
import { Clipboard } from './parts'

/**
 * A simple abstraction around the `Clipboard.Indicator` component that provides
 * default "Copy" and "Copied" text.
 */
export function CopyText(props: ClipboardIndicatorProps) {
  return (
    <Clipboard.Indicator copied="Copied" {...props}>
      Copy
    </Clipboard.Indicator>
  )
}
