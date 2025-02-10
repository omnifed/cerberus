import type { ElementType } from 'react'
import {
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxTrigger,
} from './primitives'

/**
 * This module contains the parts of the Combobox parts.
 * @module 'combobox/parts'
 */

interface ComboboxPartsValue {
  /**
   * The context provider for the Select component.
   */
  Root: ElementType
  /**
   * The label that appears above the select input.
   */
  Label: ElementType
  /**
   * The control that wraps the select trigger.
   */
  Control: ElementType
  /**
   * The filterable input of the combobox.
   */
  Input: ElementType
  /**
   * The trigger that opens the dropdown.
   */
  Trigger: ElementType
  /**
   * The trigger to clear the select input.
   */
  ClearTrigger: ElementType
  /**
   * The positioner that wraps the content.
   */
  Positioner: ElementType
  /**
   * The content of the select component.
   */
  Content: ElementType
  /**
   * A group of items in the select component.
   */
  ItemGroup: ElementType
  /**
   * The label for a group of items in the select component.
   */
  ItemGroupLabel: ElementType
  /**
   * An individual item in the select component.
   */
  Item: ElementType
  /**
   * The text that labels a single radio of the field.
   */
  ItemText: ElementType
  /**
   * The indicator that appears when the item has been selected.
   */
  ItemIndicator: ElementType
}

/**
 * An Object containing the parts of the Radio component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the ComboboxParts object and
 * the entire family of components vs. only what you use.
 */
export const ComboboxParts: ComboboxPartsValue = {
  Root: ComboboxRoot,
  Label: ComboboxLabel,
  Control: ComboboxControl,
  Input: ComboboxInput,
  Trigger: ComboboxTrigger,
  ClearTrigger: ComboboxClearTrigger,
  Positioner: ComboboxPositioner,
  Content: ComboboxContent,
  ItemGroup: ComboboxItemGroup,
  ItemGroupLabel: ComboboxItemGroupLabel,
  Item: ComboboxItem,
  ItemText: ComboboxItemText,
  ItemIndicator: ComboboxItemIndicator,
}
