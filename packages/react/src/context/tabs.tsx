'use client'

import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { tabs, type TabsVariantProps } from '@cerberus/styled-system/recipes'
import type { Pretty } from '@cerberus/styled-system/types'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

/**
 * This module provides a Tabs component and a hook to access its context.
 * @module Tabs
 */

export interface TabsContextValue {
  /**
   * The styles for the tabs.
   */
  styles: {
    list: Pretty<string>
    trigger: Pretty<string>
    content: Pretty<string>
    indicator: Pretty<string>
  }
}

export const TabsContext = createContext<TabsContextValue | null>(null)

export interface TabsProviderBaseProps extends ArkTabs.RootProps {
  /**
   * A unique identifier for the Tabs component. Typically used when there are
   * multiple Tabs components on the same page and you want to uniquely cache
   * the active tab state.
   */
  uuid?: string
  /**
   * The default tab to display when the component is first rendered.
   */
  defaultValue?: string
  /**
   * Whether to cache the active tab state in local storage.
   */
  cache?: boolean
}

export type TabsProviderProps = TabsProviderBaseProps & TabsVariantProps

/**
 * The Tabs component provides a context to manage tab state.
 * @definition [Tabs docs](https://cerberus.digitalu.design/react/tabs)
 * @example
 * ```tsx
 * <Tabs cache>
 *  <TabsList>
 *    <Tab value="overview">Overview</Tab>
 *    <Tab value="guidelines">Guidelines</Tab>
 *  </TabsList>
 *  <TabPanel value="overview">Overview content</TabPanel>
 *  <TabPanel value="guidelines">Guidelines content</TabPanel>
 * </Tabs>
 * ```
 */
export function Tabs(props: PropsWithChildren<TabsProviderProps>): JSX.Element {
  const { cache, defaultValue, palette, uuid, ...arkProps } = props
  const [activeTab, setActiveTab] = useState<string | undefined>(() =>
    cache ? '' : defaultValue,
  )
  const styles = tabs({ palette })

  const cacheKey = useMemo(
    () => (uuid ? `cerberus-tabs-${uuid}` : 'cerberus-tabs'),
    [uuid],
  )

  const handleValueChange = useCallback(
    (details: { value: string }) => {
      if (cache) {
        setLocalStorage(cacheKey, details.value)
      }
      setActiveTab(details.value)
    },
    [cache],
  )

  useEffect(() => {
    if (cache && !activeTab) {
      const cachedTab = getLocalStorage(cacheKey, defaultValue ?? '')
      setActiveTab(cachedTab)
    }
  }, [cache, defaultValue, activeTab])

  const value = useMemo(
    () => ({
      active: activeTab,
      styles,
    }),
    [activeTab, palette, styles],
  )

  return (
    <TabsContext.Provider value={value}>
      <ArkTabs.Root
        {...arkProps}
        aria-busy={!activeTab}
        className={styles.root}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        value={activeTab}
      >
        {props.children}
      </ArkTabs.Root>
    </TabsContext.Provider>
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
