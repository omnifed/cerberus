import { Select as ArkSelect, type SelectRootProps } from '@ark-ui/react/select'
import type { SelectCollectionItem } from './Select'

/**
 * Select Primitive: The context provider for the Select family
 */
export function SelectRoot(props: SelectRootProps<SelectCollectionItem>) {
  const { children, ...rootProps } = props
  return (
    <ArkSelect.Root {...rootProps}>
      {children}
      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  )
}

/**
 * Select Primitive: The label that appears above the select input
 */
export const SelectLabel = ArkSelect.Label

/**
 * Select Primitive: The wrapper to the select trigger that opens the dropdown
 */
export const SelectControl = ArkSelect.Control

/**
 * Select Primitive: The trigger that opens the dropdown
 */
export const SelectTrigger = ArkSelect.Trigger

/**
 * Select Primitive: The text that appears in the trigger
 */
export const SelectValueText = ArkSelect.ValueText

/**
 * Select Primitive: The indicator that appears in the trigger
 */
export const SelectIndicator = ArkSelect.Indicator

/**
 * Select Primitive: The trigger that clears the selected value
 */
export const SelectClearTrigger = ArkSelect.ClearTrigger

/**
 * Select Primitive: The positioner that contains the dropdown
 */
export const SelectPositioner = ArkSelect.Positioner

/**
 * Select Primitive: The content of the dropdown (i.e. the container itself)
 */
export const SelectContent = ArkSelect.Content

/**
 * Select Primitive: The container for a group of item options
 */
export const SelectItemGroup = ArkSelect.ItemGroup

/**
 * Select Primitive: The label for a group of item options
 */
export const SelectItemGroupLabel = ArkSelect.ItemGroupLabel

/**
 * Select Primitive: The container for an item option
 */
export const SelectItem = ArkSelect.Item

/**
 * Select Primitive: The text for an item option
 */
export const SelectItemText = ArkSelect.ItemText

/**
 * Select Primitive: The indicator for an item option
 */
export const SelectItemIndicator = ArkSelect.ItemIndicator
