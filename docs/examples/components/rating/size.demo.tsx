'use client'

import { Stack } from '@/styled-system/jsx'
import { For, Rating, RatingProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.ratingGroup.variants.size
  .values as RatingProps['size'][]

export function SizeDemo() {
  return (
    <Stack gap="lg" w="1/2">
      <For each={variants}>
        {(size) => (
          <Rating
            key={String(size)}
            allowHalf
            defaultValue={4.5}
            label={`${size} orientation`}
            size={size}
            readOnly
          />
        )}
      </For>
    </Stack>
  )
}
