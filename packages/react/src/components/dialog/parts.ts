import type { ElementType } from 'react'
import {
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogPositioner,
  DialogRoot,
  DialogTrigger,
} from './primitives'

/**
 * This module contains the parts of the Dialog component.
 * @module 'dialog/parts'
 */

interface DialogPartsValue {
  /**
   * The context provider of the dialog.
   */
  Root: ElementType
  /**
   * The trigger that opens the dialog.
   */
  Trigger: ElementType
  /**
   * The overlay of the dialog.
   */
  Backdrop: ElementType
  /**
   * The container that positions the dialog.
   */
  Positioner: ElementType
  /**
   * The visible content of the dialog.
   */
  Content: ElementType
  /**
   * The heading of the dialog.
   */
  Heading: ElementType
  /**
   * The description of the dialog.
   */
  Description: ElementType
  /**
   * The trigger that closes the dialog.
   */
  CloseTrigger: ElementType
}

/**
 * An Object containing the parts of the dialog component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the DialogParts object and
 * the entire family of components vs. only what you use.
 */
export const dialogParts: DialogPartsValue = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Backdrop: DialogBackdrop,
  Positioner: DialogPositioner,
  Content: DialogContent,
  Heading: DialogHeading,
  Description: DialogDescription,
  CloseTrigger: DialogCloseTrigger,
}
