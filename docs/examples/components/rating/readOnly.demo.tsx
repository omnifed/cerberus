'use client'

import { Star, StarFilled, StarHalf } from '@carbon/icons-react'
import { Rating } from '@cerberus-design/react'

export function ReadOnlyDemo() {
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
