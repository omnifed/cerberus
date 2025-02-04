import type { ElementType } from 'react'
import { ToggleRoot, ToggleIndicator } from './primitives'

/**
 * This module contains the parts of the Toggle parts.
 * @module 'toggle/parts'
 */

interface TogglePartsValue {
  /**
   * The container of the toggle.
   */
  Root: ElementType
  /**
   * The indicator that appears when a toggle is pressed.
   */
  Indicator: ElementType
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
export const ToggleParts: TogglePartsValue = {
  Root: ToggleRoot,
  Indicator: ToggleIndicator,
}
