'use client'

import { type HTMLAttributes } from 'react'
import { useNavMenuContext } from '../context/navMenu'
import { Show } from './Show'
import type { Positions } from '../types'

// <NavMenuList />

export interface NavMenuListProps extends HTMLAttributes<HTMLUListElement> {
  id: string
  position?: Positions
}

export function NavMenuList(props: NavMenuListProps) {
  const { menuRef, expanded } = useNavMenuContext()
  return (
    <Show when={expanded}>
      <ul data-position={props.position ?? 'bottom'} {...props} ref={menuRef} />
    </Show>
  )
}
