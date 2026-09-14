'use client'

import { StarFilled } from '@carbon/icons-react'
import { Rating } from '@cerberus-design/react'

export function BasicDemo() {
  return <Rating defaultValue={3}>{() => <StarFilled size={24} />}</Rating>
}
