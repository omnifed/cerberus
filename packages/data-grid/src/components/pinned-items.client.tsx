'use client'

import { MenuItem } from '@cerberus-design/react'
import { type ElementType, type ReactNode } from 'react'
import { useSignalValue } from '../adapter'
import { InternalColumn } from '../types'

export function MatchPinnedItems(props: {
  pinned: InternalColumn<ReactNode>['pinned']
}) {
  const pinned = useSignalValue(props.pinned)
  const MenuItems: Record<string, ElementType> = {
    right: PinRightItem,
    left: PinLeftItem,
    unpinRight: UnpinRightItem,
    unpinLeft: UnpinLeftItem,
  }

  switch (pinned) {
    case 'right':
      return (
        <>
          <MenuItems.unpinRight />
          <MenuItems.left />
        </>
      )
    case 'left':
      return (
        <>
          <MenuItems.right />
          <MenuItems.unpinLeft />
        </>
      )
    default:
      return (
        <>
          <MenuItems.right />
          <MenuItems.left />
        </>
      )
  }
}

function UnpinRightItem() {
  return <MenuItem value="unpin_right">Unpin Right</MenuItem>
}

function UnpinLeftItem() {
  return <MenuItem value="unpin_left">Unpin Left</MenuItem>
}

function PinRightItem() {
  return <MenuItem value="pin_right">Pin Right</MenuItem>
}

function PinLeftItem() {
  return <MenuItem value="pin_left">Pin Left</MenuItem>
}
