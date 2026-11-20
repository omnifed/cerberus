'use client'

import { Menu, useCerberusContext } from '@cerberus-design/react'
import { type ElementType } from 'react'
import { HStack, Square } from 'styled-system/jsx'
import { FEATURE_VALUES } from '../const'
import { SortState } from '../types'

export function MatchSortItems(props: { sorting: SortState | undefined }) {
  const { sorting } = props

  const MenuItems: Record<string, ElementType> = {
    asc: SortAsc,
    desc: SortDesc,
    unsort: UnsortItem,
  }

  if (!sorting) {
    return (
      <>
        <MenuItems.asc />
        <MenuItems.desc />
      </>
    )
  }

  if (sorting.desc) {
    return (
      <>
        <MenuItems.asc />
        <MenuItems.unsort />
      </>
    )
  } else {
    return (
      <>
        <MenuItems.unsort />
        <MenuItems.desc />
      </>
    )
  }
}

function UnsortItem() {
  return (
    <Menu.Item value={FEATURE_VALUES.unsort}>
      <HStack gap="sm" w="full">
        <Square size="4" />
        Unsort
      </HStack>
    </Menu.Item>
  )
}

function SortAsc() {
  const { icons } = useCerberusContext()
  const Icon = icons.sortAsc

  return (
    <Menu.Item value={FEATURE_VALUES.sortAsc}>
      <HStack gap="sm" w="full">
        <Icon />
        Sort ASC
      </HStack>
    </Menu.Item>
  )
}

function SortDesc() {
  const { icons } = useCerberusContext()
  const Icon = icons.sortDesc

  return (
    <Menu.Item value={FEATURE_VALUES.sortDesc}>
      <HStack gap="sm" w="full">
        <Icon />
        Sort DESC
      </HStack>
    </Menu.Item>
  )
}
