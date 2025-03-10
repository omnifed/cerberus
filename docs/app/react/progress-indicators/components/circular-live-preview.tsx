'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Square } from 'styled-system/jsx'
import { CircularProgress } from '@cerberus-design/react'

const api = {
  id: builder.Text('id', 'UUID'),
  label: builder.Text(
    'label',
    'Description of what the progress bar represents',
  ),
  title: builder.Text('title', 'Course completion'),
  syntax: builder.Text('label', 'Done'),
  now: builder.Number('now', 30),
  bgStyle: builder.Enum('bgStyle', ['filled', 'transparent']),
}

export function CircularLivePlayground() {
  return (
    <CodeBuilder api={api}>
      <CircularProgressPreview />
    </CodeBuilder>
  )
}

export function CircularLivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { CircularProgress, type CircularProgressProps } from '@cerberus/react'

export function MyCircularProgress(props: CircularProgressProps) {
  return (
    <CircularProgress
      bgStyle={{bgStyle}}
      label={{label}}
      id={{id}}
      syntax={{syntax}}
      now={{now}}
      title={{title}}
    />
  )
}`}
    >
      <CircularProgressPreview />
    </CodeBuilder>
  )
}

export function CircularProgressPreview() {
  const { selectedProps } = useCodeBuilder()
  return (
    <Square size="15rem">
      <CircularProgress
        {...selectedProps}
        id={selectedProps.id as string}
        label={selectedProps.label as string}
        title={selectedProps.title as string}
        now={selectedProps.now as number}
        bgStyle={selectedProps.bgStyle as 'filled' | 'transparent'}
      />
    </Square>
  )
}
