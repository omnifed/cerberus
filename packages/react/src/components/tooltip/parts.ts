import type { ElementType } from 'react'
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
  TooltipArrow,
  TooltipArrowTip,
} from './primitives'

/**
 * This module contains the parts of the Tooltip component.
 * @module 'tooltip/parts'
 */

interface TooltipPartsValue {
  /**
   * The context provider of the tooltip.
   */
  Root: ElementType
  /**
   * The trigger that of the tooltip.
   */
  Trigger: ElementType
  /**
   * The positioner of the tooltip.
   */
  Positioner: ElementType
  /**
   * The content of the tooltip.
   */
  Content: ElementType
  /**
   * The arrow of the tooltip.
   */
  Arrow: ElementType
  /**
   * The arrow tip of the tooltip.
   */
  ArrowTip: ElementType
}

/**
 * An Object containing the parts of the Tooltip component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the TooltipParts object and
 * the entire family of components vs. only what you use.
 */
export const TooltipParts: TooltipPartsValue = {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Positioner: TooltipPositioner,
  Content: TooltipContent,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
}
