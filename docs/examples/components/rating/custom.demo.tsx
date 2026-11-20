'use client'

import { Box } from '@/styled-system/jsx'
import { StarFilled } from '@carbon/icons-react'
import { Rating } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Box w="1/2">
      <Rating.Root
        defaultValue={3}
        orientation="horizontal"
        transform="skewX(-10deg)"
      >
        <Rating.Label textStyle="heading-xs" textTransform="uppercase">
          This is a custom rating
        </Rating.Label>

        <Rating.Control>
          <Rating.Context>
            {(context) =>
              context.items.map((item) => (
                <Rating.Item
                  key={item}
                  index={item}
                  _highlighted={{
                    colorPalette: 'danger',
                    scale: '1.2',
                  }}
                >
                  <Rating.ItemContext>
                    {() => <StarFilled size={24} />}
                  </Rating.ItemContext>
                </Rating.Item>
              ))
            }
          </Rating.Context>
          <Rating.HiddenInput />
        </Rating.Control>
      </Rating.Root>
    </Box>
  )
}
