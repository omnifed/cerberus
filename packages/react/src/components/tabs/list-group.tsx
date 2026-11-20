'use client'

import { extractParts } from '../../internal/extract-parts'
import { TabsIndicator, TabsList, type TabsListProps } from './primitives'

const PARTS = {
  indicator: TabsIndicator,
}

export type TabsListGroupProps = TabsListProps

/**
 * The ListGroup component is an abstraction of the `Tabs.List` primitive
 * that renders the active tab indicator after its triggers. A direct
 * `Tabs.Indicator` child overrides the indicator's props.
 * @description [Cerberus Docs] https://cerberus.digitalu.design/docs/components/tabs
 * @description [Ark Docs] https://ark-ui.com/docs/components/tabs
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="overview">
 *   <Tabs.ListGroup>
 *     <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
 *     <Tabs.Trigger value="features">Features</Tabs.Trigger>
 *   </Tabs.ListGroup>
 *   <Tabs.Content value="overview">Overview content</Tabs.Content>
 *   <Tabs.Content value="features">Features content</Tabs.Content>
 * </Tabs.Root>
 * ```
 */
export function TabsListGroup(props: TabsListGroupProps) {
  const { children, ...listProps } = props
  const { parts, content } = extractParts(children, PARTS)

  return (
    <TabsList {...listProps}>
      {content}
      <TabsIndicator {...parts.indicator} />
    </TabsList>
  )
}
