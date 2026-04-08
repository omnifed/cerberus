'use client'

import { MenuItem, Show, useCerberusContext } from '@cerberus-design/react'
import { useRead } from '@cerberus-design/signals'
import { HStack } from 'styled-system/jsx'
import { useDataGridContext } from '../context.client'

export function FilterMenuItem() {
  const store = useDataGridContext()
  const colDefs = useRead(store.colFilters)

  const { icons } = useCerberusContext()
  const FilterIcon = icons.filter
  const ClearIcon = icons.filterClear

  return (
    <Show
      when={!colDefs.length}
      fallback={
        <MenuItem value="clear-filter">
          <HStack gap="sm" w="full">
            <ClearIcon />
            Clear Filters
          </HStack>
        </MenuItem>
      }
    >
      <MenuItem value="filter">
        <HStack gap="sm" w="full">
          <FilterIcon />
          Filter
        </HStack>
      </MenuItem>
    </Show>
  )
}
