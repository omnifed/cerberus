'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import {
  Admonition,
  AdmonitionDescription,
  AdmonitionHeading,
  type AdmonitionProps,
} from './admonition-preview'

const api = {
  palette: builder.Enum('palette', [
    'page',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  usage: builder.Enum('usage', ['filled', 'outlined']),
  heading: builder.Text('name', 'When to use'),
  description: builder.Text(
    'description',
    'Use this component when you want to display a page-level message.',
  ),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <AdmonitionPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { Admonition, type AdmonitionProps } from '@cerberus/react'

export function MyAdmonition(props: AdmonitionProps) {
  const { palette, usage } = props
  const styles = {
    palette: {{palette}} as AdmonitionProps['palette'],
    usage: {{usage}} as AdmonitionProps['usage'],
  }

  return (
    <Admonition {...styles}>
      <AdmonitionHeading {...styles}>{{heading}}</AdmonitionHeading>
      <AdmonitionDescription {...styles}>
        {{description}}
      </AdmonitionDescription>
    </Admonition>
  )
}`}
    >
      <AdmonitionPreview />
    </CodeBuilder>
  )
}

export function AdmonitionPreview() {
  const { selectedProps } = useCodeBuilder()
  const styles = {
    palette: selectedProps.palette as AdmonitionProps['palette'],
    usage: selectedProps.usage as AdmonitionProps['usage'],
  }

  if (selectedProps.palette === 'warning') {
    return (
      <Admonition {...styles} palette="warning">
        <AdmonitionHeading {...styles} palette="warning">
          {selectedProps.heading}
        </AdmonitionHeading>
        <AdmonitionDescription {...styles} palette="warning">
          {selectedProps.description}
        </AdmonitionDescription>
      </Admonition>
    )
  }

  return (
    <Admonition {...styles}>
      <AdmonitionHeading {...styles}>{selectedProps.heading}</AdmonitionHeading>
      <AdmonitionDescription {...styles}>
        {selectedProps.description}
      </AdmonitionDescription>
    </Admonition>
  )
}
