import type { ElementType } from 'react'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionRoot,
} from './primitives'

/**
 * This module contains the parts of the Accordion component.
 * @module 'accordion/parts'
 */

interface AccordionPartsValue {
  /**
   * The context provider of the accordion.
   */
  Root: ElementType
  /**
   * The item of the accordion.
   */
  Item: ElementType
  /**
   * The trigger of the accordion item.
   */
  ItemTrigger: ElementType
  /**
   * The content of the accordion item.
   */
  ItemContent: ElementType
  /**
   * The indicator of the accordion item.
   */
  ItemIndicator: ElementType
}

/**
 * An Object containing the parts of the Accordion component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the AccordionParts object and
 * the entire family of components vs. only what you use.
 */
export const AccordionParts: AccordionPartsValue = {
  Root: AccordionRoot,
  Item: AccordionItem,
  ItemTrigger: AccordionItemTrigger,
  ItemContent: AccordionItemContent,
  ItemIndicator: AccordionItemIndicator,
}
