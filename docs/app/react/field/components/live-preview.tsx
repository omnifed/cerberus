'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Field, Input } from '@cerberus-design/react'

const api = {
  label: builder.Text('label', 'This is a label'),
  helperText: builder.Text('helperText', 'This is a helper text'),
  errorText: builder.Text('errorText', 'This is an error text'),
  disabled: builder.Boolean('disabled', false),
  required: builder.Boolean('required', false),
  readOnly: builder.Boolean('readOnly', false),
  invalid: builder.Boolean('invalid', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <TextFieldPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import {
  Field,
  type FieldProps,
} from '@cerberus/react'

/**
 * A custom abstraction of the Cerberus TextField component.
 * @param props The same props as the Cerberus TextField component
*/
export function MyCustomField(props: FieldProps) {
  return <Field {...props } />
}`}
    >
      <TextFieldPreview />
    </CodeBuilder>
  )
}

export function TextFieldPreview() {
  const { selectedProps } = useCodeBuilder()
  const label = selectedProps.label as string
  return (
    <Field {...selectedProps} label={label}>
      <Input name="live-preview:default" type="text" />
    </Field>
  )
}
