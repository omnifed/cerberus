import { Box } from '@/styled-system/jsx'
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
  Field,
} from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="2/3">
      <Field>
        <DatePicker>
          <DatePickerLabel>Start date</DatePickerLabel>
          <DatePickerInput />
          <DatePickerCalendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
