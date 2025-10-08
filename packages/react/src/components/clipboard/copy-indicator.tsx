import {
  AnimatedCheckmarkIcon,
  CopyIcon,
} from '../../config/icons/checkbox.icons'
import { Clipboard } from './parts'
import type { ClipboardIndicatorProps } from './primitives'

/**
 * A simple abstraction around the `Clipboard.Indicator` component that provides
 * default "Copy" and "Copied" icons.
 */
export function CopyIndicator(props: ClipboardIndicatorProps) {
  return (
    <Clipboard.Indicator copied={<AnimatedCheckmarkIcon />} {...props}>
      <CopyIcon />
    </Clipboard.Indicator>
  )
}
