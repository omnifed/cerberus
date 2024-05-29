import type { AnchorHTMLAttributes, ElementType } from 'react'
import { Show } from './Show'

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
