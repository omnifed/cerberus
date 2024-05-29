'use client'

import { type HTMLAttributes } from 'react'
import { useNavMenuContext } from '../context/navMenu'
import { Show } from './Show'

// <NavMenuList />

export interface NavMenuListProps extends HTMLAttributes<HTMLUListElement> {
  id: string
}

export function NavMenuList(props: NavMenuListProps) {
  const { menuRef, expanded } = useNavMenuContext()
  return (
    <Show when={expanded}>
      <ul {...props} ref={menuRef} />
    </Show>
  )
}
