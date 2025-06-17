import type { RefObject } from 'react'
import { DatePickerContent } from './content'
import { DatePickerDayView } from './day-view'
import { DatePickerMonthView } from './month-view'
import { DatePickerYearView } from './year-view'

/**
 * This module contains an abstraction of the DatePicker component.
 * @module 'date-picker/calendar'
 */

export interface DatePickerCalendarProps {
  /**
   * Determines whether to disable the Portal used to render the DatePicker
   * content in a modal. This is an alternative to using the `container` prop
   * which provides the context to the Portal instead.
   * @default false
   */
  withModal?: boolean
  /**
   * The container element to render the DatePicker content in. This is used
   * to render the DatePicker content in a specific context, such as a modal.
   * @default document.body
   */
  container?: RefObject<HTMLElement | null>
}

/**
 * An abstraction of the DatePicker content components that contain the
 * different calendar views and controls.
 * @definition [Date Picker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <Field>
 *   <DatePicker name="start_date">
 *     <DatePickerLabel>Start date</DatePickerLabel>
 *     <DatePickerInput />
 *     <DatePickerCalendar />
 *   </DatePicker>
 * </Field>
 * ```
 */
export function DatePickerCalendar(props: DatePickerCalendarProps) {
  return (
    <DatePickerContent {...props}>
      <DatePickerDayView />
      <DatePickerMonthView view="month" />
      <DatePickerYearView view="year" />
    </DatePickerContent>
  )
}
