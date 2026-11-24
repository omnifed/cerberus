'use client'

import type { ExtractedParts } from '../../internal/extract-parts'
import { DatePickerIconTrigger } from './icon-trigger'
import { DatePickerControl, DatePickerTrigger } from './primitives'

/**
 * Part children the input group abstractions accept.
 * @internal
 */
export const INPUT_GROUP_PARTS = {
  control: DatePickerControl,
  trigger: DatePickerTrigger,
  iconTrigger: DatePickerIconTrigger,
}

/**
 * The trigger of an input group: a `DatePicker.Trigger` part child with
 * children renders as given; otherwise the icon trigger renders, patched by
 * `DatePicker.Trigger` and `DatePicker.IconTrigger` children.
 * @internal
 */
export function TriggerSlot(props: {
  parts: ExtractedParts<typeof INPUT_GROUP_PARTS>
}) {
  const { trigger, iconTrigger } = props.parts
  if (trigger?.children != null) return <DatePickerTrigger {...trigger} />
  return <DatePickerIconTrigger {...trigger} {...iconTrigger} />
}
