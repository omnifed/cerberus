import { FieldParts } from '@cerberus-design/react'
import { Box } from '@cerberus-design/styled-system/jsx'
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
