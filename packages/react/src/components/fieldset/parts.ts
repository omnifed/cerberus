import type { ElementType } from 'react'
import {
  FieldsetErrorText,
  FieldsetHelperText,
  FieldsetLegend,
  FieldsetRoot,
} from './primitives'

/**
 * This module contains the parts of the Field component.
 * @module 'field/parts'
 */

interface FieldsetPartsValue {
  /**
   * The container of the field.
   */
  Root: ElementType
  /**
   * The label of the field.
   */
  Legend: ElementType
  /**
   * The text that displays when the field is valid.
   */
  HelperText: ElementType
  /**
   * The text that displays when the field is invalid.
   */
  ErrorText: ElementType
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
export const FieldsetParts: FieldsetPartsValue = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
  HelperText: FieldsetHelperText,
  ErrorText: FieldsetErrorText,
}
