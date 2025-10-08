import { Tooltip } from '../tooltip/index'
import { ClipboardTrigger, type ClipboardTriggerProps } from './primitives'
import { CopyText } from './copy-text'

/**
 * A Clipboard trigger wrapped with a Tooltip that displays the copy status.
 */
export function TriggerWithTooltip(props: ClipboardTriggerProps) {
  return (
    <Tooltip closeOnClick={false} content={<CopyText />} asChild>
      <ClipboardTrigger {...props} />
    </Tooltip>
  )
}
