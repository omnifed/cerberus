'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { ProgressBar } from '@cerberus-design/react'

const api = {
  id: builder.Text('id', 'UUID'),
  label: builder.Text(
    'label',
    'A description of what the progress bar represents',
  ),
  size: builder.Enum('size', ['sm', 'md']),
  usage: builder.Enum('usage', ['rounded', 'block']),
  now: builder.Number('now', 75),
  indeterminate: builder.Boolean('indeterminate', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <ProgressBarPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { ProgressBar, type ProgressBarProps } from '@cerberus/react'

export function MyProgressBar(props: ProgressBarProps) {
  return (
    <ProgressBar
      id={{id}}
      indeterminate={{indeterminate}}
      label={{label}}
      now={{now}}
      size={{size}}
      usage={{usage}}
    />
  )
}`}
    >
      <ProgressBarPreview />
    </CodeBuilder>
  )
}

export function ProgressBarPreview() {
  const { selectedProps } = useCodeBuilder()
  return (
    <ProgressBar
      {...selectedProps}
      id={selectedProps.id as string}
      label={selectedProps.label as string}
      now={selectedProps.now as number}
    />
  )
}
