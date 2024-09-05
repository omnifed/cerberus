'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Field, Select, Option, ProgressBar } from '@cerberus-design/react'

const api = {
  size: builder.Enum('size', ['sm', 'md']),
  usage: builder.Enum('usage', ['rounded', 'block']),
  value: builder.Text('value', '75'),
  indeterminate: builder.Boolean('indeterminate', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <ProgressBarPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { Field, Select, Option, Label, FieldMessage } from '@cerberus-design/react'

type MySelectProps = FieldProps & SelectProps

export function MySelect(props: MySelectProps) {
  const {
    disabled,
    readOnly,
    invalid,
    required,
    size,
    describedBy,
    ...nativeProps
  } = props

  return (
    <Field
      disabled={{disabled}}
      invalid={{invalid}}
      readOnly={{readOnly}}
      required={{required}}
    >
      <Label htmlFor={{id}}>{{label}}</Label>
      <Select
        {...nativeProps}
        describedBy={{describedBy}}
        id={{id}}
        size={{size}}
      >
        <Option value="">Choose option</Option>
        <Option value="one">Option 1</Option>
      </Select>
      <FieldMessage id={{describedBy}}>
        {{helpText}}
      </FieldMessage>
    </Field>
  )
}`}
    >
      <Field>
        <ProgressBarPreview />
      </Field>
    </CodeBuilder>
  )
}

interface ProgressBarElProps extends Record<string, boolean | string> {}

export function SelectEl(props: ProgressBarElProps) {
  switch (props.size) {
    case 'sm':
      return (
        <Select
          describedBy={props.describedBy as string}
          id={props.id as string}
          size="sm"
        >
          <Option value="">Choose option</Option>
          <Option value="one">Option 1</Option>
        </Select>
      )
    case 'lg':
      return (
        <Select
          describedBy={props.describedBy as string}
          id={props.id as string}
          size="lg"
        >
          <Option value="">Choose option</Option>
          <Option value="one">Option 1</Option>
        </Select>
      )

    default:
      return (
        <Select
          describedBy={props.describedBy as string}
          id={props.id as string}
          size="md"
        >
          <Option value="">Choose option</Option>
          <Option value="one">Option 1</Option>
        </Select>
      )
  }
}

export function ProgressBarPreview() {
  const { selectedProps } = useCodeBuilder()
  return <ProgressBar {...selectedProps} value={Number(selectedProps.value)} />
}
