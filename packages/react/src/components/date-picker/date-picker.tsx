'use client'

import { DatePickerParts } from './parts'
import type { DatePickerRootProps } from './primitives'

/**
 * DatePicker component is an abstraction of the DatePickerRoot primitive which
 * is the context provider to the DatePicker.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 */
export function DatePicker(props: DatePickerRootProps) {
  return (
    <DatePickerParts.Root
      positioning={{
        placement: 'bottom-start',
      }}
      {...props}
    />
  )
}
