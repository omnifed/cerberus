import {
  Combobox,
  type ComboboxClearTriggerProps,
  type ComboboxContentProps,
  type ComboboxControlProps,
  type ComboboxInputProps,
  type ComboboxItemGroupLabelProps,
  type ComboboxItemGroupProps,
  type ComboboxItemIndicatorProps,
  type ComboboxItemProps,
  type ComboboxItemTextProps,
  type ComboboxLabelProps,
  type ComboboxPositionerProps,
  type ComboboxRootProps,
  type ComboboxTriggerProps,
} from '@ark-ui/react/combobox'
import type { SelectCollectionItem } from '../select/select'

/**
 * This module contains the primitives of the Combobox.
 * @module 'combobox/primitives'
 */

/**
 * The ComboboxRoot component is the context provider for the Combobox
 * component.
 */
export function ComboboxRoot(props: ComboboxRootProps<SelectCollectionItem>) {
  return <Combobox.Root {...props} />
}

/**
 * The label that appears above the combobox input.
 */
export function ComboboxLabel(props: ComboboxLabelProps) {
  return <Combobox.Label {...props} />
}

/**
 * The control that wraps the combobox input.
 */
export function ComboboxControl(props: ComboboxControlProps) {
  return <Combobox.Control {...props} />
}

/**
 * The input of the combobox.
 */
export function ComboboxInput(props: ComboboxInputProps) {
  return <Combobox.Input {...props} />
}

/**
 * The trigger that opens the dropdown.
 */
export function ComboboxTrigger(props: ComboboxTriggerProps) {
  return <Combobox.Trigger {...props} />
}

/**
 * The trigger to clear the combobox input.
 */
export function ComboboxClearTrigger(props: ComboboxClearTriggerProps) {
  return <Combobox.ClearTrigger {...props} />
}

/**
 * The positioner that wraps the content.
 */
export function ComboboxPositioner(props: ComboboxPositionerProps) {
  return <Combobox.Positioner {...props} />
}

/**
 * The content of the combobox component.
 */
export function ComboboxContent(props: ComboboxContentProps) {
  return <Combobox.Content {...props} />
}

/**
 * A group of items in the combobox component.
 */
export function ComboboxItemGroup(props: ComboboxItemGroupProps) {
  return <Combobox.ItemGroup {...props} />
}

/**
 * The label for a group of items in the combobox component.
 */
export function ComboboxItemGroupLabel(props: ComboboxItemGroupLabelProps) {
  return <Combobox.ItemGroupLabel {...props} />
}

/**
 * An individual item in the combobox component.
 */
export function ComboboxItem(props: ComboboxItemProps) {
  return <Combobox.Item {...props} />
}

/**
 * The text that labels a single item of the combobox.
 */
export function ComboboxItemText(props: ComboboxItemTextProps) {
  return <Combobox.ItemText {...props} />
}

/**
 * The indicator that appears when the item has been selected.
 */
export function ComboboxItemIndicator(props: ComboboxItemIndicatorProps) {
  return <Combobox.ItemIndicator {...props} />
}
