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
import { input, type InputVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains all the primitives of the NumberInput component.
 * @module 'number-input'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(input)

// Root

export type NumberInputRootProps = CerberusPrimitiveProps<
  ArkNumberInputRootProps & InputVariantProps
>
export const NumberInputRoot = withSlotRecipe<NumberInputRootProps>(
  NumberInput.Root,
  'root',
)

// Label

export type NumberInputLabelProps =
  CerberusPrimitiveProps<ArkNumberInputLabelProps>
export const NumberInputLabel = withNoRecipe<NumberInputLabelProps>(
  NumberInput.Label,
)

// Input

export type NumberInputInputProps = CerberusPrimitiveProps<
  ArkNumberInputInputProps & InputVariantProps
>
export const NumberInputInput = withSlotRecipe<NumberInputInputProps>(
  NumberInput.Input,
  'input',
)

// Control

export type NumberInputControlProps =
  CerberusPrimitiveProps<ArkNumberInputControlProps>
export const NumberInputControl = withNoRecipe<NumberInputControlProps>(
  NumberInput.Control,
)

// DecrementTrigger

export type NumberInputDecrementTriggerProps =
  CerberusPrimitiveProps<ArkNumberInputDecrementTriggerProps>
export const NumberInputDecrementTrigger =
  withNoRecipe<NumberInputDecrementTriggerProps>(NumberInput.DecrementTrigger)

// IncrementTrigger

export type NumberInputIncrementTriggerProps =
  CerberusPrimitiveProps<ArkNumberInputIncrementTriggerProps>
export const NumberInputIncrementTrigger =
  withNoRecipe<NumberInputIncrementTriggerProps>(NumberInput.IncrementTrigger)

// Scrubber

export type NumberInputScrubberProps =
  CerberusPrimitiveProps<ArkNumberInputScrubberProps>
export const NumberInputScrubber = withNoRecipe<NumberInputScrubberProps>(
  NumberInput.Scrubber,
)
