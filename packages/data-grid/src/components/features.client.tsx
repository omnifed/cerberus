'use client'

import {
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  SelectValueChangeDetails,
  Show,
} from '@cerberus-design/react'
import { ReactNode } from 'react'
import { InternalColumn } from '../types'

export function HeaderCellOptions(props: InternalColumn<ReactNode>) {
  function handleSelect(details: SelectValueChangeDetails) {
    console.log(details)
  }

  return (
    <Menu onSelect={handleSelect}>
      <MenuTrigger>
        <IconButton ariaLabel="View more options" size="sm">
          I
        </IconButton>
      </MenuTrigger>

      <MenuContent>
        <Show when={props.sortable}>
          <MenuItem value="sort_asc">Sort by ASC</MenuItem>
          <MenuItem value="sort_desc">Sort by DESC</MenuItem>
        </Show>

        <Show when={props.pinnable}>
          <Show when={props.sortable}>
            <MenuSeparator />
          </Show>
          <MenuItem value="right">Pin Right</MenuItem>
          <MenuItem value="left">Pin Left</MenuItem>
        </Show>

        <Show when={props.filterable}>
          <MenuSeparator />
          <MenuItem value="filter">Filter</MenuItem>
        </Show>
      </MenuContent>
    </Menu>
  )
}
