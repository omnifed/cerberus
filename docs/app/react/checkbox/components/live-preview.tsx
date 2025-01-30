'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Checkbox, splitProps } from '@cerberus-design/react'

const api = {
  size: builder.Enum('size', ['sm', 'md']),
  text: builder.Text('text', 'Add your label text here'),
  mixed: builder.Boolean('mixed', false),
  disabled: builder.Boolean('disabled', false),
  invalid: builder.Boolean('invalid', false),
  readOnly: builder.Boolean('readOnly', false),
  required: builder.Boolean('required', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <CheckboxPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { Checkbox, type CheckboxProps } from '@cerberus/react'

/**
 * This is an abstraction of the Cerberus checkbox component
 */
export function MyCheckbox(props: CheckboxProps) {
  const { describedBy, size, mixed, ...nativeProps } = props
  const labelSize = size === 'md' ? 'sm' : 'md'

  return (
    <Field
      disabled={{disabled}}
      invalid={{invalid}}
      readOnly={{readOnly}}
      required={{required}}
    >
      <Label
        className={hstack({
          justify: 'flex-start !important',
          gap: 0,
        })}
        htmlFor={{id}}
        size={labelSize}
      >
        <Checkbox
          {...nativeProps}
          {...(describedBy && { describedBy: describedBy })}
          id={{id}}
          mixed={{mixed}}
          size={{size}}
        />
        {{text}}
      </Label>
    </Field>
  )
}`}
    >
      <CheckboxPreview />
    </CodeBuilder>
  )
}

export function CheckboxPreview() {
  const { selectedProps } = useCodeBuilder()
  const [checkboxProps, formState, { mixed }] = splitProps(
    selectedProps,
    ['text', 'size'],
    ['disabled', 'invalid', 'readOnly', 'required'],
  )

  if (checkboxProps.size === 'md') {
    return (
      <Checkbox
        {...formState}
        {...(mixed && { checked: 'indeterminate' })}
        ids={{ control: 'checkbox:live-preview' }}
        size="md"
      >
        {checkboxProps.text}
      </Checkbox>
    )
  }

  return (
    <Checkbox
      {...formState}
      {...(mixed && { checked: 'indeterminate' })}
      ids={{ control: 'checkbox:live-preview' }}
      size="sm"
    >
      {checkboxProps.text}
    </Checkbox>
  )
}
