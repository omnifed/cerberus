import type { ElementType } from 'react'
import { AvatarFallback, AvatarImage, AvatarRoot } from './primitives'

/**
 * This module contains the parts of the Avatar component.
 * @module 'avatar/parts'
 */

interface AvatarPartsValue {
  /**
   * The context provider of the Avatar.
   */
  Root: ElementType
  /**
   * The image of the Avatar.
   */
  Image: ElementType
  /**
   * The fallback content to display when the image fails to load.
   */
  Fallback: ElementType
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
