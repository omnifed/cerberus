'use client'

import { useMemo, type HTMLAttributes } from 'react'
import { useNavMenuContext } from '../context/navMenu'
import { Show } from './Show'
import type { Positions } from '../types'
import { cx } from '@cerberus-design/styled-system/css'
import { vstack } from '@cerberus-design/styled-system/patterns'

interface GetPositionResult {
  left: string
  right: string
  top: string
  bottom: string
}

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
  bgColor: 'neutral.surface.100',
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
  id: string
  position?: Positions
}

/**
 * A component that allows the user to display a menu of navigation links.
 * @definition [Disclosure Nav](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)
 * @definition [NavMenu Docs](https://cerberus.digitalu.design/react/nav-menu)
 *
 * @example
 * ```tsx
 * <NavMenuList id="nav-menu-list" position="bottom">
 *  <NavMenuLink href="/home">Home</NavMenuLink>
 * <NavMenuLink href="/about">About</NavMenuLink>
 * </NavMenuList>
 * ```
 **/
export function NavMenuList(props: NavMenuListProps): JSX.Element {
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
