'use client'

import { useMemo, type HTMLAttributes } from 'react'
import { useNavMenuContext } from '../context/navMenu'
import { Show } from './Show'
import type { Positions } from '../types'
import { css, cx } from '@cerberus-design/styled-system/css'

function getPosition(position: Positions) {
  const defaultPositions = {
    left: 'auto',
    right: 'auto',
    top: 'auto',
    bottom: 'auto',
  }
  switch (position) {
    case 'right':
      return { ...defaultPositions, bottom: '50%', left: '110%' }
    case 'left':
      return { ...defaultPositions, bottom: '50%', right: '110%' }
    case 'bottom':
      return { ...defaultPositions, top: '110%' }
    case 'top':
      return { ...defaultPositions, bottom: '110%' }
    default:
      return defaultPositions
  }
}

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
        className={cx(
          nativeProps.className,
          css({
            position: 'absolute',
            zIndex: 'dropdown',
          }),
        )}
        ref={menuRef}
        style={locationStyles}
      />
    </Show>
  )
}
