'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { TextField } from '@cerberus-design/react'

const api = {
  size: builder.Enum('size', ['sm', 'md', 'lg']),
  label: builder.Text('label', 'This is a label'),
  placeholder: builder.Text('placeholder', ''),
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
  TextField,
  type TextFieldProps,
} from '@cerberus/react'

/**
 * A custom abstraction of the Cerberus TextField component.
 * @param props The same props as the Cerberus TextField component
*/
export function MyTextField(props: TextFieldProps) {
  return <TextField {...props } />
}`}
    >
      <TextFieldPreview />
    </CodeBuilder>
  )
}

export function TextFieldPreview() {
  const { selectedProps } = useCodeBuilder()
  const label = selectedProps.label as string
  const placeholder = selectedProps.placeholder as string

  switch (selectedProps.size) {
    case 'sm':
      return (
        <TextField
          {...selectedProps}
          label={label}
          inputProps={{
            placeholder,
          }}
          size="sm"
        />
      )

    case 'md':
      return (
        <TextField
          {...selectedProps}
          label={label}
          inputProps={{
            placeholder,
          }}
          size="md"
        />
      )

    case 'lg':
      return (
        <TextField
          {...selectedProps}
          label={label}
          inputProps={{
            placeholder,
          }}
          size="lg"
        />
      )

    default:
      return (
        <TextField
          {...selectedProps}
          label={label}
          inputProps={{
            placeholder,
          }}
        />
      )
  }
}
