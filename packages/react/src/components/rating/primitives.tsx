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

/**
 * This module contains the primitives of the Rating component.
 * @module 'rating/primitives'
 */

/**
 * The root primitive of the Rating component.
 */
export function RatingRoot(props: RatingGroupRootProps) {
  return <RatingGroup.Root {...props} />
}

/**
 * The label primitive of the Rating component.
 */
export function RatingLabel(props: RatingGroupLabelProps) {
  return <RatingGroup.Label {...props} />
}

/**
 * The control primitive of the Rating component.
 */
export function RatingControl(props: RatingGroupControlProps) {
  return <RatingGroup.Control {...props} />
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
export function RatingItem(props: RatingGroupItemProps) {
  return <RatingGroup.Item {...props} />
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
