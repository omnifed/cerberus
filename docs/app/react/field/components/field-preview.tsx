import { Field, Input, Textarea } from '@cerberus-design/react'
import { Box, VStack } from '@cerberus-design/styled-system/jsx'

export function BasicFieldPreview() {
  return (
    <Box w="1/2">
      <VStack alignItems="flex-start" gap="lg" w="full">
        <Field
          ids={{
            control: 'email',
          }}
          label="Enter your email"
          helperText="We'll never share your email with anyone else."
          required
        >
          <Input name="email" type="email" />
        </Field>
        <Field
          ids={{
            control: 'invalid-name',
          }}
          label="Invalid example"
          helperText="This is an example of an invalid field."
          errorText="A name is required to submit this form. It replaces the helper text."
          invalid
          required
        >
          <Input name="invalid-name" type="text" />
        </Field>
        <Field
          ids={{
            control: 'message',
          }}
          label="Anything else you want to tell us?"
          helperText="This will help us learn more about you."
          secondaryHelperText="0/300"
        >
          <Textarea name="message" />
        </Field>
      </VStack>
    </Box>
  )
}
