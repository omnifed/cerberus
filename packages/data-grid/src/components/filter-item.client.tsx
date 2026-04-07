'use client'

import { MenuItem, useCerberusContext } from '@cerberus-design/react'
import { HStack } from 'styled-system/jsx'

export function FilterMenuItem() {
  const { icons } = useCerberusContext()
  const FilterIcon = icons.filter

  return (
    <MenuItem value="filter">
      <HStack gap="sm" w="full">
        <FilterIcon />
        Filter
      </HStack>
    </MenuItem>
  )
}
