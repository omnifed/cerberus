'use client'

import { type ButtonHTMLAttributes } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton, type IconButtonProps } from '../icon-button'
import { TagRoot, TagRootProps } from './primitives'

export interface ClosableTagProps extends TagRootProps {
  /**
   * The action to be performed when the close button is clicked.
   */
  onClick: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

export function ClosableTag(props: ClosableTagProps) {
  const { onClick, children, ...rootProps } = props

  const { icons } = useCerberusContext()
  const { close: Close } = icons

  const palette =
    rootProps.palette === 'page'
      ? 'secondaryAction'
      : (rootProps.palette ?? 'secondaryAction')

  return (
    <TagRoot
      data-palette={palette}
      palette={palette}
      shape="pill"
      pe="0"
      {...rootProps}
    >
      {children}

      <IconButton
        ariaLabel="Close"
        onClick={onClick}
        palette={palette as IconButtonProps['palette']}
        usage="filled"
        size="sm"
      >
        <Close />
      </IconButton>
    </TagRoot>
  )
}
