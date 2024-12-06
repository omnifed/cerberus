import { describe, test, expect, afterEach } from 'bun:test'
import { render, screen, cleanup } from '@testing-library/react'
import {
  Field,
  Label,
  Input,
  useDate,
  type UseDateOptions,
  formatMilitaryDate,
  formatISOToMilitary,
  DateFormats,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('useDate', () => {
  setupStrictMode()
  afterEach(cleanup)

  function DateTest(props: UseDateOptions) {
    const date = useDate(props)
    return (
      <Field>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          onChange={date.onChange}
          type="text"
          value={date.value}
        />

        <p>{date.format}</p>
        <p>{date.ISO}</p>
        <p>{date.value}</p>
      </Field>
    )
  }

  test('should format the date with default format', async () => {
    render(<DateTest initialValue="01 JAN 2024" />)
    expect(screen.getByText('01 JAN 2024')).toBeTruthy()
    expect(screen.getByText(DateFormats.USMilitary)).toBeTruthy()
    expect(screen.getByText('2024-01-01')).toBeTruthy()
  })

  test('should format invalid date with default format', async () => {
    render(<DateTest />)
    await userEvent.type(screen.getByLabelText('Date'), '99feb2024')
    expect(screen.getByText('31 FEB 2024')).toBeTruthy()
    expect(screen.getByText(DateFormats.USMilitary)).toBeTruthy()
    expect(screen.getByText('2024-02-31')).toBeTruthy()
  })

  test('should export a formatMilitaryDate function', () => {
    expect(formatMilitaryDate('01jan2024')).toBe('01 JAN 2024')
  })

  test('should export a formatISOToMilitary function', () => {
    expect(formatISOToMilitary('2024-01-01')).toBe('01 JAN 2024')
  })

  test('should export a DateFormats object', () => {
    expect(DateFormats.ISO).toBe('YYYY-MM-DD')
    expect(DateFormats.USMilitary).toBe(DateFormats.USMilitary)
    expect(DateFormats.Months).toEqual([
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
    ])
  })
})
