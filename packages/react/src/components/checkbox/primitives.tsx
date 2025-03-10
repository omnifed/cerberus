import {
  Checkbox,
  type CheckboxControlProps,
  type CheckboxGroupProps,
  type CheckboxIndicatorProps,
  type CheckboxLabelProps,
  type CheckboxRootProps,
} from '@ark-ui/react'
import { cx } from 'styled-system/css'
import { checkbox, type CheckboxVariantProps } from 'styled-system/recipes'

/**
 * This module contains the Checkbox primitives.
 * @module 'react/checkbox'
 */

/**
 * Checkbox Root component used to provide the context to all other checkbox
 * primitives.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxRoot(props: CheckboxRootProps) {
  const styles = checkbox()
  return (
    <Checkbox.Root {...props} className={cx(styles.root, props.className)} />
  )
}

/**
 * Checkbox Label component used to display the label of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxLabel(
  props: CheckboxLabelProps & CheckboxVariantProps,
) {
  const { size, ...labelProps } = props
  const styles = checkbox({ size })
  return (
    <Checkbox.Label
      {...labelProps}
      className={cx(styles.label, labelProps.className)}
    />
  )
}

/**
 * Checkbox Control component used to display the control of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxControl(
  props: CheckboxControlProps & CheckboxVariantProps,
) {
  const { size, ...controlProps } = props
  const styles = checkbox({ size })
  return (
    <Checkbox.Control
      {...controlProps}
      className={cx(styles.control, controlProps.className)}
    />
  )
}

/**
 * Checkbox Indicator component used to display the indicator of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxIndicator(props: CheckboxIndicatorProps) {
  const styles = checkbox()
  return (
    <Checkbox.Indicator
      {...props}
      className={cx(styles.indicator, props.className)}
    />
  )
}

/**
 * Checkbox HiddenInput component used to provide the native checkbox input.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxHiddenInput(props: CheckboxControlProps) {
  return <Checkbox.HiddenInput {...props} />
}

/**
 * Checkbox Group is used to group checkboxes together in a consistently styled
 * way.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxGroup(props: CheckboxGroupProps) {
  const styles = checkbox()
  return (
    <Checkbox.Group {...props} className={cx(styles.group, props.className)} />
  )
}
