'use client'

import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../IconButton'
import { DatePickerParts } from './parts'
import type { DatePickerTriggerProps } from './primitives'

/**
 * This private module contains the DatePicker trigger component.
 * @module DatePickerTrigger
 */

/**
 * An abstraction of the DatePickerTrigger that toggles the calender open.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerTrigger(props: DatePickerTriggerProps) {
  const { icons } = useCerberusContext()
  const { calendar: CalendarIcon } = icons

  return (
    <DatePickerParts.Trigger {...props} asChild>
      <IconButton ariaLabel="Open calendar" size="sm" usage="ghost">
        <CalendarIcon />
      </IconButton>
    </DatePickerParts.Trigger>
  )
}
