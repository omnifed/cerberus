import { Box } from '@/styled-system/jsx'
import { Field } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <Field.Root ids={{ control: 'basicTextarea' }}>
        <Field.Textarea />
      </Field.Root>
    </Box>
  )
}
