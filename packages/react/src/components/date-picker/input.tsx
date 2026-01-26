import { DatePickerTrigger } from './trigger'
import { DatePickerParts } from './parts'
import type { DatePickerInputElProps } from './primitives'

/**
 * This module contains an abstraction of the DatePickerInputEl primitive.
 * @module 'date-picker/input'
 */

/**
 * An abstraction of the DatePicker input that wraps the input and the
 * triggers to open the DatePicker and clear the value.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerInput(props: DatePickerInputElProps) {
  return (
    <DatePickerParts.Control>
      <DatePickerTrigger />
      <DatePickerParts.Input
        {...props}
        maxLength={11}
        placeholder={props.placeholder ?? 'MM DD YYYY'}
      />
    </DatePickerParts.Control>
  )
}
