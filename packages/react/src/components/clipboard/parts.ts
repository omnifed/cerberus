import type { ElementType } from 'react'
import {
  ClipboardRoot,
  ClipboardLabel,
  ClipboardControl,
  ClipboardContext,
  ClipboardInput,
  ClipboardTrigger,
} from './primitives'
import { CopyText } from './copy-text'
import { CopyIndicator } from './copy-indicator'

/**
 * This module contains the parts of the Clipboard component.
 * @module 'clipboard/parts'
 */

interface ClipboardPartsValue {
  /**
   * The root context provider of the clipboard.
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
   * The raw context of the clipboard. Useful for obtaining the context state
   * within the hierarchy of the clipboard component.
   */
  Context: ElementType
  /**
   * The trigger of the clipboard.
   */
  Trigger: ElementType
  /**
   * A simple abstraction around the `Clipboard.Indicator` component that
   * provides default "Copy" and "Copied" icons.
   */
  Indicator: ElementType
  /**
   * A simple abstraction around the `Clipboard.Indicator` component that
   * provides default "Copy" and "Copied" text.
   */
  CopyText: ElementType
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
  Context: ClipboardContext,
  Input: ClipboardInput,
  Trigger: ClipboardTrigger,
  Indicator: CopyIndicator,
  CopyText: CopyText,
}
