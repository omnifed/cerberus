'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Switch, splitProps } from '@cerberus-design/react'

const api = {
  size: builder.Enum('size', ['sm', 'lg']),
  text: builder.Text('text', 'Add your label text here'),
  disabled: builder.Boolean('disabled', false),
  invalid: builder.Boolean('invalid', false),
  readOnly: builder.Boolean('readOnly', false),
  required: builder.Boolean('required', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <SwitchPreview />
    </CodeBuilder>
  )
}

export function SwitchPreview() {
  const { selectedProps } = useCodeBuilder()
  const [switchProps, formState] = splitProps(
    selectedProps,
    ['text', 'size'],
    ['disabled', 'invalid', 'readOnly', 'required'],
  )

  if (switchProps.size === 'sm') {
    return (
      <Switch {...formState} ids={{ control: 'switch:live-preview' }} size="sm">
        {switchProps.text}
      </Switch>
    )
  }

  return (
    <Switch {...formState} ids={{ control: 'switch:live-preview' }} size="lg">
      {switchProps.text}
    </Switch>
  )
}
