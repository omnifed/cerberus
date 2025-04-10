import {
  Tabs,
  type TabContentProps,
  type TabIndicatorProps,
  type TabListProps,
  type TabsRootProps,
  type TabTriggerProps,
} from '@ark-ui/solid/tabs'
import { splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { tabs, type TabsVariantProps } from 'styled-system/recipes'
import type { WithCss } from '../types'

/**
 * This module provides the primitives for the Tabs component.
 * @module 'tabs/primitives'
 */

/**
 * The container and context provider of the tabs.
 */
export function TabsRoot(props: TabsRootProps & TabsVariantProps & WithCss) {
  const [{ palette, css: customCss }, rootProps] = splitProps(props, [
    'palette',
    'css',
  ])
  const styles = tabs({ palette })
  return (
    <Tabs.Root
      {...rootProps}
      class={cx(styles.root, css(customCss), rootProps.class)}
    />
  )
}

/**
 * The tab list container for the Tabs group.
 */
export function TabsList(props: TabListProps & WithCss) {
  const [customStyles, listProps] = splitProps(props, ['css'])
  const styles = tabs()
  return (
    <Tabs.List
      {...listProps}
      class={cx(styles.list, css(customStyles.css), props.class)}
    />
  )
}

/**
 * The tab element.
 */
export function TabsTrigger(props: TabTriggerProps & WithCss) {
  const [customStyles, triggerProps] = splitProps(props, ['css'])
  const styles = tabs()
  return (
    <Tabs.Trigger
      {...triggerProps}
      class={cx(styles.trigger, css(customStyles.css), props.class)}
    />
  )
}

/**
 * The tab content element.
 */
export function TabsContent(props: TabContentProps & WithCss) {
  const [customStyles, contentProps] = splitProps(props, ['css'])
  const styles = tabs()
  return (
    <Tabs.Content
      {...contentProps}
      class={cx(styles.content, css(customStyles.css), props.class)}
    />
  )
}

/**
 * The tab indicator element.
 */
export function TabsIndicator(props: TabIndicatorProps & WithCss) {
  const [customStyles, indicatorProps] = splitProps(props, ['css'])
  const styles = tabs()
  return (
    <Tabs.Indicator
      {...indicatorProps}
      class={cx(styles.indicator, css(customStyles), props.class)}
    />
  )
}
