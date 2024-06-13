'use client'

import {
  createContext,
  useContext,
  useEffect,
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
export function Tabs(props: PropsWithChildren<TabsProps>): JSX.Element {
  const { cache } = props
  const [active, setActive] = useState(() => (cache ? '' : props.active ?? ''))

  const value = useMemo(
    () => ({
      active,
      onTabUpdate: setActive,
    }),
    [active, setActive],
  )

  useEffect(() => {
    const cachedTab = window.localStorage.getItem('cerberus-tabs')
    if (cache && cachedTab) {
      setActive(cachedTab)
    }
  }, [cache])

  useEffect(() => {
    if (cache) {
      window.localStorage.setItem('cerberus-tabs', active)
    }
  }, [active, cache])

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
