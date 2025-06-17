'use client'

import type {
  DatePicker,
  UseDatePickerContext,
} from '@ark-ui/react/date-picker'
import { DatePickerParts } from './parts'
import type { DatePickerViewProps } from './primitives'
import { DatePickerViewControlGroup } from './view-control-group'

/**
 * This private module contains an abstraction of the DayView component.
 * @module 'date-picker/day-view'
 */

export type DateValue = DatePicker.DateValue

/**
 * An abstraction of the DatePickerDayView that renders the day view of the
 * DatePicker.
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 */
export function DatePickerDayView(props: Omit<DatePickerViewProps, 'view'>) {
  function isToday(date: DateValue): boolean {
    const today = new Date()
    const formatted = today.toISOString().split('T')[0]
    const arkDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
    return formatted === arkDate
  }

  function isPastDay(date: DateValue): boolean {
    const today = new Date()
    const arkDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
    return new Date(arkDate) < today
  }

  function getDayValue(date: DateValue): 'today' | 'past' | 'future' {
    if (isToday(date)) return 'today'
    if (isPastDay(date)) return 'past'
    return 'future'
  }

  return (
    <DatePickerParts.View {...props} view="day">
      <DatePickerParts.Context>
        {(datePickerData: UseDatePickerContext) => (
          <>
            <DatePickerViewControlGroup />

            <DatePickerParts.Table>
              <DatePickerParts.TableHead>
                <DatePickerParts.TableRow>
                  {datePickerData.weekDays.map((weekDay, id) => (
                    <DatePickerParts.TableHeader key={id}>
                      {weekDay.narrow}
                    </DatePickerParts.TableHeader>
                  ))}
                </DatePickerParts.TableRow>
              </DatePickerParts.TableHead>

              <DatePickerParts.TableBody>
                {datePickerData.weeks.map((week, id) => (
                  <DatePickerParts.TableRow key={id}>
                    {week.map((day, id) => (
                      <DatePickerParts.TableCell key={id} value={day}>
                        <DatePickerParts.TableCellTrigger
                          data-date={getDayValue(day)}
                        >
                          {day.day}
                        </DatePickerParts.TableCellTrigger>
                      </DatePickerParts.TableCell>
                    ))}
                  </DatePickerParts.TableRow>
                ))}
              </DatePickerParts.TableBody>
            </DatePickerParts.Table>
          </>
        )}
      </DatePickerParts.Context>
    </DatePickerParts.View>
  )
}
