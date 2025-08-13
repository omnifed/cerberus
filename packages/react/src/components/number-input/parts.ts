import type { ElementType } from 'react'
import {
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputRoot,
  NumberInputScrubber,
} from './primitives'

/**
 * This module contains the parts of the NumberInput component.
 * @module 'number-input/parts'
 */

interface NumberInputPartsValue {
  /**
   * The context provider of the number input.
   */
  Root: ElementType
  /**
   * The label of the number input.
   */
  Label: ElementType
  /**
   * The input element of the number input.
   */
  Input: ElementType
  /**
   * The control container for increment and decrement buttons.
   */
  Control: ElementType
  /**
   * The button to decrement the value.
   */
  DecrementTrigger: ElementType
  /**
   * The button to increment the value.
   */
  IncrementTrigger: ElementType
  /**
   * The scrubber element for pointer-based value adjustment.
   */
  Scrubber: ElementType
}

/**
 * An Object containing the parts of the NumberInput component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the NumberInputParts object and
 * the entire family of components vs. only what you use.
 */
export const NumberInputParts: NumberInputPartsValue = {
  Root: NumberInputRoot,
  Label: NumberInputLabel,
  Input: NumberInputInput,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  IncrementTrigger: NumberInputIncrementTrigger,
  Scrubber: NumberInputScrubber,
}
