'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { For, RadioGroup, Radio, splitProps } from '@cerberus-design/react'

const api = {
  orientation: builder.Enum('orientation', ['horizontal', 'vertical']),
  size: builder.Enum('size', ['sm', 'md']),
  disabled: builder.Boolean('disabled', false),
  invalid: builder.Boolean('invalid', false),
  readOnly: builder.Boolean('readOnly', false),
  required: builder.Boolean('required', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <RadioGroupPreview />
    </CodeBuilder>
  )
}

export function RadioGroupPreview() {
  const { selectedProps } = useCodeBuilder()
  const [radioGroupProps, formState] = splitProps(
    selectedProps,
    ['size', 'orientation'],
    ['disabled', 'invalid', 'readOnly', 'required'],
  )
  const options = [
    { value: 'cerberus', label: 'Cerberus' },
    { value: 'hades', label: 'Hades' },
    { value: 'zeus', label: 'Zeus' },
  ]

  if (radioGroupProps.orientation === 'horizontal') {
    return (
      <RadioGroup
        defaultValue="cerberus"
        orientation="horizontal"
        disabled={formState.disabled}
        readOnly={formState.readOnly}
      >
        <For each={options}>
          {(option) => (
            <Radio
              key={option.value}
              invalid={formState.invalid}
              size={radioGroupProps.size}
              value={option.value}
            >
              {option.label}
            </Radio>
          )}
        </For>
      </RadioGroup>
    )
  }

  return (
    <RadioGroup
      defaultValue="cerberus"
      orientation="vertical"
      disabled={formState.disabled}
      readOnly={formState.readOnly}
    >
      <For each={options}>
        {(option) => (
          <Radio
            key={option.value}
            invalid={formState.invalid}
            size={radioGroupProps.size}
            value={option.value}
          >
            {option.label}
          </Radio>
        )}
      </For>
    </RadioGroup>
  )
}
