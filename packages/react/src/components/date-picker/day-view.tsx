'use client'

import type { DateValue } from '@ark-ui/react/date-picker'
import { getLocalTimeZone, isSameDay, today } from '@internationalized/date'
import { extractParts } from '../../internal/extract-parts'
import {
  DatePickerContext,
  DatePickerTable,
  DatePickerTableBody,
  DatePickerTableCell,
  DatePickerTableCellTrigger,
  DatePickerTableHead,
  DatePickerTableHeader,
  DatePickerTableRow,
  DatePickerView,
  type DatePickerViewProps,
} from './primitives'
import { DatePickerViewControlGroup } from './view-control-group'

const PARTS = {
  viewControlGroup: DatePickerViewControlGroup,
  table: DatePickerTable,
}

/**
 * `today`, `past` or `future` (in the user's time zone), set as `data-date` on
 * each day trigger
 */
function getDayValue(date: DateValue): 'today' | 'past' | 'future' {
  const now = today(getLocalTimeZone())
  if (isSameDay(date, now)) return 'today'
  return date.compare(now) < 0 ? 'past' : 'future'
}

export type DatePickerDayViewProps = Omit<DatePickerViewProps, 'view'>

/**
 * The DayView component is an abstraction of the `DatePicker.View` primitive
 * for the `day` view. It renders a `DatePicker.ViewControlGroup` and a table
 * with a header row of narrow week day names and one row per week. Each day
 * trigger is marked `data-date="today"`, `"past"` or `"future"`. A direct
 * `DatePicker.ViewControlGroup` or `DatePicker.Table` child patches that
 * part's props. Other children render after the table.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 * @description [Ark Docs](https://ark-ui.com/docs/components/date-picker)
 * @example
 * ```tsx
 * <DatePicker.ContentGroup>
 *   <DatePicker.DayView />
 * </DatePicker.ContentGroup>
 * ```
 */
export function DatePickerDayView(props: DatePickerDayViewProps) {
  const { children, ...viewProps } = props
  const { parts, content } = extractParts(children, PARTS)
  const { children: _tableChildren, ...tableProps } = parts.table ?? {}

  return (
    <DatePickerView {...viewProps} view="day">
      <DatePickerContext>
        {(datePicker) => (
          <>
            <DatePickerViewControlGroup {...parts.viewControlGroup} />

            <DatePickerTable {...tableProps}>
              <DatePickerTableHead>
                <DatePickerTableRow>
                  {datePicker.weekDays.map((weekDay, id) => (
                    <DatePickerTableHeader key={id}>
                      {weekDay.narrow}
                    </DatePickerTableHeader>
                  ))}
                </DatePickerTableRow>
              </DatePickerTableHead>

              <DatePickerTableBody>
                {datePicker.weeks.map((week, id) => (
                  <DatePickerTableRow key={id}>
                    {week.map((day, id) => (
                      <DatePickerTableCell key={id} value={day}>
                        <DatePickerTableCellTrigger
                          data-date={getDayValue(day)}
                        >
                          {day.day}
                        </DatePickerTableCellTrigger>
                      </DatePickerTableCell>
                    ))}
                  </DatePickerTableRow>
                ))}
              </DatePickerTableBody>
            </DatePickerTable>

            {content}
          </>
        )}
      </DatePickerContext>
    </DatePickerView>
  )
}
