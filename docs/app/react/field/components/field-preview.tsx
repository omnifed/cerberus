import { Field, Input, Textarea, FieldParts } from '@cerberus-design/react'
import { Box, VStack } from 'styled-system/jsx'
import { css } from 'styled-system/css'

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

export function CustomField() {
  return (
    <Box w="1/2">
      <FieldParts.Root ids={{ control: 'customField' }}>
        <FieldParts.Label
          className={css({
            fontSize: 'xl',
            fontWeight: 'black',
            textTransform: 'uppercase',
          })}
        >
          Custom Label
        </FieldParts.Label>
        <FieldParts.Input
          className={css({
            transform: 'skewX(-10deg)',
          })}
          type="text"
        />
        <FieldParts.HelperText
          className={css({
            fontStyle: 'italic',
          })}
        >
          Custom Helper Text
        </FieldParts.HelperText>
      </FieldParts.Root>
    </Box>
  )
}
