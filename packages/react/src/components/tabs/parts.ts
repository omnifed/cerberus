import type { ElementType } from 'react'
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
  Root: ElementType
  /**
   * The tab list element.
   */
  List: ElementType
  /**
   * The tab element.
   */
  Trigger: ElementType
  /**
   * The tab content element.
   */
  Content: ElementType
  /**
   * The tab indicator element.
   */
  Indicator: ElementType
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
