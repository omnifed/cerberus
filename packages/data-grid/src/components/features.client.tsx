'use client'

import {
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  type MenuSelectionDetails,
  MenuSeparator,
  MenuTrigger,
  Show,
} from '@cerberus-design/react'
import { type ReactNode } from 'react'
import { useSignalValue } from '../adapter'
import { useDataGridContext } from '../context'
import { InternalColumn, PinnedState } from '../types'

export function HeaderCellOptions(props: InternalColumn<ReactNode>) {
  const store = useDataGridContext()

  function handleSelect(details: MenuSelectionDetails) {
    const val = details.value
    const specialVal = val.split('_')
    const category = specialVal[0]
    const action = specialVal[1]

    if (val === 'filter') {
      return console.log('Show Filter popover...')
    }

    switch (category) {
      case 'pin':
        return store.togglePinned(props.id, action as PinnedState)
      case 'unpin':
        return store.togglePinned(props.id, false)
      case 'sort':
        // This needs to be improved to support a direction
        // return store.toggleSort(props.id, true)
        return console.log('Handle sort', action)
      default:
        console.error('Unhandled action:', { details, action })
    }
  }

  if (!props.sortable && !props.pinnable && !props.filterable) {
    return null
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
          <MatchPinnedItems pinned={props.pinned} />
        </Show>

        <Show when={props.filterable}>
          <MenuSeparator />
          <MenuItem value="filter">Filter</MenuItem>
        </Show>
      </MenuContent>
    </Menu>
  )
}

function MatchPinnedItems(props: {
  pinned: InternalColumn<ReactNode>['pinned']
}) {
  const pinned = useSignalValue(props.pinned)
  switch (pinned) {
    case 'right':
      return <MenuItem value="unpin_current">Unpin {pinned}</MenuItem>
    default:
      return (
        <>
          <MenuItem value="pin_right">Pin Right</MenuItem>
          <MenuItem value="pin_left">Pin Left</MenuItem>
        </>
      )
  }
}
