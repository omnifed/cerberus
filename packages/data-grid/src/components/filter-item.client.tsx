'use client'

import { Menu, Show, useCerberusContext } from '@cerberus-design/react'
import { createComputed, useRead } from '@cerberus-design/signals'
import { HStack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'
import type { InternalColumn } from '../types'

interface FilterMenuItemProps<TData> {
  colId: InternalColumn<TData>['id']
}

export function FilterMenuItem<TData>(props: FilterMenuItemProps<TData>) {
  const store = useDataGridContext()
  const colDefs = useRead(store.colFilters)

  const hasFilter = createComputed(() => {
    return colDefs.active.some((filterId) => filterId === props.colId)
  })

  const { icons } = useCerberusContext()
  const FilterIcon = icons.filter
  const ClearIcon = icons.filterClear

  return (
    <Show
      when={hasFilter()}
      fallback={
        <Menu.Item value="filter">
          <HStack gap="sm" w="full">
            <FilterIcon />
            Filter
          </HStack>
        </Menu.Item>
      }
    >
      <Menu.Item value="clear-filter">
        <HStack gap="sm" w="full">
          <ClearIcon />
          Clear Filter
        </HStack>
      </Menu.Item>
    </Show>
  )
}
