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
import { ark } from '@ark-ui/react/factory'
import type { SelectCollectionItem } from '../select/select'
import { combobox, type ComboboxVariantProps } from 'styled-system/recipes'
import { cx } from 'styled-system/css'
import type { PropsWithChildren } from 'react'

/**
 * This module contains the primitives of the Combobox.
 * @module 'combobox/primitives'
 */

/**
 * The ComboboxRoot component is the context provider for the Combobox
 * component.
 */
export function ComboboxRoot(
  props: ComboboxRootProps<SelectCollectionItem> & ComboboxVariantProps,
) {
  const { size, ...rootProps } = props
  const styles = combobox({ size })
  return (
    <Combobox.Root
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
    />
  )
}

/**
 * The label that appears above the combobox input.
 */
export function ComboboxLabel(props: ComboboxLabelProps) {
  const styles = combobox()
  return (
    <Combobox.Label {...props} className={cx(styles.label, props.className)} />
  )
}

/**
 * The control that wraps the combobox input.
 */
export function ComboboxControl(props: ComboboxControlProps) {
  const styles = combobox()
  return (
    <Combobox.Control
      {...props}
      className={cx(styles.control, props.className)}
    />
  )
}

/**
 * The input of the combobox.
 */
export function ComboboxInput(props: ComboboxInputProps) {
  const styles = combobox()
  return (
    <Combobox.Input {...props} className={cx(styles.input, props.className)} />
  )
}

/**
 * The trigger that opens the dropdown.
 */
export function ComboboxTrigger(props: ComboboxTriggerProps) {
  const styles = combobox()
  return (
    <Combobox.Trigger
      {...props}
      className={cx(styles.trigger, props.className)}
    />
  )
}

/**
 * The trigger to clear the combobox input.
 */
export function ComboboxClearTrigger(props: ComboboxClearTriggerProps) {
  const styles = combobox()
  return (
    <Combobox.ClearTrigger
      {...props}
      className={cx(styles.clearTrigger, props.className)}
    />
  )
}

/**
 * The positioner that wraps the content.
 */
export function ComboboxPositioner(props: ComboboxPositionerProps) {
  const styles = combobox()
  return (
    <Combobox.Positioner
      {...props}
      className={cx(styles.positioner, props.className)}
    />
  )
}

/**
 * The content of the combobox component.
 */
export function ComboboxContent(
  props: ComboboxContentProps & ComboboxVariantProps,
) {
  const { size, ...contentProps } = props
  const styles = combobox({ size })
  return (
    <Combobox.Content
      {...contentProps}
      className={cx(styles.content, contentProps.className)}
    />
  )
}

/**
 * A group of items in the combobox component.
 */
export function ComboboxItemGroup(props: ComboboxItemGroupProps) {
  const styles = combobox()
  return (
    <Combobox.ItemGroup
      {...props}
      className={cx(styles.itemGroup, props.className)}
    />
  )
}

/**
 * The label for a group of items in the combobox component.
 */
export function ComboboxItemGroupLabel(props: ComboboxItemGroupLabelProps) {
  const styles = combobox()
  return (
    <Combobox.ItemGroupLabel
      {...props}
      className={cx(styles.itemGroupLabel, props.className)}
    />
  )
}

/**
 * An individual item in the combobox component.
 */
export function ComboboxItem(props: ComboboxItemProps) {
  const styles = combobox()
  return (
    <Combobox.Item {...props} className={cx(styles.item, props.className)} />
  )
}

/**
 * The text that labels a single item of the combobox.
 */
export function ComboboxItemText(props: ComboboxItemTextProps) {
  const styles = combobox()
  return (
    <Combobox.ItemText
      {...props}
      className={cx(styles.itemText, props.className)}
    />
  )
}

/**
 * The indicator that appears when the item has been selected.
 */
export function ComboboxItemIndicator(props: ComboboxItemIndicatorProps) {
  const styles = combobox()
  return (
    <Combobox.ItemIndicator
      {...props}
      className={cx(styles.itemIndicator, props.className)}
    />
  )
}

/**
 * The icon that appears at the start of the combobox input.
 */
export function ComboboxStartIcon(props: PropsWithChildren) {
  const styles = combobox()
  return <ark.span {...props} className={styles.startIcon} />
}

// We are only doing this to make the API consistent
export const ComboItemText = ComboboxItemText

export type ComboboxInputValueChangeDetails = Combobox.InputValueChangeDetails
