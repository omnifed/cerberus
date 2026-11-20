'use client'

import { extractParts } from '../../internal/extract-parts'
import {
  DatePickerContent,
  DatePickerPositioner,
  type DatePickerContentProps,
} from './primitives'

const PARTS = {
  positioner: DatePickerPositioner,
}

export type DatePickerContentGroupProps = DatePickerContentProps

/**
 * The ContentGroup component is an abstraction of the `DatePicker.Content`
 * primitive that renders the content inside its `DatePicker.Positioner`, so
 * it is placed relative to the control (see the `positioning` prop of
 * `DatePicker`). Use it to build a custom calendar from the views. A direct
 * `DatePicker.Positioner` child patches the positioner's props.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker.ContentGroup>
 *   <DatePicker.DayView />
 *   <DatePicker.MonthView />
 * </DatePicker.ContentGroup>
 * ```
 */
export function DatePickerContentGroup(props: DatePickerContentGroupProps) {
  const { children, ...contentProps } = props
  const { parts, content } = extractParts(children, PARTS)

  // The content always renders inside the positioner: a positioner child only
  // patches props, its own children are ignored
  const { children: _positionerChildren, ...positionerProps } =
    parts.positioner ?? {}

  return (
    <DatePickerPositioner {...positionerProps}>
      <DatePickerContent {...contentProps}>{content}</DatePickerContent>
    </DatePickerPositioner>
  )
}
