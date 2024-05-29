import type { AnchorHTMLAttributes, ElementType, HTMLAttributes } from 'react'
import { useNavMenuContext } from '../context/navMenu'
import { Show } from './Show'

// <NavMenuList />

export interface NavMenuListProps extends HTMLAttributes<HTMLUListElement> {}

export function NavMenuList(props: NavMenuListProps) {
  const { menuRef, expanded } = useNavMenuContext()
  return (
    <Show when={expanded}>
      <ul {...props} ref={menuRef} />
    </Show>
  )
}

// </NavMenuLink />

export interface NavMenuLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType
}

export function NavMenuLink(props: NavMenuLinkProps) {
  const { as, ...nativeProps } = props
  const hasAs = Boolean(as)
  const AsSub: ElementType = as!

  return (
    <li>
      <Show when={hasAs} fallback={<a {...nativeProps} />}>
        {hasAs && <AsSub {...nativeProps} />}
      </Show>
    </li>
  )
}
