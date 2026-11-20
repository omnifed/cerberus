import { Box } from '@/styled-system/jsx'
import { DatePicker, Field } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="2/3">
      <Field>
        <DatePicker>
          <DatePicker.Label>Start date</DatePicker.Label>
          <DatePicker.InputGroup />
          <DatePicker.Calendar />
        </DatePicker>
      </Field>
    </Box>
  )
}
