import type {
  TabContentProps,
  TabListProps,
  TabTriggerProps,
} from '@ark-ui/solid/tabs'
import { type JSX } from 'solid-js'
import { TabsParts, type TabsPartsValue } from './parts'
import type { WithCss } from '../types'

/**
 * This module contains an abstraction of the Tabs family.
 * @module 'tabs'
 */

interface TabsValueProps
  extends Omit<TabsPartsValue, 'Trigger' | 'Content' | 'Indicator'> {
  /**
   * A named component for the TabsTrigger.
   */
  Tab: (props: TabTriggerProps & WithCss) => JSX.Element
  /**
   * A named component for the TabsContent.
   */
  Panel: (props: TabContentProps & WithCss) => JSX.Element
}

/**
 * An abstraction of the TabsList component that includes the TabIndicator.
 */
function TabsList(props: TabListProps & WithCss) {
  return (
    <TabsParts.List {...props}>
      {props.children}
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
