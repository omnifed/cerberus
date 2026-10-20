'use client'

import { sortSizeVariants } from '@/lib/design-system'
import { Box } from '@/styled-system/jsx'
import { Checkbox, CheckboxGroup, CheckboxProps, For } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.checkbox.variants.size
  .values as CheckboxProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizeDemo() {
  return (
    <Box w="1/2">
      <CheckboxGroup name="size">
        <For each={sortedSizes}>
          {(size) => (
            <Checkbox key={String(size)} size={size}>
              {String(size)}
            </Checkbox>
          )}
        </For>
      </CheckboxGroup>
    </Box>
  )
}
