'use client'

import { Tooltip } from '../tooltip/index'
import { ClipboardCopyText } from './copy-text'
import { ClipboardTrigger, type ClipboardTriggerProps } from './primitives'

export type ClipboardTriggerWithTooltipProps = ClipboardTriggerProps

/**
 * An abstraction of `Clipboard.Trigger` wrapped in a Tooltip that shows the
 * copy status ("Copy", then "Copied"). The tooltip stays open when the
 * trigger is clicked so the status change is visible.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/clipboard)
 * @description [Ark Docs](https://ark-ui.com/docs/components/clipboard)
 */
export function ClipboardTriggerWithTooltip(
  props: ClipboardTriggerWithTooltipProps,
) {
  return (
    <Tooltip closeOnClick={false} content={<ClipboardCopyText />}>
      <ClipboardTrigger {...props} />
    </Tooltip>
  )
}
