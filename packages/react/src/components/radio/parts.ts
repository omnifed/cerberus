import type { ElementType } from 'react'
import {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
} from './primitives'

/**
 * This module contains the parts of the Radio parts.
 * @module 'radio/parts'
 */

interface RadioPartsValue {
  /**
   * The container of the field.
   */
  Root: ElementType
  /**
   * The label of the field.
   */
  Label: ElementType
  /**
   * The indicator that appears when a radio is checked.
   */
  Indicator: ElementType
  /**
   * An individual radio item of the field.
   */
  Item: ElementType
  /**
   * The text that labels a single radio of the field.
   */
  ItemText: ElementType
  /**
   * The visual radio control of the field.
   */
  ItemControl: ElementType
  /**
   * The native input for a radio item in the field.
   */
  ItemHiddenInput: ElementType
}

/**
 * An Object containing the parts of the Radio component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the RadioParts object and
 * the entire family of components vs. only what you use.
 */
export const RadioParts: RadioPartsValue = {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Indicator: RadioGroupIndicator,
  Item: RadioGroupItem,
  ItemText: RadioGroupItemText,
  ItemControl: RadioGroupItemControl,
  ItemHiddenInput: RadioGroupItemHiddenInput,
}
