import {
  Dialog,
  type DialogBackdropProps as ArkDialogBackdropProps,
  type DialogContentProps as ArkDialogContentProps,
  type DialogDescriptionProps as ArkDialogDescriptionProps,
  type DialogPositionerProps as ArkDialogPositionerProps,
  type DialogRootProps as ArkDialogRootProps,
  type DialogTitleProps as ArkDialogTitleProps,
  type DialogTriggerProps as ArkDialogTriggerProps,
} from '@ark-ui/react/dialog'
import { dialog, type DialogVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Dialog component.
 * @module 'dialog/primitives'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(dialog)

/**
 * The provider that controls the dialog components.
 */
export type DialogRootProps = CerberusPrimitiveProps<ArkDialogRootProps>
export const DialogRoot = withNoRecipe(Dialog.Root)

/**
 * An abstraction of the DialogRoot component for naming consistency.
 */
export const DialogProvider = DialogRoot

/**
 * The trigger that opens the dialog.
 */
export type DialogTriggerProps = CerberusPrimitiveProps<ArkDialogTriggerProps>
export const DialogTrigger = withSlotRecipe(Dialog.Trigger, 'trigger')

/**
 * The overlay of the dialog.
 */
export type DialogBackdropProps = CerberusPrimitiveProps<ArkDialogBackdropProps>
export const DialogBackdrop = withSlotRecipe(Dialog.Backdrop, 'backdrop')

/**
 * The container that positions the dialog.
 */
export type DialogPositionerProps =
  CerberusPrimitiveProps<ArkDialogPositionerProps>
export const DialogPositioner = withSlotRecipe(Dialog.Positioner, 'positioner')

/**
 * The visible content of the dialog.
 */
export type DialogContentProps = CerberusPrimitiveProps<
  ArkDialogContentProps & DialogVariantProps
>
export const DialogContent = withSlotRecipe(Dialog.Content, 'content')

/**
 * The heading of the dialog.
 */
export type DialogHeadingProps = CerberusPrimitiveProps<ArkDialogTitleProps>
export const DialogHeading = withSlotRecipe(Dialog.Title, 'title')

/**
 * The description of the dialog.
 */
export type DialogDescriptionProps =
  CerberusPrimitiveProps<ArkDialogDescriptionProps>
export const DialogDescription = withSlotRecipe(
  Dialog.Description,
  'description',
)

/**
 * The trigger that closes the dialog.
 */
export type DialogCloseTriggerProps =
  CerberusPrimitiveProps<ArkDialogTriggerProps>
export const DialogCloseTrigger = withNoRecipe(Dialog.CloseTrigger)
