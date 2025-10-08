import {
  AnimatedCheckmarkIcon,
  CopyIcon,
} from '../../config/icons/checkbox.icons'
import { ClipboardIndicator, type ClipboardIndicatorProps } from './primitives'

/**
 * A simple abstraction around the `Clipboard.Indicator` component that provides
 * default "Copy" and "Copied" icons.
 */
export function CopyIndicator(props: ClipboardIndicatorProps) {
  return (
    <ClipboardIndicator copied={<AnimatedCheckmarkIcon />} {...props}>
      <CopyIcon />
    </ClipboardIndicator>
  )
}
