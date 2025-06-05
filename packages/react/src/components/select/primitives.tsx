import {
  createListCollection,
  Select,
  type ListCollection,
  type SelectClearTriggerProps as ArkSelectClearTrigger,
  type SelectContentProps as ArkSelectContentProps,
  type SelectControlProps as ArkSelectControlProps,
  type SelectHiddenSelectProps as ArkSelectHiddenSelectProps,
  type SelectIndicatorProps as ArkSelectIndicatorProps,
  type SelectItemGroupLabelProps as ArkSelectItemGroupLabelProps,
  type SelectItemGroupProps as ArkSelectItemGroupProps,
  type SelectItemIndicatorProps as ArkSelectItemIndicatorProps,
  type SelectItemProps as ArkSelectItemProps,
  type SelectItemTextProps as ArkSelectItemTextProps,
  type SelectLabelProps as ArkSelectLabelProps,
  type SelectPositionerProps as ArkSelectPositionerProps,
  type SelectRootProps as ArkSelectRootProps,
  type SelectTriggerProps as ArkSelectTriggerProps,
  type SelectValueChangeDetails,
  type SelectValueTextProps as ArkSelectValueTextProps,
} from '@ark-ui/react/select'
import { select, type SelectVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'
import type { SelectCollectionItem } from './select'

/**
 * This module contains the Select primitives
 * @module 'react/select'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(select)

// Root

export type SelectRootProps = CerberusPrimitiveProps<
  ArkSelectRootProps<SelectCollectionItem> & SelectVariantProps
>
// @ts-expect-error this is a workaround for the type mismatch WIP
export const SelectRoot = withSlotRecipe<SelectRootProps>(Select.Root, 'root')

// Label

export type SelectLabelProps = CerberusPrimitiveProps<ArkSelectLabelProps>
export const SelectLabel = withSlotRecipe<SelectLabelProps>(
  Select.Label,
  'label',
)

// Control

export type SelectControlProps = CerberusPrimitiveProps<ArkSelectControlProps>
export const SelectControl = withNoRecipe<SelectControlProps>(Select.Control)

// Trigger

export type SelectTriggerProps = CerberusPrimitiveProps<ArkSelectTriggerProps>
export const SelectTrigger = withSlotRecipe<SelectTriggerProps>(
  Select.Trigger,
  'trigger',
)

// Value Text

export type SelectValueTextProps =
  CerberusPrimitiveProps<ArkSelectValueTextProps>
export const SelectValueText = withNoRecipe<SelectValueTextProps>(
  Select.ValueText,
)

// Indicator

export type SelectIndicatorProps =
  CerberusPrimitiveProps<ArkSelectIndicatorProps>
export const SelectIndicator = withSlotRecipe<SelectIndicatorProps>(
  Select.Indicator,
  'indicator',
)

// Clear Trigger

export type SelectClearTriggerProps =
  CerberusPrimitiveProps<ArkSelectClearTrigger>
export const SelectClearTrigger = withNoRecipe<SelectClearTriggerProps>(
  Select.ClearTrigger,
)

// Positioner

export type SelectPositionerProps =
  CerberusPrimitiveProps<ArkSelectPositionerProps>
export const SelectPositioner = withSlotRecipe<SelectPositionerProps>(
  Select.Positioner,
  'positioner',
)

// Content

export type SelectContentProps = CerberusPrimitiveProps<
  ArkSelectContentProps & SelectVariantProps
>
export const SelectContent = withSlotRecipe<SelectContentProps>(
  Select.Content,
  'content',
)

// Item Group

export type SelectItemGroupProps =
  CerberusPrimitiveProps<ArkSelectItemGroupProps>
export const SelectItemGroup = withNoRecipe<SelectItemGroupProps>(
  Select.ItemGroup,
)

// Item Group Label

export type SelectItemGroupLabelProps =
  CerberusPrimitiveProps<ArkSelectItemGroupLabelProps>
export const SelectItemGroupLabel = withSlotRecipe<SelectItemGroupLabelProps>(
  Select.ItemGroupLabel,
  'itemGroupLabel',
)

// Item

export type SelectItemProps = CerberusPrimitiveProps<ArkSelectItemProps>
export const SelectItem = withSlotRecipe<SelectItemProps>(Select.Item, 'item')

// Item Text

export type SelectItemTextProps = CerberusPrimitiveProps<ArkSelectItemTextProps>
export const SelectItemText = withNoRecipe<SelectItemTextProps>(Select.ItemText)

// Item Indicator

export type SelectItemIndicatorProps =
  CerberusPrimitiveProps<ArkSelectItemIndicatorProps>
export const SelectItemIndicator = withSlotRecipe<SelectItemIndicatorProps>(
  Select.ItemIndicator,
  'itemIndicator',
)

// Hidden Select

export type SelectHiddenSelectProps =
  CerberusPrimitiveProps<ArkSelectHiddenSelectProps>
export const SelectHiddenSelect = withNoRecipe<SelectHiddenSelectProps>(
  Select.HiddenSelect,
)

// Collection

/**
 * A helper function to create a SelectCollection object.
 * @param collection - An array of SelectCollectionItem objects that matches
 * the following shape:
 * ```ts
 * [{ label: 'Hades', value: 'hades', disabled?: true }]
 * ```
 */
export function createSelectCollection(
  collection: SelectCollectionItem[],
): ListCollection<SelectCollectionItem> {
  return createListCollection({
    items: collection,
  })
}

export type { SelectValueChangeDetails, ListCollection }
