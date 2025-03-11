import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupIndicatorProps,
  type RadioGroupItemControlProps,
  type RadioGroupItemHiddenInputProps,
  type RadioGroupItemProps,
  type RadioGroupItemTextProps,
  type RadioGroupLabelProps,
  type RadioGroupRootProps,
} from '@ark-ui/react/radio-group'
import { cx } from 'styled-system/css'
import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'

/**
 * This module contains the Radio primitives
 * @module 'react/radio'
 */

/**
 * The RadioGroupRoot component is used to group radio buttons together.
 */
export function RadioGroupRoot(
  props: RadioGroupRootProps & RadioGroupVariantProps,
) {
  const { size, orientation, ...rootProps } = props
  const styles = radioGroup({ size, orientation })
  return (
    <ArkRadioGroup.Root
      {...rootProps}
      className={cx(styles.root, rootProps.className)}
    />
  )
}

/**
 * The RadioGroupLabel component is used to label a group of radio buttons.
 */
export function RadioGroupLabel(props: RadioGroupLabelProps) {
  const styles = radioGroup()
  return (
    <ArkRadioGroup.Label
      {...props}
      className={cx(styles.label, props.className)}
    />
  )
}

/**
 * The RadioGroupIndicator component is used to indicate the selected radio
 * button in a group.
 */
export function RadioGroupIndicator(props: RadioGroupIndicatorProps) {
  const styles = radioGroup()
  return (
    <ArkRadioGroup.Indicator
      {...props}
      className={cx(styles.indicator, props.className)}
    />
  )
}

/**
 * The RadioGroupItem component is used to render a single radio button in a
 * group.
 */
export function RadioGroupItem(props: RadioGroupItemProps) {
  const styles = radioGroup()
  return (
    <ArkRadioGroup.Item
      {...props}
      className={cx(styles.item, props.className)}
    />
  )
}

/**
 * The RadioGroupItemText component is used to render the text label for a
 * single radio button in a group.
 */
export function RadioGroupItemText(
  props: RadioGroupItemTextProps & RadioGroupVariantProps,
) {
  const { size, orientation, ...itemTextProps } = props
  const styles = radioGroup({ size, orientation })
  return (
    <ArkRadioGroup.ItemText
      {...itemTextProps}
      className={cx(styles.itemText, itemTextProps.className)}
    />
  )
}

/**
 * The RadioGroupItemControl component is used to render the control for a
 * single radio button in a group.
 */
export function RadioGroupItemControl(
  props: RadioGroupItemControlProps & RadioGroupVariantProps,
) {
  const { size, orientation, ...itemControlProps } = props
  const styles = radioGroup({ size, orientation })
  return (
    <ArkRadioGroup.ItemControl
      {...itemControlProps}
      className={cx(styles.itemControl, itemControlProps.className)}
    />
  )
}

/**
 * The RadioGroupItemHiddenInput component is used to render the hidden input
 * for a single radio button in a group.
 */
export function RadioGroupItemHiddenInput(
  props: RadioGroupItemHiddenInputProps,
) {
  return <ArkRadioGroup.ItemHiddenInput {...props} />
}

export const RadioGroup = RadioGroupRoot
