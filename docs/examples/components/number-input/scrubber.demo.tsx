import { Box } from '@/styled-system/jsx'
import { Field, NumberInput } from '@cerberus-design/react'

export function ScrubberDemo() {
  return (
    <Box w="1/2">
      <Field label="How many?" helperText="Use your mouse wheel to change the value.">
        <NumberInput scrubber />
      </Field>
    </Box>
  )
}
