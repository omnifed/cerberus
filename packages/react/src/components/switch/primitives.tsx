import {
  Switch,
  type SwitchControlProps as ArkSwitchControlProps,
  type SwitchHiddenInputProps as ArkSwitchHiddenInputProps,
  type SwitchLabelProps as ArkSwitchLabelProps,
  type SwitchRootProps as ArkSwitchRootProps,
  type SwitchThumbProps as ArkSwitchThumbProps,
} from '@ark-ui/react/switch'
import {
  switchRecipe,
  type SwitchRecipeVariantProps,
} from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the Switch primitives
 * @module 'react/switch'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(switchRecipe)

// Root

export type SwitchRootProps = CerberusPrimitiveProps<
  ArkSwitchRootProps & SwitchRecipeVariantProps
>
export const SwitchRoot = withSlotRecipe<SwitchRootProps>(Switch.Root, 'root')

// Label

export type SwitchLabelProps = CerberusPrimitiveProps<ArkSwitchLabelProps>
export const SwitchLabel = withSlotRecipe<SwitchLabelProps>(
  Switch.Label,
  'label',
)

// Control

export type SwitchControlProps = CerberusPrimitiveProps<ArkSwitchControlProps>
export const SwitchControl = withSlotRecipe<SwitchControlProps>(
  Switch.Control,
  'control',
)

// Thumb

export type SwitchThumbProps = CerberusPrimitiveProps<ArkSwitchThumbProps>
export const SwitchThumb = withSlotRecipe<SwitchThumbProps>(
  Switch.Thumb,
  'thumb',
)

// HiddenInput

export type SwitchHiddenInputProps =
  CerberusPrimitiveProps<ArkSwitchHiddenInputProps>
export const SwitchHiddenInput = withNoRecipe<SwitchHiddenInputProps>(
  Switch.HiddenInput,
)
