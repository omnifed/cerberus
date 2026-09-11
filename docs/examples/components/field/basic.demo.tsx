import { Box, VStack } from '@/styled-system/jsx'
import { Field, Input, Textarea } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <VStack alignItems="flex-start" gap="lg" w="full">
        <Field
          label="Enter your email"
          helperText="We'll never share your email with anyone else."
          required
        >
          <Input name="email" type="email" />
        </Field>
        <Field
          label="Invalid example"
          helperText="This is an example of an invalid field."
          errorText="A name is required to submit this form. It replaces the helper text."
          invalid
          required
        >
          <Input name="invalid-name" type="text" />
        </Field>
        <Field
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
