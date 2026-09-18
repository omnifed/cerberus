import { Box } from '@/styled-system/jsx'
import { Field, Textarea } from '@cerberus-design/react'

export function SecondaryDemo() {
  return (
    <Box w="1/2">
      <Field label="Anything else you want to tell us?" secondaryHelperText="0/300">
        <Textarea name="secondary_text" />
      </Field>
    </Box>
  )
}
