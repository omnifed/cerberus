import { Box } from '@/styled-system/jsx'
import { Field, Switch } from '@cerberus-design/react'

export function FieldDemo() {
  return (
    <Box w="1/2">
      <Field label="This is the field label" required>
        <Switch>Receive in app notifications</Switch>
      </Field>
    </Box>
  )
}
