import {
  Combobox,
  type ComboboxClearTriggerProps as ArkComboboxClearTriggerProps,
  type ComboboxContentProps as ArkComboboxContentProps,
  type ComboboxControlProps as ArkComboboxControlProps,
  type ComboboxInputProps as ArkComboboxInputProps,
  type ComboboxItemGroupLabelProps as ArkComboboxItemGroupLabelProps,
  type ComboboxItemGroupProps as ArkComboboxItemGroupProps,
  type ComboboxItemIndicatorProps as ArkComboboxItemIndicatorProps,
  type ComboboxItemProps as ArkComboboxItemProps,
  type ComboboxItemTextProps as ArkComboboxItemTextProps,
  type ComboboxLabelProps as ArkComboboxLabelProps,
  type ComboboxPositionerProps as ArkComboboxPositionerProps,
  type ComboboxRootProps as ArkComboboxRootProps,
  type ComboboxTriggerProps as ArkComboboxTriggerProps,
} from '@ark-ui/react/combobox'
import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import type { SelectCollectionItem } from '../select/select'
import { combobox, type ComboboxVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system'

/**
 * This module contains the primitives of the Combobox.
 * @module 'combobox/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(combobox)

/**
 * The ComboboxRoot component is the context provider for the Combobox
 * component.
 */

// @ts-expect-error there is a type mismatch here, but it works in practice
export const ComboboxRoot = withSlotRecipe<ComboboxRootProps>(
  Combobox.Root,
  'root',
)
export type ComboboxRootProps = CerberusPrimitiveProps<
  ArkComboboxRootProps<SelectCollectionItem> & ComboboxVariantProps
>

/**
 * The label that appears above the combobox input.
 */
export const ComboboxLabel = withSlotRecipe<ComboboxLabelProps>(
  Combobox.Label,
  'label',
)
export type ComboboxLabelProps = CerberusPrimitiveProps<ArkComboboxLabelProps>

/**
 * The control that wraps the combobox input.
 */
export const ComboboxControl = withSlotRecipe<ComboboxControlProps>(
  Combobox.Control,
  'control',
)
export type ComboboxControlProps =
  CerberusPrimitiveProps<ArkComboboxControlProps>

/**
 * The input of the combobox.
 */
export const ComboboxInput = withSlotRecipe<ComboboxInputProps>(
  Combobox.Input,
  'input',
)
export type ComboboxInputProps = CerberusPrimitiveProps<ArkComboboxInputProps>

/**
 * The trigger that opens the dropdown.
 */
export const ComboboxTrigger = withSlotRecipe<ComboboxTriggerProps>(
  Combobox.Trigger,
  'trigger',
)
export type ComboboxTriggerProps =
  CerberusPrimitiveProps<ArkComboboxTriggerProps>

/**
 * The trigger to clear the combobox input.
 */
export const ComboboxClearTrigger = withSlotRecipe<ComboboxClearTriggerProps>(
  Combobox.ClearTrigger,
  'clearTrigger',
)
export type ComboboxClearTriggerProps =
  CerberusPrimitiveProps<ArkComboboxClearTriggerProps>

/**
 * The positioner that wraps the content.
 */
export const ComboboxPositioner = withSlotRecipe<ComboboxPositionerProps>(
  Combobox.Positioner,
  'positioner',
)
export type ComboboxPositionerProps =
  CerberusPrimitiveProps<ArkComboboxPositionerProps>

/**
 * The content of the combobox component.
 */
export const ComboboxContent = withSlotRecipe<ComboboxContentProps>(
  Combobox.Content,
  'content',
)
export type ComboboxContentProps = CerberusPrimitiveProps<
  ArkComboboxContentProps & ComboboxVariantProps
>

/**
 * A group of items in the combobox component.
 */
export const ComboboxItemGroup = withSlotRecipe<ComboboxItemGroupProps>(
  Combobox.ItemGroup,
  'itemGroup',
)
export type ComboboxItemGroupProps =
  CerberusPrimitiveProps<ArkComboboxItemGroupProps>

/**
 * The label for a group of items in the combobox component.
 */
export const ComboboxItemGroupLabel =
  withSlotRecipe<ComboboxItemGroupLabelProps>(
    Combobox.ItemGroupLabel,
    'itemGroupLabel',
  )
export type ComboboxItemGroupLabelProps =
  CerberusPrimitiveProps<ArkComboboxItemGroupLabelProps>

/**
 * An individual item in the combobox component.
 */
export const ComboboxItem = withSlotRecipe<ComboboxItemProps>(
  Combobox.Item,
  'item',
)
export type ComboboxItemProps = CerberusPrimitiveProps<ArkComboboxItemProps>

/**
 * The text that labels a single item of the combobox.
 */
export const ComboboxItemText = withSlotRecipe<ComboboxItemTextProps>(
  Combobox.ItemText,
  'itemText',
)
export type ComboboxItemTextProps =
  CerberusPrimitiveProps<ArkComboboxItemTextProps>

/**
 * The indicator that appears when the item has been selected.
 */
export const ComboboxItemIndicator = withSlotRecipe<ComboboxItemIndicatorProps>(
  Combobox.ItemIndicator,
  'itemIndicator',
)
export type ComboboxItemIndicatorProps =
  CerberusPrimitiveProps<ArkComboboxItemIndicatorProps>

/**
 * The icon that appears at the start of the combobox input.
 */
export const ComboboxStartIcon = withSlotRecipe<ComboboxStartIconProps>(
  ark.span,
  'startIcon',
)
export type ComboboxStartIconProps = CerberusPrimitiveProps<
  HTMLArkProps<'span'>
>

// We are only doing this to make the API consistent
export const ComboItemText = ComboboxItemText
export type ComboboxInputValueChangeDetails = Combobox.InputValueChangeDetails
