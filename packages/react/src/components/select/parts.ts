import type { ElementType } from 'react'
import {
  SelectContent,
  SelectControl,
  SelectHiddenSelect,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from './primitives'

/**
 * This module contains the parts of the Select parts.
 * @module 'select/parts'
 */

interface SelectPartsValue {
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
   * The trigger that opens the dropdown.
   */
  Trigger: ElementType
  /**
   * The text that appears in the trigger.
   */
  ValueText: ElementType
  /**
   * The indicator that appears in the trigger.
   */
  Indicator: ElementType
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
  /**
   * The native select for use within a field.
   */
  HiddenSelect: ElementType
}

/**
 * An Object containing the parts of the Radio component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the SelectParts object and
 * the entire family of components vs. only what you use.
 */
export const SelectParts: SelectPartsValue = {
  Root: SelectRoot,
  Label: SelectLabel,
  Control: SelectControl,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
  Indicator: SelectIndicator,
  Positioner: SelectPositioner,
  Content: SelectContent,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Item: SelectItem,
  ItemText: SelectItemText,
  ItemIndicator: SelectItemIndicator,
  HiddenSelect: SelectHiddenSelect,
}
