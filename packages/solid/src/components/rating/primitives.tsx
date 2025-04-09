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
import { css, cx } from 'styled-system/css'
import {
  ratingGroup,
  type RatingGroupVariantProps,
} from 'styled-system/recipes'
import type { WithCss } from 'styled-system/types'

/**
 * This module contains the primitives of the Rating component.
 * @module 'rating/primitives'
 */

/**
 * The root primitive of the Rating component.
 */
export function RatingRoot(
  props: RatingGroupRootProps & RatingGroupVariantProps & WithCss,
) {
  const [{ orientation, size, css: customCss }, rootProps] = splitProps(props, [
    'orientation',
    'size',
    'css',
  ])
  const styles = ratingGroup({ orientation, size })
  return (
    <RatingGroup.Root {...rootProps} class={cx(styles.root, css(customCss))} />
  )
}

/**
 * The label primitive of the Rating component.
 */
export function RatingLabel(props: RatingGroupLabelProps & WithCss) {
  const [styleProps, labelProps] = splitProps(props, ['css'])
  const styles = ratingGroup()
  return (
    <RatingGroup.Label
      {...labelProps}
      class={cx(styles.label, css(styleProps.css))}
    />
  )
}

/**
 * The control primitive of the Rating component.
 */
export function RatingControl(props: RatingGroupControlProps & WithCss) {
  const [styleProps, controlProps] = splitProps(props, ['css'])
  const styles = ratingGroup()
  return (
    <RatingGroup.Control
      {...controlProps}
      class={cx(styles.control, css(styleProps.css))}
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
  props: RatingGroupItemProps & RatingGroupVariantProps & WithCss,
) {
  const [{ palette, css: customCss }, itemProps] = splitProps(props, [
    'palette',
    'css',
  ])
  const styles = ratingGroup({ palette })
  return (
    <RatingGroup.Item {...itemProps} class={cx(styles.item, css(customCss))} />
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
