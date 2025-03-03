import {
  Avatar,
  type AvatarFallbackProps,
  type AvatarImageProps,
  type AvatarRootProps,
} from '@ark-ui/react/avatar'
import {
  avatar,
  type AvatarVariantProps,
} from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'

/**
 * This module provides the primitive components for the Avatar component.
 * @module 'avatar/primitives'
 */

/**
 * The root component of the Avatar.
 */
export function AvatarRoot(props: AvatarRootProps & AvatarVariantProps) {
  const { gradient, shape, size, ...rootProps } = props
  const styles = avatar({ gradient, shape, size })
  return (
    <Avatar.Root
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
    />
  )
}

/**
 * The image component of the Avatar.
 */
export function AvatarImage(props: AvatarImageProps) {
  const styles = avatar()
  return (
    <Avatar.Image {...props} className={cx(styles.image, props.className)} />
  )
}

/**
 * The fallback component of the Avatar.
 */
export function AvatarFallback(props: AvatarFallbackProps) {
  const styles = avatar()
  return (
    <Avatar.Fallback
      {...props}
      className={cx(styles.fallback, props.className)}
    />
  )
}
