'use client'

import {
  useState,
  useCallback,
  ChangeEvent,
  useMemo,
  type InputHTMLAttributes,
} from 'react'

export interface UseDateBase {
  /**
   * The format of the date input
   */
  format?: string
  /**
   * The callback to run when the date input changes
   */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange']
}

export interface UseDateOptions extends UseDateBase {
  /**
   * The initial value of the date input
   */
  initialValue?: string
}

export interface UseDateReturn extends UseDateBase {
  /**
   * The ISO formatted date string
   */
  ISO: string
  /**
   * The value of the date input
   */
  value: string
}

/**
 * A hook for formatting and validating date inputs. The date format defaults to US Military format.
 * @example
 * ```tsx
 * const MyComponent = () => {
 *  const date = useDate({ initialValue: '01 JAN 2024' })
 *  return <input onChange={date.onChange} type="text" value={date.value} />
 * }
 */
export function useDate(options?: UseDateOptions): UseDateReturn {
  const initialValue = options?.initialValue ?? ''
  const format = options?.format ?? DateFormats.USMilitary
  const onChange = options?.onChange
  const [value, setValue] = useState(initialValue)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = formatMilitaryDate(e.currentTarget.value)
      if (onChange) onChange(e)
      setValue(newValue)
    },
    [onChange],
  )

  return useMemo(
    () => ({
      format,
      value,
      ISO: formatMilitaryToISO(value),
      onChange: handleChange,
    }),
    [format, value, handleChange],
  )
}

// helpers

/**
 * Converts a string in US Military format to ISO format. Used within the `useDate` hook.
 * @param input The string to format
 * @returns The formatted string in ISO format (YYYY-MM-DD)
 */
export function formatMilitaryToISO(input: string) {
  const [day, month, year] = input.split(' ')
  const monthIndex = MONTHS.findIndex((m) => m.startsWith(month))
  const monthNum = monthIndex + 1
  return `${year ?? '0000'}-${monthNum.toString().padStart(2, '0')}-${day.padStart(
    2,
    '0',
  )}`
}

/**
 * Converts a string to US Military format. Used within the `useDate` hook.
 * @param input The string to format
 * @returns The formatted string in US Military format (DD MMM YYYY)
 */
export function formatMilitaryDate(input: string): string {
  let formatted = input.toUpperCase().replace(/[^0-9A-Z]/g, '')
  let day = ''
  let month = ''
  let year = ''

  // Format day
  if (formatted.length >= 2) {
    day = formatted.replace(/[^0-9]/g, '').slice(0, 2)
    const dayNum = parseInt(day, 10)
    if (dayNum > 31) day = '31'
    else if (dayNum === 0) day = '01'
    formatted = formatted.slice(2)
  }

  // Format month
  if (formatted.length >= 3) {
    month = formatted.slice(0, 3)
    const monthIndex = MONTHS.findIndex((m) => m.startsWith(month))
    if (monthIndex !== -1) {
      month = MONTHS[monthIndex]
    } else {
      month = month.replace(/[^A-Z]/g, '')
    }
    formatted = formatted.slice(3)
  }

  // Format year
  if (formatted.length > 0) {
    year = formatted.slice(0, 4)
  }

  return [day, month, year].filter(Boolean).join(' ')
}

/**
 * Formats a date string to US Military format.
 * @param date The date string to format (i.e., '2024-01-01')
 * @returns The formatted date string in US Military format (DD MMM YYYY)
 */
export function formatISOToMilitary(date: string): string {
  const [year, month, day] = date.split('-')
  const monthIndex = parseInt(month, 10) - 1
  const monthStr = MONTHS[monthIndex]
  return `${day} ${monthStr} ${year}`
}

/**
 * Date formatting options
 * @example
 * ```tsx
 * const date = new Date()
 * const formatted = date.format(DateFormats.USMilitary)
 */
export const DateFormats = {
  get ISO() {
    return 'YYYY-MM-DD'
  },
  get USMilitary() {
    return 'DD MMM YYYY'
  },
  get Months() {
    return MONTHS
  },
}

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]
