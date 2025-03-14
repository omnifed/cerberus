import type { JSX, ParentProps } from 'solid-js'
import { Button, type ButtonProps } from './button'
import { ButtonIcon } from './button-icon'

/**
 * This module contains the parts of the Button component.
 * @module 'button/parts'
 */

interface ButtonPartsValue {
  /**
   * The context provider of the button.
   */
  Root: (props: ButtonProps) => JSX.Element
  /**
   * The icon of the button.
   */
  Icon: (props: ParentProps) => JSX.Element
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
