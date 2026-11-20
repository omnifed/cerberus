import { Box } from '@/styled-system/jsx'
import { Field } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <Field.Root ids={{ control: 'customField' }}>
        <Field.Label
          css={{
            fontSize: 'xl',
            fontWeight: 'black',
            textTransform: 'uppercase',
          }}
        >
          Custom Label
        </Field.Label>
        <Field.Input
          css={{
            transform: 'skewX(-10deg)',
          }}
          type="text"
        />
        <Field.HelperText
          css={{
            fontStyle: 'italic',
          }}
        >
          Custom Helper Text
        </Field.HelperText>
      </Field.Root>
    </Box>
  )
}
