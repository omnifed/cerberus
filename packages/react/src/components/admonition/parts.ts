import type { ElementType } from 'react'
import {
  AdmonitionContent,
  AdmonitionDescription,
  AdmonitionHeading,
  AdmonitionIndicator,
  AdmonitionRoot,
} from './primitives'

/**
 * This module contains the parts of the Admonition component.
 * @module 'admonition/parts'
 */

interface AdmonitionPartsValue {
  /**
   * The context provider of the Admonition.
   */
  Root: ElementType
  /**
   * The indicator of the Admonition.
   */
  Indicator: ElementType
  /**
   * The content of the Admonition.
   */
  Content: ElementType
  /**
   * The heading of the Admonition.
   */
  Heading: ElementType
  /**
   * The description of the Admonition.
   */
  Description: ElementType
}

/**
 * An Object containing the parts of the Accordion component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the AdmonitionParts object and
 * the entire family of components vs. only what you use.
 */
export const AdmonitionParts: AdmonitionPartsValue = {
  Root: AdmonitionRoot,
  Indicator: AdmonitionIndicator,
  Content: AdmonitionContent,
  Heading: AdmonitionHeading,
  Description: AdmonitionDescription,
}
