'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

/**
 * This module provides a Tabs component and a hook to access its context.
 * @module
 */

export interface TabsContextValue {
  active: string
  cache?: boolean
  onTabUpdate: (active: string) => void
}

const TabsContext = createContext<TabsContextValue | null>(null)

export interface TabsProps {
  active?: string
  cache?: boolean
}

/**
 * The Tabs component provides a context to manage tab state.
 * @param active - the default active tab id,
 * @param cache - whether to cache the active tab state
 * @example
 * ```tsx
 * <Tabs cache>
 *  <TabList>
 *    <Tab id="tab1">Tab 1</Tab>
 *    <Tab id="tab2">Tab 2</Tab>
 *  </TabList>
 *  <TabPanels>
 *    <TabPanel id="tab1">Panel 1</TabPanel>
 *    <TabPanel id="tab2">Panel 2</TabPanel>
 *  </TabPanels>
 * </Tabs>
 * ```
 */
export function Tabs(props: PropsWithChildren<TabsProps>): JSX.Element {
  const [active, setActive] = useState(() => props.active ?? '')

  const value = useMemo(
    () => ({
      active,
      cache: props.cache,
      onTabUpdate: setActive,
    }),
    [active, props.cache],
  )

  return (
    <TabsContext.Provider value={value}>{props.children}</TabsContext.Provider>
  )
}

export function useTabsContext(): TabsContextValue {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('useTabsContext must be used within a Tabs Provider.')
  }
  return context
}
