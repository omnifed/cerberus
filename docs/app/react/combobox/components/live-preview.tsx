'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import {
  For,
  Field,
  Combobox,
  ComboItemWithIndicator,
  ComboItemText,
  createSelectCollection,
} from '@cerberus-design/react'
import { VStack } from 'styled-system/jsx'
import { type PropsWithChildren } from 'react'

const api = {
  size: builder.Enum('size', ['sm', 'md', 'lg']),
  label: builder.Text('label', 'Select Something'),
  placeholder: builder.Text('placeholder', 'Choose option'),
}

const collection = createSelectCollection([
  { label: 'Hades', value: 'hades' },
  { label: 'Persephone', value: 'persephone' },
  { label: 'Zeus', value: 'zeus', disabled: true },
  { label: 'Poseidon', value: 'poseidon' },
  { label: 'Hera', value: 'hera' },
])

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <ComboboxPreview />
    </CodeBuilder>
  )
}

interface ComboboxElProps {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  placeholder?: string
}

export function ComboboxEl(props: PropsWithChildren<ComboboxElProps>) {
  switch (props.size) {
    case 'sm':
      return (
        <Combobox
          collection={collection}
          label={props.label}
          placeholder={props.placeholder}
          size="sm"
        >
          {props.children}
        </Combobox>
      )
    case 'lg':
      return (
        <Combobox
          collection={collection}
          label={props.label}
          placeholder={props.placeholder}
          size="lg"
        >
          {props.children}
        </Combobox>
      )
    default:
      return (
        <Combobox
          collection={collection}
          label={props.label}
          placeholder={props.placeholder}
          size="md"
        >
          {props.children}
        </Combobox>
      )
  }
}

export function ComboboxPreview() {
  const { selectedProps } = useCodeBuilder()
  return (
    <VStack alignItems="flex-start" gap="0" w="full">
      <Field
        disabled={selectedProps.disabled as boolean}
        invalid={selectedProps.invalid as boolean}
        readOnly={selectedProps.readOnly as boolean}
        required={selectedProps.required as boolean}
      >
        <ComboboxEl {...selectedProps}>
          <For each={collection.items}>
            {(item) => (
              <ComboItemWithIndicator key={item.value} item={item}>
                <ComboItemText>{item.label}</ComboItemText>
              </ComboItemWithIndicator>
            )}
          </For>
        </ComboboxEl>
      </Field>
    </VStack>
  )
}
