import { Box, VStack } from '@/styled-system/jsx'
import { Field, Fieldset, Input } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Box w="1/2">
      <Fieldset
        invalid
        legend="Update your profile"
        helperText="You can update your profile information here."
        errorText="This is an error message for the fieldset group."
        usage="formSection"
      >
        <VStack alignItems="flex-start" gap="lg" paddingBlock="lg" w="full">
          <Field
            ids={{
              control: 'first_name',
            }}
            label="What is your first name?"
            required
          >
            <Input name="first_name" />
          </Field>

          <Field
            ids={{
              control: 'display_name',
            }}
            label="What is your display name?"
            required
          >
            <Input name="last_name" />
          </Field>
        </VStack>
      </Fieldset>
    </Box>
  )
}
