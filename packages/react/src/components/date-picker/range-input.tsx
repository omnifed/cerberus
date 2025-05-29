import { type DatePickerInputProps } from '@ark-ui/react/date-picker'
import { DatePickerParts } from './parts'
import { DatePickerTrigger } from './trigger'

/**
 * This private module contains the RangePickerInput component.
 * @module RangePickerInput
 */

export type RangePickerInputProps = DatePickerInputProps

/**
 * An abstraction of the DatePicker input that wraps the input and the
 * triggers to open the DatePicker and clear the value.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function RangePickerInput(props: RangePickerInputProps) {
  return (
    <DatePickerParts.Control data-range>
      <DatePickerTrigger />
      <DatePickerParts.Input
        {...props}
        data-range-input
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
        index={0}
      />
      <DatePickerParts.Input
        {...props}
        data-range-input
        data-range-end-input
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
        index={1}
      />
    </DatePickerParts.Control>
  )
}
