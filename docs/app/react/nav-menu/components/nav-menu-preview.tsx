'use client'

import { OverflowMenuVertical } from '@cerberus-design/icons'
import {
  NavMenu,
  NavMenuLink,
  NavMenuList,
  NavMenuTrigger,
} from '@cerberus-design/react'
import { css, cx } from '@cerberus-design/styled-system/css'
import { button } from '@cerberus-design/styled-system/recipes'
import { forwardRef, type ForwardedRef, type PropsWithChildren } from 'react'

// TODO: Replace with IconButton
function IconButtonEl(
  props: PropsWithChildren,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      aria-label="More options"
      className={cx(
        css({
          pxi: '0.5',
        }),
        button({
          usage: 'text',
          shape: 'rounded',
        }),
      )}
      {...props}
      ref={ref}
    >
      <OverflowMenuVertical size={32} />
    </button>
  )
}
const IconButton = forwardRef(IconButtonEl)

export function BasicNavMenuPreview() {
  return (
    <NavMenu>
      <NavMenuTrigger controls="basic:nav">Features</NavMenuTrigger>
      <NavMenuList id="basic:nav">
        <NavMenuLink>Something</NavMenuLink>
      </NavMenuList>
    </NavMenu>
  )
}

export function CustomNavMenuPreview() {
  return (
    <NavMenu>
      <NavMenuTrigger as={IconButton} controls="basic:nav">
        Features
      </NavMenuTrigger>
      <NavMenuList id="basic:nav">
        <NavMenuLink>Something</NavMenuLink>
      </NavMenuList>
    </NavMenu>
  )
}

export function PositionNavMenuPreview() {
  return (
    <NavMenu>
      <NavMenuTrigger controls="basic:nav">Features</NavMenuTrigger>
      <NavMenuList id="basic:nav" position="right">
        <NavMenuLink>RightPosition</NavMenuLink>
      </NavMenuList>
    </NavMenu>
  )
}
