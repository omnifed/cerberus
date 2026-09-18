import { Box } from '@/styled-system/jsx'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerLabel,
  Field,
  RangePickerInput,
} from '@cerberus-design/react'

export function RangeDemo() {
  return (
    <Box gap="4" w="2/3">
      <Field>
        <DatePicker selectionMode="range">
          <DatePickerLabel>Search range</DatePickerLabel>
          <RangePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
