import { Box } from '@/styled-system/jsx'
import { FieldParts } from '@cerberus-design/react'

export function CustomDemo() {
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
