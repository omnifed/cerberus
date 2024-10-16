'use client'

import { tabs, type TabsVariantProps } from '@cerberus/styled-system/recipes'
import type { Pretty } from '@cerberus/styled-system/types'
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type PropsWithChildren,
} from 'react'

/**
 * This module provides a Tabs component and a hook to access its context.
 * @module Tabs
 */

export interface TabsContextValue {
  /**
   * The ref for the tabs.
   */
  tabs: MutableRefObject<HTMLButtonElement[]>
  /**
   * The id of the tabs component.
   */
  id: string
  /**
   * The active tab id.
   */
  active: string
  /**
   * The styles for the tabs.
   */
  styles: Pretty<Record<'tabList' | 'tab' | 'tabPanel', string>>
  /**
   * Called when the active tab is updated.
   */
  onTabUpdate: (active: string) => void
}

export const TabsContext = createContext<TabsContextValue | null>(null)

export interface TabsProps {
  /**
   * A unique identifier for the Tabs component. Typically used when there are
   * multiple Tabs components on the same page.
   */
  id?: string
  /**
   * The default active tab id.
   */
  active?: string
  /**
   * Whether to cache the active tab state in local storage.
   */
  cache?: boolean
}

/**
 * The Tabs component provides a context to manage tab state.
 * @see https://cerberus.digitalu.design/react/tabs
 * @example
 * ```tsx
 * <Tabs cache>
 *  <TabList description="Button details">
 *    <Tab id="overview">Overview</Tab>
 *    <Tab id="guidelines">Guidelines</Tab>
 *  </TabList>
 *  <TabPanels>
 *    <TabPanel id="overview">Overview content</TabPanel>
 *    <TabPanel id="guidelines">Guidelines content</TabPanel>
 *  </TabPanels>
 * </Tabs>
 * ```
 */
export function Tabs(
  props: PropsWithChildren<TabsProps & TabsVariantProps>,
): JSX.Element {
  const { cache, active, id, palette } = props
  const [activeTab, setActiveTab] = useState(() => (cache ? '' : active ?? ''))
  const tabsList = useRef<HTMLButtonElement[]>([])
  const uuid = useMemo(() => {
    return id ? `cerberus-tabs-${id}` : 'cerberus-tabs'
  }, [id])

  const value = useMemo(
    () => ({
      tabs: tabsList,
      id: uuid,
      active: activeTab,
      styles: tabs({ palette }),
      onTabUpdate: setActiveTab,
    }),
    [activeTab, setActiveTab, palette, uuid, tabsList],
  )

  // Get the active tab from local storage
  useEffect(() => {
    if (cache) {
      const cachedTab = window.localStorage.getItem(uuid)
      setActiveTab(
        cache ? cachedTab || (props.active ?? '') : props.active ?? '',
      )
    }
  }, [cache, active, uuid])

  // Update the active tab in local storage
  useEffect(() => {
    if (cache && activeTab) {
      window.localStorage.setItem(uuid, activeTab)
    }
  }, [activeTab, cache])

  return (
    <TabsContext.Provider value={value}>{props.children}</TabsContext.Provider>
  )
}

/**
 * Used to access the tabs context.
 * @returns The tabs context.
 */
export function useTabsContext(): TabsContextValue {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('useTabsContext must be used within a Tabs Provider.')
  }
  return context
}
