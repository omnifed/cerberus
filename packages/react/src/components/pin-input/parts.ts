import type { ElementType } from 'react'
import {
  PinInputRoot,
  PinInputInput,
  PinInputControl,
  PinInputHiddenInput,
  PinInputLabel,
} from './primitives'

/**
 * This module contains the parts of the PinInput component.
 * @module 'pin-input/parts'
 */

interface PinInputPartsValue {
  /**
   * The context provider of the pin-input.
   */
  Root: ElementType
  /**
   * The label element of the pin-input.
   */
  Label: ElementType
  /**
   * The control element of the pin-input.
   */
  Control: ElementType
  /**
   * The input element of the pin-input.
   */
  Input: ElementType
  /**
   * The hidden input element of the pin-input.
   */
  HiddenInput: ElementType
}

/**
 * An Object containing the parts of the PinInput component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the PinInputParts object and
 * the entire family of components vs. only what you use.
 */
export const PinInputParts: PinInputPartsValue = {
  Root: PinInputRoot,
  Label: PinInputLabel,
  Control: PinInputControl,
  Input: PinInputInput,
  HiddenInput: PinInputHiddenInput,
}
