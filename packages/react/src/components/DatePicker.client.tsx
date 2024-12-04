'use client'

import {
  DatePicker as ArkDP,
  type DatePickerContentProps,
  type DatePickerInputProps,
  type DatePickerRootProps,
  type DatePickerViewProps,
  type DateValue,
} from '@ark-ui/react'
import { Portal } from './Portal'
import { useCallback } from 'react'
import { DateFormats } from '../hooks/useDate'
import { datePicker } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import { useFieldContext } from '../context/field'
import {
  DatePickerTrigger,
  DatePickerView,
  DatePickerContext,
  DatePickerViewControlGroup,
  DatePickerTable,
  DatePickerTableHeader,
  DatePickerTableCellTrigger,
} from './DatePicker.server'

const datePickerStyles = datePicker()

/**
 * This module contains the DatePicker client family components.
 * @module DatePicker:client
 */

/**
 * The main context provider for the DatePicker family components.
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/date-picker)
 * @definition [datePicker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <DatePicker>...</DatePicker>
 * ```
 */
export function DatePicker(props: DatePickerRootProps) {
  const states = useFieldContext()

  const handleFormat = useCallback((value: DateValue) => {
    console.log({ value })
    return DateFormats.USMilitary
  }, [])

  return <ArkDP.Root {...props} {...states} format={handleFormat} />
}

export function DatePickerInput(props: DatePickerInputProps) {
  const { invalid, ...fieldStates } = useFieldContext()
  return (
    <ArkDP.Control className={datePickerStyles.control}>
      <DatePickerTrigger />
      <ArkDP.Input
        {...props}
        {...fieldStates}
        {...(invalid && { 'aria-invalid': true })}
        className={cx(props.className, datePickerStyles.input)}
        maxLength={10}
      />
    </ArkDP.Control>
  )
}

export function DatePickerContent(props: DatePickerContentProps) {
  const { children, ...contentProps } = props
  return (
    <Portal>
      <ArkDP.Positioner className={datePickerStyles.positioner}>
        <ArkDP.Content
          {...contentProps}
          className={cx(contentProps.className, datePickerStyles.content)}
        >
          {children}
        </ArkDP.Content>
      </ArkDP.Positioner>
    </Portal>
  )
}

export function DatePickerDayView(props: Omit<DatePickerViewProps, 'view'>) {
  function isToday(date: ArkDP.DateValue): boolean {
    const today = new Date()
    const formatted = today.toISOString().split('T')[0]
    const arkDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
    return formatted === arkDate
  }

  function isPastDay(date: ArkDP.DateValue): boolean {
    const today = new Date()
    const arkDate = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`
    return new Date(arkDate) < today
  }

  function getDayValue(date: ArkDP.DateValue): 'today' | 'past' | 'future' {
    if (isToday(date)) return 'today'
    if (isPastDay(date)) return 'past'
    return 'future'
  }

  return (
    <DatePickerView {...props} view="day">
      <DatePickerContext>
        {(datePicker) => (
          <>
            <DatePickerViewControlGroup />

            <DatePickerTable>
              <ArkDP.TableHead>
                <ArkDP.TableRow>
                  {datePicker.weekDays.map((weekDay, id) => (
                    <DatePickerTableHeader key={id}>
                      {weekDay.narrow}
                    </DatePickerTableHeader>
                  ))}
                </ArkDP.TableRow>
              </ArkDP.TableHead>

              <ArkDP.TableBody>
                {datePicker.weeks.map((week, id) => (
                  <ArkDP.TableRow key={id}>
                    {week.map((day, id) => (
                      <ArkDP.TableCell key={id} value={day}>
                        <DatePickerTableCellTrigger
                          data-date={getDayValue(day)}
                        >
                          {day.day}
                        </DatePickerTableCellTrigger>
                      </ArkDP.TableCell>
                    ))}
                  </ArkDP.TableRow>
                ))}
              </ArkDP.TableBody>
            </DatePickerTable>
          </>
        )}
      </DatePickerContext>
    </DatePickerView>
  )
}

export function DatePickerMonthView(props: Omit<DatePickerViewProps, 'view'>) {
  return (
    <ArkDP.View {...props} view="month">
      <ArkDP.Context>
        {(datePicker) => (
          <>
            <DatePickerViewControlGroup />

            <DatePickerTable>
              <ArkDP.TableBody>
                {datePicker
                  .getMonthsGrid({ columns: 4, format: 'short' })
                  .map((months, id) => (
                    <ArkDP.TableRow key={id}>
                      {months.map((month, id) => (
                        <ArkDP.TableCell key={id} value={month.value}>
                          <DatePickerTableCellTrigger>
                            {month.label}
                          </DatePickerTableCellTrigger>
                        </ArkDP.TableCell>
                      ))}
                    </ArkDP.TableRow>
                  ))}
              </ArkDP.TableBody>
            </DatePickerTable>
          </>
        )}
      </ArkDP.Context>
    </ArkDP.View>
  )
}

export function DatePickerYearView(props: Omit<DatePickerViewProps, 'view'>) {
  return (
    <ArkDP.View {...props} view="year">
      <ArkDP.Context>
        {(datePicker) => (
          <>
            <DatePickerViewControlGroup />

            <DatePickerTable>
              <ArkDP.TableBody>
                {datePicker.getYearsGrid({ columns: 4 }).map((years, id) => (
                  <ArkDP.TableRow key={id}>
                    {years.map((year, id) => (
                      <ArkDP.TableCell key={id} value={year.value}>
                        <DatePickerTableCellTrigger>
                          {year.label}
                        </DatePickerTableCellTrigger>
                      </ArkDP.TableCell>
                    ))}
                  </ArkDP.TableRow>
                ))}
              </ArkDP.TableBody>
            </DatePickerTable>
          </>
        )}
      </ArkDP.Context>
    </ArkDP.View>
  )
}

export function DatePickerCalendar() {
  return (
    <DatePickerContent>
      <DatePickerDayView />
      <DatePickerMonthView />
      <DatePickerYearView />
    </DatePickerContent>
  )
}
