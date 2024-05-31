'use client'

import { css } from '@cerberus-design/styled-system/css'
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

export type NavTriggerRef = RefObject<HTMLButtonElement>
export type NavMenuRef = RefObject<HTMLUListElement>

export interface NavMenuContextValue {
  triggerRef: NavTriggerRef | null
  menuRef: NavMenuRef | null
  expanded: boolean
  onToggle: () => void
}

const NavMenuContext = createContext<NavMenuContextValue | null>(null)

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

export function useNavMenuContext(): NavMenuContextValue {
  const context = useContext(NavMenuContext)
  if (!context) {
    throw new Error('useNavMenuContext must be used within a NavMenu.')
  }
  return context
}
