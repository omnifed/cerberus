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
  /**
   * A description of what the tab list contains. Required for accessibility.
   */
  description: string
}

/**
 * The TabList component provides a container for tab elements.
 * @see https://cerberus.digitalu.design/react/tabs
 * @memberof module:Tabs
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
  const { id, styles } = useTabsContext()

  return (
    <div
      {...nativeProps}
      aria-label={description}
      className={cx(
        nativeProps.className,
        hstack({
          gap: '0',
        }),
        styles.tabList,
      )}
      id={id ?? nativeProps.id}
      role="tablist"
    />
  )
}
