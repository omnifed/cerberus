'use client'

import { Stack } from '@/styled-system/jsx'
import { StarFilled, StarHalf } from '@carbon/icons-react'
import { For, Rating, RatingProps } from '@cerberus-design/react'
import data from 'styled-system/specs/design-system.json'

const variants = data.slotRecipes.ratingGroup.variants.orientation
  .values as RatingProps['orientation'][]

export function OrientationDemo() {
  return (
    <Stack gap="lg" w="1/2">
      <For each={variants}>
        {(orientation) => (
          <Rating
            key={String(orientation)}
            allowHalf
            defaultValue={4.5}
            label={`${orientation} orientation`}
            orientation={orientation}
            readOnly
          >
            {({ half }) => {
              if (half) return <StarHalf size={24} />
              return <StarFilled size={24} />
            }}
          </Rating>
        )}
      </For>
    </Stack>
  )
}
