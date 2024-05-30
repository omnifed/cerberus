'use client'

import { useMemo, type HTMLAttributes } from 'react'
import { useNavMenuContext } from '../context/navMenu'
import { Show } from './Show'
import type { Positions } from '../types'
import { cx } from '@cerberus-design/styled-system/css'
import { vstack } from '@cerberus-design/styled-system/patterns'

export function getPosition(position: Positions) {
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

// <NavMenuList />

export interface NavMenuListProps extends HTMLAttributes<HTMLUListElement> {
  id: string
  position?: Positions
}

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
