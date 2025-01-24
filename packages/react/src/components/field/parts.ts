import type { ElementType } from 'react'
import {
  FieldErrorText,
  FieldHelperText,
  FieldInput,
  FieldLabel,
  FieldRoot,
  FieldTextarea,
} from './field'
import { FieldStatusIndicator } from './status-indicator'

/**
 * This module contains the parts of the Field component.
 * @module 'field/parts'
 */

interface FieldPartsValue {
  /**
   * The container of the field.
   */
  Root: ElementType
  /**
   * The label of the field.
   */
  Label: ElementType
  /**
   * The input of the field.
   */
  Input: ElementType
  /**
   * The textarea of the field.
   */
  Textarea: ElementType
  /**
   * The text that displays when the field is valid.
   */
  HelperText: ElementType
  /**
   * The text that displays when the field is invalid.
   */
  ErrorText: ElementType
  /**
   * The status indicator of the field.
   */
  StatusIndicator: ElementType
}

/**
 * An Object containing the parts of the Field component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the FieldParts object and
 * the entire family of components vs. only what you use.
 */
export const FieldParts: FieldPartsValue = {
  Root: FieldRoot,
  Label: FieldLabel,
  Input: FieldInput,
  Textarea: FieldTextarea,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
  StatusIndicator: FieldStatusIndicator,
}
