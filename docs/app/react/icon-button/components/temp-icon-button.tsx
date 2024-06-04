'use client'

import { OverflowMenuVertical } from '@cerberus-design/icons'
import type { ButtonProps } from '@cerberus-design/react'
import { cx } from '@cerberus/styled-system/css'
import { iconButton } from '@cerberus/styled-system/recipes'
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'

// TODO: Replace with IconButton
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
function IconButtonEl(
  props: PropsWithChildren<IconButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      aria-label="More options"
      className={cx(
        props.className,
        iconButton({
          palette: props.palette,
          usage: props.usage,
        }),
      )}
      {...props}
      ref={ref}
    >
      {props.children ?? <OverflowMenuVertical size={32} />}
    </button>
  )
}
export const IconButton = forwardRef(IconButtonEl)
