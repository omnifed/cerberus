'use client'

import { Menu, useCerberusContext } from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { type ElementType, type ReactNode } from 'react'
import { HStack } from 'styled-system/jsx'
import { FEATURE_VALUES } from '../const'
import { InternalColumn } from '../types'

export function MatchPinnedItems(props: {
  pinned: InternalColumn<ReactNode>['pinned']
}) {
  const pinned = useRead(props.pinned)
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
  const { icons } = useCerberusContext()
  const Icon = icons.pinRightFilled
  return (
    <Menu.Item value={FEATURE_VALUES.unpinRight}>
      <HStack gap="sm" w="full">
        <Icon />
        Unpin Right
      </HStack>
    </Menu.Item>
  )
}

function UnpinLeftItem() {
  const { icons } = useCerberusContext()
  const Icon = icons.pinLeftFilled
  return (
    <Menu.Item value={FEATURE_VALUES.unpinLeft}>
      <HStack gap="sm" w="full">
        <Icon />
        Unpin Left
      </HStack>
    </Menu.Item>
  )
}

function PinRightItem() {
  const { icons } = useCerberusContext()
  const Icon = icons.pinRight
  return (
    <Menu.Item value={FEATURE_VALUES.pinRight}>
      <HStack gap="sm" w="full">
        <Icon />
        Pin Right
      </HStack>
    </Menu.Item>
  )
}

function PinLeftItem() {
  const { icons } = useCerberusContext()
  const Icon = icons.pinLeft
  return (
    <Menu.Item value={FEATURE_VALUES.pinLeft}>
      <HStack gap="sm" w="full">
        <Icon />
        Pin Left
      </HStack>
    </Menu.Item>
  )
}
