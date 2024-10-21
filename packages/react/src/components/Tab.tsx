'use client'

import {
  useMemo,
  useTransition,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from 'react'
import { useTabsContext } from '../context/tabs'
import { cx } from '@cerberus/styled-system/css'
import { useTabsKeyboardNavigation } from '../aria-helpers/tabs.aria'

/**
 * This module provides a Tab component.
 * @module
 */

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The id of the tab that will be tracked as the active tab and used for aria
   * attributes.
   */
  value: string
}

/**
 * The Tab component provides a tab element to be used in a TabList.
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @see https://cerberus.digitalu.design/react/tabs
 * @memberof module:Tabs
 * @example
 * ```tsx
 * <Tabs>
 *  <TabList description="Profile settings">
 *   <Tab value="overview">Overview</Tab>
 *  </TabList>
 *  <TabPanel tab="overview">...</TabPanel>
 * </Tabs>
 * ```
 */
export function Tab(props: TabProps) {
  const { value, ...nativeProps } = props
  const { active, onTabUpdate, styles } = useTabsContext()
  const [isPending, startTransition] = useTransition()
  const { ref } = useTabsKeyboardNavigation()
  const isActive = useMemo(() => active === value, [active, value])

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    props.onClick?.(e)
    startTransition(() => onTabUpdate(e.currentTarget.value))
  }

  return (
    <button
      {...nativeProps}
      {...(!isActive && { tabIndex: -1 })}
      aria-controls={`panel:${value}`}
      aria-busy={isPending}
      aria-selected={isActive}
      id={`tab:${value}`}
      className={cx(nativeProps.className, styles.tab)}
      onClick={handleClick}
      role="tab"
      ref={ref}
      value={value}
    />
  )
}
