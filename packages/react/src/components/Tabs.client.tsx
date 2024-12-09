'use client'

import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { cx } from '@cerberus/styled-system/css'
import { tabs, type TabsVariantProps } from '@cerberus/styled-system/recipes'
import { TabIndicator } from './Tabs.server'

/**
 * This module provides the Tabs family.
 * @module
 */

/**
 * The root context for the Tabs family.
 * @definition [Tabs docs](https://cerberus.digitalu.design/react/tabs)
 * @example
 * ```tsx
 * <Tabs>
 *   <TabList description="Profile settings">
 *     <Tab value="overview">Overview</Tab>
 *     <TabsIndicator />
 *  </TabList>
 *  <TabPanel tab="overview">...</TabPanel>
 * </Tabs>
 * ```
 */
export const Tabs = ArkTabs.Root

export type TabsListProps = ArkTabs.ListProps & TabsVariantProps

/**
 * The tab list container for the Tabs group.
 * @definition [Tabs docs](https://cerberus.digitalu.design/react/tabs)
 * @example
 * ```tsx
 * <Tabs>
 *   <TabList description="Profile settings">
 *     <Tab value="overview">Overview</Tab>
 *  </TabList>
 *  <TabPanel tab="overview">...</TabPanel>
 * </Tabs>
 * ```
 */
export function TabsList(props: TabsListProps) {
  const { palette, children, ...tabsProps } = props
  const styles = tabs({ palette })

  return (
    <ArkTabs.List
      {...tabsProps}
      className={cx(tabsProps.className, styles.list)}
    >
      {children}
      <TabIndicator />
    </ArkTabs.List>
  )
}

/**
 * @deprecated Use `TabsList` instead.
 */
export const TabList = TabsList
