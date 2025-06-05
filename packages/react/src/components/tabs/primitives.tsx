import {
  Tabs,
  type TabContentProps as ArkTabContentProps,
  type TabIndicatorProps as ArkTabIndicatorProps,
  type TabListProps as ArkTabListProps,
  type TabsRootProps as ArkTabsRootProps,
  type TabTriggerProps as ArkTabTriggerProps,
} from '@ark-ui/react/tabs'
import { tabs, type TabsVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module provides the primitives for the Tabs component.
 * @module 'tabs/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(tabs)

// Root

export type TabsRootProps = CerberusPrimitiveProps<
  ArkTabsRootProps & TabsVariantProps
>
// @ts-expect-error this is a workaround for the type issue WIP
export const TabsRoot = withSlotRecipe<TabsRootProps>(Tabs.Root, 'root')

// TabsList

export type TabsListProps = CerberusPrimitiveProps<ArkTabListProps>
export const TabsList = withSlotRecipe<TabsListProps>(Tabs.List, 'list')

// TabsTrigger

export type TabsTriggerProps = CerberusPrimitiveProps<ArkTabTriggerProps>
export const TabsTrigger = withSlotRecipe<TabsTriggerProps>(
  Tabs.Trigger,
  'trigger',
)

// TabsContent

export type TabContentProps = CerberusPrimitiveProps<ArkTabContentProps>
export const TabsContent = withSlotRecipe<TabContentProps>(
  Tabs.Content,
  'content',
)

// TabsIndicator

export type TabIndicatorProps = CerberusPrimitiveProps<ArkTabIndicatorProps>
export const TabsIndicator = withSlotRecipe<TabIndicatorProps>(
  Tabs.Indicator,
  'indicator',
)
