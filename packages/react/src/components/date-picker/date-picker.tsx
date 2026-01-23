'use client'

import { DateValue } from '@ark-ui/react/date-picker'
import { DatePickerParts } from './parts'
import type { DatePickerRootProps } from './primitives'
import { CalendarDate } from '@internationalized/date'

const FULL_DATE_REGEX = /^(\d{1,2})[\s/](\d{1,2})[\s/](\d{4})$/
const PARTIAL_DATE_REGEX = /^(\d{1,2})[\s/](\d{1,2})$/
const MONTH_REGEX = /^(\d{1,2})$/

/**
 * DatePicker component is an abstraction of the DatePickerRoot primitive which
 * is the context provider to the DatePicker.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/date-picker)
 */
export function DatePicker(props: DatePickerRootProps) {
  return (
    <DatePickerParts.Root
      format={handleFormat}
      parse={parse}
      positioning={{
        placement: 'bottom-start',
      }}
      {...props}
    />
  )
}

function parse(value: string): DateValue | undefined {
  const fullMatch = value.match(FULL_DATE_REGEX)
  if (fullMatch) {
    const [, month, day, year] = fullMatch.map(Number)
    try {
      // CalendarDate expects (year, month, day)
      return new CalendarDate(year, month, day)
    } catch {
      return undefined
    }
  }

  const partialMatch = value.match(PARTIAL_DATE_REGEX)
  if (partialMatch) {
    const [, month, day] = partialMatch.map(Number)
    const currentYear = new Date().getFullYear()
    try {
      return new CalendarDate(currentYear, month, day)
    } catch {
      return undefined
    }
  }

  const monthMatch = value.match(MONTH_REGEX)
  if (monthMatch) {
    const [, month] = monthMatch.map(Number)
    const currentYear = new Date().getFullYear()
    try {
      if (month < 1 || month > 12) return undefined
      return new CalendarDate(currentYear, month, 1)
    } catch {
      return undefined
    }
  }

  return undefined
}

function handleFormat(date: DateValue): string {
  const day = date.day.toString().padStart(2, '0')
  const month = date.month.toString().padStart(2, '0')
  const year = date.year.toString()
  return `${month} ${day} ${year}`
}
