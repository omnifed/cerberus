import {
  Tooltip,
  type TooltipRootProps as ArkTooltipRootProps,
  type TooltipTriggerProps as ArkTooltipTriggerProps,
  type TooltipPositionerProps as ArkTooltipPositionerProps,
  type TooltipContentProps as ArkTooltipContentProps,
  type TooltipArrowProps as ArkTooltipArrowProps,
  type TooltipArrowTipProps as ArkTooltipArrowTipProps,
} from '@ark-ui/react/tooltip'
import { tooltip } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the Tooltip primitive components.
 * @module TooltipPrimitives
 */

const { withSlotRecipe } = createCerberusPrimitive(tooltip)

// Root

export type TooltipRootProps = CerberusPrimitiveProps<ArkTooltipRootProps>
export const TooltipRoot = withSlotRecipe<TooltipRootProps>(
  Tooltip.Root,
  'root',
)

// Trigger

export type TooltipTriggerProps = CerberusPrimitiveProps<ArkTooltipTriggerProps>
export const TooltipTrigger = withSlotRecipe<TooltipTriggerProps>(
  Tooltip.Trigger,
  'trigger',
)

// Positioner

export type TooltipPositionerProps =
  CerberusPrimitiveProps<ArkTooltipPositionerProps>
export const TooltipPositioner = withSlotRecipe<TooltipPositionerProps>(
  Tooltip.Positioner,
  'positioner',
)

// Content

export type TooltipContentProps = CerberusPrimitiveProps<ArkTooltipContentProps>
export const TooltipContent = withSlotRecipe<TooltipContentProps>(
  Tooltip.Content,
  'content',
)

// Arrow

export type TooltipArrowProps = CerberusPrimitiveProps<ArkTooltipArrowProps>
export const TooltipArrow = withSlotRecipe<TooltipArrowProps>(
  Tooltip.Arrow,
  'arrow',
)

// ArrowTip

export type TooltipArrowTipProps =
  CerberusPrimitiveProps<ArkTooltipArrowTipProps>
export const TooltipArrowTip = withSlotRecipe<TooltipArrowTipProps>(
  Tooltip.ArrowTip,
  'arrowTip',
)
