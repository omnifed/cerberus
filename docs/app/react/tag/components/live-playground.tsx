'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { gradientValues } from '@cerberus-design/panda-preset'
import {
  Tag,
  type ClickableTagProps,
  type TagProps,
} from '@cerberus-design/react'
import MatchGradientTag from './match-gradient-tag'
import { useCallback } from 'react'

const api = {
  palette: builder.Enum('palette', [
    'page',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  gradient: builder.Enum('gradient', ['none', ...gradientValues]),
  usage: builder.Enum('usage', ['filled', 'outlined']),
  shape: builder.Enum('shape', ['square', 'pill']),
  text: builder.Text('name', 'Text'),
  closable: builder.Boolean('onClick', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <TagPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { Tag, type TagProps, Show } from '@cerberus/react'

// "none" is not a valid gradient value. We just use it for the playground.

export function MyTag(props: TagProps) {
  return (
    <Show when={Boolean(props.onClick)} fallback={
      <Tag
        gradient={{gradient}}
        palette={{palette}}
        shape={{shape}}
        usage={{usage}}
      >
        {props.children}
      </Tag>
    }>
      <Tag onClick={props.onClick}>
        {props.children}
      </Tag>
    </Show>
  )
}`}
    >
      <TagPreview />
    </CodeBuilder>
  )
}

export function TagPreview() {
  const { selectedProps } = useCodeBuilder()
  const { palette, gradient, closable, ...tagProps } = selectedProps

  const handleClick = useCallback(() => {
    alert('Tag clicked')
  }, [])

  if (closable) {
    return (
      <Tag
        shape={selectedProps.shape as ClickableTagProps['shape']}
        usage="filled"
        onClick={handleClick as ClickableTagProps['onClick']}
      >
        {selectedProps.text || 'Add Text'}
      </Tag>
    )
  }

  if (selectedProps.gradient !== 'none') {
    return (
      <MatchGradientTag
        {...tagProps}
        gradient={gradient as TagProps['gradient']}
      >
        {selectedProps.text || 'Add Text'}
      </MatchGradientTag>
    )
  }

  return (
    <Tag {...tagProps} palette={palette as TagProps['palette']}>
      {selectedProps.text || 'Add Text'}
    </Tag>
  )
}
