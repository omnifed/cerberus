import {
  createListCollection,
  Select,
  type ListCollection,
  type SelectClearTriggerProps,
  type SelectContentProps,
  type SelectControlProps,
  type SelectHiddenSelectProps,
  type SelectIndicatorProps,
  type SelectItemGroupLabelProps,
  type SelectItemGroupProps,
  type SelectItemIndicatorProps,
  type SelectItemProps,
  type SelectItemTextProps,
  type SelectLabelProps,
  type SelectPositionerProps,
  type SelectRootProps,
  type SelectTriggerProps,
  type SelectValueChangeDetails,
  type SelectValueTextProps,
} from '@ark-ui/react/select'
import {
  select,
  type SelectVariantProps,
} from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import type { SelectCollectionItem } from './select'

/**
 * This module contains the Select primitives
 * @module 'react/select'
 */

/**
 * The SelectRoot component is the context provider for the Select component.
 */
export function SelectRoot(
  props: SelectRootProps<SelectCollectionItem> & SelectVariantProps,
) {
  const { size, ...rootProps } = props
  const styles = select({ size })
  return (
    <Select.Root
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
    />
  )
}

/**
 * The label that appears above the select input.
 */
export function SelectLabel(props: SelectLabelProps) {
  const styles = select()
  return (
    <Select.Label {...props} className={cx(styles.label, props.className)} />
  )
}

/**
 * The control that wraps the select trigger.
 */
export function SelectControl(props: SelectControlProps) {
  return <Select.Control {...props} />
}

/**
 * The trigger that opens the dropdown.
 */
export function SelectTrigger(props: SelectTriggerProps) {
  const styles = select()
  return (
    <Select.Trigger
      {...props}
      className={cx(styles.trigger, props.className)}
    />
  )
}

/**
 * The text that appears in the trigger.
 */
export function SelectValueText(props: SelectValueTextProps) {
  return <Select.ValueText {...props} />
}

/**
 * The indicator that appears in the trigger.
 */
export function SelectIndicator(props: SelectIndicatorProps) {
  const styles = select()
  return (
    <Select.Indicator
      {...props}
      className={cx(styles.indicator, props.className)}
    />
  )
}

/**
 * The trigger that clears the selected value.
 */
export function SelectClearTrigger(props: SelectClearTriggerProps) {
  return <Select.ClearTrigger {...props} />
}

/**
 * The positioner that contains the dropdown.
 */
export function SelectPositioner(props: SelectPositionerProps) {
  const styles = select()
  return (
    <Select.Positioner
      {...props}
      className={cx(styles.positioner, props.className)}
    />
  )
}

/**
 * The content of the dropdown (i.e. the container itself).
 */
export function SelectContent(props: SelectContentProps) {
  const styles = select()
  return (
    <Select.Content
      {...props}
      className={cx(styles.content, props.className)}
    />
  )
}

/**
 * The container for a group of item options.
 */
export function SelectItemGroup(props: SelectItemGroupProps) {
  return <Select.ItemGroup {...props} />
}

/**
 * The label for a group of item options.
 */
export function SelectItemGroupLabel(props: SelectItemGroupLabelProps) {
  const styles = select()
  return (
    <Select.ItemGroupLabel
      {...props}
      className={cx(styles.itemGroupLabel, props.className)}
    />
  )
}

/**
 * The container for an item in the select content.
 */
export function SelectItem(props: SelectItemProps) {
  const styles = select()
  return <Select.Item {...props} className={cx(styles.item, props.className)} />
}

/**
 * The text for an item option.
 */
export function SelectItemText(props: SelectItemTextProps) {
  return <Select.ItemText {...props} />
}

/**
 * The indicator for an item option shown when it is selected.
 */
export function SelectItemIndicator(props: SelectItemIndicatorProps) {
  const styles = select()
  return (
    <Select.ItemIndicator
      {...props}
      className={cx(styles.itemIndicator, props.className)}
    />
  )
}

/**
 * The native input for a select item.
 */
export function SelectHiddenSelect(props: SelectHiddenSelectProps) {
  return <Select.HiddenSelect {...props} />
}

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
