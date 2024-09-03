'use client'

import CodeBuilder from '@/app/components/code-builder/code-builder'
import { builder } from '@/app/components/code-builder/helpers'
import { useCodeBuilder } from '@/app/context/code-builder'
import { ThumbsUp } from '@cerberus-design/icons'
import { IconButton } from '@cerberus-design/react'

const fallbackAria = 'Like something'

const api = {
  palette: builder.Enum('palette', ['action', 'secondaryAction', 'danger']),
  usage: builder.Enum('usage', ['filled', 'outlined', 'text']),
  size: builder.Enum('size', ['sm', 'lg']),
  tooltipPosition: builder.Enum('tooltipPosition', [
    'top',
    'right',
    'bottom',
    'left',
  ]),
  ariaLabel: builder.Text('ariaLabel', fallbackAria),
  text: builder.Text('name', 'Button'),
  disabled: builder.Boolean('disabled', false),
}

export function LivePlayground() {
  return (
    <CodeBuilder api={api}>
      <IconButtonPreview />
    </CodeBuilder>
  )
}

export function LivePlaygroundWithCode() {
  return (
    <CodeBuilder
      api={api}
      code={`import { IconButton, type IconButtonProps } from '@cerberus-design/react'

type MyIconButtonProps = IconButtonProps

export function MyButton(props: MyIconButtonProps) {
  return (
    <IconButton
      ariaLabel={{ariaLabel}}
      disabled={{disabled}}
      palette={{palette}}
      tooltipPosition={{tooltipPosition}}
      size={{size}}
      usage={{usage}}
    >
      <ThumbsUp />
    </IconButton>
  )
}`}
    >
      <IconButtonPreview />
    </CodeBuilder>
  )
}

export function IconButtonPreview() {
  const { selectedProps } = useCodeBuilder()
  const aria = selectedProps.ariaLabel as string
  switch (selectedProps.palette) {
    case 'secondaryAction':
      return (
        <IconButton
          ariaLabel={aria ?? fallbackAria}
          palette="secondaryAction"
          {...selectedProps}
        >
          <ThumbsUp />
        </IconButton>
      )
    case 'danger':
      return (
        <IconButton
          ariaLabel={aria ?? fallbackAria}
          palette="danger"
          {...selectedProps}
        >
          <ThumbsUp />
        </IconButton>
      )

    default:
      return (
        <IconButton ariaLabel={aria ?? fallbackAria} {...selectedProps}>
          <ThumbsUp />
        </IconButton>
      )
  }
}
