import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupIndicatorProps as ArkRadioGroupIndicatorProps,
  type RadioGroupItemControlProps as ArkRadioGroupItemControlProps,
  type RadioGroupItemHiddenInputProps as ArkRadioGroupItemHiddenInputProps,
  type RadioGroupItemProps as ArkRadioGroupItemProps,
  type RadioGroupItemTextProps as ArkRadioGroupItemTextProps,
  type RadioGroupLabelProps as ArkRadioGroupLabelProps,
  type RadioGroupRootProps as ArkRadioGroupRootProps,
} from '@ark-ui/react/radio-group'
import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the Radio primitives
 * @module 'react/radio'
 */

const { withSlotRecipe } = createCerberusPrimitive(radioGroup)

// Root

export type RadioGroupRootProps = CerberusPrimitiveProps<
  ArkRadioGroupRootProps & RadioGroupVariantProps
>
// @ts-expect-error this is a workaround for the type WIP
export const RadioGroupRoot = withSlotRecipe<RadioGroupRootProps>(
  ArkRadioGroup.Root,
  'root',
)

// Label

export type RadioGroupLabelProps =
  CerberusPrimitiveProps<ArkRadioGroupLabelProps>
export const RadioGroupLabel = withSlotRecipe<RadioGroupLabelProps>(
  ArkRadioGroup.Label,
  'label',
)

// Indicator

export type RadioGroupIndicatorProps =
  CerberusPrimitiveProps<ArkRadioGroupIndicatorProps>
export const RadioGroupIndicator = withSlotRecipe<RadioGroupIndicatorProps>(
  ArkRadioGroup.Indicator,
  'indicator',
)

// Item

export type RadioGroupItemProps = CerberusPrimitiveProps<ArkRadioGroupItemProps>
export const RadioGroupItem = withSlotRecipe<RadioGroupItemProps>(
  ArkRadioGroup.Item,
  'item',
)

// Item Text

export type RadioGroupItemTextProps = CerberusPrimitiveProps<
  ArkRadioGroupItemTextProps & RadioGroupVariantProps
>
export const RadioGroupItemText = withSlotRecipe<RadioGroupItemTextProps>(
  ArkRadioGroup.ItemText,
  'itemText',
)

// Item Control

export type RadioGroupItemControlProps = CerberusPrimitiveProps<
  ArkRadioGroupItemControlProps & RadioGroupVariantProps
>
export const RadioGroupItemControl = withSlotRecipe<RadioGroupItemControlProps>(
  ArkRadioGroup.ItemControl,
  'itemControl',
)

// Item Hidden Input

export type RadioGroupItemHiddenInputProps = ArkRadioGroupItemHiddenInputProps
export const RadioGroupItemHiddenInput = ArkRadioGroup.ItemHiddenInput

/**
 * The context provider for a set of radio buttons.
 * It provides the necessary context for managing the state of the radio group.
 * @see {@link https://cerberus.digitalu.design/react/radio/overview}
 *
 * @example
 * ```tsx
 * import { RadioGroup } from '@cerberus/react/radio';
 *
 * <RadioGroup defaultValue="cerberus">
 *   <Radio value="cerberus">Cerberus</Radio>
 *   <Radio value="hades">Hades</Radio>
 *   <Radio value="zeus">Zeus</Radio>
 * </RadioGroup>
 * ```
 */
export const RadioGroup = RadioGroupRoot
