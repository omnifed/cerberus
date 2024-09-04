'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import {
  Field,
  Select,
  Option,
  Label,
  FieldMessage,
  type LabelProps,
} from '@cerberus-design/react'
import { vstack } from '@cerberus/styled-system/patterns'
import { useMemo } from 'react'

const api = {
  size: builder.Enum('size', ['sm', 'md', 'lg']),
  id: builder.Text('id', 'add-uuid'),
  label: builder.Text('label', 'Select Something'),
  helpText: builder.Text('helpText', 'This is some optional help text.'),
  describedBy: builder.Text('describedBy', 'help:add-select-id'),
  disabled: builder.Boolean('disabled', false),
  required: builder.Boolean('required', false),
  readOnly: builder.Boolean('readOnly', false),
  invalid: builder.Boolean('invalid', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <SelectPreview />
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
        <SelectPreview />
      </Field>
    </CodeBuilder>
  )
}

interface SelectElProps extends Record<string, boolean | string> {}

export function SelectEl(props: SelectElProps) {
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

export function SelectPreview() {
  const { selectedProps } = useCodeBuilder()
  const {
    label,
    helpText,
    required,
    disabled,
    invalid,
    readOnly,
    ...cerbSelectProps
  } = selectedProps
  const labelSize = useMemo(() => {
    return (
      cerbSelectProps.size === 'lg' ? 'md' : cerbSelectProps.size
    ) as LabelProps['size']
  }, [cerbSelectProps.size])

  return (
    <div
      className={vstack({
        alignItems: 'flex-start',
        gap: '0',
        w: 'full',
      })}
    >
      <Field
        disabled={disabled as boolean}
        invalid={invalid as boolean}
        readOnly={readOnly as boolean}
        required={required as boolean}
      >
        <Label htmlFor="add-uuid" size={labelSize}>
          {label}
        </Label>
        <SelectEl {...cerbSelectProps} />
        <FieldMessage id="help:add-select-id">{helpText}</FieldMessage>
      </Field>
    </div>
  )
}
