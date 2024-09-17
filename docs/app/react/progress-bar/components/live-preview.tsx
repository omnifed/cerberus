'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { ProgressBar } from '@cerberus-design/react'

const api = {
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
    <ProgressBar indeterminate={{indeterminate}} size={{size}} usage={{usage}} now={{now}} />
  )
}`}
    >
      <ProgressBarPreview />
    </CodeBuilder>
  )
}

export function ProgressBarPreview() {
  const { selectedProps } = useCodeBuilder()
  return <ProgressBar {...selectedProps} now={selectedProps.now as number} />
}
