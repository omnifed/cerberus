import { Box } from '@/styled-system/jsx'
import { Field, FieldsetParts, Input } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <FieldsetParts.Root invalid>
        <FieldsetParts.Legend
          css={{
            textStyle: 'heading-lg',
          }}
        >
          Custom Legend
        </FieldsetParts.Legend>
        <FieldsetParts.HelperText
          css={{
            color: 'page.text.200',
            fontStyle: 'italic',
            textStyle: 'body-sm',
          }}
        >
          This is some custom Helper Text
        </FieldsetParts.HelperText>

        <Box paddingBlock="lg" w="full">
          <Field label="This is a custom example">
            <Input />
          </Field>
        </Box>

        <FieldsetParts.ErrorText
          css={{
            bgColor: 'danger.bg.initial',
            color: 'danger.text.100',
            p: 4,
            rounded: 'lg',
          }}
        >
          This is a custom Error Text
        </FieldsetParts.ErrorText>
      </FieldsetParts.Root>
    </Box>
  )
}
