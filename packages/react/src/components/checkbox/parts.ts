import type { ElementType } from 'react'
import {
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
  CheckboxIndicator,
  CheckboxHiddenInput,
  CheckboxGroup,
} from './primitives'

/**
 * This module contains the parts of the Field component.
 * @module 'field/parts'
 */

interface CheckboxPartsValue {
  /**
   * The container of the field.
   */
  Root: ElementType
  /**
   * The label of the field.
   */
  Label: ElementType
  /**
   * The control of the field.
   */
  Control: ElementType
  /**
   * The indicator of the field.
   */
  Indicator: ElementType
  /**
   * The hidden input of the field.
   */
  HiddenInput: ElementType
  /**
   * The checkbox group component.
   */
  Group: ElementType
}

/**
 * An Object containing the parts of the Checkbox component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the CheckboxParts object and
 * the entire family of components vs. only what you use.
 */
export const CheckboxParts: CheckboxPartsValue = {
  Root: CheckboxRoot,
  Label: CheckboxLabel,
  Control: CheckboxControl,
  Indicator: CheckboxIndicator,
  HiddenInput: CheckboxHiddenInput,
  Group: CheckboxGroup,
}
