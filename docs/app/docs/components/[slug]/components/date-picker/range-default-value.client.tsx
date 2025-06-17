'use client'

import { Box } from '@/styled-system/jsx'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerLabel,
  Field,
  parseDate,
  RangePickerInput,
} from '@cerberus-design/react'

export function RangeDefaultValuePreview() {
  const defaultValue = parseDate(['2025-01-01', '2025-01-15'])

  return (
    <Box gap="4" w="2/3">
      <Field>
        <DatePicker
          defaultValue={defaultValue}
          name="range_dates_dv"
          selectionMode="range"
        >
          <DatePickerLabel>Search range</DatePickerLabel>
          <RangePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
