import type { DatePickerInputProps } from '@ark-ui/react/date-picker'
import { DatePickerTrigger } from './trigger'
import { DatePickerParts } from './parts'

/**
 * This module contains an abstraction of the DatePickerInputEl primitive.
 * @module 'date-picker/input'
 */

/**
 * An abstraction of the DatePicker input that wraps the input and the
 * triggers to open the DatePicker and clear the value.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerInput(props: DatePickerInputProps) {
  return (
    <DatePickerParts.Control>
      <DatePickerTrigger />
      <DatePickerParts.Input
        {...props}
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
      />
    </DatePickerParts.Control>
  )
}
