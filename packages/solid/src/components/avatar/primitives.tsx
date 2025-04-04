import {
  Avatar,
  type AvatarFallbackProps,
  type AvatarImageProps,
  type AvatarRootProps,
} from '@ark-ui/solid/avatar'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import { cx } from 'styled-system/css'
import { splitProps } from 'solid-js'

/**
 * This module provides the primitive components for the Avatar component.
 * @module 'avatar/primitives'
 */

/**
 * The root component of the Avatar.
 */
export function AvatarRoot(props: AvatarRootProps & AvatarVariantProps) {
  const [{ gradient, shape, size }, rootProps] = splitProps(props, [
    'gradient',
    'shape',
    'size',
  ])
  const styles = avatar({ gradient, shape, size })
  return <Avatar.Root {...rootProps} class={cx(styles.root, rootProps.class)} />
}

/**
 * The image component of the Avatar.
 */
export function AvatarImage(props: AvatarImageProps) {
  const styles = avatar()
  return <Avatar.Image {...props} class={cx(styles.image, props.class)} />
}

/**
 * The fallback component of the Avatar.
 */
export function AvatarFallback(props: AvatarFallbackProps) {
  const styles = avatar()
  return <Avatar.Fallback {...props} class={cx(styles.fallback, props.class)} />
}

/**
 * A primitive utility function to create the initials of the fallback string.
 * @param fallback string
 * @returns string - The initials of the fallback string (e.g. "John Doe" => "JD")
 */
export function makeAvatarInitials(fallback: string): string {
  const initials = fallback
    .split(' ')
    .map((name) => name.charAt(0))
    .join('')
    .toUpperCase()

  return initials
}
