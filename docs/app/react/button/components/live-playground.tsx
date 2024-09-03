'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Button } from '@cerberus-design/react'

const api = {
  palette: builder.Enum('palette', ['action', 'secondaryAction', 'danger']),
  usage: builder.Enum('usage', ['filled', 'outlined', 'text']),
  shape: builder.Enum('shape', ['sharp', 'rounded']),
  text: builder.Text('name', 'Button'),
  disabled: builder.Boolean('disabled', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <ButtonPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { Button, type ButtonProps } from '@cerberus-design/react'

type MyButtonProps = ButtonProps

export function MyButton(props: MyButtonProps) {
  return (
    <Button
      disabled={{disabled}}
      palette={{palette}}
      shape={{shape}}
      usage={{usage}}
    >
      {{text}}
    </Button>
  )
}`}
    >
      <ButtonPreview />
    </CodeBuilder>
  )
}

export function ButtonPreview() {
  const { selectedProps } = useCodeBuilder()
  switch (selectedProps.palette) {
    case 'secondaryAction':
      return (
        <Button palette="secondaryAction" {...selectedProps}>
          {selectedProps.text || 'Add Text'}
        </Button>
      )
    case 'danger':
      return (
        <Button palette="danger" {...selectedProps}>
          {selectedProps.text || 'Add Text'}
        </Button>
      )

    default:
      return (
        <Button {...selectedProps}>{selectedProps.text || 'Add Text'}</Button>
      )
  }
}
