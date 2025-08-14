import { pinInput, type PinInputVariantProps } from 'styled-system/recipes'
import {
  PinInput as ArkPinInput,
  type PinInputRootProps as ArkPinInputRootProps,
  type PinInputLabelProps as ArkPinInputLabelProps,
  type PinInputInputProps as ArkPinInputInputProps,
  type PinInputControlProps as ArkPinInputControlProps,
  type PinInputHiddenInputProps as ArkPinInputHiddenInputProps,
} from '@ark-ui/react/pin-input'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains all the primitives of the PinInput component.
 * @module 'pin-input'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(pinInput)

// Root
export type PinInputRootProps = CerberusPrimitiveProps<
  ArkPinInputRootProps & PinInputVariantProps
>
export const PinInputRoot = withSlotRecipe<PinInputRootProps>(
  ArkPinInput.Root,
  'root',
)

// Label
export type PinInputLabelProps = CerberusPrimitiveProps<ArkPinInputLabelProps>
export const PinInputLabel = withSlotRecipe<PinInputLabelProps>(
  ArkPinInput.Label,
  'label',
)

// Control
export type PinInputControlProps =
  CerberusPrimitiveProps<ArkPinInputControlProps>
export const PinInputControl = withSlotRecipe<PinInputControlProps>(
  ArkPinInput.Control,
  'control',
)

// Input
export type PinInputInputProps = CerberusPrimitiveProps<
  ArkPinInputInputProps & PinInputVariantProps
>
export const PinInputInput = withSlotRecipe<PinInputInputProps>(
  ArkPinInput.Input,
  'input',
)

// HiddenInput
export type PinInputHiddenInputProps =
  CerberusPrimitiveProps<ArkPinInputHiddenInputProps>
export const PinInputHiddenInput = withNoRecipe<PinInputHiddenInputProps>(
  ArkPinInput.HiddenInput,
)
