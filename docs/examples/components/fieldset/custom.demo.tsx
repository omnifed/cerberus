import { Box } from '@/styled-system/jsx'
import { Field, Fieldset, Input } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <Fieldset.Root invalid>
        <Fieldset.Legend
          css={{
            textStyle: 'heading-lg',
          }}
        >
          Custom Legend
        </Fieldset.Legend>
        <Fieldset.HelperText
          css={{
            color: 'page.text.200',
            fontStyle: 'italic',
            textStyle: 'body-sm',
          }}
        >
          This is some custom Helper Text
        </Fieldset.HelperText>

        <Box paddingBlock="lg" w="full">
          <Field label="This is a custom example">
            <Input />
          </Field>
        </Box>

        <Fieldset.ErrorText
          css={{
            bgColor: 'danger.bg.initial',
            color: 'danger.text.100',
            p: 4,
            rounded: 'lg',
          }}
        >
          This is a custom Error Text
        </Fieldset.ErrorText>
      </Fieldset.Root>
    </Box>
  )
}
