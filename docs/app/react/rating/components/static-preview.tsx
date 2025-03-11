'use client'

import { Box } from 'styled-system/jsx'
import { css } from 'styled-system/css'
import {
  Rating,
  RatingParts,
  type UseRatingGroupContext,
} from '@cerberus-design/react'
import { Star, StarFilled, StarHalf } from '@carbon/icons-react'

export function BasicDemo() {
  return <Rating defaultValue={3}>{() => <StarFilled size={24} />}</Rating>
}

export function ReadOnlyHalfDemo() {
  return (
    <Rating defaultValue={4.5} allowHalf readOnly>
      {({ half, highlighted }) => {
        if (half) return <StarHalf size={24} />
        if (highlighted) return <StarFilled size={24} />
        return <Star size={24} />
      }}
    </Rating>
  )
}

export function OrientationDemo() {
  return (
    <Box w="1/2">
      <Rating
        allowHalf
        defaultValue={4.5}
        label="Average Rating"
        orientation="horizontal"
        readOnly
      >
        {({ half }) => {
          if (half) return <StarHalf size={24} />
          return <StarFilled size={24} />
        }}
      </Rating>
    </Box>
  )
}

export function SizeDemo() {
  return (
    <Rating defaultValue={3} label="This is a medium label" size="md">
      {() => <StarFilled size={24} />}
    </Rating>
  )
}

export function CustomDemo() {
  return (
    <Box w="1/2">
      <RatingParts.Root
        defaultValue={3}
        orientation="horizontal"
        className={css({
          transform: 'skewX(-10deg)',
        })}
      >
        <RatingParts.Label
          className={css({
            textStyle: 'heading-xs',
            textTransform: 'uppercase',
          })}
        >
          This is a custom rating
        </RatingParts.Label>

        <RatingParts.Control>
          <RatingParts.Context>
            {(context: UseRatingGroupContext) =>
              context.items.map((item) => (
                <RatingParts.Item
                  key={item}
                  index={item}
                  className={css({
                    _highlighted: {
                      colorPalette: 'danger',
                      scale: '1.2',
                    },
                  })}
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
