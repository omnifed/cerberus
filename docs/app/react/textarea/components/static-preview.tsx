import { Field, FieldParts, Textarea } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'

export function BasicTextarea() {
  return (
    <Box w="1/2">
      <FieldParts.Root ids={{ control: 'basicTextarea' }}>
        <FieldParts.Textarea />
      </FieldParts.Root>
    </Box>
  )
}

export function SecondaryTextTextarea() {
  return (
    <Box w="1/2">
      <Field
        label="Anything else you want to tell us?"
        secondaryHelperText="0/300"
      >
        <Textarea name="secondary_text" />
      </Field>
    </Box>
  )
}

export function CustomField() {
  return (
    <Box w="1/2">
      <FieldParts.Root ids={{ control: 'customField' }}>
        <FieldParts.Label
          css={{
            fontSize: 'xl',
            fontWeight: 'black',
            textTransform: 'uppercase',
          }}
        >
          Custom Label
        </FieldParts.Label>
        <FieldParts.Textarea
          css={{
            transform: 'skewX(-10deg)',
          }}
        />
        <FieldParts.HelperText
          css={{
            fontStyle: 'italic',
          }}
        >
          Custom Helper Text
        </FieldParts.HelperText>
      </FieldParts.Root>
    </Box>
  )
}
