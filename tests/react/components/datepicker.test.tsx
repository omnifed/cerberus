import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import {
  CerberusProvider,
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Field,
  RangePickerInput,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('DatePicker', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('renders a date picker', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <DatePicker id="start_date" name="start_date">
            <DatePickerLabel>Start date</DatePickerLabel>
            <DatePickerInput />
            <DatePickerCalendar />
          </DatePicker>
        </Field>
      </CerberusProvider>,
    )

    expect(screen.getByText('Start date')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(screen.getByRole('button')).toBeTruthy()
  })

  test('renders a range picker', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <DatePicker id="range_dates" name="range_dates" selectionMode="range">
            <DatePickerLabel>Search range</DatePickerLabel>
            <RangePickerInput />
            <DatePickerCalendar />
          </DatePicker>
        </Field>
      </CerberusProvider>,
    )

    expect(screen.getByText('Search range')).toBeTruthy()
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
    expect(screen.getByRole('button')).toBeTruthy()
  })

  test('shows a calendar when the trigger button is clicked', async () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <DatePicker id="start_date" name="start_date">
            <DatePickerLabel>Start date</DatePickerLabel>
            <DatePickerInput />
            <DatePickerCalendar />
          </DatePicker>
        </Field>
      </CerberusProvider>,
    )

    await userEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByRole('application')).toBeTruthy()
      expect(screen.getByRole('application').getAttribute('data-state')).toBe(
        'open',
      )
    })
  })
})
