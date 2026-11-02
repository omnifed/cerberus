'use client'

import { HStack } from '@/styled-system/jsx'
import { ClosableTagProps, For, Tag } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.recipes.closableTag.variants.palette
  .values as ClosableTagProps['palette'][]

export function ClosableDemo() {
  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <HStack gap="md">
      <Tag pending onClick={handleClick}>
        Closable
      </Tag>

      <For each={variants}>
        {(palette) => (
          <Tag key={String(palette)} palette={palette} onClick={handleClick}>
            {String(palette)}
          </Tag>
        )}
      </For>
    </HStack>
  )
}
