import type { AnchorHTMLAttributes, ElementType } from 'react'
import { css, cx } from '@cerberus/styled-system/css'
import { Show } from './Show'

/**
 * This module contains the NavMenuLink component.
 * @module
 */

export interface NavMenuLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The element type to render as. Recommended to use for Next apps with the
   * `Link` component.
   */
  as?: ElementType
}

/**
 * The NavMenuLink component is a link element that is used within the NavMenu.
 * @see https://cerberus.digitalu.design/react/nav-menu
 * @example
 * ```tsx
 * <NavMenu>
 *  <NavMenuList id="nav-menu-list" position="bottom">
 *   <NavMenuLink href="/home">Home</NavMenuLink>
 *   <NavMenuLink href="/about">About</NavMenuLink>
 *  </NavMenuList>
 * </NavMenu>
 * ```
 */
export function NavMenuLink(props: NavMenuLinkProps): JSX.Element {
  const { as, ...nativeProps } = props
  const hasAs = Boolean(as)
  const AsSub: ElementType = as!

  return (
    <li
      className={css({
        w: 'full',
      })}
    >
      <Show
        when={hasAs}
        fallback={
          <a
            {...nativeProps}
            className={cx(
              nativeProps.className,
              css({
                color: 'action.navigation.initial',
                textStyle: 'link',
                _hover: {
                  color: 'action.navigation.hover',
                },
              }),
            )}
          />
        }
      >
        {hasAs && <AsSub {...nativeProps} />}
      </Show>
    </li>
  )
}
