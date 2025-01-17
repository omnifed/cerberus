'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Button, ButtonParts } from '@cerberus-design/react'
import { Model } from '@carbon/icons-react'

const api = {
  palette: builder.Enum('palette', ['action', 'secondaryAction', 'danger']),
  usage: builder.Enum('usage', ['filled', 'outlined', 'ghost']),
  shape: builder.Enum('shape', ['sharp', 'rounded']),
  size: builder.Enum('size', ['sm', 'md']),
  text: builder.Text('name', 'Button'),
  disabled: builder.Boolean('disabled', false),
  pending: builder.Boolean('pending', false),
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
      code={`import { Button, type ButtonProps } from '@cerberus/react'

export function MyButton(props: ButtonProps) {
  return (
    <Button
      disabled={{disabled}}
      pending={{pending}}
      palette={{palette}}
      shape={{shape}}
      usage={{usage}}
      size={{size}}
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
        <ButtonParts.Root {...selectedProps}>
          {selectedProps.text || 'Add Text'}
          <ButtonParts.Icon>
            <Model />
          </ButtonParts.Icon>
        </ButtonParts.Root>
      )
  }
}
