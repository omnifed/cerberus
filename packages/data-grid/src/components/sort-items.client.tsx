'use client'

import { MenuItem } from '@cerberus-design/react'
import { type ElementType } from 'react'
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
  return <MenuItem value="unsort">Unsort</MenuItem>
}

function SortAsc() {
  return <MenuItem value="sort_asc">Sort ASC</MenuItem>
}

function SortDesc() {
  return <MenuItem value="sort_desc">Sort DESC</MenuItem>
}
