'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { gradientValues } from '@cerberus-design/panda-preset'
import { Button } from '@cerberus-design/react'

const api = {
  gradient: builder.Enum('gradient', gradientValues),
  size: builder.Enum('size', [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
  ]),
  text: builder.Text('name', 'Protector Cerberus'),
  src: builder.Text('src', 'https://cerberus.digitalu.design/logo.svg'),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <AvatarPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { Button, type ButtonProps } from '@cerberus-design/react'

export function MyButton(props: ButtonProps) {
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
      <AvatarPreview />
    </CodeBuilder>
  )
}

export function AvatarPreview() {
  const { selectedProps } = useCodeBuilder()
  switch (selectedProps.size) {
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
