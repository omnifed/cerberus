import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { cx } from '@cerberus/styled-system/css'
import { tabs, type TabsVariantProps } from '@cerberus/styled-system/recipes'

/**
 * This module provides the Tabs family.
 * @module
 */

export type TabProps = ArkTabs.TriggerProps & TabsVariantProps

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
export function Tab(props: TabProps) {
  const { palette, ...triggerProps } = props
  const styles = tabs({ palette })

  return (
    <ArkTabs.Trigger
      {...triggerProps}
      className={cx(triggerProps.className, styles.trigger)}
    />
  )
}

export type TabIndicatorProps = ArkTabs.IndicatorProps & TabsVariantProps

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
export function TabIndicator(props: TabIndicatorProps) {
  const { palette, ...indicatorProps } = props
  const styles = tabs({ palette })

  return (
    <ArkTabs.Indicator
      {...indicatorProps}
      className={cx(indicatorProps.className, styles.indicator)}
    />
  )
}

export type TabPanelProps = ArkTabs.ContentProps & TabsVariantProps

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
export function TabPanel(props: TabPanelProps) {
  const { palette, ...contentProps } = props
  const styles = tabs({ palette })

  return (
    <ArkTabs.Content
      {...contentProps}
      className={cx(contentProps.className, styles.content)}
    />
  )
}
