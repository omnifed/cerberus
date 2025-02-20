'use client'

import type { DatePickerInputProps } from '@ark-ui/react/date-picker'
import { useMemo, type InputHTMLAttributes } from 'react'
import { DatePickerParts } from './parts'
import { DatePickerTrigger } from './trigger'

export interface RangePickerInputProps
  extends Omit<DatePickerInputProps, 'defaultValue'> {
  /**
   * The defaultValue to add for the inputs. The first item is the start date
   * and the second item is the end date.
   */
  defaultValue?: [
    InputHTMLAttributes<HTMLInputElement>['defaultValue'],
    InputHTMLAttributes<HTMLInputElement>['defaultValue'],
  ]
}

/**
 * An abstraction of the DatePicker input that wraps the input and the
 * triggers to open the DatePicker and clear the value.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function RangePickerInput(props: RangePickerInputProps) {
  const { defaultValue, ...nativeProps } = props

  const startDate = useMemo(() => defaultValue?.[0], [defaultValue])
  const endDate = useMemo(() => defaultValue?.[1], [defaultValue])

  return (
    <DatePickerParts.Control data-range>
      <DatePickerTrigger />
      <DatePickerParts.Input
        {...nativeProps}
        data-range-input
        defaultValue={startDate}
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
        index={0}
      />
      <DatePickerParts.Input
        {...nativeProps}
        data-range-input
        defaultValue={endDate}
        data-range-end-input
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
        index={1}
      />
    </DatePickerParts.Control>
  )
}
