'use client'

import {
  createContext,
  useContext,
  useMemo,
  useRef,
  type PropsWithChildren,
  type RefObject,
} from 'react'

export type NavTriggerRef = RefObject<HTMLButtonElement>
export type NavMenuRef = RefObject<HTMLUListElement>

export interface NavMenuContextValue {
  triggerRef: NavTriggerRef | null
  menuRef: NavMenuRef | null
}

export const NavMenuContext = createContext<NavMenuContextValue>({
  triggerRef: null,
  menuRef: null,
})

export function NavMenuProvider(props: PropsWithChildren) {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  const value = useMemo(
    () => ({
      triggerRef,
      menuRef,
    }),
    [],
  )

  return (
    <NavMenuContext.Provider value={value}>
      {props.children}
    </NavMenuContext.Provider>
  )
}

export function useNavMenuContext() {
  const context = useContext(NavMenuContext)

  if (!context) {
    throw new Error('useNavMenuContext must be used within a NavMenuProvider.')
  }

  return context
}
