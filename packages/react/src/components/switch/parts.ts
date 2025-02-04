import type { ElementType } from 'react'
import {
  SwitchControl,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  SwitchHiddenInput,
} from './primitives'

/**
 * This module contains the parts of the Radio parts.
 * @module 'radio/parts'
 */

interface SwitchPartsValue {
  /**
   * The container of the field.
   */
  Root: ElementType
  /**
   * The label of the field.
   */
  Label: ElementType
  /**
   * The visual input of the switch.
   */
  Control: ElementType
  /**
   * The thumb item of the switch.
   */
  Thumb: ElementType
  /**
   * The native input for the switch.
   */
  HiddenInput: ElementType
}

/**
 * An Object containing the parts of the Radio component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the SwitchParts object and
 * the entire family of components vs. only what you use.
 */
export const SwitchParts: SwitchPartsValue = {
  Root: SwitchRoot,
  Label: SwitchLabel,
  Control: SwitchControl,
  Thumb: SwitchThumb,
  HiddenInput: SwitchHiddenInput,
}
