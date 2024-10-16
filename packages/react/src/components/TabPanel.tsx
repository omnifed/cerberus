'use client'

import { cx } from '@cerberus/styled-system/css'
import { useMemo, type HTMLAttributes } from 'react'
import { useTabsContext } from '../context/tabs'
import { Show } from './Show'

/**
 * This module provides a TabPanel component.
 * @module
 */

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The unique value of the Tab that is associated with the TabPanel.
   */
  tab: string
}

/**
 * The TabPanel component provides a panel element to be used in a Tabs
 * provider.
 * @see https://cerberus.digitalu.design/react/tabs
 * @memberof module:Tabs
 * @example
 * ```tsx
 * <TabPanel tab="overview">
 *   Overview content
 * </TabPanel>
 * ```
 */
export function TabPanel(props: TabPanelProps) {
  const { tab, ...nativeProps } = props
  const { active, styles } = useTabsContext()
  const isActive = useMemo(() => active === tab, [active, tab])

  return (
    <Show when={isActive}>
      <div
        {...nativeProps}
        {...(isActive && { tabIndex: 0 })}
        aria-labelledby={tab}
        className={cx(nativeProps.className, styles.tabPanel)}
        id={`panel:${tab}`}
        role="tabpanel"
      />
    </Show>
  )
}
