'use client'

import { extractParts } from '../../internal/extract-parts'
import {
  DatePickerControl,
  DatePickerInput,
  type DatePickerInputProps,
} from './primitives'
import { INPUT_GROUP_PARTS, TriggerSlot } from './trigger-slot'

export type DatePickerRangeInputGroupProps = Omit<DatePickerInputProps, 'index'>

/**
 * The RangeInputGroup component is an abstraction of the primitives for a
 * `selectionMode="range"` date picker. It renders the `DatePicker.Control`
 * (marked `data-range`) with a `DatePicker.IconTrigger` and two
 * `DatePicker.Input`s, for the start (`index={0}`) and the end (`index={1}`)
 * of the range. Its props go to both inputs, which take at most 11 characters
 * and show `MM/DD/YYYY` without a `placeholder`. A direct `DatePicker.Control`,
 * `DatePicker.Trigger` or `DatePicker.IconTrigger` child patches that part's
 * props; a `DatePicker.Trigger` child with children replaces the icon
 * trigger. Other children render inside the control after the inputs.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker name="range" selectionMode="range">
 *   <DatePicker.Label>Search range</DatePicker.Label>
 *   <DatePicker.RangeInputGroup />
 *   <DatePicker.Calendar />
 * </DatePicker>
 * ```
 */
export function DatePickerRangeInputGroup(
  props: DatePickerRangeInputGroupProps,
) {
  const { children, ...inputProps } = props
  const { parts, content } = extractParts(children, INPUT_GROUP_PARTS)
  // The control always renders the trigger and inputs; a control child only
  // patches props
  const { children: _controlChildren, ...controlProps } = parts.control ?? {}
  const placeholder = inputProps.placeholder ?? 'MM/DD/YYYY'

  return (
    <DatePickerControl data-range {...controlProps}>
      <TriggerSlot parts={parts} />
      <DatePickerInput
        {...inputProps}
        data-range-input
        placeholder={placeholder}
        maxLength={11}
        index={0}
      />
      <DatePickerInput
        {...inputProps}
        data-range-input
        data-range-end-input
        placeholder={placeholder}
        maxLength={11}
        index={1}
      />
      {content}
    </DatePickerControl>
  )
}
