'use client'

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
 * @module
 */

export interface TabsContextValue {
  tabs: MutableRefObject<HTMLButtonElement[]>
  id: string
  active: string
  onTabUpdate: (active: string) => void
}

export const TabsContext = createContext<TabsContextValue | null>(null)

export interface TabsProps {
  id?: string
  active?: string
  cache?: boolean
}

/**
 * The Tabs component provides a context to manage tab state.
 * @param active - the default active tab id,
 * @param cache - whether to cache the active tab state in local storage
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
  const { cache, active, id } = props
  const [activeTab, setActiveTab] = useState(() => (cache ? '' : active ?? ''))
  const tabs = useRef<HTMLButtonElement[]>([])
  const uuid = useMemo(() => {
    return id ? `cerberus-tabs-${id}` : 'cerberus-tabs'
  }, [id])

  const value = useMemo(
    () => ({
      tabs,
      id: uuid,
      active: activeTab,
      onTabUpdate: setActiveTab,
    }),
    [activeTab, setActiveTab, uuid, tabs],
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

export function useTabsContext(): TabsContextValue {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('useTabsContext must be used within a Tabs Provider.')
  }
  return context
}
