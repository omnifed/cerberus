'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Checkbox, Label, Field, Show } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'
import { useCallback, useState, type ChangeEvent } from 'react'

const api = {
  size: builder.Enum('size', ['md', 'lg']),
  text: builder.Text('text', 'Add your label text here'),
  id: builder.Text('id', 'add-uuid'),
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
      code={`import { Field, Label, Checkbox, type CheckboxProps } from '@cerberus-design/react'
import { hstack } from '@cerberus/styled-system/patterns'

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
          justify: 'flex-start',
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
  const { size, text, id, mixed, ...fieldState } = selectedProps
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked((prev) => !prev)
  }, [])

  return (
    <Field {...fieldState}>
      <Label
        className={hstack({
          justify: 'flex-start',
        })}
        htmlFor={id as string}
        size={size === 'md' ? 'sm' : 'md'}
      >
        <Show
          when={size === 'md'}
          fallback={
            <Checkbox
              checked={checked}
              id={id as string}
              mixed={mixed as boolean}
              name={id as string}
              onChange={handleChange}
              size="lg"
            />
          }
        >
          <Checkbox
            checked={checked}
            id={id as string}
            mixed={mixed as boolean}
            name={id as string}
            onChange={handleChange}
            size="md"
          />
        </Show>
        {text}
      </Label>
    </Field>
  )
}
