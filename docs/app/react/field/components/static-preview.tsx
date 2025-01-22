import { Search } from '@carbon/icons-react'
import { Field, Label, Input } from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'

export function InputBasicPreview() {
  return (
    <Box w="1/2">
      <Field>
        <Label htmlFor="first_name">First Name</Label>
        <Input id="first_name" type="text" />
      </Field>
    </Box>
  )
}
