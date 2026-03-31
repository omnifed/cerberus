import type { ElementType } from 'react'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPositioner,
  PopoverArrow,
  PopoverArrowTip,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverCloseTrigger,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from './primitives'

/**
 * This module contains the parts of the NumberInput component.
 * @module 'number-input/parts'
 */

interface PopoverPartsValue {
  /**
   * The context provider of the popover.
   */
  Root: ElementType
  /**
   * The trigger element of the popover.
   */
  Trigger: ElementType
  /**
   * The anchor element of the popover.
   */
  Anchor: ElementType
  /**
   * The positioner container for popover content.
   */
  Positioner: ElementType
  /**
   * The arrow element of the popover.
   */
  Arrow: ElementType
  /**
   * The arrow tip element of the popover.
   */
  ArrowTip: ElementType
  /**
   * The the content of the popover.
   */
  Content: ElementType
  /**
   * The the title of the popover.
   */
  Title: ElementType
  /**
   * The the description of the popover.
   */
  Description: ElementType
  /**
   * The close trigger element of the popover.
   */
  CloseTrigger: ElementType
  /**
   * The header element of the popover.
   */
  Header: ElementType
  /**
   * The body element of the popover.
   */
  Body: ElementType
  /**
   * The footer element of the popover.
   */
  Footer: ElementType
}

/**
 * An Object containing the parts of the NumberInput component. For users that
 * prefer Object component syntax.
 */
export const PopoverParts: PopoverPartsValue = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Anchor: PopoverAnchor,
  Positioner: PopoverPositioner,
  Arrow: PopoverArrow,
  ArrowTip: PopoverArrowTip,
  Content: PopoverContent,
  Title: PopoverTitle,
  Description: PopoverDescription,
  CloseTrigger: PopoverCloseTrigger,
  Header: PopoverHeader,
  Body: PopoverBody,
  Footer: PopoverFooter,
}
