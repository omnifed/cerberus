import type { ElementType } from 'react'
import {
  CollapsibleRootProvider,
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleIndicator,
  CollapsibleContent,
} from './primitives'

/**
 * This module contains the parts of the Collapsible component.
 * @module 'collapsible/parts'
 */

interface CollapsiblePartsValue {
  /**
   * The low-level context provider for advanced scenarios
   */
  RootProvider: ElementType
  /**
   * The context provider of the collapsible.
   */
  Root: ElementType
  /**
   * The button that toggles the collapsible.
   */
  Trigger: ElementType
  /**
   * The indicator that shows the state of the collapsible.
   */
  Indicator: ElementType
  /**
   * The content of the collapsible.
   */
  Content: ElementType
}

/**
 * An Object containing the parts of the Collapsible component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the CollapsibleParts object and
 * the entire family of components vs. only what you use.
 */
export const Collapsible: CollapsiblePartsValue = {
  RootProvider: CollapsibleRootProvider,
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Indicator: CollapsibleIndicator,
  Content: CollapsibleContent,
}
