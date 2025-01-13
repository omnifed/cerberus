'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import {
  Field,
  Select,
  Option,
  FieldMessage,
  createSelectCollection,
  type SelectProps,
} from '@cerberus-design/react'
import { vstack } from '@cerberus/styled-system/patterns'

const api = {
  size: builder.Enum('size', ['sm', 'md', 'lg']),
  label: builder.Text('label', 'Select Something'),
  placeholder: builder.Text('placeholder', 'Choose option'),
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
      code={`import {
  Select,
  Option,
  type SelectProps,
} from '@cerberus/react'

export function MySelect(props: SelectProps) {


  return (
    <Select {...props}>
      {props.collection.items.map((item) => (
        <Option key={item.value} item={item} />
      ))}
    </Select>
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
  const collection = createSelectCollection([
    { label: 'Hades', value: 'hades' },
    { label: 'Persephone', value: 'persephone' },
    { label: 'Zeus', value: 'zeus', disabled: true },
    { label: 'Poseidon', value: 'poseidon' },
    { label: 'Hera', value: 'hera' },
  ])

  switch (props.size) {
    case 'sm':
      return (
        <Select
          collection={collection}
          label={props.label as string}
          placeholder={props.placeholder as string}
          disabled={props.disabled as boolean}
          invalid={props.invalid as boolean}
          required={props.required as boolean}
          readOnly={props.readOnly as boolean}
          size="sm"
        >
          {collection.items.map((item) => (
            <Option key={item.value} item={item} />
          ))}
        </Select>
      )
    case 'lg':
      return (
        <Select
          collection={collection}
          label={props.label as string}
          placeholder={props.placeholder as string}
          disabled={props.disabled as boolean}
          invalid={props.invalid as boolean}
          required={props.required as boolean}
          readOnly={props.readOnly as boolean}
          size="lg"
        >
          {collection.items.map((item) => (
            <Option key={item.value} item={item} />
          ))}
        </Select>
      )
    default:
      return (
        <Select
          collection={collection}
          label={props.label as string}
          placeholder={props.placeholder as string}
          disabled={props.disabled as boolean}
          invalid={props.invalid as boolean}
          required={props.required as boolean}
          readOnly={props.readOnly as boolean}
          size={props.size as SelectProps['size']}
        >
          {collection.items.map((item) => (
            <Option key={item.value} item={item} />
          ))}
        </Select>
      )
  }
}

export function SelectPreview() {
  const { selectedProps } = useCodeBuilder()
  const { helpText, ...cerbSelectProps } = selectedProps

  return (
    <div
      className={vstack({
        alignItems: 'flex-start',
        gap: '0',
        w: 'full',
      })}
    >
      <Field
        disabled={cerbSelectProps.disabled as boolean}
        invalid={cerbSelectProps.invalid as boolean}
        readOnly={cerbSelectProps.readOnly as boolean}
        required={cerbSelectProps.required as boolean}
      >
        <SelectEl {...cerbSelectProps} {...selectedProps} />
        <FieldMessage id="help:add-select-id">{helpText}</FieldMessage>
      </Field>
    </div>
  )
}
