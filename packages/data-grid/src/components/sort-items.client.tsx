'use client'

import { MenuItem, useCerberusContext } from '@cerberus-design/react'
import { type ElementType } from 'react'
import { HStack, Square } from 'styled-system/jsx'
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
    <MenuItem value="unsort">
      <HStack gap="sm" w="full">
        <Square size="4" />
        Unsort
      </HStack>
    </MenuItem>
  )
}

function SortAsc() {
  const { icons } = useCerberusContext()
  const Icon = icons.sortAsc

  return (
    <MenuItem value="sort_asc">
      <HStack gap="sm" w="full">
        <Icon />
        Sort ASC
      </HStack>
    </MenuItem>
  )
}

function SortDesc() {
  const { icons } = useCerberusContext()
  const Icon = icons.sortDesc

  return (
    <MenuItem value="sort_desc">
      <HStack gap="sm" w="full">
        <Icon />
        Sort DESC
      </HStack>
    </MenuItem>
  )
}
