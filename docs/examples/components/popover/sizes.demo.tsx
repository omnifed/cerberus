'use client'

import { sortSizeVariants } from '@/lib/design-system'
import { HStack } from '@/styled-system/jsx'
import { Button, For, Popover, type PopoverProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.popover.variants.size.values as PopoverProps['size'][]
const sortedSizes = sortSizeVariants(variants)

export function SizesDemo() {
  return (
    <HStack gap="md">
      <For each={sortedSizes}>
        {(size) => (
          <Popover
            key={String(size)}
            trigger={<Button size="sm">{String(size)}</Button>}
            size={size}
          >
            <Popover.Body>This is a {size} popover</Popover.Body>
          </Popover>
        )}
      </For>
    </HStack>
  )
}
