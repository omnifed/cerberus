'use client'

import {
  IconButton,
  Menu,
  MenuContent,
  MenuSeparator,
  MenuTrigger,
  Portal,
  Show,
  useCerberusContext,
  type MenuSelectionDetails,
} from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { useMemo } from 'react'
import { FEATURE_VALUES, OPERATORS } from '../const'
import { useDataGridContext } from '../context.client'
import { InternalColumn, PinnedState, SortDirection } from '../types'
import { FilterMenuItem } from './filter-item.client'
import { MatchPinnedItems } from './pinned-items.client'
import { MatchSortItems } from './sort-items.client'
import { MatchVisibleItems } from './visibile-items.client'

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

  const featureList = useMemo(() => {
    // ORDER MATTERS
    return [
      Number(props.sortable),
      Number(props.pinnable),
      Number(props.filterable),
      Number(props.visibility),
    ]
  }, [props.sortable, props.pinnable, props.filterable, props.visibility])

  function hasParentFeatureOn(idx: number): boolean {
    return featureList.slice(0, idx).some((val) => val === 1)
  }

  function handleSelect(details: MenuSelectionDetails) {
    const val = details.value
    const specialVal = val.split('_')

    const category = specialVal[0]
    const action = specialVal[1]

    // Flat-action items
    switch (val) {
      case FEATURE_VALUES.filter:
        return handleInitFilter()
      case FEATURE_VALUES.filterClear:
        return store.setColFilter((prev) => ({
          ...prev,
          active: prev.active.filter((id) => id !== props.id),
          editing: null,
        }))
      case FEATURE_VALUES.unsort:
        return store.setSort(props.id, null)
      case FEATURE_VALUES.manageVisibility:
        return console.log('Manage visibility flat', props.id)
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
      case FEATURE_VALUES.hide:
        return console.log('Hide column', props.id)
      default:
        console.error('Unhandled action:', { details, action })
    }
  }

  function handleInitFilter() {
    store.setColFilter((prev) => ({
      ...prev,
      editing: props.id,
      active: [...prev.active, props.id],
      filters: {
        ...prev.filters,
        [props.id]: {
          id: props.id,
          operator: OPERATORS.contains,
          value: '',
        },
      },
    }))
    return store.setShowColFilter(true)
  }

  if (featureList.every((val) => val === 0)) {
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

      <Portal>
        <MenuContent maxH="initial">
          <Show when={props.sortable}>
            <MatchSortItems sorting={sortedVal} />
          </Show>

          <Show when={props.pinnable}>
            <Show when={hasParentFeatureOn(1)}>
              <MenuSeparator />
            </Show>
            <MatchPinnedItems pinned={props.pinned} />
          </Show>

          <Show when={props.filterable}>
            <Show when={hasParentFeatureOn(2)}>
              <MenuSeparator />
            </Show>
            <FilterMenuItem colId={props.id} />
          </Show>

          <Show when={props.visibility}>
            <Show when={hasParentFeatureOn(3)}>
              <MenuSeparator />
            </Show>
            <MatchVisibleItems colId={props.id} isVisible={props.isVisible} />
          </Show>
        </MenuContent>
      </Portal>
    </Menu>
  )
}
