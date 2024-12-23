import {
  DatePicker,
  DatePickerLabel,
  DatePickerInput,
  DatePickerCalendar,
  Field,
  RangePickerInput,
} from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'

export function StaticPreview() {
  return (
    <Box w="2/3">
      <Field>
        <DatePicker id="start_date" name="start_date">
          <DatePickerLabel>Start date</DatePickerLabel>
          <DatePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}

export function RangePreview() {
  return (
    <Box gap="4" w="2/3">
      <Field>
        <DatePicker id="range_dates" name="range_dates" selectionMode="range">
          <DatePickerLabel>Search range</DatePickerLabel>
          <RangePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
