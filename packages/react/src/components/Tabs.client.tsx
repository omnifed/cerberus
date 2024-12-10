'use client'

import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { cx } from '@cerberus/styled-system/css'
import { useTabsContext } from '../context/tabs'

/**
 * This module provides the Tabs family.
 * @module
 */

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
export function TabsList(props: ArkTabs.ListProps) {
  const { children, ...tabsProps } = props
  const { styles } = useTabsContext()

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

/**
 * The trigger for the Tabs group.
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
export function Tab(props: ArkTabs.TriggerProps) {
  const { styles } = useTabsContext()
  return (
    <ArkTabs.Trigger
      {...props}
      className={cx(props.className, styles.trigger)}
    />
  )
}

/**
 * The indicator for the Tabs group which shows the active tab.
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
export function TabIndicator(props: ArkTabs.IndicatorProps) {
  const { styles } = useTabsContext()
  return (
    <ArkTabs.Indicator
      {...props}
      className={cx(props.className, styles.indicator)}
    />
  )
}

/**
 * The content for the Tabs group.
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
export function TabPanel(props: ArkTabs.ContentProps) {
  const { styles } = useTabsContext()
  return (
    <ArkTabs.Content
      {...props}
      className={cx(props.className, styles.content)}
    />
  )
}
