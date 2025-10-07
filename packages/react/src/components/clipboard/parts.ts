import type { ElementType } from 'react'
import {
  ClipboardRoot,
  ClipboardLabel,
  ClipboardControl,
  ClipboardInput,
  ClipboardTrigger,
  ClipboardIndicator,
} from './primitives'

/**
 * This module contains the parts of the Clipboard component.
 * @module 'clipboard/parts'
 */

interface ClipboardPartsValue {
  /**
   * The context provider of the clipboard.
   */
  Root: ElementType
  /**
   * The label of the clipboard.
   */
  Label: ElementType
  /**
   * The control of the clipboard.
   */
  Control: ElementType
  /**
   * The input of the clipboard.
   */
  Input: ElementType
  /**
   * The trigger of the clipboard.
   */
  Trigger: ElementType
  /**
   * The indicator of the clipboard.
   */
  Indicator: ElementType
}

/**
 * An Object containing the parts of the Clipboard component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the Clipboard parts object and
 * the entire family of components versus only what you use.
 */
export const Clipboard: ClipboardPartsValue = {
  Root: ClipboardRoot,
  Label: ClipboardLabel,
  Control: ClipboardControl,
  Input: ClipboardInput,
  Trigger: ClipboardTrigger,
  Indicator: ClipboardIndicator,
}
