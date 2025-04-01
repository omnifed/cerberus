import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarRootProps,
} from '@ark-ui/solid/avatar'
import type { JSX } from 'solid-js'
import { AvatarFallback, AvatarImage } from './primitives'
import { AvatarRoot } from './root'

/**
 * This module contains the parts of the Avatar component.
 * @module 'avatar/parts'
 */

interface AvatarPartsValue {
  /**
   * The context provider of the Avatar.
   */
  Root: (props: AvatarRootProps) => JSX.Element
  /**
   * The image of the Avatar.
   */
  Image: (props: AvatarImageProps) => JSX.Element
  /**
   * The fallback content to display when the image fails to load.
   */
  Fallback: (props: AvatarFallbackProps) => JSX.Element
}

/**
 * An Object containing the parts of the Accordion component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the AvatarParts object and
 * the entire family of components vs. only what you use.
 */
export const AvatarParts: AvatarPartsValue = {
  Root: AvatarRoot,
  Image: AvatarImage,
  Fallback: AvatarFallback,
}
