import {
  Fieldset,
  FieldsetParts,
  Field,
  Input,
  RadioGroup,
  Radio,
} from '@cerberus-design/react'
import { Box, VStack } from '@cerberus-design/styled-system/jsx'
import { css } from '@cerberus-design/styled-system/css'

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

export function FieldsetGroupDemo() {
  return (
    <Box w="1/2">
      <Fieldset legend="Who is your favorite?">
        <RadioGroup name="favorite" defaultValue="cerberus">
          <Radio value="cerberus">Cerberus</Radio>
          <Radio value="hades">Hades</Radio>
          <Radio value="zeus">Zeus</Radio>
        </RadioGroup>
      </Fieldset>
    </Box>
  )
}

export function CustomDemo() {
  return (
    <Box w="1/2">
      <FieldsetParts.Root invalid>
        <FieldsetParts.Legend
          className={css({
            textStyle: 'heading-lg',
          })}
        >
          Custom Legend
        </FieldsetParts.Legend>
        <FieldsetParts.HelperText
          className={css({
            color: 'page.text.200',
            fontStyle: 'italic',
            textStyle: 'body-sm',
          })}
        >
          This is some custom Helper Text
        </FieldsetParts.HelperText>

        <Box paddingBlock="lg" w="full">
          <Field label="This is a custom example">
            <Input />
          </Field>
        </Box>

        <FieldsetParts.ErrorText
          className={css({
            bgColor: 'danger.bg.initial',
            color: 'danger.text.100',
            p: 4,
            rounded: 'lg',
          })}
        >
          This is a custom Error Text
        </FieldsetParts.ErrorText>
      </FieldsetParts.Root>
    </Box>
  )
}
