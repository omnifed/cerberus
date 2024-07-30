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
  tab: string
}

/**
 * The TabPanel component provides a panel element to be used in a Tabs provider.
 * @param tab - the value of the tab that will be tracked as the active tab and used for aria attributes
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
