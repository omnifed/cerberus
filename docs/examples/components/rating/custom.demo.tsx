'use client'

import { Box } from '@/styled-system/jsx'
import { StarFilled } from '@carbon/icons-react'
import { RatingParts, UseRatingGroupContext } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <RatingParts.Root
        defaultValue={3}
        orientation="horizontal"
        transform="skewX(-10deg)"
      >
        <RatingParts.Label textStyle="heading-xs" textTransform="uppercase">
          This is a custom rating
        </RatingParts.Label>

        <RatingParts.Control>
          <RatingParts.Context>
            {(context: UseRatingGroupContext) =>
              context.items.map((item) => (
                <RatingParts.Item
                  key={item}
                  index={item}
                  _highlighted={{
                    colorPalette: 'danger',
                    scale: '1.2',
                  }}
                >
                  <RatingParts.ItemContext>
                    {() => <StarFilled size={24} />}
                  </RatingParts.ItemContext>
                </RatingParts.Item>
              ))
            }
          </RatingParts.Context>
          <RatingParts.HiddenInput />
        </RatingParts.Control>
      </RatingParts.Root>
    </Box>
  )
}
