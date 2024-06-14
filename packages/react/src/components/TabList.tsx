'use client'

import { cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { useTabsContext } from '../context/tabs'

/**
 * This module provides a TabList component.
 * @module
 */

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  description: string
}

/**
 * The TabList component provides a container for tab elements.
 * @param description - a description of what the tab list contains
 * @example
 * ```tsx
 * <TabList description="Button details">
 *  <Tab id="overview">Overview</Tab>
 *  <Tab id="guidelines">Guidelines</Tab>
 * </TabList>
 * ```
 */
export function TabList(props: PropsWithChildren<TabListProps>) {
  const { description, ...nativeProps } = props
  const { id } = useTabsContext()

  return (
    <div
      {...nativeProps}
      aria-describedby={description}
      className={cx(
        nativeProps.className,
        hstack({
          borderBottom: '1px solid',
          borderBottomColor: 'action.border.100',
          gap: '0',
          w: 'full',
        }),
      )}
      id={id ?? nativeProps.id}
    />
  )
}
