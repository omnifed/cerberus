import { TextField, TextareaField } from '@cerberus-design/react'
import { Box, VStack } from '@cerberus-design/styled-system/jsx'

export function BasicFieldPreview() {
  return (
    <Box w="1/2">
      <VStack alignItems="flex-start" gap="lg" w="full">
        <TextField
          ids={{
            control: 'email',
          }}
          label="Enter your email"
          helperText="We'll never share your email with anyone else."
          required
        />
        <TextField
          ids={{
            control: 'invalid-name',
          }}
          label="Invalid example"
          errorText="A name is required to submit this form."
          invalid
          required
        />
        <TextareaField
          ids={{
            control: 'message',
          }}
          label="Anything else you want to tell us?"
          helperText="This will help us learn more about you."
          secondaryHelperText="0/300"
        />
      </VStack>
    </Box>
  )
}
