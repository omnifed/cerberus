'use client'

import { useMemo, type ButtonHTMLAttributes, type MouseEvent } from 'react'
import { useTabsContext } from '../context/tabs'
import { css, cx } from '@cerberus/styled-system/css'

/**
 * This module provides a Tab component.
 * @module
 */

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  controls: string
  value: string
}

/**
 * The Tab component provides a tab element to be used in a TabList.
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [Tab docs](https://cerberus.digitalu.design/react/tabs)
 * @param id - the id of the tab (used for aria-labelledby in the panel)
 * @param controls - the id of the tab panel that the tab controls
 * @param value - the id of the tab that will be tracked as the active tab
 * @example
 * ```tsx
 * <Tab controls="panel:overview" value="overview">
 *  Overview
 * </Tab>
 * ```
 */
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
      className={cx(nativeProps.className, btnStyles)}
      onClick={handleClick}
      role="tab"
      value={value}
    />
  )
}

const btnStyles = css({
  fontSize: 'sm',
  fontWeight: '600',
  h: '2.75rem',
  position: 'relative',
  pxi: '4',
  transition: 'all 200ms ease-in-out',
  zIndex: 'base',
  _before: {
    bgColor: 'action.border.initial',
    bottom: '0',
    content: '""',
    h: '0',
    position: 'absolute',
    left: '0',
    right: '0',
    transitionProperty: 'height',
    transitionDuration: '200ms',
    transitionTimingFunction: 'ease-in-out',
    w: 'full',
    willChange: 'height',
    zIndex: 'decorator',
  },
  _after: {
    borderTopLeftRadius: 'md',
    borderTopRightRadius: 'md',
    bottom: '0',
    bgColor: 'neutral.surface.100',
    content: '""',
    left: '0',
    position: 'absolute',
    right: '0',
    h: '0',
    transition: 'all 200ms ease-in-out',
    willChange: 'height',
    w: 'full',
    zIndex: '-1',
  },
  _hover: {
    _after: {
      h: 'full',
    },
  },
  _focusVisible: {
    boxShadow: 'none',
    outline: '3px solid',
    outlineColor: 'action.border.focus',
    outlineOffset: '2px',
  },
  _disabled: {
    cursor: 'not-allowed',
    opacity: '0.5',
  },
  _selected: {
    color: 'action.text.200',
    _before: {
      h: '3px',
    },
    _hover: {
      _after: {
        h: '0',
      },
    },
  },
})
