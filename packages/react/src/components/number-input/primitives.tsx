import {
  NumberInput,
  type NumberInputControlProps as ArkNumberInputControlProps,
  type NumberInputDecrementTriggerProps as ArkNumberInputDecrementTriggerProps,
  type NumberInputIncrementTriggerProps as ArkNumberInputIncrementTriggerProps,
  type NumberInputInputProps as ArkNumberInputInputProps,
  type NumberInputLabelProps as ArkNumberInputLabelProps,
  type NumberInputRootProps as ArkNumberInputRootProps,
  type NumberInputScrubberProps as ArkNumberInputScrubberProps,
} from '@ark-ui/react/number-input'
import {
  numberInput,
  type NumberInputVariantProps,
} from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains all the primitives of the NumberInput component.
 * @module 'number-input'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(numberInput)

// Root

export type NumberInputRootProps = CerberusPrimitiveProps<
  ArkNumberInputRootProps & NumberInputVariantProps
>
export const NumberInputRoot = withSlotRecipe(NumberInput.Root, 'root')

// Label

export type NumberInputLabelProps =
  CerberusPrimitiveProps<ArkNumberInputLabelProps>
export const NumberInputLabel = withNoRecipe(NumberInput.Label)

// Input

export type NumberInputInputProps =
  CerberusPrimitiveProps<ArkNumberInputInputProps>
export const NumberInputInput = withSlotRecipe(NumberInput.Input, 'input')

// Control

export type NumberInputControlProps =
  CerberusPrimitiveProps<ArkNumberInputControlProps>
export const NumberInputControl = withSlotRecipe(NumberInput.Control, 'control')

// DecrementTrigger

export type NumberInputDecrementTriggerProps =
  CerberusPrimitiveProps<ArkNumberInputDecrementTriggerProps>
export const NumberInputDecrementTrigger = withSlotRecipe(
  NumberInput.DecrementTrigger,
  'decrementTrigger',
)

// IncrementTrigger

export type NumberInputIncrementTriggerProps =
  CerberusPrimitiveProps<ArkNumberInputIncrementTriggerProps>
export const NumberInputIncrementTrigger = withSlotRecipe(
  NumberInput.IncrementTrigger,
  'incrementTrigger',
)

// Scrubber

export type NumberInputScrubberProps =
  CerberusPrimitiveProps<ArkNumberInputScrubberProps>
export const NumberInputScrubber = withNoRecipe(NumberInput.Scrubber)
