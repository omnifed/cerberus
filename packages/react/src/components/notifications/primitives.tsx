import {
  Toast,
  Toaster,
  type ToastActionTriggerProps,
  type ToastCloseTriggerProps,
  type ToastDescriptionProps,
  type ToasterProps,
  type ToastRootProps,
  type ToastTitleProps,
} from '@ark-ui/react/toast'
import { toast, type ToastVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the Notification component.
 * @module 'notification/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(toast)

// Toaster

export type NotificationProviderProps = ToasterProps
export const NotificationProvider = Toaster

// Root

export type NotificationRootProps = CerberusPrimitiveProps<
  ToastRootProps & ToastVariantProps
>
export const NotificationRoot = withSlotRecipe(Toast.Root, 'root')

// Heading

export type NotificationHeadingProps = CerberusPrimitiveProps<ToastTitleProps>
export const NotificationHeading = withSlotRecipe(Toast.Title, 'title')

// Description

export type NotificationDescriptionProps =
  CerberusPrimitiveProps<ToastDescriptionProps>
export const NotificationDescription = withSlotRecipe(
  Toast.Description,
  'description',
)

// Close Trigger

export type NotificationCloseTriggerProps =
  CerberusPrimitiveProps<ToastCloseTriggerProps>
export const NotificationCloseTrigger = withSlotRecipe(
  Toast.CloseTrigger,
  'closeTrigger',
)

// Action Trigger

export type NotificationActionTriggerProps =
  CerberusPrimitiveProps<ToastActionTriggerProps>
export const NotificationActionTrigger = withSlotRecipe(
  Toast.ActionTrigger,
  'actionTrigger',
)
