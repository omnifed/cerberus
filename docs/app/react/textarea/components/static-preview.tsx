import { Field, FieldParts, Textarea } from '@cerberus-design/react'
import { Box } from 'styled-system/jsx'
import { css } from 'styled-system/css'

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
          className={css({
            fontSize: 'xl',
            fontWeight: 'black',
            textTransform: 'uppercase',
          })}
        >
          Custom Label
        </FieldParts.Label>
        <FieldParts.Textarea
          className={css({
            transform: 'skewX(-10deg)',
          })}
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
