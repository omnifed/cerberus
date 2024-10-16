'use client'

import { css } from '@cerberus/styled-system/css'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
  type RefObject,
} from 'react'

/**
 * This module provides a context and hook for the nav menu.
 * @module NavMenu
 */

export type NavTriggerRef = RefObject<HTMLButtonElement>
export type NavMenuRef = RefObject<HTMLUListElement>

export interface NavMenuContextValue {
  /**
   * The ref for the trigger button.
   */
  triggerRef: NavTriggerRef | null
  /**
   * The ref for the menu.
   */
  menuRef: NavMenuRef | null
  /**
   * Whether the menu is expanded.
   */
  expanded: boolean
  /**
   * Called when the menu button is clicked.
   */
  onToggle: () => void
}

const NavMenuContext = createContext<NavMenuContextValue | null>(null)

/**
 * Provides the nav menu state for all the NavMenu family components.
 * @see https://cerberus.digitalu.design/react/nav-menu
 */
export function NavMenu(props: PropsWithChildren): JSX.Element {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const [expanded, setExpanded] = useState<boolean>(false)

  const handleToggle = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  const value = useMemo(
    () => ({
      triggerRef,
      menuRef,
      expanded,
      onToggle: handleToggle,
    }),
    [expanded, handleToggle],
  )

  return (
    <NavMenuContext.Provider value={value}>
      <nav
        className={css({
          position: 'relative',
        })}
      >
        {props.children}
      </nav>
    </NavMenuContext.Provider>
  )
}

/**
 * Used to access the nav menu context.
 * @returns The nav menu context.
 */
export function useNavMenuContext(): NavMenuContextValue {
  const context = useContext(NavMenuContext)
  if (!context) {
    throw new Error('useNavMenuContext must be used within a NavMenu.')
  }
  return context
}
