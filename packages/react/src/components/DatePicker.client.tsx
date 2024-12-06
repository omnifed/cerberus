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
  DatePickerTableCell,
} from './DatePicker.server'
import { formatISOToMilitary } from '../hooks/useDate'

/**
 * This module contains the DatePicker client family components.
 * @module DatePicker:client
 */

// We are not exposing this to the public API
const datePickerStyles = datePicker()

/**
 * The main context provider for the DatePicker family components.
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
export function DatePicker(props: DatePickerRootProps) {
  const states = useFieldContext()

  // We can't implement this yet because of a bug in the Root component
  // that causes random date selection onBlur after the first selection
  const handleFormat = useCallback((value: DateValue) => {
    return formatISOToMilitary(value.toString())
  }, [])

  return (
    <ArkDP.Root
      {...props}
      {...states}
      format={handleFormat}
      positioning={{
        placement: 'bottom-start',
      }}
    />
  )
}

/**
 * The input component for the DatePicker.
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
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
      />
    </ArkDP.Control>
  )
}

/**
 * The input component for the DatePicker that uses ranges.
 * @definition [Date Picker docs](https://cerberus.digitalu.design/react/date-picker)
 * @example
 * ```tsx
 * <Field>
 *   <DatePicker name="start_date" selection="range">
 *     <DatePickerLabel>Start date</DatePickerLabel>
 *     <RangePickerInput />
 *     <DatePickerCalendar />
 *   </DatePicker>
 * </Field>
 * ```
 */
export function RangePickerInput(props: DatePickerInputProps) {
  const { invalid, ...fieldStates } = useFieldContext()
  return (
    <ArkDP.Control data-range className={datePickerStyles.control}>
      <DatePickerTrigger />
      <ArkDP.Input
        {...props}
        {...fieldStates}
        {...(invalid && { 'aria-invalid': true })}
        data-range-input
        className={cx(props.className, datePickerStyles.input)}
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
        index={0}
      />
      <ArkDP.Input
        {...props}
        {...fieldStates}
        {...(invalid && { 'aria-invalid': true })}
        data-range-input
        data-range-end-input
        className={cx(props.className, datePickerStyles.input)}
        placeholder={props.placeholder ?? 'DD MMM YYYY'}
        maxLength={11}
        index={1}
      />
    </ArkDP.Control>
  )
}

/**
 * The content component for the DatePicker which contains the calendar.
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

/**
 * The day view component for the DatePicker.
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
    // console.log({
    //   result: date.compare(today),
    // })

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
                      <DatePickerTableCell key={id} value={day}>
                        <DatePickerTableCellTrigger
                          data-date={getDayValue(day)}
                        >
                          {day.day}
                        </DatePickerTableCellTrigger>
                      </DatePickerTableCell>
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

/**
 * The month view component for the DatePicker.
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
                        <DatePickerTableCell key={id} value={month.value}>
                          <DatePickerTableCellTrigger>
                            {month.label}
                          </DatePickerTableCellTrigger>
                        </DatePickerTableCell>
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

/**
 * The year view component for the DatePicker.
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
                      <DatePickerTableCell key={id} value={year.value}>
                        <DatePickerTableCellTrigger>
                          {year.label}
                        </DatePickerTableCellTrigger>
                      </DatePickerTableCell>
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
export function DatePickerCalendar() {
  return (
    <DatePickerContent>
      <DatePickerDayView />
      <DatePickerMonthView />
      <DatePickerYearView />
    </DatePickerContent>
  )
}
