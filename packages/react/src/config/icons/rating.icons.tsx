import { type CarbonIconProps, StarFilled, StarHalf } from '@carbon/icons-react'

/**
 * This module contains the default icons for the Rating component.
 * @module
 */

/**
 * Full star icon for the Rating component items. Renders at 24px unless a
 * `size` is given.
 */
export function RatingIcon(props: CarbonIconProps) {
  return <StarFilled size={24} {...props} />
}

/**
 * Half star icon for the Rating component items in a half state. Renders at
 * 24px unless a `size` is given.
 */
export function RatingHalfIcon(props: CarbonIconProps) {
  return <StarHalf size={24} {...props} />
}
