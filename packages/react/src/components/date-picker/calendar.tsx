import { DatePickerContent } from './content'
import { DatePickerDayView } from './day-view'
import { DatePickerMonthView } from './month-view'
import { DatePickerYearView } from './year-view'

/**
 * This module contains an abstraction of the DatePicker component.
 * @module 'date-picker/calendar'
 */

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
export function DatePickerCalendar(props: { withModal?: boolean }) {
  return (
    <DatePickerContent withModal={props.withModal}>
      <DatePickerDayView />
      <DatePickerMonthView />
      <DatePickerYearView />
    </DatePickerContent>
  )
}
