import {
  Avatar,
  type AvatarFallbackProps,
  type AvatarRootProps,
} from '@ark-ui/react/avatar'
import type { AvatarImageProps } from '../Avatar-old'

/**
 * This module provides the primitive components for the Avatar component.
 * @module 'avatar/primitives'
 */

/**
 * The root component of the Avatar.
 */
export function AvatarRoot(props: AvatarRootProps) {
  return <Avatar.Root {...props} />
}

/**
 * The image component of the Avatar.
 */
export function AvatarImage(props: AvatarImageProps) {
  return <Avatar.Image {...props} />
}

/**
 * The fallback component of the Avatar.
 */
export function AvatarFallback(props: AvatarFallbackProps) {
  return <Avatar.Fallback {...props} />
}
