'use client'

import { Box } from '@/styled-system/jsx'
import { DatePicker, Field, parseDate } from '@cerberus-design/react'

export function RangeDefaultValueDemo() {
  const defaultValue = parseDate(['2025-01-01', '2025-01-15'])

  return (
    <Box gap="4" w="2/3">
      <Field>
        <DatePicker
          defaultValue={defaultValue}
          name="range_dates_dv"
          selectionMode="range"
        >
          <DatePicker.Label>Search range</DatePicker.Label>
          <DatePicker.RangeInputGroup />
          <DatePicker.Calendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
