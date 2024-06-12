'use client'

import type { ButtonHTMLAttributes, MouseEvent } from 'react'
import { useTabsContext } from '../context/tabs'
import { css, cx } from '@cerberus/styled-system/css'

/**
 * This module provides a Tab component.
 * @module
 */

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  controls: string
  value: string
}

export function Tab(props: TabProps) {
  const { controls, value, ...nativeProps } = props
  const { active, onTabUpdate } = useTabsContext()

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    props.onClick?.(e)
    onTabUpdate(e.currentTarget.value)
  }

  return (
    <button
      {...nativeProps}
      aria-controls={controls}
      aria-selected={active === value}
      className={cx(nativeProps.className, css())}
      onClick={handleClick}
      role="tab"
      value={value}
    />
  )
}
