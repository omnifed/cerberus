'use client'

import { useMemo, type ButtonHTMLAttributes, type MouseEvent } from 'react'
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
  const isActive = useMemo(() => active === value, [active, value])

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    props.onClick?.(e)
    onTabUpdate(e.currentTarget.value)
  }

  return (
    <button
      {...nativeProps}
      {...(!isActive && { tabIndex: -1 })}
      aria-controls={controls}
      aria-selected={isActive}
      className={cx(nativeProps.className, css())}
      onClick={handleClick}
      role="tab"
      value={value}
    />
  )
}
