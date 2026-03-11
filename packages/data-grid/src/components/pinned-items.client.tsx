'use client'

import { MenuItem, useCerberusContext } from '@cerberus-design/react'
import { type ElementType, type ReactNode } from 'react'
import { HStack } from 'styled-system/jsx'
import { InternalColumn } from '../types'

export function MatchPinnedItems(props: {
  pinned: InternalColumn<ReactNode>['pinned']
}) {
  const MenuItems: Record<string, ElementType> = {
    right: PinRightItem,
    left: PinLeftItem,
    unpinRight: UnpinRightItem,
    unpinLeft: UnpinLeftItem,
  }

  switch (props.pinned()) {
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
  const { icons } = useCerberusContext()
  const Icon = icons.pinRightFilled
  return (
    <MenuItem value="unpin_right">
      <HStack gap="sm" w="full">
        <Icon />
        Unpin Right
      </HStack>
    </MenuItem>
  )
}

function UnpinLeftItem() {
  const { icons } = useCerberusContext()
  const Icon = icons.pinLeftFilled
  return (
    <MenuItem value="unpin_left">
      <HStack gap="sm" w="full">
        <Icon />
        Unpin Left
      </HStack>
    </MenuItem>
  )
}

function PinRightItem() {
  const { icons } = useCerberusContext()
  const Icon = icons.pinRight
  return (
    <MenuItem value="pin_right">
      <HStack gap="sm" w="full">
        <Icon />
        Pin Right
      </HStack>
    </MenuItem>
  )
}

function PinLeftItem() {
  const { icons } = useCerberusContext()
  const Icon = icons.pinLeft
  return (
    <MenuItem value="pin_left">
      <HStack gap="sm" w="full">
        <Icon />
        Pin Left
      </HStack>
    </MenuItem>
  )
}
