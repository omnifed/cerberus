'use client'

import { type ButtonHTMLAttributes } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton, type IconButtonProps } from '../icon-button'
import { FilledTag, FilledTagProps } from './primitives'
import { Show } from '../show/show'
import { Box } from 'styled-system/jsx'

export interface ClosableTagProps extends Omit<FilledTagProps, 'onClick'> {
  gradient?: never
  /**
   * The action to be performed when the close button is clicked.
   */
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  /**
   * Displays a skeleton over the label when marked true
   */
  pending?: boolean
}

export function ClosableTag(props: ClosableTagProps) {
  const { onClick, children, pending, ...tagProps } = props

  const { icons } = useCerberusContext()
  const { close: Close } = icons

  const palette =
    tagProps.palette === 'page'
      ? 'secondaryAction'
      : (tagProps.palette ?? 'secondaryAction')

  return (
    <FilledTag
      data-palette={palette}
      palette={palette}
      shape="pill"
      pe="0"
      {...tagProps}
    >
      <Show when={pending} fallback={children}>
        <Box aria-busy bgColor="secondaryAction.bg.hover" rounded="xs">
          {children}
        </Box>
      </Show>

      <IconButton
        ariaLabel="Close tag"
        disabled={pending}
        onClick={onClick}
        palette={palette as IconButtonProps['palette']}
        usage="filled"
        size="xs"
      >
        <Close />
      </IconButton>
    </FilledTag>
  )
}
