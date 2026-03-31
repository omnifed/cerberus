import {
  Popover as ArkPopover,
  type PopoverAnchorProps as ArkPopoverAnchorProps,
  type PopoverArrowProps as ArkPopoverArrowProps,
  type PopoverArrowTipProps as ArkPopoverArrowTipProps,
  type PopoverCloseTriggerProps as ArkPopoverCloseTriggerProps,
  type PopoverContentProps as ArkPopoverContentProps,
  type PopoverDescriptionProps as ArkPopoverDescriptionProps,
  type PopoverPositionerProps as ArkPopoverPositionerProps,
  type PopoverRootProps as ArkPopoverRootProps,
  type PopoverTitleProps as ArkPopoverTitleProps,
  type PopoverTriggerProps as ArkPopoverTriggerProps,
} from '@ark-ui/react/popover'
import { popover, type PopoverVariantProps } from 'styled-system/recipes'
import {
  CerberusProps,
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(popover)

export type PopoverRootProps = CerberusPrimitiveProps<
  ArkPopoverRootProps & PopoverVariantProps
>
export const PopoverRoot = withSlotRecipe(ArkPopover.Root, 'root')

export type PopoverTriggerProps = CerberusPrimitiveProps<ArkPopoverTriggerProps>
export const PopoverTrigger = withNoRecipe(ArkPopover.Trigger)

export type PopoverAnchorProps = CerberusPrimitiveProps<ArkPopoverAnchorProps>
export const PopoverAnchor = withNoRecipe(ArkPopover.Anchor)

export type PopoverPositionerProps = CerberusPrimitiveProps<ArkPopoverPositionerProps>
export const PopoverPositioner = withNoRecipe(ArkPopover.Positioner)

export type PopoverArrowProps = CerberusPrimitiveProps<ArkPopoverArrowProps>
export const PopoverArrow = withSlotRecipe(ArkPopover.Arrow, 'arrow')

export type PopoverArrowTipProps = CerberusPrimitiveProps<ArkPopoverArrowTipProps>
export const PopoverArrowTip = withSlotRecipe(ArkPopover.ArrowTip, 'arrowTip')

export type PopoverContentProps = CerberusPrimitiveProps<ArkPopoverContentProps>
export const PopoverContent = withSlotRecipe(ArkPopover.Content, 'content')

export type PopoverTitleProps = CerberusPrimitiveProps<ArkPopoverTitleProps>
export const PopoverTitle = withNoRecipe(ArkPopover.Title)

export type PopoverDescriptionProps = CerberusPrimitiveProps<ArkPopoverDescriptionProps>
export const PopoverDescription = withNoRecipe(ArkPopover.Description)

export type PopoverCloseTriggerProps =
  CerberusPrimitiveProps<ArkPopoverCloseTriggerProps>
export const PopoverCloseTrigger = withSlotRecipe(
  ArkPopover.CloseTrigger,
  'closeTrigger',
)

// layout primitives

export type PopoverHeaderProps = CerberusProps<'div'>
export const PopoverHeader = withSlotRecipe('div', 'header', {
  defaultProps: createDeafultProps('header'),
})

export type PopoverBodyProps = CerberusProps<'div'>
export const PopoverBody = withSlotRecipe('div', 'body', {
  defaultProps: createDeafultProps('body'),
})

export type PopoverFooterProps = CerberusProps<'div'>
export const PopoverFooter = withSlotRecipe('div', 'footer', {
  defaultProps: createDeafultProps('footer'),
})

// Attrs

function createDeafultProps(slot: string) {
  return {
    'data-scope': 'popover',
    'data-part': slot,
  }
}
