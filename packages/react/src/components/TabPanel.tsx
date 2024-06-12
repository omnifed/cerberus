'use client'

import { css, cx } from '@cerberus/styled-system/css'
import { useMemo, type HTMLAttributes } from 'react'
import { useTabsContext } from '../context/tabs'
import { Show } from './Show'

/**
 * This module provides a TabPanel component.
 * @module
 */

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  tab: string
}

/**
 * The TabPanel component provides a panel element to be used in a Tabs provider.
 * @param id - the id of the tab panel which is used for the Tab's control prop
 * @param tab - the id of the tab that will be tracked as the active tab
 * @example
 * ```tsx
 * <TabPanel id="panel:overview" tab="overview">
 *   Overview content
 * </TabPanel>
 * ```
 */
export function TabPanel(props: TabPanelProps) {
  const { tab, ...nativeProps } = props
  const { active } = useTabsContext()
  const isActive = useMemo(() => active === tab, [active, tab])

  return (
    <Show when={isActive}>
      <div
        {...nativeProps}
        {...(isActive && { tabIndex: 0 })}
        aria-labelledby={tab}
        className={cx(nativeProps.className, css())}
        role="tabpanel"
      />
    </Show>
  )
}
