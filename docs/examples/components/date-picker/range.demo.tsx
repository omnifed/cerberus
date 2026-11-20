import { Box } from '@/styled-system/jsx'
import { DatePicker, Field } from '@cerberus-design/react'

export function RangeDemo() {
  return (
    <Box gap="4" w="2/3">
      <Field>
        <DatePicker selectionMode="range">
          <DatePicker.Label>Search range</DatePicker.Label>
          <DatePicker.RangeInputGroup />
          <DatePicker.Calendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
