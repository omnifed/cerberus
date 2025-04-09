import {
  Avatar,
  type AvatarFallbackProps,
  type AvatarImageProps,
  type AvatarRootProps,
} from '@ark-ui/solid/avatar'
import { splitProps } from 'solid-js'
import { avatar, type AvatarVariantProps } from 'styled-system/recipes'
import { css, cx } from 'styled-system/css'
import type { WithCss } from '../types'

/**
 * This module provides the primitive components for the Avatar component.
 * @module 'avatar/primitives'
 */

/**
 * The root component of the Avatar.
 */
export function AvatarRoot(
  props: AvatarRootProps & AvatarVariantProps & WithCss,
) {
  const [{ gradient, shape, size, css: customCss }, rootProps] = splitProps(
    props,
    ['gradient', 'shape', 'size', 'css'],
  )
  const styles = avatar({ gradient, shape, size })
  return (
    <Avatar.Root
      {...rootProps}
      class={cx(styles.root, css(customCss), rootProps.class)}
    />
  )
}

/**
 * The image component of the Avatar.
 */
export function AvatarImage(props: AvatarImageProps & WithCss) {
  const [{ css: customCss }, imgProps] = splitProps(props, ['css'])
  const styles = avatar()
  return (
    <Avatar.Image
      {...imgProps}
      class={cx(styles.image, css(customCss), imgProps.class)}
    />
  )
}

/**
 * The fallback component of the Avatar.
 */
export function AvatarFallback(props: AvatarFallbackProps & WithCss) {
  const [{ css: customCss }, fallbackProps] = splitProps(props, ['css'])
  const styles = avatar()
  return (
    <Avatar.Fallback
      {...fallbackProps}
      class={cx(styles.fallback, css(customCss), fallbackProps.class)}
    />
  )
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
