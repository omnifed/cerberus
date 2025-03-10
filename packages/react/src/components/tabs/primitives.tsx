import {
  Tabs,
  type TabContentProps,
  type TabIndicatorProps,
  type TabListProps,
  type TabsRootProps,
  type TabTriggerProps,
} from '@ark-ui/react/tabs'
import { cx } from 'styled-system/css'
import { tabs, type TabsVariantProps } from 'styled-system/recipes'

/**
 * This module provides the primitives for the Tabs component.
 * @module 'tabs/primitives'
 */

/**
 * The container and context provider of the tabs.
 */
export function TabsRoot(props: TabsRootProps & TabsVariantProps) {
  const { palette, ...rootProps } = props
  const styles = tabs({ palette })
  return (
    <Tabs.Root
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
    />
  )
}

/**
 * The tab list container for the Tabs group.
 */
export function TabsList(props: TabListProps) {
  const styles = tabs()
  return <Tabs.List {...props} className={cx(styles.list, props.className)} />
}

/**
 * The tab element.
 */
export function TabsTrigger(props: TabTriggerProps) {
  const styles = tabs()
  return (
    <Tabs.Trigger {...props} className={cx(styles.trigger, props.className)} />
  )
}

/**
 * The tab content element.
 */
export function TabsContent(props: TabContentProps) {
  const styles = tabs()
  return (
    <Tabs.Content {...props} className={cx(styles.content, props.className)} />
  )
}

/**
 * The tab indicator element.
 */
export function TabsIndicator(props: TabIndicatorProps) {
  const styles = tabs()
  return (
    <Tabs.Indicator
      {...props}
      className={cx(styles.indicator, props.className)}
    />
  )
}
