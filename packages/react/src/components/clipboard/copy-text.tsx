import { ClipboardIndicator, type ClipboardIndicatorProps } from './primitives'

/**
 * A simple abstraction around the `Clipboard.Indicator` component that provides
 * default "Copy" and "Copied" text.
 */
export function CopyText(props: ClipboardIndicatorProps) {
  return (
    <ClipboardIndicator copied="Copied" {...props}>
      Copy
    </ClipboardIndicator>
  )
}
