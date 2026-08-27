'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, For, Popover } from '@cerberus-design/react'

export function SizesDemo() {
  return (
    <HStack gap="md">
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size: string) => (
          <Popover key={size} trigger={<Button size="sm">{size}</Button>} size={size}>
            <Popover.Body>This is a {size} popover</Popover.Body>
          </Popover>
        )}
      </For>
    </HStack>
  )
}
