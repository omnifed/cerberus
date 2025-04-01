import {
  RatingGroup,
  type RatingGroupContextProps,
  type RatingGroupControlProps,
  type RatingGroupHiddenInputProps,
  type RatingGroupItemContextProps,
  type RatingGroupItemProps,
  type RatingGroupLabelProps,
  type RatingGroupRootProps,
} from '@ark-ui/solid/rating-group'
import { splitProps } from 'solid-js'
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
  const [{ orientation, size }, rootProps] = splitProps(props, [
    'orientation',
    'size',
  ])
  const styles = ratingGroup({ orientation, size })
  return (
    <RatingGroup.Root {...rootProps} class={cx(styles.root, rootProps.class)} />
  )
}

/**
 * The label primitive of the Rating component.
 */
export function RatingLabel(props: RatingGroupLabelProps) {
  const styles = ratingGroup()
  return <RatingGroup.Label {...props} class={cx(styles.label, props.class)} />
}

/**
 * The control primitive of the Rating component.
 */
export function RatingControl(props: RatingGroupControlProps) {
  const styles = ratingGroup()
  return (
    <RatingGroup.Control {...props} class={cx(styles.control, props.class)} />
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
  const [{ palette }, itemProps] = splitProps(props, ['palette'])
  const styles = ratingGroup({ palette })
  return (
    <RatingGroup.Item {...itemProps} class={cx(styles.item, itemProps.class)} />
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
