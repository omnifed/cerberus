'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { Admonition, type AdmonitionProps } from '@cerberus-design/react'

const api = {
  palette: builder.Enum('palette', [
    'page',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  usage: builder.Enum('usage', ['filled', 'outlined']),
  heading: builder.Text('heading', 'When to use'),
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

export function AdmonitionPreview() {
  const { selectedProps } = useCodeBuilder()
  const styles = {
    palette: selectedProps.palette as AdmonitionProps['palette'],
    usage: selectedProps.usage as AdmonitionProps['usage'],
  }

  if (selectedProps.palette === 'info') {
    return (
      <Admonition
        {...styles}
        palette="info"
        heading={selectedProps.heading as string}
      >
        {selectedProps.description}
      </Admonition>
    )
  }

  if (selectedProps.palette === 'warning') {
    return (
      <Admonition
        {...styles}
        palette="warning"
        heading={selectedProps.heading as string}
      >
        {selectedProps.description}
      </Admonition>
    )
  }

  return (
    <Admonition
      {...styles}
      heading={selectedProps.heading as string}
      palette={selectedProps.palette as AdmonitionProps['palette']}
    >
      {selectedProps.description}
    </Admonition>
  )
}
