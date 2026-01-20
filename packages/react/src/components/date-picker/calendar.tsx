import type { RefObject } from 'react'
import { splitProps } from '../../utils/index'
import { DatePickerContent } from './content'
import { DatePickerDayView } from './day-view'
import { DatePickerMonthView } from './month-view'
import { DatePickerYearView } from './year-view'
import { DatePickerContentProps } from './primitives'

/**
 * This module contains an abstraction of the DatePicker component.
 * @module 'date-picker/calendar'
 */

export interface DatePickerCalendarProps {
  /**
   * @deprecated - this is no longer needed.
   */
  withModal?: boolean
  /**
   * @deprecated - this is no longer needed.
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
export function DatePickerCalendar(
  props: DatePickerCalendarProps & DatePickerContentProps,
) {
  const [, contentProps] = splitProps(props, ['withModal', 'container'])

  return (
    <DatePickerContent {...contentProps}>
      <DatePickerDayView />
      <DatePickerMonthView view="month" />
      <DatePickerYearView view="year" />
    </DatePickerContent>
  )
}
