'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { gradientValues } from '@cerberus-design/panda-preset'
import { Avatar } from '@cerberus-design/react'

const api = {
  gradient: builder.Enum('gradient', [...gradientValues, 'none']),
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
  ariaLabel: builder.Text('aria label', 'Protector Cerberus'),
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
      code={`import { Avatar, type AvatarProps } from '@cerberus/react'

export function MyAvatar(props: AvatarProps) {
  return (
    <Avatar
      {...props}
      ariaLabel={{ariaLabel}}
      gradient={{gradient}}
      size={{size}}
      src={{src}}
    />
  )
}`}
    >
      <AvatarPreview />
    </CodeBuilder>
  )
}

export function AvatarPreview() {
  const { selectedProps } = useCodeBuilder()
  if (selectedProps.gradient === 'light-teal') {
    return (
      <Avatar
        {...selectedProps}
        ariaLabel={selectedProps.ariaLabel as string}
        gradient="light-teal"
        src={selectedProps.src as string}
      />
    )
  }
  return (
    <Avatar
      {...selectedProps}
      ariaLabel={selectedProps.ariaLabel as string}
      src={selectedProps.src as string}
    />
  )
}
