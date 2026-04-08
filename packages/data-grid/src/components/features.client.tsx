'use client'

import {
  IconButton,
  Menu,
  MenuContent,
  MenuSeparator,
  MenuTrigger,
  Show,
  useCerberusContext,
  type MenuSelectionDetails,
} from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { useMemo } from 'react'
import { FEATURE_VALUES } from '../const'
import { useDataGridContext } from '../context.client'
import { InternalColumn, PinnedState, SortDirection } from '../types'
import { FilterMenuItem } from './filter-item.client'
import { MatchPinnedItems } from './pinned-items.client'
import { MatchSortItems } from './sort-items.client'

export function HeaderCellOptions<TData>(props: InternalColumn<TData>) {
  const store = useDataGridContext<TData>()
  const sorting = useRead(store.sorting)

  const { icons } = useCerberusContext()
  const MoreOptionsIcon = icons.moreVertical

  const sortedVal = useMemo(() => {
    const idx = sorting.findIndex((data) => data.id === props.id)
    if (idx === -1) return undefined
    return sorting[idx]
  }, [sorting, props.id])

  function handleSelect(details: MenuSelectionDetails) {
    const val = details.value
    const specialVal = val.split('_')

    const category = specialVal[0]
    const action = specialVal[1]

    // Flat-action items
    switch (val) {
      case FEATURE_VALUES.filter:
        return store.setShowColFilter(true)
      case FEATURE_VALUES.filterClear:
        return store.setColFilter([])
      case FEATURE_VALUES.unsort:
        return store.setSort(props.id, null)
      default:
        break
    }

    switch (category) {
      case FEATURE_VALUES.pin:
        return store.togglePinned(props.id, action as PinnedState)
      case FEATURE_VALUES.unpin:
        return store.togglePinned(props.id, false)
      case FEATURE_VALUES.sort:
        return store.setSort(props.id, (action as SortDirection) ?? null)
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
        <IconButton
          ariaLabel="View more options"
          size="sm"
          opacity={{
            base: 1,
            md: 0,
          }}
          transitionProperty="opacity"
          transitionDuration="fast"
          _groupHover={{ opacity: 1 }}
        >
          <MoreOptionsIcon />
        </IconButton>
      </MenuTrigger>

      <MenuContent>
        <Show when={props.sortable}>
          <MatchSortItems sorting={sortedVal} />
        </Show>

        <Show when={props.pinnable}>
          <Show when={props.sortable}>
            <MenuSeparator />
          </Show>
          <MatchPinnedItems pinned={props.pinned} />
        </Show>

        <Show when={props.filterable}>
          <MenuSeparator />
          <FilterMenuItem />
        </Show>
      </MenuContent>
    </Menu>
  )
}
