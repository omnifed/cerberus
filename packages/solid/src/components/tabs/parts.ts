import type { JSX } from 'solid-js'
import type {
  TabContentProps,
  TabIndicatorProps,
  TabListProps,
  TabsRootProps,
  TabTriggerProps,
} from '@ark-ui/solid/tabs'
import type { TabsVariantProps } from 'styled-system/recipes'
import type { WithCss } from '../types'
import {
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from './primitives'

/**
 * This module contains the parts of the Tabs parts.
 * @module 'tabs/parts'
 */

export interface TabsPartsValue {
  /**
   * The container of the tabs.
   */
  Root: (props: TabsRootProps & TabsVariantProps & WithCss) => JSX.Element
  /**
   * The tab list element.
   */
  List: (props: TabListProps & WithCss) => JSX.Element
  /**
   * The tab element.
   */
  Trigger: (props: TabTriggerProps & WithCss) => JSX.Element
  /**
   * The tab content element.
   */
  Content: (props: TabContentProps & WithCss) => JSX.Element
  /**
   * The tab indicator element.
   */
  Indicator: (props: TabIndicatorProps & WithCss) => JSX.Element
}

/**
 * An Object containing the parts of the Switch component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the TabsParts object and
 * the entire family of components vs. only what you use.
 */
export const TabsParts: TabsPartsValue = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Indicator: TabsIndicator,
}
