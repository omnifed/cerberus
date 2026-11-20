'use client'

import { extractParts } from '../../internal/extract-parts'
import { DatePickerContentGroup } from './content-group'
import { DatePickerDayView } from './day-view'
import { DatePickerMonthView } from './month-view'
import { DatePickerPositioner, type DatePickerContentProps } from './primitives'
import { DatePickerYearView } from './year-view'

const PARTS = {
  positioner: DatePickerPositioner,
  dayView: DatePickerDayView,
  monthView: DatePickerMonthView,
  yearView: DatePickerYearView,
}

export type DatePickerCalendarProps = DatePickerContentProps & {
  /**
   * @deprecated - this is no longer needed.
   */
  withModal?: boolean
}

/**
 * The Calendar component is an abstraction of the primitives that renders the
 * positioned `DatePicker.Content` with the `DatePicker.DayView`,
 * `DatePicker.MonthView` and `DatePicker.YearView`; the date picker shows one
 * view at a time. Its props go to the content. A direct
 * `DatePicker.Positioner`, `DatePicker.DayView`, `DatePicker.MonthView` or
 * `DatePicker.YearView` child patches that part's props. Other children render
 * inside the content after the views.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <Field label="Start date">
 *   <DatePicker name="start_date">
 *     <DatePicker.Label>Start date</DatePicker.Label>
 *     <DatePicker.InputGroup />
 *     <DatePicker.Calendar />
 *   </DatePicker>
 * </Field>
 * ```
 */
export function DatePickerCalendar(props: DatePickerCalendarProps) {
  const { withModal: _withModal, children, ...contentProps } = props
  const { parts, content } = extractParts(children, PARTS)

  return (
    <DatePickerContentGroup {...contentProps}>
      <DatePickerPositioner {...parts.positioner} />
      <DatePickerDayView {...parts.dayView} />
      <DatePickerMonthView {...parts.monthView} />
      <DatePickerYearView {...parts.yearView} />
      {content}
    </DatePickerContentGroup>
  )
}
