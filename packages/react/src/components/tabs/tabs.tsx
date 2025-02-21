import type { TabListProps } from '@ark-ui/react/tabs'
import { TabsParts, type TabsPartsValue } from './parts'
import type { ElementType } from 'react'

/**
 * This module contains an abstraction of the Tabs family.
 * @module 'tabs'
 */

interface TabsValueProps
  extends Omit<TabsPartsValue, 'Trigger' | 'Content' | 'Indicator'> {
  /**
   * A named component for the TabsTrigger.
   */
  Tab: ElementType
  /**
   * A named component for the TabsContent.
   */
  Panel: ElementType
}

/**
 * An abstraction of the TabsList component that includes the TabIndicator.
 */
function TabsList(props: TabListProps) {
  const { children, ...listProps } = props
  return (
    <TabsParts.List {...listProps}>
      {children}
      <TabsParts.Indicator />
    </TabsParts.List>
  )
}

/**
 * An Object containing the abstracted parts of the Tabs component.
 *
 * @remarks
 *
 * When using object component syntax, you import the TabsParts object and
 * the entire family of components vs. only what you use.
 */
export const Tabs: TabsValueProps = {
  Root: TabsParts.Root,
  List: TabsList,
  Tab: TabsParts.Trigger,
  Panel: TabsParts.Content,
}
