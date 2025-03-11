import {
  RatingGroup,
  type RatingGroupContextProps,
  type RatingGroupControlProps,
  type RatingGroupHiddenInputProps,
  type RatingGroupItemContextProps,
  type RatingGroupItemProps,
  type RatingGroupLabelProps,
  type RatingGroupRootProps,
} from '@ark-ui/react/rating-group'
import { cx } from 'styled-system/css'
import {
  ratingGroup,
  type RatingGroupVariantProps,
} from 'styled-system/recipes'

/**
 * This module contains the primitives of the Rating component.
 * @module 'rating/primitives'
 */

/**
 * The root primitive of the Rating component.
 */
export function RatingRoot(
  props: RatingGroupRootProps & RatingGroupVariantProps,
) {
  const { orientation, size, ...rootProps } = props
  const styles = ratingGroup({ orientation, size })
  return (
    <RatingGroup.Root
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
    />
  )
}

/**
 * The label primitive of the Rating component.
 */
export function RatingLabel(props: RatingGroupLabelProps) {
  const styles = ratingGroup()
  return (
    <RatingGroup.Label
      {...props}
      className={cx(styles.label, props.className)}
    />
  )
}

/**
 * The control primitive of the Rating component.
 */
export function RatingControl(props: RatingGroupControlProps) {
  const styles = ratingGroup()
  return (
    <RatingGroup.Control
      {...props}
      className={cx(styles.control, props.className)}
    />
  )
}

/**
 * The context primitive of the Rating component.
 */
export function RatingContext(props: RatingGroupContextProps) {
  return <RatingGroup.Context {...props} />
}

/**
 * The item primitive of the Rating component.
 */
export function RatingItem(
  props: RatingGroupItemProps & RatingGroupVariantProps,
) {
  const { palette, ...itemProps } = props
  const styles = ratingGroup({ palette })
  return (
    <RatingGroup.Item
      {...itemProps}
      className={cx(styles.item, itemProps.className)}
    />
  )
}

/**
 * The item context primitive of the Rating component.
 */
export function RatingItemContext(props: RatingGroupItemContextProps) {
  return <RatingGroup.ItemContext {...props} />
}

/**
 * The hidden input primitive of the Rating component.
 */
export function RatingHiddenInput(props: RatingGroupHiddenInputProps) {
  return <RatingGroup.HiddenInput {...props} />
}
