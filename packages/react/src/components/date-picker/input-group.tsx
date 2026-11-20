'use client'

import { extractParts } from '../../internal/extract-parts'
import {
  DatePickerControl,
  DatePickerInput,
  type DatePickerInputProps,
} from './primitives'
import { INPUT_GROUP_PARTS, TriggerSlot } from './trigger-slot'

export type DatePickerInputGroupProps = DatePickerInputProps

/**
 * The InputGroup component is an abstraction of the primitives that renders
 * the `DatePicker.Control` with a `DatePicker.IconTrigger` and the
 * `DatePicker.Input`. Its props go to the input, which takes at most 11
 * characters and shows `MM/DD/YYYY` without a `placeholder`. A direct
 * `DatePicker.Control`, `DatePicker.Trigger` or `DatePicker.IconTrigger`
 * child patches that part's props; a `DatePicker.Trigger` child with children
 * replaces the icon trigger. Other children render inside the control after
 * the input.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker name="start_date">
 *   <DatePicker.Label>Start date</DatePicker.Label>
 *   <DatePicker.InputGroup />
 *   <DatePicker.Calendar />
 * </DatePicker>
 * ```
 */
export function DatePickerInputGroup(props: DatePickerInputGroupProps) {
  const { children, ...inputProps } = props
  const { parts, content } = extractParts(children, INPUT_GROUP_PARTS)
  // The control always renders the trigger and input; a control child only
  // patches props
  const { children: _controlChildren, ...controlProps } = parts.control ?? {}

  return (
    <DatePickerControl {...controlProps}>
      <TriggerSlot parts={parts} />
      <DatePickerInput
        {...inputProps}
        maxLength={11}
        placeholder={inputProps.placeholder ?? 'MM/DD/YYYY'}
      />
      {content}
    </DatePickerControl>
  )
}
