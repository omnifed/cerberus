import {
  Clipboard,
  type ClipboardRootProps as ArkRootProps,
  type ClipboardLabelProps as ArkLabelProps,
  type ClipboardControlProps as ArkControlProps,
  type ClipboardInputProps as ArkInputProps,
  type ClipboardTriggerProps as ArkTriggerProps,
  type ClipboardIndicatorProps as ArkIndicatorProps,
} from '@ark-ui/react/clipboard'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the Clipboard component primitives.
 * @module @cerberus-design/react/components/clipboard/primitives
 */

const { withNoRecipe } = createCerberusPrimitive()

// Root

export type ClipboardRootProps = CerberusPrimitiveProps<ArkRootProps>
export const ClipboardRoot = withNoRecipe(Clipboard.Root)

// Label

export type ClipboardLabelProps = CerberusPrimitiveProps<ArkLabelProps>
export const ClipboardLabel = withNoRecipe(Clipboard.Label)

// Control

export type ClipboardControlProps = CerberusPrimitiveProps<ArkControlProps>
export const ClipboardControl = withNoRecipe(Clipboard.Control)

// Input

export type ClipboardInputProps = CerberusPrimitiveProps<ArkInputProps>
export const ClipboardInput = withNoRecipe(Clipboard.Input)

// Trigger

export type ClipboardTriggerProps = CerberusPrimitiveProps<ArkTriggerProps>
export const ClipboardTrigger = withNoRecipe(Clipboard.Trigger)

// Indicator

export type ClipboardIndicatorProps = CerberusPrimitiveProps<ArkIndicatorProps>
export const ClipboardIndicator = withNoRecipe(Clipboard.Indicator)
