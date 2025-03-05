'use client'

import { useMemo, type HTMLAttributes } from 'react'
import { cx } from '@cerberus/styled-system/css'
import { vstack } from '@cerberus/styled-system/patterns'
import { useNavMenuContext } from '../../context/navMenu'
import type { Positions } from '../../types'
import { Show } from '../Show'

/**
 * This module contains the NavMenuList component.
 * @module
 */

interface GetPositionResult {
  /**
   * The left position of the element.
   */
  left: string
  /**
   * The right position of the element.
   */
  right: string
  /**
   * The top position of the element.
   */
  top: string
  /**
   * The bottom position of the element.
   */
  bottom: string
}

/**
 * @deprecated use the {@link Menu} family instead
 */
export function getPosition(position: Positions): GetPositionResult {
  const defaultPositions = {
    left: 'auto',
    right: 'auto',
    top: 'auto',
    bottom: 'auto',
  }
  switch (position) {
    case 'right':
      return { ...defaultPositions, top: '0%', left: '105%' }
    case 'left':
      return { ...defaultPositions, top: '0%', right: '105%' }
    case 'bottom':
      return { ...defaultPositions, top: '110%' }
    case 'top':
      return { ...defaultPositions, bottom: '110%' }
    default:
      return defaultPositions
  }
}

const navListStyles = vstack({
  alignItems: 'flex-start',
  bgColor: 'page.surface.100',
  boxShadow: 'lg',
  gap: '2',
  opacity: '0',
  p: '4',
  position: 'absolute',
  rounded: 'md',
  zIndex: 'dropdown',
  _motionSafe: {
    animationName: 'zoomIn',
    animationDelay: '100ms',
    animationDuration: '150ms',
    animationFillMode: 'both',
    animationTimingFunction: 'ease-in-out',
  },
  _positionBottom: {
    transformOrigin: 'top left',
  },
  _positionTop: {
    transformOrigin: 'bottom left',
  },
  _positionLeft: {
    transformOrigin: 'top right',
  },
  _positionRight: {
    transformOrigin: 'top left',
  },
})

export interface NavMenuListProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * The unique identifier for the NavMenuList. Required for accessibility.
   */
  id: string
  /**
   * The position of the NavMenuList.
   * @type 'top' | 'right' | 'bottom' | 'left'
   * @default 'bottom'
   */
  position?: Positions
}

/**
 * A component that allows the user to display a menu of navigation links.
 * @definition [Disclosure Nav](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)
 * @see https://cerberus.digitalu.design/react/nav-menu
 *
 * @example
 * ```tsx
 * <NavMenu>
 *  <NavMenuList id="nav-menu-list" position="bottom">
 *   <NavMenuLink href="/home">Home</NavMenuLink>
 *   <NavMenuLink href="/about">About</NavMenuLink>
 *  </NavMenuList>
 * </NavMenu>
 * ```
 **/
export function NavMenuList(props: NavMenuListProps) {
  const { position, ...nativeProps } = props
  const { menuRef, expanded } = useNavMenuContext()
  const locationStyles = useMemo(
    () => getPosition(position ?? 'bottom'),
    [position],
  )

  return (
    <Show when={expanded}>
      <ul
        {...nativeProps}
        data-position={position ?? 'bottom'}
        className={cx(nativeProps.className, navListStyles)}
        ref={menuRef}
        style={locationStyles}
      />
    </Show>
  )
}
