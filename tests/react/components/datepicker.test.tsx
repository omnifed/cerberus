import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import {
  CerberusProvider,
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Field,
  RangePickerInput,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('DatePicker', () => {
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

    expect(screen.getByText('Start date')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
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

    expect(screen.getByText('Search range')).toBeInTheDocument()
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
    expect(screen.getByRole('button')).toBeInTheDocument()
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
      expect(screen.getByRole('application')).toBeInTheDocument()
      expect(screen.getByRole('application')).toHaveAttribute(
        'data-state',
        'open',
      )
    })
  })
})
