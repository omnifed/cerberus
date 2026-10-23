'use client'

import { type ButtonHTMLAttributes } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton, type IconButtonProps } from '../icon-button'
import { FilledTag, FilledTagProps } from './primitives'

export interface ClosableTagProps extends Omit<FilledTagProps, 'onClick'> {
  gradient?: never
  /**
   * The action to be performed when the close button is clicked.
   */
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

export function ClosableTag(props: ClosableTagProps) {
  const { onClick, children, ...tagProps } = props

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
      {children}

      <IconButton
        ariaLabel="Close tag"
        onClick={onClick}
        palette={palette as IconButtonProps['palette']}
        usage="filled"
        size="sm"
      >
        <Close />
      </IconButton>
    </FilledTag>
  )
}
