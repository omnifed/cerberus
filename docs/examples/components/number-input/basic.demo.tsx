import { Box } from '@/styled-system/jsx'
import { Field, NumberInput } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <Field label="How many?" helperText="Choose your quantity.">
        <NumberInput />
      </Field>
    </Box>
  )
}
