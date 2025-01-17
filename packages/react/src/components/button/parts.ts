import type { ElementType } from 'react'
import { Button, ButtonIcon } from './button'

/**
 * This module contains the parts of the Button component.
 * @module 'button/parts'
 */

interface ButtonPartsValue {
  Root: ElementType
  Icon: ElementType
}

/**
 * An Object containing the parts of the Button component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the ButtonParts object and
 * the entire family of components vs. only what you use.
 */
export const ButtonParts: ButtonPartsValue = {
  Root: Button,
  Icon: ButtonIcon,
}
